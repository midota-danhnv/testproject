import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);


var urls = ['/',`${process.env.BASE_URL}NoName`]
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('top').then(function(cache) {
      urls.forEach(function (url) {
        cache.add(url).catch(/* optional error handling/logging */);
      });
    })
  );
  caches.open('v1').then(function(cache) {
    console.log(cache)
  })
  caches.open('top').then(function(cache) {
    console.log(cache)
  })
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();

          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          caches.open('top').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/');
        });
      }
    }));
  });