const CACHE_NAME = "wtc-personal-v0.7.2-icon-polish";
const ASSETS = [
  "./", "./index.html", "./style.css", "./app.js", "./rewards.js", "./manifest.webmanifest", "./icon.svg",
  "./assets/icons/gas.png",
  "./assets/icons/ev.png",
  "./assets/icons/costco.png",
  "./assets/icons/costcoGas.png",
  "./assets/icons/costcoFood.png",
  "./assets/icons/sams.png",
  "./assets/icons/samsGas.png",
  "./assets/icons/samsCafe.png",
  "./assets/icons/grocery.png",
  "./assets/icons/walmart.png",
  "./assets/icons/target.png",
  "./assets/icons/movie.png",
  "./assets/icons/concert.png",
  "./assets/icons/museum.png",
  "./assets/icons/otherEntertainment.png",
  "./assets/icons/amazon.png",
  "./assets/icons/online.png",
  "./assets/icons/dining.png",
  "./assets/icons/department.png",
  "./assets/icons/drugstore.png",
  "./assets/icons/travel.png",
  "./assets/icons/transit.png",
  "./assets/icons/other.png"
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
