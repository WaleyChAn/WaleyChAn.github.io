import bpy, bmesh, math, os, json
import numpy as np
from mathutils import Vector, Matrix, Quaternion
from math import sin,cos,pi
BASE=os.path.dirname(os.path.abspath(__file__))
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
for d in bpy.data.actions: bpy.data.actions.remove(d)
CREAM=(0.96,0.86,0.71,1); TAUPE=(0.56,0.43,0.34,1); PINK=(0.91,0.52,0.55,1)
def mat(name,c):
 c=tuple(((v+.055)/1.055)**2.4 if v>.04045 else v/12.92 for v in c[:3])+(c[3],)
 m=bpy.data.materials.new(name); m.diffuse_color=c; m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=c;p.inputs['Roughness'].default_value=.78
 return m
cream=mat('Warm ivory • matte fur',CREAM);taupe=mat('Soft warm taupe',TAUPE);pink=mat('Muted coral inner ear',PINK);black=mat('Espresso expression',(0.008,.006,.004,1))
parts=[]
def finish(obj,name,bone,material):
 obj.name=name;obj.data.materials.append(material)
 for p in obj.data.polygons:p.use_smooth=True
 obj.vertex_groups.new(name=bone).add(list(range(len(obj.data.vertices))),1,'REPLACE');parts.append(obj);return obj

def texmat(name,kind):
 w,h=(256,1024) if kind=='tail' else (2048,1024)
 u,v=np.meshgrid((np.arange(w)+.5)/w,(np.arange(h)+.5)/h)
 phi=u*2*pi;t=v*pi;x=np.sin(t)*np.cos(phi);z=np.cos(t);front=np.sin(phi)
 mask=np.zeros_like(x,dtype=float)
 def soft(d,width=.010):return np.clip(.5-d/width,0,1)
 def spot(cx,cz,rx,rz,angle,gate):
  nonlocal mask
  dx=x-cx;dz=z-cz;xx=(dx*np.cos(angle)+dz*np.sin(angle))/rx;zz=(-dx*np.sin(angle)+dz*np.cos(angle))/rz
  r=np.sqrt(xx*xx+zz*zz);ang=np.arctan2(zz,xx)
  edge=1+.10*np.sin(ang*3+cx*11)+.06*np.cos(ang*5+cz*8)
  mask=np.maximum(mask,soft(r-edge,.11)*gate)
 if kind=='head':
  # Broad, softly irregular side patches leave round cream cheeks and muzzle.
  edge=.73-.21*np.exp(-((z-.16)/.27)**2)+.045*np.sin(z*7)
  vertical=soft(z-.65,.03)*soft(-.71-z,.03)
  mask=np.maximum(mask,soft(edge-np.abs(x),.020)*vertical)
  for cx,low,width in [(-.18,.56,.06),(0,.37,.05),(.18,.53,.055)]:
   wid=width*np.sqrt(np.clip((z-low)/.27,0,1))
   stripe=soft(np.abs(x-cx-.025*np.sin(z*6))-wid,.010)*soft(low-z,.014)*soft(.24-front,.04)
   mask=np.maximum(mask,stripe)
  # Fur markings flow around the rear crown rather than forming a flat cap.
  for cx,cz,rx,rz,angle in [(-.34,.30,.08,.30,-.22),(0,.48,.07,.32,.08),(.34,.29,.075,.29,.24)]:
   spot(cx,cz,rx,rz,angle,soft(front+.32,.04))
  for side in [-1,1]:
   for cx,cz,rx,rz,ang in [(.81,-.37,.16,.029,-.20),(.80,-.51,.13,.027,-.3)]:
    spot(side*cx,cz,rx,rz,side*ang,soft(.10-front,.04))
 elif kind=='body':
  # A clean warm belly with uneven mackerel spots on the flanks.
  for side in [-1,1]:
   spot(side*.88,.72,.28,.35,side*.3,np.ones_like(x))
   for i,(cx,cz,rx,rz,angle) in enumerate([(.55,.37,.035,.077,.3),(.66,.16,.050,.073,-.3),(.58,-.08,.034,.064,.4),(.70,-.27,.043,.076,-.4),(.57,-.43,.033,.057,.25),(.77,.01,.030,.052,.5)]):
    spot(side*cx,cz,rx,rz,angle*side,soft(.28-front,.05))
   for cx,cz,rx,rz,angle in [(.72,-.59,.19,.037,.28),(.71,-.75,.13,.034,.35)]:
    spot(side*cx,cz,rx,rz,angle*side,np.ones_like(x))
  for i,(cx,cz) in enumerate([(-.54,.42),(.52,.40),(-.70,.16),(.67,.11),(-.50,-.07),(.55,-.10),(-.71,-.32),(.70,-.31),(-.42,-.46),(.43,-.48),(-.20,.48),(.21,.52)]):
   spot(cx,cz,.044+(i%3)*.008,.068+(i%2)*.018,.4*np.sin(i*2),soft(front+.28,.05))
 elif kind=='arm':
  mask=soft(.22-z+.10*np.sin(phi*2)+.055*np.cos(phi*5),.025)
 elif kind=='tail':
  mask=soft(-np.cos(v*pi*9+.25*np.sin(u*2*pi)),.10)
 # Subtle broad color modulation, avoiding noisy pseudo-fur and hard bitmap edges.
 colors=np.zeros((h,w,4),dtype=np.float32);a=mask[...,None]
 colors[:,:,:3]=np.array(CREAM[:3])*(1-a)+np.array(TAUPE[:3])*a
 if kind=='body':
  belly=np.exp(-((x/.62)**4+((z+.12)/.80)**4))*np.clip(front,0,1)
  colors[:,:,:3]+=belly[...,None]*np.array([.018,.026,.035])
 colors[:,:,:3]*=(.993+.007*np.sin(phi*5+z*6))[...,None];colors[:,:,3]=1
 img=bpy.data.images.new(name+' color',width=w,height=h,alpha=True)
 img.pixels.foreach_set(colors.ravel());img.filepath_raw=os.path.join(BASE,name+'.png');img.file_format='PNG';img.save();img.pack()
 m=mat(name,CREAM);nodes=m.node_tree.nodes;tex=nodes.new('ShaderNodeTexImage');tex.image=img;tex.interpolation='Linear'
 m.node_tree.links.new(tex.outputs['Color'],nodes.get('Principled BSDF').inputs['Base Color']);return m
