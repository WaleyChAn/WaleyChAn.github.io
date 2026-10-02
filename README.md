# Cat Planet

A quiet, interactive Three.js homepage with a playable cat on a small planet.
Character modeling is now done in external tools; new models will be supplied
for integration. The existing runtime character remains until its replacement
is ready, so the homepage continues to load.

## Develop

Node.js 22+ and npm are required. Run `npm ci`, then `npm run dev`.
`npm test` checks the GLB container, skeleton, animation contract, and spherical movement.
`npm run build` creates the static site in `dist/`.

## Controls

WASD / arrow keys to walk, mouse wheel to zoom, R or the reset icon to restart.
Touch devices have directional buttons. Normal gameplay has no explanatory text overlays.
A visible error message is retained when WebGL or model loading fails.

The default framing follows the supplied sketch: centered character with feet near
63% of viewport height; the planet fills the lower frame. Walking speed is tuned
to the short stride rather than sliding the character rapidly across the surface.

## Repository layout

- `src/`: browser application, movement and presentation code
- `tests/`: runtime-model, movement and presentation checks
- `public/`: files shipped with the site; `models/tabby.glb` is the current
  self-contained runtime model with Idle and Walk clips
- `assets-source/references/`: four retained source texture images for the current
  cat; these are already embedded in the runtime GLB and are not shipped separately
- `artifacts/model-previews/`: ignored local output for disposable demo renders,
  screenshots, animation frames and GIFs; prefer keeping them outside the repository
- `dist/`: generated static-site output, ignored by Git
- `docs/`: unchanged archive of the previous website, not current documentation
- [PREVIEW.md](PREVIEW.md): browser acceptance checklist
- [MODEL_HANDOFF.md](MODEL_HANDOFF.md): supplied-model requirements and import steps

The retired editable models, generators, experiment packages, logs and historical
modeling notes were moved out of the working repository on 2026-10-02 to a
recoverable local archive. A follow-up cleanup removed 1,020 generated demonstration
images (including 11 GIFs, 313,850,254 bytes total) from this repository to that
archive. Four source textures remain; all four match the textures embedded in the
current runtime GLB. Demonstration output directories are ignored by Git, and
archive restoration excludes demo images and old delivery ZIPs by default. See
the [asset index](assets-source/README.md).

## Deployment

The source lives on `master`. GitHub Pages serves the static output from the root
of `gh-pages`. Build before updating that branch; do not copy source files or
credentials to the published output. `docs/` remains an unchanged archive of the
old website. The old app can also be recovered from Git history.

## Current scope

One playable tabby, a larger planet (radius 18) in a horizon composition, and room for later scenery.
The other two cats, wandering NPCs, houses and biomes are later milestones.
Passing Node tests or inspecting reference renders is not a substitute for browser
interaction testing. Use the preview checklist before accepting a model replacement.
