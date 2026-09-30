# Tabby character · rebuilt model

Revised from the approved chubby biped tabby concept. The rebuild changes torso
volume, continuous arm/paw shapes, ears, facial surfaces, cream spotted back and
rounded tail. Actual front, side, back and three-quarter views are included.

## Files and rebuilding

- `tabby.blend`: editable Blender scene, packed textures, 8-bone rig and studio.
- `../../public/models/tabby.glb`: runtime model only.
- `build_tabby.py`: reproducible geometry, markings, rig, animation and renders.
- `verify_tabby.py`: independent GLB reimport and structural checks.
- `render_walk.py`: four walk-cycle poses and minimum foot-height checks.
- `render_reimport.py`: render from the exported GLB, rather than source meshes.
- `make_contact_sheets.py`: compose actual renders into inspection sheets.
- `previews/`: CPU Cycles renders, not browser screenshots.

Run these scripts with `blender -b --python <script>` (contact sheets use Python).
Denoising is disabled because this Blender build lacks OpenImageDenoise support.

## Runtime contract

GLTF +Y up, +Z forward; Blender +Z up, -Y forward. Origin is at the foot plane.
Measured rest height: 2.631832. Runtime measures the bounding box and scales
to 2.5 units. `Idle` loops over 3 seconds; `Walk` loops over 1 second, in place.
The application owns translation and surface orientation.

## Verified budget

- GLB: 2,237,068 bytes
- Exported vertices: 29,315; triangles: 56,068
- 7 material primitives; 8 bones
- Packed textures: two 2048×1024 maps, one 128×512 tail map
- Independent GLB import passed; exact measurements are in `verification.json`

This is a stylized procedural mesh with largely rigid semantic bone weights, not
a continuous retopologized production sculpt. No blinking, lip sync, IK, collision
mesh or LODs yet. Browser visual acceptance of this revision is pending the owner's
local feedback; cloud WebGL is unavailable. Node tests and CPU renders cover only
their respective layers.