headmat=texmat('Tabby head painted markings','head');bodymat=texmat('Tabby body painted markings','body');armmat=texmat('Tabby arm painted markings','arm')
def surface(name,center,scale,bone,material,kind='sphere',n=96,rings=48):
 verts=[];uv=[]
 for j in range(rings+1):
  t=pi*j/rings;st=sin(t);zz=cos(t)
  for i in range(n+1):
   ph=2*pi*i/n; fac=1
   if kind=='head': fac=1+.08*np.exp(-((zz+.28)/.46)**2)-.04*max(zz,0)
   x=scale[0]*st*cos(ph)*fac;y=-scale[1]*st*sin(ph);z=scale[2]*zz
   if kind=='body':x*=1+.14*(-zz);y*=1+.10*(-zz)
   if kind=='head':y-=.050*math.exp(-((abs(x)-.32)/.32)**2-((zz+.30)/.32)**2)*max(0,sin(ph))
   if kind=='arm':
    x*=1+.22*math.exp(-((zz+.48)/.36)**2)
    y-=.09*(1-zz)/2
   verts.append((center[0]+x,center[1]+y,center[2]+z));uv.append((i/n,j/rings))
 faces=[]
 for j in range(rings):
  for i in range(n):a=j*(n+1)+i;faces.append((a,a+n+1,a+n+2,a+1))
 me=bpy.data.meshes.new(name);me.from_pydata(verts,[],faces);me.update();ob=bpy.data.objects.new(name,me);bpy.context.collection.objects.link(ob)
 layer=me.uv_layers.new(name='Paint UV')
 for poly in me.polygons:
  for li in poly.loop_indices:layer.data[li].uv=uv[me.loops[li].vertex_index]
 return finish(ob,name,bone,material)
