import bpy,os
from mathutils import Vector
base=os.path.dirname(os.path.abspath(__file__));bpy.ops.wm.open_mainfile(filepath=os.path.join(base,'tabby.blend'))
sc=bpy.context.scene;rig=bpy.data.objects['Tabby_Rig'];rig.animation_data.action=bpy.data.actions['Walk']
for t in rig.animation_data.nla_tracks:t.mute=True
sc.render.resolution_x=480;sc.render.resolution_y=480;sc.cycles.samples=32;sc.cycles.use_denoising=False
sc.camera.location=(3.2,-6,2.4);sc.camera.rotation_euler=(Vector((0,0,1.22))-sc.camera.location).to_track_quat('-Z','Y').to_euler()
report=[]
for frame in [0,6,12,18]:
 sc.frame_set(frame);sc.render.filepath=os.path.join(base,'previews','walk-%02d.png'%frame);bpy.ops.render.render(write_still=True)
 mesh=bpy.data.objects['Tabby • skinned character'];ev=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get());me=ev.to_mesh()
 entry={'frame':frame,'minZ':min((ev.matrix_world@v.co).z for v in me.vertices)};report.append(entry);ev.to_mesh_clear()
print('WALK_BOUNDS',report)
