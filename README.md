# Cat Planet

A quiet, interactive Three.js homepage with a Blender-authored chubby tabby.

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

## Assets

`assets-source/tabby/` contains the editable Blender source, reproducible build scripts,
actual orthographic front/side/back renders and animation verification.
`public/models/tabby.glb` is the self-contained runtime model, with Idle and Walk clips.

## Deployment

The source lives on `master`. GitHub Pages serves the static output from the root
of `gh-pages`. Build before updating that branch; do not copy source files or
credentials to the published output. `docs/` remains an unchanged archive of the
old website. The old app can also be recovered from Git history.

## Current scope

One playable tabby, a larger planet (radius 18) in a horizon composition, and room for later scenery.
The other two cats, wandering NPCs, houses and biomes are later milestones.
Cloud browser WebGL is currently unavailable, so browser visual acceptance of this
revision is done by opening the deployed site locally. Passing Node/Blender checks
is not a substitute for browser interaction testing.
