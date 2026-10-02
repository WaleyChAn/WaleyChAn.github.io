# Asset sources and references

Character modeling now happens in external tools. This directory is not an active
Blender build pipeline. Generated demonstration images are not project source.

## Retained images

`references/tabby/` contains four source texture PNGs, 951,842 bytes total:

- `Tabby arm painted markings.png`
- `Tabby body painted markings.png`
- `Tabby head painted markings.png`
- `Tabby tail stripes.png`

Each file's SHA-256 matches its embedded PNG in `public/models/tabby.glb`. They are
model texture data, not demonstration renders; the website uses the self-contained
GLB rather than loading these loose copies. No original supplied concept/sketch
image was found among the 1,024 images inspected during this cleanup.

## Removed demonstrations · 2026-10-02

1,020 generated demo files (313,850,254 bytes: 967 PNG, 42 JPG and 11 GIF) were
removed from the working repository to a recoverable archive outside it. They
include turnaround renders, inspection/contact sheets, experiment comparisons and
walk frames from `tabby`, R11 and V3–V8. No V9–V21 files were present; none were
reconstructed. The local archive records every path, byte count and SHA-256.

Twelve original `assets-source/tabby/previews/` PNGs had been tracked by Git and
are removed from the current source tree; the other 1,008 demo files had not been
tracked. Previous commits retain the historical copies without rewriting history.
The archive's restore tool excludes demonstration images and retired delivery
ZIPs by default, and requires an explicit option to recover them outside this
repository.

## What goes where

- Original supplied design/reference images and source textures:
  `assets-source/references/<asset-version>/`, with provenance notes
- Disposable demo renders, screenshots, contact sheets, animation frames and GIFs:
  outside this repository, or ignored `artifacts/model-previews/`
- A supplied editable source, if it should be kept in Git:
  `assets-source/<asset-version>/`, alongside its provenance and export notes
- The approved browser export: `public/models/`
- The built website: `dist/` (generated and ignored)
- Retired experiments, caches, temporary delivery bundles and logs: outside the
  repository in the recoverable local archive

The scoped `.gitignore` rules also cover historical and common model preview/output
directories under `assets-source/`. They do not ignore all images, so real runtime
assets, textures and original supplied references remain eligible for version
control. Never force-add demonstrations or restore archived preview directories
into this repository. Review `git status` before committing new assets.

See [the model handoff checklist](../MODEL_HANDOFF.md) before integrating a new model.
