const CACHE_NAME = "wtc-v015-square-fix";
const ASSETS = [
  "./", "./index.html", "./style.css", "./app.js", "./rewards.js", "./manifest.webmanifest", "./icon.svg",
  "./assets_v11/icons/gas.png",
  "./assets_v11/icons/ev.png",
  "./assets_v11/icons/costco.png",
  "./assets_v11/icons/costcoGas.png",
  "./assets_v11/icons/costcoFood.png",
  "./assets_v11/icons/sams.png",
  "./assets_v11/icons/samsGas.png",
  "./assets_v11/icons/samsCafe.png",
  "./assets_v11/icons/grocery.png",
  "./assets_v11/icons/walmart.png",
  "./assets_v11/icons/target.png",
  "./assets_v11/icons/movie.png",
  "./assets_v11/icons/concert.png",
  "./assets_v11/icons/museum.png",
  "./assets_v11/icons/otherEntertainment.png",
  "./assets_v11/icons/amazon.png",
  "./assets_v11/icons/online.png",
  "./assets_v11/icons/dining.png",
  "./assets_v11/icons/department.png",
  "./assets_v11/icons/drugstore.png",
  "./assets_v11/icons/travel.png",
  "./assets_v11/icons/transit.png",
  "./assets_v11/icons/other.png"
];
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
