const CACHE_NAME = "wtc-personal-v0.10-true-square";
const ASSETS = [
  "./", "./index.html", "./style.css", "./app.js", "./rewards.js", "./manifest.webmanifest", "./icon.svg",
  "./assets_v10/icons/gas.png",
  "./assets_v10/icons/ev.png",
  "./assets_v10/icons/costco.png",
  "./assets_v10/icons/costcoGas.png",
  "./assets_v10/icons/costcoFood.png",
  "./assets_v10/icons/sams.png",
  "./assets_v10/icons/samsGas.png",
  "./assets_v10/icons/samsCafe.png",
  "./assets_v10/icons/grocery.png",
  "./assets_v10/icons/walmart.png",
  "./assets_v10/icons/target.png",
  "./assets_v10/icons/movie.png",
  "./assets_v10/icons/concert.png",
  "./assets_v10/icons/museum.png",
  "./assets_v10/icons/otherEntertainment.png",
  "./assets_v10/icons/amazon.png",
  "./assets_v10/icons/online.png",
  "./assets_v10/icons/dining.png",
  "./assets_v10/icons/department.png",
  "./assets_v10/icons/drugstore.png",
  "./assets_v10/icons/travel.png",
  "./assets_v10/icons/transit.png",
  "./assets_v10/icons/other.png"
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