def ellipsoid(name,loc,scale,bone,material):return surface(name,loc,scale,bone,material,n=40,rings=24)
body=surface('Pear-shaped soft torso',(0,0,.90),(.87,.67,.77),'Body',bodymat,'body')
head=surface('Broad cheek sculpt',(0,-.17,1.85),(1.07,.76,.70),'Head',headmat,'head',128,64)
# Tiny rounded triangular ears, formed as subdivided hand-shaped solids.
def ear(side):
 x=side*.70
 verts=[(x-side*.27,-.12,2.31),(x+side*.25,-.11,2.31),(x+side*.10,-.08,2.77),(x-side*.25,.20,2.29),(x+side*.23,.20,2.31),(x+side*.10,.15,2.77)]
 verts=[(a,b,c-.10) for a,b,c in verts]
 faces=[(0,1,2),(3,5,4),(0,3,4,1),(1,4,5,2),(2,5,3,0)]
 me=bpy.data.meshes.new('ear');me.from_pydata(verts,[],faces);ob=bpy.data.objects.new('Rounded triangular ear',me);bpy.context.collection.objects.link(ob);finish(ob,'Ear.'+str(side),'Ear.L' if side<0 else 'Ear.R',taupe)
 bevel=ob.modifiers.new('Velvet rounded rim','BEVEL');bevel.width=.09;bevel.segments=3
 bpy.context.view_layer.objects.active=ob;bpy.ops.object.modifier_apply(modifier=bevel.name)
 # small inset triangular pink with beveled edges
 verts=[(x-side*.135,-.126,2.37),(x+side*.14,-.126,2.38),(x+side*.083,-.094,2.65)]
 verts=[(a,b,c-.10) for a,b,c in verts]
 me=bpy.data.meshes.new('inner');me.from_pydata(verts,[],[(0,1,2)]);ob=bpy.data.objects.new('Inner ear',me);bpy.context.collection.objects.link(ob);finish(ob,'Pink inner ear.'+str(side),'Ear.L' if side<0 else 'Ear.R',pink)
 sol=ob.modifiers.new('Soft inset','SOLIDIFY');sol.thickness=.016
 be=ob.modifiers.new('Rounded inset','BEVEL');be.width=.027;be.segments=3
 bpy.context.view_layer.objects.active=ob
 for mod in list(ob.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
for s in [-1,1]:ear(s)
# Expression sits just above the sculpted face.
def faceY(x,z,extra=.014):
 zz=(z-1.85)/.70;fac=1+.08*math.exp(-((zz+.28)/.46)**2)-.04*max(zz,0)
 return -.17-.76*math.sqrt(max(.03,1-(x/(1.07*fac))**2-zz*zz))-.050*math.exp(-((abs(x)-.32)/.32)**2-((zz+.30)/.32)**2)-extra
# Squint eye lenses: rising outer ends, convex lower edge
for side in [-1,1]:
 pts=[]
 for k in range(17):
  t=k/16;x=side*(.006+.48*t);z=1.93+.095*t;pts.append((x,faceY(x,z,.009),z))
 for k in range(16,-1,-1):
  t=k/16;x=side*(.006+.48*t);z=1.93+.095*t-.13*sin(pi*t)**.65;pts.append((x,faceY(x,z,.011),z))
 me=bpy.data.meshes.new('Smug lens');me.from_pydata(pts,[],[(k,k+1,32-k,33-k) for k in range(16)]);me.update();ob=bpy.data.objects.new('Smug squint',me);bpy.context.collection.objects.link(ob);finish(ob,'Smug squint.'+str(side),'Eye.L' if side<0 else 'Eye.R',black)
 sol=ob.modifiers.new('Eye depth','SOLIDIFY');sol.thickness=.006
 be=ob.modifiers.new('Silky eye edge','BEVEL');be.width=.009;be.segments=2
 bpy.context.view_layer.objects.active=ob
 for m in list(ob.modifiers):bpy.ops.object.modifier_apply(modifier=m.name)
def tube(name,pts,radius,bone,material):
 cu=bpy.data.curves.new(name,'CURVE');cu.dimensions='3D';cu.resolution_u=12;cu.bevel_depth=radius;cu.bevel_resolution=3
 sp=cu.splines.new('BEZIER');sp.bezier_points.add(len(pts)-1)
 for p,co in zip(sp.bezier_points,pts):p.co=co;p.handle_left_type='AUTO';p.handle_right_type='AUTO'
 ob=bpy.data.objects.new(name,cu);bpy.context.collection.objects.link(ob);bpy.context.view_layer.objects.active=ob;ob.select_set(True);bpy.ops.object.convert(target='MESH');ob.select_set(False);return finish(ob,name,bone,material)
for s in [-1,1]:
 xz=[(0,1.655),(s*.045,1.56),(s*.17,1.52),(s*.28,1.57),(s*.30,1.67)]
 tube('Smug smile.'+str(s),[(x,faceY(x,z,.009),z) for x,z in xz],.023,'Head',black)
for s in [-1,1]:
 surface('Sculpted arm and paw.'+str(s),(s*.85,-.07,.85),(.22,.255,.43),'Arm.L' if s<0 else 'Arm.R',armmat,'arm',64,40)
 ellipsoid('Soft thumb.'+str(s),(s*.735,-.272,.565),(.086,.105,.126),'Paw.L' if s<0 else 'Paw.R',cream)
 ellipsoid('Short leg.'+str(s),(s*.42,.015,.29),(.255,.275,.28),'Leg.L' if s<0 else 'Leg.R',cream)
 ellipsoid('Rounded foot.'+str(s),(s*.42,-.16,.12),(.275,.35,.12),'Foot.L' if s<0 else 'Foot.R',cream)
 for xx in [-.068,.062]:
  x=s*.42+xx;tube('Toe seam',[(x,-.473,.065),(x,-.503,.12),(x,-.475,.18)],.004,'Foot.L' if s<0 else 'Foot.R',taupe)
# Bent striped tail: connected swept tube, smooth profile and discrete bands.
centers=[Vector(v) for v in [(0,.38,.39),(.14,.61,.39),(.37,.76,.42),(.62,.80,.52),(.79,.81,.70),(.83,.79,.9)]]
# Smooth swept surface with continuous UV stripes, rounded end profile.
tailmat=texmat('Tabby tail stripes','tail')
path=[]
for seg in range(len(centers)-1):
 p0=centers[max(0,seg-1)];p1=centers[seg];p2=centers[seg+1];p3=centers[min(len(centers)-1,seg+2)]
 for k in range(14):
  t=k/14;path.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t))
