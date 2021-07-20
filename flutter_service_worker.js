'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd97b1aee56fbc4a788a2abdc5ad3c75",
"index.html": "afad9c38e00e46b399d5ea6bb3ed1b3c",
"/": "afad9c38e00e46b399d5ea6bb3ed1b3c",
"main.dart.js": "5c613b3940d8eb4539986e6def7ac109",
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
".git/objects/57/feb2c6b828b77ce19f748eb7658ecbd99459a5": "ab6e382333da89c5553e6392b5b837e7",
".git/objects/6f/a7fd6ae3e98c1f502afffab75b4604116106ed": "694a44301710d19355efdd97b1d4945a",
".git/objects/6f/174ada766276819b3300cab4719dc6a311703b": "58852d522c38600f08aec378dc843960",
".git/objects/03/ffec4d60cf071a7e0b9ea42a606d7d9fbb9d35": "4d8b0ee92941bbdf5d0a01b86c01a555",
".git/objects/9e/9cb261edfc80599b1dc2cbe84370f5ad98f9fd": "615411d1ef81e0a934571739cc1a8c9e",
".git/objects/9e/f6bbde9bb5569441837ee3707d7d60e5378387": "648562f840612cf6021056a59285fa1f",
".git/objects/04/6988a452c50e0f097ed520180f339a38474493": "1df6fe8b2786639e58b131fb8fe1db4d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c772f802a212d4293794e8f3605d6cf14ef3cd": "4b38bf327cebd5490175a195c558f0b5",
".git/objects/3c/7b2226ec7c4fced5f21ee784d731036ea20c56": "b4d30f7c4d138ef4b506822f01baaf47",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/0e/cefa127e5a17cff27a99033a33fbb9721af4da": "7362c8ce27d14c2a2fdcc7cc5c5ab6e5",
".git/objects/0e/cd94e7c9d0e625a9d69a4b98581ca3c52b4506": "fd742f1f9ecc38c9d76d22da5e2789fe",
".git/objects/60/ef56e7511ac91cfe476e756ae10f8628856fbf": "c7a38de0c34b58b5d5134f7076d16680",
".git/objects/34/2430e641102c1dfc3f580a519d2f919dd68777": "1b6524e4a9498e29e199a3bb0ad45d5a",
".git/objects/5a/67de8aa37f42d8bd40679b861fba8312e1b7cb": "91ebf96bf78adbfdc9158531e0d97a8e",
".git/objects/5f/9f3b170ab9712409585277fa4c809a96003cbf": "00c1330d4ff9c6d4b03764c390ddef15",
".git/objects/ac/db76cae05d670dd847dc965108ff18c4befeb3": "e2aaf436ba842db6dd0f039a6b243e30",
".git/objects/ac/77d02d7525d2e66c0e52fbda893509cf3cb393": "13f905c825105fe4dd4b130af477792e",
".git/objects/be/da4df151e997165f02c09a18c4a49e6478921f": "670f85b1c33b4c18960083e50876ea5c",
".git/objects/b3/cfc263d27408351200067a28c9f0e7f879fbc9": "8bb706604f5d11388f8a9d2200231cac",
".git/objects/bd/4175bf15733bbfa930ba328153885c00d4a0b4": "79771e143f07552ba2daac7066704df4",
".git/objects/bc/b99ef0b59b8d91bad2ffa746e856dad2069b0f": "1c9cd82b53fd1a31a5f933bbad13c25b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/884bf58dac7b8fc8e70da2a69a2a45410bf51b": "1641c9af9e22c47acc274d0c0703c7bc",
".git/objects/c9/cc62d7348c9f71759f58113f36d92e830ce097": "6db884a405c9f68464f2c765894b8bb8",
".git/objects/fc/41e2dd861d9df7d2ab64fe51e4e4cfd3fbcdc6": "b5ececc57334109090b05168ee13be68",
".git/objects/ed/d69c638976e70c3ddc5e5209eb9ca26613b624": "9eafec80be3a014ac7e93aef895e4b0e",
".git/objects/c1/2f2ae1ac325ba6cf5ae673edc42a9cac4f834e": "202075c6f67595cdf397da861d89cf60",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/832371bf131ea8005d3ceeef3e728c016d3c87": "57b8e5a25a75b11028bdd1232abc0b9f",
".git/objects/11/a7c1f918349c172d23ee49341674b86ad30518": "2f6bff3cf8a3d04b9f6721efe287670b",
".git/objects/7d/70f53094d0404bbbd67bbfb13b5c9fa02384f0": "f08520dc14e8c33e3fc1e196c5e73c4a",
".git/objects/89/b6ad5f88b7fb45817c08ec63aa9e2a80e9ac92": "30c08017f1f25f1e348bf7abdfc73d62",
".git/objects/89/dee74d693aad7c618cd2ddc65dc0c727f8a999": "1ee49b778699897b5041f579bf2db9d5",
".git/objects/8f/3935a21abadbf46b96a97952477bbee0189b32": "c8433e02160f1efed244828c63be7600",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/71ee8260a586c91fd0c6eefcc92c72278266c5": "6aee72942deb2d646d9149813aa773d3",
".git/objects/26/b6e0533251f4b111b4ef5c47c0ddbbb6784b3e": "7370312a04f5ba298b6d3e7d24d49a6a",
".git/objects/81/2f17045e0c033f27242f65d8679e2457592183": "6235ea132371c610e9a0ba211879c82d",
".git/objects/2a/efb90fafe61b7350cd401382a2711e6bb7571d": "0598c4049c443a0b541e256894914a93",
".git/objects/43/439c04df5cc0ae3b495d1560f4b51e4f1e5ffe": "00c93ae114d3668f369e364706b09241",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/7664b1a045d6ee491f32bf7bc9d4ae6fe60855": "de9531a1007d13d3b0317e9f9db9e982",
".git/objects/38/be41bff8214d4f8c924772460d47ea5cdcad4e": "d75b0b1d3fe7446301f97d37d640d484",
".git/objects/5c/42d4eb8b9ec15c076058f13d7eb6335fe408cc": "2e33d763bde405a625a89fd76a4604ba",
".git/objects/62/14affb16ee3801c9115c5b243128e6ded460f8": "e33a1db454cf53a58e55d36fa717b49c",
".git/objects/62/72d88d2d1827e0e3b87aadf76b145bcaeaf50e": "602ad8b774bab872ad3664d83eb664d3",
".git/objects/54/dc0aa6592eacd3ccda865d06494308359a108b": "a3f291f01599146f2f4ab472539af2c6",
".git/objects/3f/8e2fec8ca38b5df8b0baa7962bb9508faec889": "4fa7855b38b85e33a4cbcb3db1c6b1c8",
".git/objects/08/68d52d878febca2cf9fda4ff7d34a8d42e93b0": "f8b9a77b0891f8992bcfaa42a97974bf",
".git/objects/01/bf04a27d5760f9d9a96bba4c24791d9d0c85bf": "776d5158b15c266b0204712cdf733172",
".git/objects/6c/07c9a7fd92869cadf5be3e5c810c45b7563c25": "6e8c4f3ed6cba8b543ca68cbad7e47d4",
".git/objects/99/bfcaba8bb53c92a02cc94a632d13a6fc7394ca": "88006a91c55229edaab84353a49f3b3c",
".git/objects/64/c360fc97bf6951de84680bd45cc78e426d351d": "dc2cb6f240febe0956bb1b5c73690f06",
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
".git/objects/de/7e09e56fbe27eba1300143b3cafb2e50bb1de5": "ed796b7be8d7b6f95d899558e52fa47c",
".git/objects/de/4e61383b982d8f1a48c57866c87b87d5f45f6e": "8467caabf77fc9a375b65cedcf324ef1",
".git/objects/b0/066f36766ba9ad88d2de7a3e462adc22515d78": "43dae858d991fd932407d9cc170fc2fd",
".git/objects/a1/8dd11ce8a3b28dabc837218692c8052163640f": "a57b1eff1d387dcd0e00eb942f751a56",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/6f9210ff3e596be30d984c89c3bdd9e6429d77": "b4d559bf5208a273e33e38f79556ecde",
".git/objects/cc/e75c8876c9019a914f1a388f4222acc5de7d86": "705537016f6b988556b14c17263737e1",
".git/objects/e6/83bf8f88edbf50d97f6cc61ec6b04396fc6512": "f7f34fbb9c44e184e937f1366f87af5e",
".git/objects/fa/d1edf73146c907f352719e5b430ffc61e3dc86": "fa4bd465407632cc3dab4bafee48fac5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/ddc093cc674b9763307dfd73b7a4ed28398043": "eee09486dac9b9f07dc11aa5f0c329dd",
".git/objects/83/dc1bdf465e07aabcc68a07b84e78256d2e3e39": "cd7af18817c9818291b71db50a3a1a9c",
".git/objects/1b/f52342e837be62252ab359cfe1e6858f4a89f9": "c873ad280822518c57a1cf836304135c",
".git/objects/84/b372127f0406cc9321029b62bcd71514353c0d": "4f131bbe4ee42215bb19edd11af28376",
".git/objects/84/e7172c2b1656dd350cf4f1ea550d2579a302ac": "a29d8c60360a65a1e7fa5a3c79b95d88",
".git/objects/4f/5676c03fd0e6bc9c196fdb35b34189f08d3d74": "ddd8aab006f9dbb2db0c8fe8d71c6eb1",
".git/objects/8d/18e0dfc4e70c14b900b26360f1934644b835fe": "12a503dd74fe65c96ae26ad6e20423bd",
".git/objects/8d/e1e6c9b3729ebfb80324b436fcd7da2acd7636": "2f4280a64504ee47f097d29d618d62b8",
".git/objects/15/aaf0273a467466a4b7f7fc2e67176f9a005105": "bfd6809bef6cffb6b2f1b3f6283a2f2a",
".git/objects/1d/e231b46adca07003c1e0ecc3a5898a2b15208c": "cc8730af3d57ea5929343d33097d66e4",
".git/objects/1c/d2c8d308d68e1729b1390e384d64f2e17b65b7": "491b0a43a80dfb287c95b6e67b1c6667",
".git/objects/82/cc38cbfe4e15ce724696405f7b0b799f2eb4a7": "25a3d7b41ace38145870e9140b0b89e2",
".git/objects/78/2f988936d0457d5995a42c7c90e5dcc03bacc6": "a824a5ace202c15a596a038ddb5dd45c",
".git/objects/22/c4d1c0d52f1e490e4d57126e2c54bf3a1e3861": "05830f4b5122d34f8f419581f6339473",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "148339c50e979bb293f6c4416a5ddd5a",
".git/logs/refs/heads/master": "148339c50e979bb293f6c4416a5ddd5a",
".git/logs/refs/remotes/origin/master": "9378cf4d138b4096e1e443a1e1c6c337",
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
".git/refs/heads/master": "4e1b16cd635ca0a5f252f34c4a48ae88",
".git/refs/remotes/origin/master": "4e1b16cd635ca0a5f252f34c4a48ae88",
".git/index": "f56791ffe3abfa1ed4c507c456a66dc2",
".git/COMMIT_EDITMSG": "f3dc153e6bb9958e2db5980933ffb4d0",
"assets/AssetManifest.json": "c8dff6cb3d1ac514324d1a140369d16d",
"assets/NOTICES": "a7492a05b4f8bc56061942108b99f996",
"assets/FontManifest.json": "68a8d99ca6f74471f1008aa78b6c782c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logo_kopi_nu.png": "956db930040f919b60132b3f11895037",
"assets/assets/images/pic_product_arabica.png": "504c253be5a905c1e4a519bbea779d0b",
"assets/assets/images/pic_espresso.png": "7ba42d3a8f2f48f3c224a65789b51502",
"assets/assets/images/pic_product_arabica_badge.png": "e40556a5bafc75ef8d87aedb9035397d",
"assets/assets/images/pic_thanks_for_purchasing.JPG": "026edce5129ba4eef5add2eadd828c3b",
"assets/assets/images/demo_coffee_1.jpeg": "b3272e66e14f0f03d72c7418d9d6bc72",
"assets/assets/images/pic_manual.png": "315437814774bc6966b89d1d7641d2d7",
"assets/assets/images/asset_excelsa.jpg": "895812816af1f23edbb7041b48afd8a7",
"assets/assets/images/pic_artisan.png": "719056323865349bb77abb8f2b7e3396",
"assets/assets/images/demo_coffee_1.png": "11437afad8e907b2e3183a64da59ff6f",
"assets/assets/images/asset_robusta.jpg": "ba4bb6acdc327710224ebe1e40eb2c7b",
"assets/assets/images/pic_tentang.JPG": "893f3b7f5c031f1e08aec5dd5fce60e6",
"assets/assets/images/slide_1.jpeg": "bd77015114969663ca205cfcc529c7c0",
"assets/assets/images/pic_order.png": "939bba9a966d73d2653cb03753e673fe",
"assets/assets/images/pic_product_speciality.png": "3e221d1e2b851706c29a694cd0c5dbb3",
"assets/assets/images/speciality_detail.png": "c7186e1cf33f0da9e695056a08b16870",
"assets/assets/images/pic_speciality_grind.JPG": "cb709dab869877481bdd7e7f66b503a7",
"assets/assets/images/pic_farhan.png": "707f93c52778bcfe04ab567501770832",
"assets/assets/images/asset_grinds.jpg": "96b7013310db988b2d0ad578deb87862",
"assets/assets/images/pic_artisan_coffee.JPG": "4ce9e034aaf402002fba14288dad116a",
"assets/assets/images/pic_product_robusta_badge.png": "49923a192605b62ca11facd6dc65f4ee",
"assets/assets/images/pic_manual_brew.JPG": "3504fc242ec9f955eff9000a3a65c5fa",
"assets/assets/images/slide_3.jpeg": "6d9dccdaf2bb94f132bb592cc53b14c1",
"assets/assets/images/pic_galih.png": "553a0fa48cfc10d66a08897f82b3e1cc",
"assets/assets/images/slide_2.jpeg": "f7b21755d6f44925b63135cfbbf7b8cb",
"assets/assets/images/pic_tentang_2.png": "28f1ae6acc79a0b2a367b66bb9e309ae",
"assets/assets/images/pic_jenis_kopi.JPG": "15e209e34fc5344d97afff8df2c4b33d",
"assets/assets/images/pic_product_robusta.png": "04d2ab2f1e445dcec9e182684ebbc51f",
"assets/assets/images/pic_product_excelsa.png": "d3d79d6c81b6d6c2e4f1bd67e55f93f0",
"assets/assets/images/pic_product_excelsa_badge.png": "cd63cea7216b86d0dedb6d83ea921d53",
"assets/assets/images/pic_order_now.png": "d129607229203359bd3bcdbe4d69a526",
"assets/assets/images/pic_speciality_roast.JPG": "c2e3f3edf702cab1dacb5d2dfe958d88",
"assets/assets/images/asset_arabica.jpg": "fae86639d8629dfdca53934ca927bdf5",
"assets/assets/fonts/AvenirLTStd_Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/BebasNeue_Regular.otf": "efe36cb1e690638fc59af446ffc5e774",
"assets/assets/fonts/Didot_italic.otf": "efa1c37a8c7754d774bcdb52bd660694"
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
