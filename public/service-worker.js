// Service Worker for CatatIn PWA
const CACHE_NAME = 'catatin-cache-v1';
const urlsToCache = [
  '/',
  '/css/stye.css',
  '/js/inputStyle.js',
  '/js/buttonClick.js',
  '/js/resAPI.js',
  '/manifest.json',
  // Add more assets or routes as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});
