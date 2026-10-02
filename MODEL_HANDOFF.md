# External model handoff

Models will be authored in external tools and supplied for website integration.
Do not regenerate the retired local modeling experiments as part of this workflow.

## Files to supply

- A self-contained `.glb` with embedded textures, +Y up and +Z forward
- Named `Idle` and `Walk` animation clips, with baked animation and no dependency
  on authoring-tool constraints at runtime
- A stable foot plane and an in-place walk cycle; the application moves the
  character across the planet and scales its height to 2.5 scene units
- Front, side and back previews, plus a walking preview
- Source-tool/version, asset provenance and usage rights; editable source if it
  should be retained with the project

## Integration steps

1. Inspect the supplied export and previews before replacing the current model.
   Keep incoming delivery bundles outside the repository until their contents are
   reviewed; do not put sources, renders or ZIP packages in `public/`.
2. Keep original supplied design/reference images and source textures under
   `assets-source/references/<asset-version>/`, with provenance notes. Generated
   demo renders, screenshots, contact sheets, animation frames and GIFs must stay
   outside the repository or in ignored `artifacts/model-previews/`. Do not use
   `git add -f` to include them. If editable source is retained in Git, use
   `assets-source/<asset-version>/` with short provenance/export notes rather than
   a series of temporary backups.
3. Preserve a recoverable copy of the current runtime model before replacing
   `public/models/tabby.glb`. Update the loader path/cache version in `src/main.ts`
   if needed. The old GLB remains in place until this integration is requested.
4. Review `tests/model.test.ts` against the actual new asset. It currently includes
   legacy-specific checks for 24 bones, joint names, bounds, PNG textures and exact
   clip names. Those details are not universal requirements for an externally
   authored model; adjust asset-specific assertions deliberately while retaining
   loading, animation, finite-transform, skin-weight and floor-contact coverage.
5. Run `npm test` and `npm run build`. Use [PREVIEW.md](PREVIEW.md) for actual
   WebGL, animation, controls and surface-contact acceptance. Check movement speed
   and the current 1.8× Walk playback against the supplied stride.
6. Publish only when requested. Update `public/version.json` as part of an approved
   release, and publish the built `dist/` contents to `gh-pages`, not the source tree.
