# Preview checklist

Open the local development/preview server, or the published GitHub Pages homepage,
in a browser with WebGL 2 enabled. The published release is identified by
`/version.json`; local repository changes do not update that release automatically.

The retained runtime GLB is the existing character. Historical demonstration
renders and GIFs have been removed from the repository. Put any new disposable
captures outside the repository or in ignored `artifacts/model-previews/`; they
must not be committed. For a supplied replacement, also follow
[MODEL_HANDOFF.md](MODEL_HANDOFF.md).

- Confirm the character is centered above a planet arc filling the lower screen and no title, intro, or status copy is visible.
- For the retained character, confirm a fuller body, continuous arms, rounded triangular ears,
  a cream spotted back, painted shoulders, and a rounded striped tail.
- Wait for an idle blink, ear flick and tail motion.
- Use WASD / arrow keys to walk; release to return to Idle.
- Walk around the planet and check surface contact and camera follow.
- Use the mouse wheel to inspect the character closer; R / reset restores the view.
- On touch screens, verify the four icon buttons.
- Check for clipping, missing textures, console errors, or animation glitches.

Automated Node tests verify GLB parsing/animations and movement math. CPU renders
are demonstration output. Neither is a browser WebGL test. The
2026-10-02 repository cleanup does not claim new browser visual acceptance.
