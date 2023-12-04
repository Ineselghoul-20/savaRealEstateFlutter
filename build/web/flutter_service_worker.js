'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4e5c5d62e6284ab8ebc53ac34f0a785b",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/Camera%2520Icon.svg": "6c417b2027ec9b901f856099422fc258",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/Game%2520Icon.svg": "116bd2707a410cf3a2e8559962e1c2a3",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Success.svg": "70f76d95e96ee6877ec6367b049fbc4d",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/User.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/images/apple-pay.png": "8ed30196e39ee689aa2cc5b604da80ee",
"assets/assets/images/fedex-express.png": "5c65ce272dc58c3dd0b416f0549f23e4",
"assets/assets/images/google-pay.png": "515fdb5d6b0c72ab7ff1d020715da990",
"assets/assets/images/luxury.jpg": "9916d27a01bf6801601981113ed14734",
"assets/assets/images/luxury1.jpg": "708d41192f1ef57b89f064170362b895",
"assets/assets/images/luxury2.jpg": "62c825fb3dc211c1919f4174741878d2",
"assets/assets/images/luxury3.jpg": "16335aeb47e4313c956225c2a5006afa",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/images/Profile%2520Image.png": "527a33070cb9def73179af93a1f649d2",
"assets/assets/images/splash_1.jpg": "d878337884fcba02f76311115324fa31",
"assets/assets/images/splash_2.PNG": "d9074f8e08880069eab5c2011670d074",
"assets/assets/images/splash_3.png": "54b2889511d311463cf331284d9197bb",
"assets/assets/images/splash_4.png": "3580b1c0bb9f244b51d8042b8e762bf5",
"assets/assets/images/splash_5.png": "51c064d3f19cf39aee627a3aed744193",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/images/success_login.jpg": "f2a70a03356f5d31d0c661a9ea7a6e87",
"assets/assets/images/terrain.jpg": "2bcff74c714db46ce691c1362a84f107",
"assets/assets/images/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/FontManifest.json": "2b150d200b71c4a389a23996af4359ad",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "d48aa6b01d9ae739d350cbd980be44a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2496635eeba16f1a4568ddc0530261cd",
"/": "2496635eeba16f1a4568ddc0530261cd",
"main.dart.js": "100c9746c68fc261ffb061a1d4f719f6",
"manifest.json": "adf6ed45579798134390fcbfa6860e54",
"version.json": "142cf738aeca890a3bd5e88e6a4f55a8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
