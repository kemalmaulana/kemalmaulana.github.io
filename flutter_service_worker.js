'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd97b1aee56fbc4a788a2abdc5ad3c75",
"index.html": "3510892cc343fc71e47cd1073d4b592c",
"/": "3510892cc343fc71e47cd1073d4b592c",
"main.dart.js": "8fe2ff2e08a68f4d0056a75685c73d3e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4ab65b491d5ee461425a7e07ff3ce52f",
".git/config": "3f16ad401cc65c5ecceb3ca9f49459a5",
".git/objects/61/7aa47321e8ee915bacbbfd75b3f0d3b1edcf22": "2ac35166ccccd06c03e2ebfc2feedf67",
".git/objects/0c/de46b82a405184f67c1c0f1e25cdb84b76e0d9": "7dc7c6751c682bdabd04a6feb7cc7691",
".git/objects/66/0da377058ef759ffcd726dcbe6090eec3e80a6": "f4d2f7e7d87964c492653f383f765361",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/28b54099257a285e1c91343c2fcfd4ed31a7d7": "996ee18b716560076e8513ae9481b275",
".git/objects/50/d64a505008d642bf8600cbfa908515930d8b89": "c3f54d92d7c207a334e9628eda6b11f8",
".git/objects/68/f16a6d4b009119234526432825b36f3e19e162": "4faca6d66fa63a6ca49f3e8503710b67",
".git/objects/6f/174ada766276819b3300cab4719dc6a311703b": "58852d522c38600f08aec378dc843960",
".git/objects/9e/f6bbde9bb5569441837ee3707d7d60e5378387": "648562f840612cf6021056a59285fa1f",
".git/objects/04/6988a452c50e0f097ed520180f339a38474493": "1df6fe8b2786639e58b131fb8fe1db4d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c772f802a212d4293794e8f3605d6cf14ef3cd": "4b38bf327cebd5490175a195c558f0b5",
".git/objects/3c/7b2226ec7c4fced5f21ee784d731036ea20c56": "b4d30f7c4d138ef4b506822f01baaf47",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/0e/cefa127e5a17cff27a99033a33fbb9721af4da": "7362c8ce27d14c2a2fdcc7cc5c5ab6e5",
".git/objects/60/ef56e7511ac91cfe476e756ae10f8628856fbf": "c7a38de0c34b58b5d5134f7076d16680",
".git/objects/34/2430e641102c1dfc3f580a519d2f919dd68777": "1b6524e4a9498e29e199a3bb0ad45d5a",
".git/objects/5a/67de8aa37f42d8bd40679b861fba8312e1b7cb": "91ebf96bf78adbfdc9158531e0d97a8e",
".git/objects/ac/db76cae05d670dd847dc965108ff18c4befeb3": "e2aaf436ba842db6dd0f039a6b243e30",
".git/objects/ac/77d02d7525d2e66c0e52fbda893509cf3cb393": "13f905c825105fe4dd4b130af477792e",
".git/objects/b3/cfc263d27408351200067a28c9f0e7f879fbc9": "8bb706604f5d11388f8a9d2200231cac",
".git/objects/bc/b99ef0b59b8d91bad2ffa746e856dad2069b0f": "1c9cd82b53fd1a31a5f933bbad13c25b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/41e2dd861d9df7d2ab64fe51e4e4cfd3fbcdc6": "b5ececc57334109090b05168ee13be68",
".git/objects/c1/2f2ae1ac325ba6cf5ae673edc42a9cac4f834e": "202075c6f67595cdf397da861d89cf60",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/832371bf131ea8005d3ceeef3e728c016d3c87": "57b8e5a25a75b11028bdd1232abc0b9f",
".git/objects/11/a7c1f918349c172d23ee49341674b86ad30518": "2f6bff3cf8a3d04b9f6721efe287670b",
".git/objects/8f/3935a21abadbf46b96a97952477bbee0189b32": "c8433e02160f1efed244828c63be7600",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/b6e0533251f4b111b4ef5c47c0ddbbb6784b3e": "7370312a04f5ba298b6d3e7d24d49a6a",
".git/objects/43/439c04df5cc0ae3b495d1560f4b51e4f1e5ffe": "00c93ae114d3668f369e364706b09241",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/be41bff8214d4f8c924772460d47ea5cdcad4e": "d75b0b1d3fe7446301f97d37d640d484",
".git/objects/54/dc0aa6592eacd3ccda865d06494308359a108b": "a3f291f01599146f2f4ab472539af2c6",
".git/objects/08/68d52d878febca2cf9fda4ff7d34a8d42e93b0": "f8b9a77b0891f8992bcfaa42a97974bf",
".git/objects/01/bf04a27d5760f9d9a96bba4c24791d9d0c85bf": "776d5158b15c266b0204712cdf733172",
".git/objects/6c/07c9a7fd92869cadf5be3e5c810c45b7563c25": "6e8c4f3ed6cba8b543ca68cbad7e47d4",
".git/objects/d4/7ac3a56f4d704ec2e99daf04e4cf537b3e7264": "beb9ce0c6aed3a7054a8967f115c8eaf",
".git/objects/a9/18e9542d6653acb0bf1fbbc8ef8cb8205cab48": "7c8c0d5fc5c0d3c99c79d91d1ddd5d73",
".git/objects/aa/a932c355ab4d901ba44a09917e6420d0b1c932": "d4851856da7ac582eba3dd592bf6fd8e",
".git/objects/aa/84ef9e5cf829295cedade0b3c57033634de56e": "167324fa1c6f81a0e8b0e01aeb1b26fa",
".git/objects/aa/bc48b397f90959b95911d65ea527126c4d9882": "8f14b00567a815454bbac21301f95e80",
".git/objects/af/3f1614c1c7e7072c73934d574da9c60567a726": "818e58fdc1dfc098f0ea164e41e7fb57",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/37c0213dcd1bafdd8a7c579532b796486e3bb1": "1e6d6cc73ca1b466187ee92f52c1ca28",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/6ccfb4b3a3b7528a7138e8dc04da5308dfd88f": "171e61959b8c1f1a336f9873fb15f88d",
".git/objects/de/238e6b6b402d479422e18c0f5b273f5bd2f7f2": "585707bc84aeb99e3591427bedd93dc1",
".git/objects/b0/066f36766ba9ad88d2de7a3e462adc22515d78": "43dae858d991fd932407d9cc170fc2fd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/e75c8876c9019a914f1a388f4222acc5de7d86": "705537016f6b988556b14c17263737e1",
".git/objects/e6/83bf8f88edbf50d97f6cc61ec6b04396fc6512": "f7f34fbb9c44e184e937f1366f87af5e",
".git/objects/fa/d1edf73146c907f352719e5b430ffc61e3dc86": "fa4bd465407632cc3dab4bafee48fac5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/ddc093cc674b9763307dfd73b7a4ed28398043": "eee09486dac9b9f07dc11aa5f0c329dd",
".git/objects/83/dc1bdf465e07aabcc68a07b84e78256d2e3e39": "cd7af18817c9818291b71db50a3a1a9c",
".git/objects/84/b372127f0406cc9321029b62bcd71514353c0d": "4f131bbe4ee42215bb19edd11af28376",
".git/objects/4f/5676c03fd0e6bc9c196fdb35b34189f08d3d74": "ddd8aab006f9dbb2db0c8fe8d71c6eb1",
".git/objects/8d/18e0dfc4e70c14b900b26360f1934644b835fe": "12a503dd74fe65c96ae26ad6e20423bd",
".git/objects/1d/e231b46adca07003c1e0ecc3a5898a2b15208c": "cc8730af3d57ea5929343d33097d66e4",
".git/objects/82/cc38cbfe4e15ce724696405f7b0b799f2eb4a7": "25a3d7b41ace38145870e9140b0b89e2",
".git/objects/22/c4d1c0d52f1e490e4d57126e2c54bf3a1e3861": "05830f4b5122d34f8f419581f6339473",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc727ad85dbe9a2fe6ad685e9bf2e471",
".git/logs/refs/heads/master": "bc727ad85dbe9a2fe6ad685e9bf2e471",
".git/logs/refs/remotes/origin/master": "e2470884abf0c625cbb5b0ec18417671",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d6ef600957b5ff61d9927b099ef608ef",
".git/refs/remotes/origin/master": "d6ef600957b5ff61d9927b099ef608ef",
".git/index": "51b64f85a21afcdf202fcf82b99d2363",
".git/COMMIT_EDITMSG": "b9c46756d82cf43a85bf7f6a6f3bc052",
"assets/AssetManifest.json": "e832b266d3dba0ac5e1263e06dcb2631",
"assets/NOTICES": "a7492a05b4f8bc56061942108b99f996",
"assets/FontManifest.json": "5dc452d94615cd6b178a17792ab086a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logo_kopi_nu.png": "7127265b8b16048ab5403b466e9dfc26",
"assets/assets/images/pic_espresso.png": "7ba42d3a8f2f48f3c224a65789b51502",
"assets/assets/images/demo_coffee_1.jpeg": "b3272e66e14f0f03d72c7418d9d6bc72",
"assets/assets/images/pic_manual.png": "315437814774bc6966b89d1d7641d2d7",
"assets/assets/images/pic_artisan.png": "719056323865349bb77abb8f2b7e3396",
"assets/assets/images/demo_coffee_1.png": "5522c60b77fa5d1feb6f4b129cf48305",
"assets/assets/images/pic_tentang.JPG": "893f3b7f5c031f1e08aec5dd5fce60e6",
"assets/assets/images/slide_1.jpeg": "bd77015114969663ca205cfcc529c7c0",
"assets/assets/images/speciality_detail.png": "c7186e1cf33f0da9e695056a08b16870",
"assets/assets/images/pic_farhan.png": "707f93c52778bcfe04ab567501770832",
"assets/assets/images/pic_artisan_coffee.JPG": "4ce9e034aaf402002fba14288dad116a",
"assets/assets/images/pic_manual_brew.JPG": "3504fc242ec9f955eff9000a3a65c5fa",
"assets/assets/images/slide_3.jpeg": "6d9dccdaf2bb94f132bb592cc53b14c1",
"assets/assets/images/pic_galih.png": "553a0fa48cfc10d66a08897f82b3e1cc",
"assets/assets/images/slide_2.jpeg": "f7b21755d6f44925b63135cfbbf7b8cb",
"assets/assets/images/pic_tentang_2.png": "28f1ae6acc79a0b2a367b66bb9e309ae",
"assets/assets/fonts/AvenirLTStd_Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/BebasNeue_Regular.otf": "efe36cb1e690638fc59af446ffc5e774"
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
