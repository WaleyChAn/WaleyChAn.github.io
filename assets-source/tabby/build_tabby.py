import bpy, bmesh, math, os, json
import numpy as np
from mathutils import Vector
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
 w,h=(128,512) if kind=='tail' else (2048,1024)
 u,v=np.meshgrid((np.arange(w)+.5)/w,(np.arange(h)+.5)/h)
 phi=u*2*pi; t=v*pi
 x=np.sin(t)*np.cos(phi);z=np.cos(t);front=np.sin(phi)
 mask=np.zeros_like(x,dtype=bool)
 if kind=='head':
  # Three tapered forehead stripes. The middle stripe is longest.
  for cx,low,width in [(-.17,.56,.052),(0,.41,.045),(.17,.56,.052)]:
   ww=width*np.clip((z-low)/.28,0,1)**.5
   mask|=(abs(x-cx-.016*np.sin(z*8))<ww)&(z>low)&(front>.25)
  # Organic cheek patches wrap around the sides, with a gentle front notch.
  edge=.69-.21*np.exp(-((z+.06)/.23)**2)+.04*z
  mask|=(abs(x)>edge)&(z<.68-.23*np.cos(x*2))&(z>-.80+.15*np.cos(x*4))
  # Back stays cream with distinct side patches; no solid brown helmet.
  for cx in [-.22,0,.22]:
   mask|=(abs(x-cx)<.045*np.clip((z-.25)/.3,0,1)**.5)&(z>.25)&(front<-.35)
 elif kind=='body':
  mask|=(((abs(x)-.96)/.30)**2+((z-.68)/.47)**2<1)
  # Sparse spots wrap onto the back, rather than a large saddle.
  for xx,zz in [(-.56,.35),(.54,.38),(-.70,.08),(.68,.03),(-.56,-.25),(.59,-.28),(-.40,-.47),(.39,-.49)]:
   mask|=(((x-xx)/.064)**2+((z-zz)/.085)**2<1)&(front<-.2)
  for side in [-1,1]:
   for xx,zz,rx,rz in [(.57,.34,.047,.077),(.66,.12,.055,.068),(.60,-.10,.045,.070),(.69,-.31,.05,.065),(.55,-.44,.05,.06),(.76,-.06,.04,.064)]:
    mask|=(((x-side*xx)/(rx*.78))**2+((z-zz)/(rz*.82))**2<1)&(front>.22)
  for zz in [-.58,-.73]:mask|=(abs(z-zz-.14*abs(x))<.034)&(abs(x)>.61)
 elif kind=='tail':mask=np.cos(v*pi*10)>.1
 # restrained color variation, not noisy fur
 colors=np.zeros((h,w,4),dtype=np.float32);colors[:]=CREAM
 colors[mask]=TAUPE
 img=bpy.data.images.new(name+' color',width=w,height=h,alpha=True)
 # sphere mesh V grows from north to south, Blender image rows bottom to top
 img.pixels.foreach_set(colors.ravel());img.filepath_raw=os.path.join(BASE,name+'.png');img.file_format='PNG';img.save();img.pack()
 m=mat(name,CREAM);nodes=m.node_tree.nodes;tex=nodes.new('ShaderNodeTexImage');tex.image=img;tex.interpolation='Linear'
 m.node_tree.links.new(tex.outputs['Color'],nodes.get('Principled BSDF').inputs['Base Color']);return m
