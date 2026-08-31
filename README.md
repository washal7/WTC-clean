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


## v0.9 root-cause fixes
- Fixed category label bug: internal IDs such as `costcoGas`, `samsCafe`, `grocery` no longer appear in the UI.
- English labels now display as Gas, EV Charging, Costco Gas, Costco Food Court, Sam's Club, Sam's Gas, Sam's Café, Grocery, Walmart, Target, Amazon, etc.
- Re-cropped every icon to the actual square tile and normalized symmetric padding.
- Removed accidental Movies/Concerts text contamination embedded in the Museums/Other Entertainment icon crops.
- Rebuilt the Sam's Club icon with an uppercase S.
- Uses new `assets_v09` URLs to avoid old image reuse.


## v0.10 True Square Icons
- rebuilt icons from the original approved crops rather than the damaged v0.9 crops
- the actual icon tile is geometrically resized to a square; no transparent padding trick
- removed accidental Movies/Concerts contamination from museum/other entertainment source crops
- kept the uppercase Sam's Club icon
- visible footer version: v0.10 true square icons


## v0.11 forced square tiles
- trims transparent margins from every icon
- resizes the actual visible icon tile to an exact 1:1 square
- uses object-fit: fill so the rendered tile stays square on all screens


## v0.13
Grouped icons are re-extracted from the full approved mockup. The dark panel around each icon is removed to transparency first; only then is the visible tile resized to a true 1:1 square. Standalone icons also have their old dark crop background removed.