path.append(centers[-1]);verts=[];uv=[];faces=[];num=24
for j,c in enumerate(path):
 tangent=(path[min(j+1,len(path)-1)]-path[max(j-1,0)]).normalized();ax=tangent.cross(Vector((0,1,0))).normalized();ay=tangent.cross(ax).normalized()
 q=j/(len(path)-1);radius=.16*(1-.2*q)*(math.sqrt(max(.0001,1-((q-.75)/.25)**2)) if q>.75 else 1)
 for i in range(num+1):
  a=2*pi*i/num;verts.append(c+radius*(cos(a)*ax+sin(a)*ay));uv.append((i/num,q))
for j in range(len(path)-1):
 for i in range(num):
  a=j*(num+1)+i;faces.append((a,a+1,a+num+2,a+num+1))
faces.append(tuple(range(num-1,-1,-1)));faces.append(tuple((len(path)-1)*(num+1)+i for i in range(num)))
me=bpy.data.meshes.new('Bent tail sweep');me.from_pydata(verts,[],faces);me.update();ob=bpy.data.objects.new('Bent striped tail',me);bpy.context.collection.objects.link(ob);layer=me.uv_layers.new(name='Paint UV')
for poly in me.polygons:
 for li in poly.loop_indices:layer.data[li].uv=uv[me.loops[li].vertex_index]