headmat=texmat('Tabby head painted markings','head');bodymat=texmat('Tabby body painted markings','body')
def surface(name,center,scale,bone,material,kind='sphere',n=96,rings=48):
 verts=[];uv=[]
 for j in range(rings+1):
  t=pi*j/rings;st=sin(t);zz=cos(t)
  for i in range(n+1):
   ph=2*pi*i/n; fac=1
   if kind=='head': fac=1+.08*np.exp(-((zz+.28)/.46)**2)-.04*max(zz,0)
   x=scale[0]*st*cos(ph)*fac;y=-scale[1]*st*sin(ph);z=scale[2]*zz
   if kind=='body':x*=1+.06*(-zz);y*=1+.05*(-zz)
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
body=surface('Pear-shaped soft torso',(0,0,.92),(.90,.67,.78),'Body',bodymat,'body')
head=surface('Broad cheek sculpt',(0,-.17,1.85),(1.07,.76,.70),'Head',headmat,'head',128,64)
# Tiny rounded triangular ears, formed as subdivided hand-shaped solids.
def ear(side):
 x=side*.70
 verts=[(x-side*.27,-.12,2.31),(x+side*.25,-.11,2.31),(x+side*.10,-.08,2.77),(x-side*.25,.20,2.29),(x+side*.23,.20,2.31),(x+side*.10,.15,2.77)]
 verts=[(a,b,c-.10) for a,b,c in verts]
 faces=[(0,1,2),(3,5,4),(0,3,4,1),(1,4,5,2),(2,5,3,0)]
 me=bpy.data.meshes.new('ear');me.from_pydata(verts,[],faces);ob=bpy.data.objects.new('Rounded triangular ear',me);bpy.context.collection.objects.link(ob);finish(ob,'Ear.'+str(side),'Head',taupe)
 bevel=ob.modifiers.new('Velvet rounded rim','BEVEL');bevel.width=.09;bevel.segments=3
 bpy.context.view_layer.objects.active=ob;bpy.ops.object.modifier_apply(modifier=bevel.name)
 # small inset triangular pink with beveled edges
 verts=[(x-side*.135,-.126,2.37),(x+side*.14,-.126,2.38),(x+side*.083,-.094,2.65)]
 verts=[(a,b,c-.10) for a,b,c in verts]
 me=bpy.data.meshes.new('inner');me.from_pydata(verts,[],[(0,1,2)]);ob=bpy.data.objects.new('Inner ear',me);bpy.context.collection.objects.link(ob);finish(ob,'Pink inner ear.'+str(side),'Head',pink)
 sol=ob.modifiers.new('Soft inset','SOLIDIFY');sol.thickness=.016
 be=ob.modifiers.new('Rounded inset','BEVEL');be.width=.027;be.segments=3
 bpy.context.view_layer.objects.active=ob
 for mod in list(ob.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
for s in [-1,1]:ear(s)
# Expression sits just above the sculpted face.
def faceY(x,z,extra=.014):
 zz=(z-1.85)/.70;fac=1+.08*math.exp(-((zz+.28)/.46)**2)-.04*max(zz,0)
 return -.17-.76*math.sqrt(max(.03,1-(x/(1.07*fac))**2-zz*zz))-extra
# Squint eye lenses: rising outer ends, convex lower edge
for side in [-1,1]:
 pts=[]
 for k in range(17):
  t=k/16;x=side*(.006+.48*t);z=1.93+.095*t;pts.append((x,faceY(x,z,.009),z))
 for k in range(16,-1,-1):
  t=k/16;x=side*(.006+.48*t);z=1.93+.095*t-.13*sin(pi*t)**.65;pts.append((x,faceY(x,z,.011),z))
 me=bpy.data.meshes.new('Smug lens');me.from_pydata(pts,[],[(k,k+1,32-k,33-k) for k in range(16)]);me.update();ob=bpy.data.objects.new('Smug squint',me);bpy.context.collection.objects.link(ob);finish(ob,'Smug squint.'+str(side),'Head',black)
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
 surface('Sculpted arm and paw.'+str(s),(s*.85,-.07,.85),(.22,.255,.43),'Arm.L' if s<0 else 'Arm.R',cream,'arm',64,40)
 ellipsoid('Soft thumb.'+str(s),(s*.735,-.272,.565),(.086,.105,.126),'Arm.L' if s<0 else 'Arm.R',cream)
 ellipsoid('Short leg.'+str(s),(s*.42,.015,.22),(.265,.30,.20),'Leg.L' if s<0 else 'Leg.R',cream)
 ellipsoid('Rounded foot.'+str(s),(s*.42,-.16,.12),(.275,.35,.12),'Leg.L' if s<0 else 'Leg.R',cream)
 for xx in [-.068,.062]:
  x=s*.42+xx;tube('Toe seam',[(x,-.473,.065),(x,-.503,.12),(x,-.475,.18)],.006,'Leg.L' if s<0 else 'Leg.R',taupe)
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
# Deformation rig, authored parts weighted to semantic bones.
bpy.ops.object.armature_add(enter_editmode=True,location=(0,0,0));rig=bpy.context.object;rig.name='Tabby_Rig';arm=rig.data;arm.name='Tabby biped armature';root=arm.edit_bones[0];root.name='Root';root.head=(0,0,0);root.tail=(0,0,.35)
def bone(n,h,t,p):
 b=arm.edit_bones.new(n);b.head=h;b.tail=t;b.parent=arm.edit_bones[p]
bone('Body',(0,0,.38),(0,0,1.2),'Root');bone('Head',(0,0,1.2),(0,0,2.1),'Body')
for s,n in [(-1,'L'),(1,'R')]:
 bone('Arm.'+n,(s*.73,0,1.04),(s*.81,0,.43),'Body');bone('Leg.'+n,(s*.4,0,.40),(s*.4,0,.1),'Root')
bone('Tail',(0,.4,.39),(.6,.8,.6),'Body');bpy.ops.object.mode_set(mode='OBJECT')
for ob in parts:
 mod=ob.modifiers.new('Tabby deformation','ARMATURE');mod.object=rig;ob.parent=rig
# Consistent outward normals for all closed authored surfaces.
for ob in parts:
 bm=bmesh.new();bm.from_mesh(ob.data);bmesh.ops.recalc_face_normals(bm,faces=bm.faces);bm.to_mesh(ob.data);bm.free()
# Merge into single multi-material skinned object to minimize scene traversal.
bpy.ops.object.select_all(action='DESELECT')
for ob in parts:ob.select_set(True)
bpy.context.view_layer.objects.active=body;bpy.ops.object.join();body.name='Tabby • skinned character'
leg_verts={}
for n in ['L','R']:
 gi=body.vertex_groups['Leg.'+n].index;leg_verts[n]=[v.co.copy() for v in body.data.vertices if any(g.group==gi and g.weight>.9 for g in v.groups)]
scene=bpy.context.scene;scene.render.fps=24
rig.animation_data_create()
for name,end in [('Idle',72),('Walk',24)]:
 act=bpy.data.actions.new(name);rig.animation_data.action=act
 for frame in range(0,end+1):
  phase=2*pi*frame/end
  for p in rig.pose.bones:p.rotation_mode='XYZ';p.rotation_euler=(0,0,0);p.location=(0,0,0);p.scale=(1,1,1)
  if name=='Idle':
   rig.pose.bones['Body'].scale=(1+.012*sin(phase),1+.01*sin(phase),1+.008*sin(phase))
   rig.pose.bones['Head'].rotation_euler[1]=.018*sin(phase)
   rig.pose.bones['Tail'].rotation_euler[1]=.08*sin(phase)
  else:
   rig.pose.bones['Body'].location[1]=.035*(1-cos(phase*2))
   rig.pose.bones['Body'].rotation_euler[1]=.045*sin(phase)
   rig.pose.bones['Head'].rotation_euler[1]=-.022*sin(phase)
   for s,n in [(-1,'L'),(1,'R')]:
    angle=s*.32*sin(phase)
    rig.pose.bones['Leg.'+n].rotation_euler[0]=angle
    minimum=min(.4+v.y*sin(angle)+(v.z-.4)*cos(angle) for v in leg_verts[n])
    rig.pose.bones['Leg.'+n].location[1]=minimum-.055*max(0,s*sin(phase))
    rig.pose.bones['Arm.'+n].rotation_euler[0]=-s*.22*sin(phase)
   rig.pose.bones['Tail'].rotation_euler[1]=.10*sin(phase+.4)
  for p in rig.pose.bones:
   p.keyframe_insert(data_path='location',frame=frame,group=p.name);p.keyframe_insert(data_path='rotation_euler',frame=frame,group=p.name);p.keyframe_insert(data_path='scale',frame=frame,group=p.name)
 track=rig.animation_data.nla_tracks.new();track.name=name;strip=track.strips.new(name,0,act);strip.name=name
 rig.animation_data.action=None;track.mute=True
# Neutral saved pose, tracks retained for editor and exported clips.
for p in rig.pose.bones:p.rotation_euler=(0,0,0);p.location=(0,0,0);p.scale=(1,1,1)
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
scene.render.engine='CYCLES';scene.cycles.samples=96;scene.cycles.use_denoising=False;scene.cycles.device='CPU';scene.render.resolution_x=720;scene.render.resolution_y=720;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX';scene.render.image_settings.file_format='PNG'
def render(name,loc,action=None,frame=1):
 rig.animation_data.action=bpy.data.actions.get(action) if action else None;scene.frame_set(frame)
 camera.location=loc;camera.rotation_euler=(Vector((0,0,1.35))-camera.location).to_track_quat('-Z','Y').to_euler();scene.render.filepath=os.path.join(BASE,'previews',name+'.png');bpy.ops.render.render(write_still=True)
# Save actual editable source, all textures packed.
rig.animation_data.action=bpy.data.actions['Idle'];scene.frame_end=72;scene.frame_set(1)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(BASE,'tabby.blend'))
render('tabby-front',(0,-7,1.35),'Idle',1)
render('tabby-three-quarter',(3.5,-6,2.35),'Idle',1)
render('tabby-back',(0,7,1.35),'Idle',1)
render('tabby-side',(7,0,1.35),'Idle',1)
render('tabby-walk-contact',(3,-6,2.75),'Walk',7)
print('TABBY_BUILD_COMPLETE')
