self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  // Basic fetch handler, can be improved for caching
});