finish(ob,'Bent striped tail','Tail',tailmat)
# Articulated rig: spine, elbows, wrists, knees, ankles, ears and four tail joints.
bpy.ops.object.armature_add(enter_editmode=True,location=(0,0,0));rig=bpy.context.object;rig.name='Tabby_Rig';arm=rig.data;arm.name='Tabby articulated biped';root=arm.edit_bones[0];root.name='Root';root.head=(0,0,0);root.tail=(0,0,.35)
def bone(n,h,t,p):
 b=arm.edit_bones.new(n);b.head=h;b.tail=t;b.parent=arm.edit_bones[p]
bone('Body',(0,0,.38),(0,0,.96),'Root');bone('Chest',(0,0,.96),(0,0,1.35),'Body');bone('Head',(0,0,1.35),(0,0,2.12),'Chest')
for side,n in [(-1,'L'),(1,'R')]:
 bone('Eye.'+n,(side*.24,faceY(side*.24,1.95),1.95),(side*.24,faceY(side*.24,1.95),2.07),'Head')
 bone('Ear.'+n,(side*.70,.03,2.27),(side*.79,.03,2.61),'Head')
 bone('Arm.'+n,(side*.82,-.015,1.16),(side*.88,-.06,.84),'Chest')
 bone('Forearm.'+n,(side*.88,-.06,.84),(side*.86,-.15,.59),'Arm.'+n)
 bone('Paw.'+n,(side*.86,-.15,.59),(side*.84,-.20,.43),'Forearm.'+n)
 bone('Leg.'+n,(side*.42,0,.46),(side*.42,0,.26),'Root')
 bone('Shin.'+n,(side*.42,0,.26),(side*.42,0,.12),'Leg.'+n)
 bone('Foot.'+n,(side*.42,0,.12),(side*.42,-.32,.12),'Shin.'+n)
for i in range(4):
 bone('Tail' if i==0 else 'Tail.'+str(i),path[int(i*(len(path)-1)/4)],path[int((i+1)*(len(path)-1)/4)],'Body' if i==0 else ('Tail' if i==1 else 'Tail.'+str(i-1)))
bpy.ops.object.mode_set(mode='OBJECT')
def smooth(t):t=max(0,min(1,t));return t*t*(3-2*t)
def weights(ob,fn):
 ob.vertex_groups.clear()
 groups={n:ob.vertex_groups.new(name=n) for n in rig.data.bones.keys()}
 for vertex in ob.data.vertices:
  pairs=fn(vertex);total=sum(w for _,w in pairs)
  for name,w in pairs:
   if w>1e-6:groups[name].add([vertex.index],w/total,'REPLACE')
