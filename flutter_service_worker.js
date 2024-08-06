'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "124f1ede7c219bf57d07a2a2e8650853",
"assets/AssetManifest.bin.json": "58e8ff207004c1a3d4362db94787d59e",
"assets/AssetManifest.json": "0fa18cf9952209309e0ef4933f0fe8b0",
"assets/assets/animations/dragon/dragon-ess.skel": "837a12b06b7a1219702d59f02bedce9a",
"assets/assets/animations/dragon/dragon.atlas": "29bca29a6af3c97850c79312e76944c8",
"assets/assets/animations/dragon/dragon.png": "0c1ec86952b9e5f597be0cdb23e4bdc2",
"assets/assets/animations/dragon/dragon_2.png": "4105cd4949e3c77620ca05863c2d7b78",
"assets/assets/animations/dragon/dragon_3.png": "1f3fb337d1532cab6ae70daa195e3201",
"assets/assets/animations/dragon/dragon_4.png": "5834f86b978be55cd1023756af2a3d60",
"assets/assets/animations/dragon/dragon_5.png": "0aacc58b68b318e9d42abe1acb36bc54",
"assets/assets/animations/spineboy/spineboy-ess.json": "faacffc62fd210e143d6f745baaa0d7c",
"assets/assets/animations/spineboy/spineboy-ess.skel": "67a1e01a041fe6a7636695e8305b0ff3",
"assets/assets/animations/spineboy/spineboy-pma.atlas": "bf05d7ec2b291cc40a8368b4285bbed0",
"assets/assets/animations/spineboy/spineboy-pma.png": "4ae6c67b8e975ffbfcde433d7064bd36",
"assets/assets/animations/spineboy/spineboy-pro.json": "ac06a008422596e6e64c946513103be2",
"assets/assets/animations/spineboy/spineboy-pro.skel": "01f6b4f75adefe54e706cd06996346dd",
"assets/assets/animations/spineboy/spineboy-run.atlas": "e0411e3e49af3c1f5a13b1dea9fc7f09",
"assets/assets/animations/spineboy/spineboy-run.png": "e547e1ea7707b33c03a2ef52482844c3",
"assets/assets/animations/spineboy/spineboy.atlas": "0252ad0c8f0c40dff09f6854a95fda09",
"assets/assets/animations/spineboy/spineboy.json": "0252ad0c8f0c40dff09f6854a95fda09",
"assets/assets/animations/spineboy/spineboy.png": "79a6229f6a5101c0cf44e8e80dd6f641",
"assets/assets/images/bullet.png": "6d57d87204c173af8572806d93ae3ec6",
"assets/assets/images/enemy.png": "67c6e50b589a02489ac42d18ad0468ee",
"assets/assets/images/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/player.png": "6455b7f3b2a1140a6562ffcaa157454d",
"assets/assets/images/stars.png": "5e766afbd74a090f1768f15be8c6bc6e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c1bf208157f2dd7c0b38a4c05e535a50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.js": "01550177206d83450b42edde383c892d",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.wasm": "fa9fd623adb542edb5066daae99b14ed",
"assets/packages/spine_flutter/src/spine-cpp-lite/spine-cpp-lite.cpp": "b3bd43e9d150492145cd3c01725d2463",
"assets/packages/spine_flutter/src/spine-cpp-lite/spine-cpp-lite.h": "ebe532dbd72c237c640c6ac2e2b18854",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0edeb92028b6160a38ebdeb38d5c3b00",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1a45433a60f57563a725f5c3978b635",
"/": "c1a45433a60f57563a725f5c3978b635",
"main.dart.js": "f3f66ea1caa22b2ac92a58dcb3ad1083",
"manifest.json": "58ad040eb3de17c99e02a798cdc09305",
"version.json": "80e48bcd8d00dc03ce06eca12dfb22b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
