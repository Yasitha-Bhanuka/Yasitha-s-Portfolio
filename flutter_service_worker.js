'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "785173d029d06d99f59f4488d3721474",
".git/config": "b2f3d9a69a18120a6b607fc1e4d4748e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db9d68b92a39038ee77d08affa691f99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32f6a6baad85ddad7fc47ea521b8524b",
".git/logs/refs/heads/main": "6aa231374d263a876067d21bc6234685",
".git/logs/refs/remotes/origin/main": "07a9bbcf7a7d1920d0a4b638c0f9d78f",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/952536232763e45958e3db3900266d9bf1ccd6": "c628627374609bb7baf95085949f4532",
".git/objects/03/e694ca13ea7ecdbf835c17354865fad027f9df": "909f7838eee60f402fab813231023b0f",
".git/objects/04/4e00e84a7c89a3ea5f84483e7dbb366b391085": "b42531e5b1a95ae93094d9692616c3f9",
".git/objects/04/9f01e8e5fe86d8ddee7f983946069a90e564b3": "2da51bd0c5f35657dbf278e2e2bd4b18",
".git/objects/06/769a2e30b59d1d83f8c3bcc2a6f096c031aeb6": "0a737486211851b0c5e3a604a36f4400",
".git/objects/07/82fa7719cfcf9c643942e4754090593fd0faf7": "1f083008ba3ff734a09b1aa965085317",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/79db8ab66fba9df09362a54927657603386c5e": "311d7222e997c04f452a993929c0a539",
".git/objects/0c/ff50c107b649254fea8fe492d255b4fce70c04": "b7687c4ef88eeb5de3e7e62a30a9894d",
".git/objects/15/7d2d5a836172c43bcfe7b350fce5ee7fb320cc": "3baada3ad18562d287eae0dec8ed27fe",
".git/objects/16/c1bad854c1592e56b3dea159374b96e8f3c57d": "06f2e6be6463e651d0eddba499f235c1",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/be6eaed6048aa314c03d5bc3f990adddb7224e": "e21601a92ad8c260626ca48b99740676",
".git/objects/22/c0aa3eef434685e4a6d9572d25012c9e5e489c": "8c78f628e544b48f0f9e42161067801b",
".git/objects/23/13c407c1c9a35c409c83735c5c73f36e91620f": "3d43a1fcf6ff9bf45f531a6387dcc8a8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/7637cbf1e2f91075a1f95cf75b78311c24cff5": "59d91062b8270b1031f31675e403097b",
".git/objects/26/9151d3507f0bd812ad25e85fad999db3472ecb": "d59ae4bb3f5632746fd9b5d6b0d73e1f",
".git/objects/29/3afe4749bec8eaa05528769598752a76f70852": "2c634e9658e4719068d70b68f2dd568b",
".git/objects/29/4a596dba33eaf66e987004351f99b2ccf32981": "ec0f80737b975254f0fb6f0500711d19",
".git/objects/2a/f23509042e1bf540b28aa040c6a99d2a6d1156": "83ff0064004afcd801d976787fd6d870",
".git/objects/2e/3fbd2a982fe1d4597bea99f87ce500c90edca4": "6692adbd6481b6f3d76c88330229e204",
".git/objects/30/9ad6a120ac4b24a1bc09eed1b3dc1a97879931": "977054e0eb65e0cedd03957dba2a6a82",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/0e1cbfd40ad5bb6215b24e62a2926dad0b25ca": "09c0867c606f934cee423dd3f0525410",
".git/objects/33/2888f66f9ce8a4145ef7826088729055019a73": "6545c6df733658d136a2d6ef102aadb2",
".git/objects/34/b2a5e158fdcd2d98522526c2001b008e894095": "c1d59dd4a6b6a4656961ee8d20c7cc2f",
".git/objects/37/f88975e42bedf4b2dae6d4fa5e11b56faf0eb3": "d6e9aee3b2bdf037041de082bf52cdb1",
".git/objects/38/8e58c6d65199c1f241ea44c3bb55c7c27771a0": "d883ad5bb20d6c18335ab0971185e8bb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/0356dfe4e3b3883f014ae5ab03ff192296dbc1": "aa47f84ceabb246e6cf90f0fd584ab50",
".git/objects/3f/bc3ca6dc607bf9baef3732c4aa8c958475f59a": "64acfe036aed1b0ce99000e62b54f5f4",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/2d8aaea4184baf23cd484979bc1afadc4505ca": "cb9e0373219316ac7b1ec835d48eab00",
".git/objects/4a/55f97ff80a259f6958a845fe0c0d27758ed711": "49cf1b7104c21aa66dfe187983d21b31",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/52/b196482ff9b5d34987aa7ba095ad9bc0eb09dc": "a92629e2378aad3a74b07015cec76274",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/55/d9eb0b5361a9d42df94cf31f793178a8552dc2": "bc55c817e9f598d4935b2e3478c70da3",
".git/objects/56/52b8f2942480f9201e45bdf8fcef8714540a6b": "0e0b0224ce90198de38aafd871ad8384",
".git/objects/5d/491d854daef283710596c40df119326397a7ef": "62a2f4c56e3508b6ec3d5a69e4b038a5",
".git/objects/69/12007dd51c0103637a13cdd17424f3d50c3e7a": "ab1b38f74691eec8a064ba1395c5b365",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/dd7de772fd01741f2be555014908a00c9e769a": "ba027314d16494d21588e0649f0b0758",
".git/objects/71/f8606c0bf0ad7ffbd6c466a3115b52eeccea54": "9f26efcb253ea9a6a5e0001821e64fc4",
".git/objects/75/45bf59caa642d9092d0a8ddcaa02ed9f43e7f8": "004629d643ec3fa5de98a06e4b4bf6b8",
".git/objects/79/f6f8e0c5dbb6ec0f776026c6e9643dc875ddc5": "a7c050753130f0e982d91b74f09eb87b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/9472826631f578432e337dee4da6bac6f39da7": "9d0e50b1eb6c5a2c6d3f4fe1d73d3350",
".git/objects/80/b9269b3b0179b1696aeb90cb6c192e153dd0e0": "942d3773f3d7878137743f7092083a10",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/798fc5cd49e0f2c73206242ce3ac58c2e0621e": "bf713aeee15aaa683e5c680bceb8e271",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4d65cea4514ccae0d45cc1c8353afc8831b4e0": "60f4869047ac1a90f0436b944ae4492f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/335849832e0b41a2e1bad5a7469c63e9d2d96e": "f361e2b6b2c78d4e0bf86337053a1f77",
".git/objects/8c/bbaddb4555947accb8157fcc19697814fbd6f4": "7eff59b144e6c9ac875caa1b1755df48",
".git/objects/8e/415e69279ed75520203d8d21085883bb6ad1f3": "09d5ace6ab8ea21b4b5f3187d598ef3d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/2d009c66cf791d685059956122dccd0e8f0109": "e865e6e0f82546b7d83fc995009296ff",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/d91e523115bb9e3015816bb1aa227387b8bb41": "fd28bdd97152aa6eb7fa9a69315c8b10",
".git/objects/9e/d1eed2e07b6638bdf2ac647f0c2962b843a406": "22308116ed287ebfcdfe814fb6704216",
".git/objects/a1/682220f57b5373461c5d3ccff07c13d90e43b5": "4c5605145d8f9211917a2362a47b2dc1",
".git/objects/a1/6c663f2fb786942c7b899a36c43b6805a33dd0": "44c031096ae3afe568b96640a06f88a0",
".git/objects/a1/f98ed4ab98aa6e84162ca780c830f1478fc9a7": "7deedcdfcafd757cd2a2cfe5aa4bf9ca",
".git/objects/a8/b6dee4c5b29a5e08bb5fb878c10fdb02b1671e": "4fc7c8f9f02dfd31d069783923b7feee",
".git/objects/aa/719232fb8844318752ceb1033be252dfb2c41b": "8ca9ec8cc39e934b8ffa7086e9703684",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/c1be2888a7dc535ba063216eaee7fb0ae05e6e": "e55c300071de0ea12eca1d979e84b1bb",
".git/objects/ad/4817f826209f38d857aaf8b44d7588ee9cd7a0": "0022a97371577db83e65742c46217341",
".git/objects/ae/93a253a5eb2dd45eababbf6d51ea9ddd6375e2": "9e57a1854c1ffb2eaabf260b9c9dda8d",
".git/objects/af/2deae1b512985920c31bb43d484d588d63e9f9": "6666ece6bc24448cc82ad621f2183f27",
".git/objects/b0/7625ce3cbcbd480191ba41334bd6eef5e205c7": "7cb1aeaa104705abe25482fe43ab4fb6",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/8381b481262c67ec89c3ed058187c017bb7239": "ad025f2c789e53c580bca80cd1aeff52",
".git/objects/b6/bb1ef23073abdcb4f20f11d3b23ebff7a1bb12": "f3ad2c86517e20245746126a42a47e55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1623a766fed09145acf72cffd15a13a8c777b4": "b151a3075d23a1f556b52787dc2eed33",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/28f452171317069c8eab1732abf2d396e59eab": "3100b909e4d745315730c5e94a24f3a0",
".git/objects/bc/9eed726d864ec2ee06ef25ae2da36746b60d26": "773093c9ddce79374577b1da0ae5cdf3",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/71b3c21851dedef98e1c8cbb35f4b0c255864a": "f6a331afbfb0c3bf5aa90de9f475b811",
".git/objects/c5/bbb10f65f70fc843553f80c6500f32cdc4112e": "5e93622bd66899d2af8cbb828bc61ccf",
".git/objects/c6/de1c1353a790cbaaee29f5592d755a97bf22b3": "f5692e54556f94f0ad73d45b2e5b2a04",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/1580165495e1335cdc08e5385a6e9bae9247a4": "0e2b0856e367c098973a9b4c81c2e265",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/6adb5d297d13cbbdafce360e13da9650a126dc": "b5143bd465c0d7d3dd2191eb7268bc05",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e80b01f485f72d42ac8e2a152b4ad6c32b183f": "72ac45b45c85ebfa4a83d5cf7ccea6dd",
".git/objects/d4/ef7cb035099460ea8a0171dc40a26756f33167": "3e2ff5833b34ba59a8c679affa966ad1",
".git/objects/d5/90eb9b7d683eb63a07468bfd2e861203b9102e": "f07ad96e6ce13fa6976f889c38d039e7",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d7/df8dc611a27e075e2b41501b75cc1ff6e4e9e9": "6299faa212e27c0febeedcfb966e9107",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/e8df4eec0ac6fd3a527384e993b3216c589b2f": "90f179f6cc898c8819377913d2dc5d27",
".git/objects/e2/f237d5c95ccb4513f625e8d78f4ea85a7d0bc0": "caf677d0ef3badb4dad7653d636a32ab",
".git/objects/e3/a3193b3e02fdba8a6f49d5bf421b0950e163a8": "68647449429a10c3ab78861779f013d5",
".git/objects/e7/c32fd902a2bc10369cf952f3171875b6210aa2": "f652125ab38b6ef7d4197a9605f1aadc",
".git/objects/e7/e1b466042fda4f1d84e5ec8741939fe902ba9b": "c5ccc6f4d922d6b97149266c9febc2d6",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/7525c6d504c2d343bfb5b8baa5153864709004": "4f46943e8ab9c6193d98e35e84f53c8d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/46697a8cd006d41726de2b0deb9c56f7a79d90": "489420737f898ac21720dad95972823b",
".git/objects/f3/6835185bd318e9818ede90efaa8a8875882d77": "490470bbfd2998b297cf356ac0dabe4c",
".git/objects/f4/2e9ec69a2ce82beb6eb34c586af8a141024a27": "6a8668ff86279bb15913fe9fae4aed77",
".git/objects/f8/57b85a1f759cfd55e22d610201421be3b0272e": "e0aeac6ebd66de03c433d9b7f571d24e",
".git/objects/fa/0dff44e15d4dd133503c997f879e3164d99a21": "290d0f028546f3f343c783f69057db72",
".git/objects/fc/ef7396f14921606e1607f01982c8955956c03a": "abfe1ec758c0035801294f484c9f58f6",
".git/objects/fd/95b42b92eb4a310b6e127e7941b8c49a50c355": "b149fed57e17f0b1688480b4b26b1557",
".git/refs/heads/main": "e2840220814ea66695dae65f1b7fa885",
".git/refs/remotes/origin/main": "9c793acc8d0faff7ffabdc8fc36470eb",
"assets/AssetManifest.bin": "146da89e11ac1a810cf480764d0daca0",
"assets/AssetManifest.bin.json": "88108d2ab06a0f857aa80d55477d1e73",
"assets/AssetManifest.json": "a0f9dabdbb20c9269b5cf76e1a116d3f",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/gmail.svg": "a6c5323464998610e1b69ededd570b80",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/bg.jpeg": "ea2c0fafa076cd13d5022befb3a3d0a8",
"assets/assets/images/billionaire.jpeg": "f33d7998c8bbbe4bdcd2e1f2b5789652",
"assets/assets/images/Bitbucket.jpeg": "a8c63c3135acfad7d0d93885e73632e5",
"assets/assets/images/drawing.png": "539b2e695a01594c813a634654594e7d",
"assets/assets/images/FunFacts.jpeg": "2c37fe1babda04d95438c5c3bbe6671f",
"assets/assets/images/GlobalChat.jpeg": "a9f273e606a74c6ae6bdb4bb5860f243",
"assets/assets/images/GoSpace.jpeg": "07137b87f032133258b89ee146fe13f6",
"assets/assets/images/In.jpeg": "b3375638498791210e77a62e2188f9e9",
"assets/assets/images/splash.gif": "72b52e7e6260148575f82c5873d6b964",
"assets/assets/images/splashlogo.jpg": "0ce0ad35a0a7a81450425a039c4595ad",
"assets/assets/images/Todo.jpeg": "4ad63bab5380160d13b8e933ee015141",
"assets/assets/Lottie/iEyZyT0D16.json": "7a9830e1ae530f9bdb9745b7e06d24aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58b3837df7d67fb7b513dbb209aa7922",
"assets/NOTICES": "c0f80268ab6b916f118d54efbec0f687",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "658b79961a02cab546b290c2fcad5905",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0c2cfb01260cad6fca979aaba9c16ea7",
"icons/favicon.png": "658b79961a02cab546b290c2fcad5905",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2e5f119352e938a6f646eb009df48be9",
"/": "2e5f119352e938a6f646eb009df48be9",
"main.dart.js": "f313843f39602ade8bc14e927d8421f4",
"manifest.json": "14533758d5adebb52c270151b0335f00",
"splash/img/dark-1x.png": "3033ae68a631238b5c3fb1b6c5d2ceba",
"splash/img/dark-2x.png": "4753c2af534d55d62031bd1037518452",
"splash/img/dark-3x.png": "321df25e6483ccacd521b0c450a795c3",
"splash/img/dark-4x.png": "16e33983e3f2bb12873cb0ecca3aae89",
"splash/img/light-1x.png": "3033ae68a631238b5c3fb1b6c5d2ceba",
"splash/img/light-2x.png": "4753c2af534d55d62031bd1037518452",
"splash/img/light-3x.png": "321df25e6483ccacd521b0c450a795c3",
"splash/img/light-4x.png": "16e33983e3f2bb12873cb0ecca3aae89",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"};
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