for ob in parts:
 if ob.name.startswith('Pear-shaped'):
  weights(ob,lambda v:[('Body',1-smooth((v.co.z-.78)/.56)),('Chest',smooth((v.co.z-.78)/.56))])
 elif ob.name.startswith('Sculpted arm'):
  side='L' if ob.name.endswith('-1') else 'R'
  def armweights(v,n=side):
   upper=smooth((v.co.z-.77)/.26);paw=1-smooth((v.co.z-.49)/.22)
   return [('Arm.'+n,upper),('Forearm.'+n,max(0,1-upper-paw)),('Paw.'+n,paw)]
  weights(ob,armweights)
 elif ob.name.startswith('Short leg'):
  side='L' if ob.name.endswith('-1') else 'R'
  def legweights(v,n=side):
   upper=smooth((v.co.z-.24)/.20);foot=1-smooth((v.co.z-.06)/.16)
   return [('Leg.'+n,upper),('Shin.'+n,max(0,1-upper-foot)),('Foot.'+n,foot)]
  weights(ob,legweights)
 elif ob.name=='Bent striped tail':
  def tailweights(v):
   q=min(len(path)-1,v.index//(num+1))/(len(path)-1);f=max(0,min(3,q*4-.5));lo=int(f);hi=min(3,lo+1);t=smooth(f-lo)
   return [('Tail' if lo==0 else 'Tail.'+str(lo),1-t),('Tail' if hi==0 else 'Tail.'+str(hi),t)]
  weights(ob,tailweights)
 mod=ob.modifiers.new('Smooth articulated skin','ARMATURE');mod.object=rig;mod.use_deform_preserve_volume=False;ob.parent=rig
 bm=bmesh.new();bm.from_mesh(ob.data);bmesh.ops.recalc_face_normals(bm,faces=bm.faces);bm.to_mesh(ob.data);bm.free()
bpy.ops.object.select_all(action='DESELECT')
for ob in parts:ob.select_set(True)
bpy.context.view_layer.objects.active=body;bpy.ops.object.join();body.name='Tabby • skinned character'
scene=bpy.context.scene;scene.render.fps=24;rig.animation_data_create()
rest={b.name:b.matrix_local.to_3x3().to_4x4() for b in rig.data.bones}
def orient(n,head,angle):
 rig.pose.bones[n].matrix=Matrix.Translation(head)@Matrix.Rotation(angle,4,'X')@rest[n]
 bpy.context.view_layer.update()
def rotate(n,axis,angle):rig.pose.bones[n].rotation_quaternion=Quaternion(axis,angle)
for name,end in [('Idle',72),('Walk',24)]:
 act=bpy.data.actions.new(name);rig.animation_data.action=act
 for frame in range(end+1):
  scene.frame_set(frame)
  phase=2*pi*frame/end
  for pb in rig.pose.bones:pb.rotation_mode='QUATERNION';pb.rotation_quaternion=(1,0,0,0);pb.location=(0,0,0);pb.scale=(1,1,1)
  if name=='Idle':
   rig.pose.bones['Body'].scale=(1+.010*sin(phase),1+.008*sin(phase),1+.010*sin(phase))
   blink=max(0,cos(phase-3.6))**48
   for eye in ['Eye.L','Eye.R']:rig.pose.bones[eye].scale.y=1-.92*blink
   rotate('Chest',(0,0,1),.015*sin(phase));rotate('Head',(0,1,0),.030*sin(phase+.3))
   for n,off in [('L',0),('R',.8)]:
    rotate('Ear.'+n,(1,0,0),.055*max(0,sin(phase+off))**10)
    rotate('Forearm.'+n,(1,0,0),.04*sin(phase+off))
   for i in range(4):rotate('Tail' if i==0 else 'Tail.'+str(i),(0,0,1),.085*sin(phase-i*.65))
  else:
   rootz=-.04*cos(phase)**2;sway=.024*sin(phase)
   rig.pose.bones['Body'].scale=(1+.012*cos(phase*2),1-.016*cos(phase*2),1+.010*cos(phase*2))
   rig.pose.bones['Root'].matrix=Matrix.Translation((sway,0,rootz))@rig.data.bones['Root'].matrix_local
   rotate('Chest',(0,0,1),.038*sin(phase));rotate('Head',(0,0,1),-.028*sin(phase))
   bpy.context.view_layer.update()
   for side,n in [(-1,'L'),(1,'R')]:
    ph=phase+(pi if side>0 else 0);swing=max(0,sin(ph))
    hip=Vector((side*.42+sway,0,.46+rootz));ankle=Vector((side*.42,.105*cos(ph),.12+.085*swing))
    dy=ankle.y-hip.y;dz=ankle.z-hip.z;d=min(.33999,max(.06001,math.hypot(dy,dz)))
    angle=math.atan2(dy,-dz)-math.acos(max(-1,min(1,(.20**2+d*d-.14**2)/(2*.20*d))))
    knee=hip+Vector((0,.20*sin(angle),-.20*cos(angle)))
    lower=math.atan2(ankle.y-knee.y,-(ankle.z-knee.z))
    orient('Leg.'+n,hip,angle);orient('Shin.'+n,knee,lower);orient('Foot.'+n,ankle,-.10*swing)
    rotate('Arm.'+n,(1,0,0),-.30*cos(ph));rotate('Forearm.'+n,(1,0,0),-.10-.10*sin(ph));rotate('Paw.'+n,(1,0,0),.06*sin(ph+.5))
    rotate('Ear.'+n,(1,0,0),.028*sin(phase*2+.5))
   for i in range(4):rotate('Tail' if i==0 else 'Tail.'+str(i),(0,0,1),.12*sin(phase-i*.65+.8))
  for pb in rig.pose.bones:
   pb.keyframe_insert(data_path='location',frame=frame,group=pb.name);pb.keyframe_insert(data_path='rotation_quaternion',frame=frame,group=pb.name);pb.keyframe_insert(data_path='scale',frame=frame,group=pb.name)
 track=rig.animation_data.nla_tracks.new();track.name=name;strip=track.strips.new(name,0,act);strip.name=name;rig.animation_data.action=None;track.mute=True
for pb in rig.pose.bones:pb.rotation_quaternion=(1,0,0,0);pb.location=(0,0,0);pb.scale=(1,1,1)
scene.frame_set(1)
bpy.ops.object.select_all(action='DESELECT');rig.select_set(True);body.select_set(True);bpy.context.view_layer.objects.active=rig
# Export selection only: no lights, camera, ground in game asset.
for tr in rig.animation_data.nla_tracks:tr.mute=False
bpy.ops.export_scene.gltf(filepath=os.path.join(BASE,'../../public/models/tabby.glb'),export_format='GLB',use_selection=True,export_animations=True,export_animation_mode='NLA_TRACKS',export_nla_strips=True,export_yup=True,export_apply=False,export_materials='EXPORT')
for tr in rig.animation_data.nla_tracks:tr.mute=True
# Studio presentation is deliberately separate from exported character.
ground=mat('Studio sand',(0.86,.82,.75,1));bpy.ops.mesh.primitive_plane_add(size=200,location=(0,0,-.012));plane=bpy.context.object;plane.name='STUDIO • ground (not exported)';plane.data.materials.append(ground)
world=bpy.data.worlds.new('Warm studio') if not bpy.data.worlds else bpy.data.worlds[0];scene.world=world;world.use_nodes=True;world.node_tree.nodes['Background'].inputs[0].default_value=(.72,.70,.65,1);world.node_tree.nodes['Background'].inputs[1].default_value=.45
for name,loc,power,size in [('Key',(-3,-4,6),500,4),('Fill',(4,-2,3),230,3),('Rim',(2,3,5),450,3)]:
 bpy.ops.object.light_add(type='AREA',location=loc);li=bpy.context.object;li.name='STUDIO • '+name;li.data.energy=power;li.data.shape='DISK';li.data.size=size;li.rotation_euler=(Vector((0,0,1.2))-li.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(3,-6,2.9));camera=bpy.context.object;camera.name='STUDIO • camera';scene.camera=camera;camera.data.type='ORTHO';camera.data.ortho_scale=3.35;camera.rotation_euler=(Vector((0,0,1.35))-camera.location).to_track_quat('-Z','Y').to_euler()
scene.render.engine='CYCLES';scene.cycles.samples=48;scene.cycles.use_denoising=False;scene.cycles.device='CPU';scene.render.resolution_x=720;scene.render.resolution_y=720;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX';scene.render.image_settings.file_format='PNG'
def render(name,loc,action=None,frame=1):
 rig.animation_data.action=bpy.data.actions.get(action) if action else None;scene.frame_set(frame)
 camera.location=loc;camera.rotation_euler=(Vector((0,0,1.35))-camera.location).to_track_quat('-Z','Y').to_euler();scene.render.filepath=os.path.join(BASE,'previews',name+'.png');bpy.ops.render.render(write_still=True)
# Save actual editable source, all textures packed.
rig.animation_data.action=bpy.data.actions['Idle'];scene.frame_end=72;scene.frame_set(1)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(BASE,'tabby.blend'))
if os.environ.get('TABBY_RENDER','1')=='1':
 render('tabby-front',(0,-7,1.35),'Idle',1)
 render('tabby-three-quarter',(3.5,-6,2.35),'Idle',1)
 render('tabby-back',(0,7,1.35),'Idle',1)
 render('tabby-side',(7,0,1.35),'Idle',1)
 render('tabby-walk-contact',(3,-6,2.75),'Walk',7)
print('TABBY_BUILD_COMPLETE')
