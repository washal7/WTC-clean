const CACHE_NAME = "wtc-personal-v0.9-fixed-labels-square-icons";
const ASSETS = [
  "./", "./index.html", "./style.css", "./app.js", "./rewards.js", "./manifest.webmanifest", "./icon.svg",
  "./assets_v09/icons/gas.png",
  "./assets_v09/icons/ev.png",
  "./assets_v09/icons/costco.png",
  "./assets_v09/icons/costcoGas.png",
  "./assets_v09/icons/costcoFood.png",
  "./assets_v09/icons/sams.png",
  "./assets_v09/icons/samsGas.png",
  "./assets_v09/icons/samsCafe.png",
  "./assets_v09/icons/grocery.png",
  "./assets_v09/icons/walmart.png",
  "./assets_v09/icons/target.png",
  "./assets_v09/icons/movie.png",
  "./assets_v09/icons/concert.png",
  "./assets_v09/icons/museum.png",
  "./assets_v09/icons/otherEntertainment.png",
  "./assets_v09/icons/amazon.png",
  "./assets_v09/icons/online.png",
  "./assets_v09/icons/dining.png",
  "./assets_v09/icons/department.png",
  "./assets_v09/icons/drugstore.png",
  "./assets_v09/icons/travel.png",
  "./assets_v09/icons/transit.png",
  "./assets_v09/icons/other.png"
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
