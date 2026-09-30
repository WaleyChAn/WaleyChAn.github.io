import bpy,os
from mathutils import Vector
base=os.path.dirname(os.path.abspath(__file__));bpy.ops.wm.open_mainfile(filepath=os.path.join(base,'tabby.blend'))
sc=bpy.context.scene;rig=bpy.data.objects['Tabby_Rig']
for t in rig.animation_data.nla_tracks:t.mute=True
sc.render.resolution_x=720;sc.render.resolution_y=720;sc.cycles.samples=48
for name,location,action,frame in [('tabby-front',(0,-7,1.35),'Idle',1),('tabby-side',(7,0,1.35),'Idle',1),('tabby-back',(0,7,1.35),'Idle',1),('tabby-three-quarter',(3.5,-6,2.35),'Idle',1),('tabby-walk-contact',(3,-6,2.4),'Walk',7)]:
 rig.animation_data.action=bpy.data.actions[action];sc.frame_set(frame)
 sc.camera.location=location;sc.camera.rotation_euler=(Vector((0,0,1.35))-sc.camera.location).to_track_quat('-Z','Y').to_euler()
 sc.render.filepath=os.path.join(base,'previews',name+'.png');bpy.ops.render.render(write_still=True)
