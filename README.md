# WTC Personal v0.7 — Mockup Matched

Uses icon image assets cropped directly from the approved mockup. Labels are below every icon; no group numbers or group titles. Phone and desktop use the exact same icon image files. Existing reward logic, multilingual support, My Cards settings, and result explanations remain interactive.


## v0.7.1 tweaks
- all grouped panels now use 2 icons per row
- 3-item groups wrap to a second row for better mobile spacing
- English icon labels adjusted to Title Case
- icon labels forced to no text-shadow to avoid ghosting


## v0.7.2 icon polish
- double-checked English icon labels for Title Case (for example: Gas, EV Charging, Costco, Costco Gas)
- normalized icon canvases to square for more even outer rounded-square appearance
- switched icon rendering to object-fit: contain to avoid uneven cropping
- refreshed Sam's Club icon so the first S is uppercase


## v0.8 clean deploy
This build is for debugging deployment/cache issues. It intentionally does NOT use manifest or service worker and uses a renamed asset folder `assets_v08` plus `?v=08` asset query strings. The page also visibly shows `v0.8 clean deploy` at the bottom.
