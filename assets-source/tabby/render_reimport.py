import bpy,os
from mathutils import Vector
base=os.path.dirname(os.path.abspath(__file__));bpy.ops.wm.open_mainfile(filepath=os.path.join(base,'tabby.blend'));sc=bpy.context.scene
sc.camera.location=(3.5,-6,2.85);sc.camera.rotation_euler=(Vector((0,0,1.25))-sc.camera.location).to_track_quat('-Z','Y').to_euler()
# Save useful opening camera on editable scene, then replace character with independent GLB import.
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(base,'tabby.blend'))
for name in ['Tabby • skinned character','Tabby_Rig']:bpy.data.objects.remove(bpy.data.objects[name],do_unlink=True)
bpy.ops.import_scene.gltf(filepath=os.path.join(base,'../../public/models/tabby.glb'))
sc.render.resolution_x=640;sc.render.resolution_y=640;sc.cycles.samples=48;sc.cycles.use_denoising=False;sc.frame_set(1)
sc.render.filepath=os.path.join(base,'previews','tabby-glb-reimport.png');bpy.ops.render.render(write_still=True)
