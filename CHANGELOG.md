# Changelog

## 1.1.0 - 2026-11-02

- Canlı look: hero now-playing with the title in the display font, tonal transport circles plus a filled 72 px play/pause, tonal panel controls, Material Symbols Rounded icons, no glow, gradients or scale effects. Esc closes the panel.
- Bar tile: `level` template (5 levels, play/pause icon, localised label with the track title). Levels are synthetic (no real audio levels are available), updated 4 times per second only while playing and visible. Marked sensitive so the title is hidden when privacy mode is on. Ignored on KoBar versions without tile support.
- Redesigned from its functions: a now-playing card with the source app ("Playing in Spotify"), a picture-in-picture card with detected tabs and a URL field.
