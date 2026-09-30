# Preview checklist

Open the published GitHub Pages homepage in a browser with WebGL 2 enabled.
The current release is identified by `/version.json`.

- Confirm the planet is centered and no title, intro, or status copy is visible.
- Confirm the new cat has a fuller body, continuous arms, rounded triangular ears,
  a cream spotted back, and a rounded striped tail.
- Use WASD / arrow keys to walk; release to return to Idle.
- Walk around the planet and check surface contact and camera follow.
- Use the mouse wheel to inspect the character closer; R / reset restores the view.
- On touch screens, verify the four icon buttons.
- Check for clipping, missing textures, console errors, or animation glitches.

Automated Node tests verify GLB parsing/animations and movement math. Blender CPU
renders verify the exported geometry visually. Neither is a browser WebGL test.
The cloud browser currently cannot render WebGL; final interactive checks for
this revision are pending the owner's local browser feedback.
