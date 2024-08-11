'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c9a4f368dd09755b67d541b5f1657d04",
"assets/AssetManifest.bin.json": "3566f8628d93eaac444b7efe39923fa5",
"assets/AssetManifest.json": "c0928468d0bc3a5ece6c9a98336b55f6",
"assets/assets/images/asteroid-explode.png": "f8a584ce03aa1fa4f7f0d3a999520f0e",
"assets/assets/images/asteroid.png": "9761870e76ea3268a59e507ca363d0b9",
"assets/assets/images/bomb.png": "f1ac1c1a0b349eef68ce51ea53df2c93",
"assets/assets/images/bullet.png": "6d57d87204c173af8572806d93ae3ec6",
"assets/assets/images/enemy.png": "67c6e50b589a02489ac42d18ad0468ee",
"assets/assets/images/explosion.png": "399d7b06e79778a152fe05204ac77585",
"assets/assets/images/fastfood/1.png": "c7e6ccf128f3adff5c63dc7d2735f4ad",
"assets/assets/images/fastfood/10.png": "c3ca5852fc7d1452acf943955000e83a",
"assets/assets/images/fastfood/11.png": "8a97896bb7038e2a8cde05e7de909f72",
"assets/assets/images/fastfood/2.png": "05cdc032aeee1f2ff297c69d533e426d",
"assets/assets/images/fastfood/3.png": "acdcf5931f7ad12d5d66a468ee6fae1d",
"assets/assets/images/fastfood/4.png": "8820eb5295296eb490d117eead618113",
"assets/assets/images/fastfood/5.png": "9c7ad83f55d676af7b0864d0caa5ad6a",
"assets/assets/images/fastfood/6.png": "a30da46007d588f2b3484832a6bfc0bd",
"assets/assets/images/fastfood/7.png": "c8c83b3695a45560f1cc43b0b10a8fb4",
"assets/assets/images/fastfood/8.png": "b37e712f3091a5ca21c29e5a08c2c53b",
"assets/assets/images/fastfood/9.png": "a471074dd75813ed06197ee12e636067",
"assets/assets/images/fastfood/background.png": "e79883bf14a069cdb5f0f82fa53de624",
"assets/assets/images/flask.jpg": "54ee5a442fe063f75e34a5150bc05a33",
"assets/assets/images/Nebula-Aqua-Pink.png": "4e3c77038adc1d9ec96eedccced14ae2",
"assets/assets/images/Nebula-Blue.png": "2a90457f3933864dcc0730b9dd47cdb8",
"assets/assets/images/Nebula-Red.png": "d9a38e39df4ed9fcf290ca37dd406ae7",
"assets/assets/images/player.png": "6455b7f3b2a1140a6562ffcaa157454d",
"assets/assets/images/player_2.png": "b1df8f845ff5561a4c04aa97cf4fa8d8",
"assets/assets/images/Stars-Big_1_1_PC.png": "4730d94f51a462ab5e2e6679b402c60b",
"assets/assets/images/Stars-Big_1_2_PC.png": "4f16a17a23cd9cb890cd55fd9f243b05",
"assets/assets/images/Stars-Small_1.png": "da575c3ee7f244a492c2187b0ac1e646",
"assets/assets/images/Stars-Small_2.png": "a289079e5abe7bc0476efbd26b81afd2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "1eea94b0b14666062ff4b6ea5d51787a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter_bootstrap.js": "be1ec2d4294019cc39e355357c148b35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1a45433a60f57563a725f5c3978b635",
"/": "c1a45433a60f57563a725f5c3978b635",
"main.dart.js": "928e71a0d1399de5918df6fb22496960",
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
