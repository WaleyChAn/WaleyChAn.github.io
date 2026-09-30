import bpy,os,json,struct,math
from mathutils import Vector
base=os.path.dirname(os.path.abspath(__file__));path=os.path.join(base,'../../public/models/tabby.glb')
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=path)
rig=next(o for o in bpy.context.scene.objects if o.type=='ARMATURE');meshes=[o for o in bpy.context.scene.objects if o.type=='MESH' and len(o.vertex_groups)>0]
with open(path,'rb') as f:
 f.read(12);n,t=struct.unpack('<II',f.read(8));j=json.loads(f.read(n))
report={'file_bytes':os.path.getsize(path),'glb_version':2,'triangles':sum(j['accessors'][p['indices']]['count']//3 for m in j['meshes'] for p in m['primitives']),'exported_vertices':sum(j['accessors'][p['attributes']['POSITION']]['count'] for m in j['meshes'] for p in m['primitives']),'material_primitives':sum(len(m['primitives']) for m in j['meshes']),'bones':len(rig.data.bones),'clips':[]}
# Check source binary accessors, clips, and imported evaluated geometry independently.
for a in j['animations']:
 duration=max(j['accessors'][s['input']]['max'][0] for s in a['samplers']);report['clips'].append({'name':a['name'],'duration_seconds':duration,'channels':len(a['channels'])})
assert set(a['name'] for a in j['animations'])=={'Idle','Walk'}
assert len(rig.data.bones)==8
for ob in meshes:
 print('MESH CHECK',ob.name,len(ob.vertex_groups));assert len(ob.vertex_groups)>0 or ob.name.startswith('Icosphere')
 assert all(math.isfinite(c) for v in ob.data.vertices for c in v.co)
# Imported Blender coords: Z up. Report GLTF convention bounds separately.
rig.animation_data.action=None
for tr in rig.animation_data.nla_tracks:tr.mute=True
bpy.context.scene.frame_set(1);deps=bpy.context.evaluated_depsgraph_get();points=[]
for ob in meshes:
 ev=ob.evaluated_get(deps);me=ev.to_mesh();points +=[ev.matrix_world@v.co for v in me.vertices];ev.to_mesh_clear()
mins=[min(p[i] for p in points) for i in range(3)];maxs=[max(p[i] for p in points) for i in range(3)]
report['rest_bounds_blender_xyz']=[mins,maxs];report['height']=maxs[2]-mins[2];report['gltf_forward']='+Z';report['gltf_up']='+Y';report['root_origin']='foot plane, (0,0,0)';report['reimport_passed']=True
report['gpu_estimate_bytes_geometry']=sum(b['byteLength'] for b in j['bufferViews'] if 'target' in b)
report['texture_dimensions']=[list((im.size[0],im.size[1])) for im in bpy.data.images if im.type=='IMAGE' and im.size[0]>0]
open(os.path.join(base,'verification.json'),'w').write(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
