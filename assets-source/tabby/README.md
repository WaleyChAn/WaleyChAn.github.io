# Tabby character · revision 3

Refined chubby biped tabby: continuous cheek/muzzle volume, a pear-shaped torso,
organic anti-aliased markings, painted shoulder fur and a cream belly. Patterns
are authored consistently around the whole mesh, not pasted onto front renders.

## Editable source and output

- `tabby.blend`: editable Blender scene, packed textures, articulated rig and studio
- `../../public/models/tabby.glb`: self-contained runtime mesh/skin/animations
- `build_tabby.py`: reproducible geometry, textures, weights and baked animations
- `render_turnaround.py`: actual front, side, back, three-quarter and contact poses
- `render_walk.py`: four walk poses and measured minimum floor heights
- `render_reimport.py`: render the exported GLB independently of source meshes
- `verify_tabby.py`: import/bounds/animation/skin checks
- `previews/`: real CPU renders, not browser screenshots

Use `TABBY_RENDER=0 blender -b --python assets-source/tabby/build_tabby.py` to
rebuild/export without studio renders. Run the rendering scripts separately.

## Rig and animation

24 bones: root, pelvis/body, chest, head, two eyes, two ears, upper/lower arms and
paws, thighs/shins/feet, and a four-segment tail. Spine, elbow/wrist, knee/ankle and
tail transitions have normalized blended skin weights. The source meshes remain
separate authored surfaces joined into one skinned object, not a single sculpt.

Idle has breathing, a blink, ear flicks and a delayed tail wave. Walk uses a baked
two-bone leg solve, lifted swing feet, level stance feet, opposing arm swing,
weight shift, small body compression, head counter-motion and tail follow-through.
No runtime Blender constraints are needed. Native clips: Idle 3 s, Walk 1 s.
The site uses Walk at 1.8x with 0.72 units/s movement to suit the short legs.

## Export and checks

- GLTF +Y up / +Z forward; origin at the foot plane
- Native rest height: 2.632675; runtime scales to 2.5 units
- GLB: 3,123,952 bytes
- 29,315 exported vertices; 56,068 triangles
- 8 material primitives and 24 bones
- Three 2048×1024 color maps and one 256×1024 tail map

Node tests check real GLTFLoader parsing, named joints, normalized skin weights,
every walk frame's skinned geometry/floor contact, and camera framing landmarks.
CPU renders additionally inspect the visible shapes and poses. No successful
cloud WebGL render is claimed; final appearance and feel are checked locally by
the owner on the published page. No lip sync, cloth/fur simulation, collisions
or LODs are included in this prototype.
