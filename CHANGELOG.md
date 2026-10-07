# Changelog

## [2.0.0](https://github.com/sudo-Foras666/kinwall/compare/v1.1.0...v2.0.0) (2026-10-07)


### ⚠ BREAKING CHANGES

* **auth:** ?key=<API key> on GET image routes and on GET /api/photos/export.zip is refused. Send the key in the Authorization header, or use GET /api/media-token and POST /api/photos/export-link.
* **auth:** GET /api/oauth/{kind}/start?key= is removed; start a connection with POST and the Authorization header. An embedding host must redirect its shared OAuth callback to the instance (SPEC.md "Embedding the server") before taking this change.
* **journal:** JournalEntry.text (API and export) is null for a private entry the caller can't read; admin API keys now accept an owner (a grown-up); DELETE /api/notifications keeps 'privacy' lines.

### New

* **auth:** credit a parent's phone widgets adds to that parent ([092ade0](https://github.com/sudo-Foras666/kinwall/commit/092ade04e8f30aabcde714964489fd832ccdb275))
* **auth:** let a host log support sign-ins in security activity ([57dfc05](https://github.com/sudo-Foras666/kinwall/commit/57dfc05a2702d29d9e4050306ff0cf86cb9e6f44))
* **auth:** log security activity and keep it out of the family feed ([c0db223](https://github.com/sudo-Foras666/kinwall/commit/c0db223a411ef267d23d34bafc97134206c2da9c))
* **auth:** media tokens for image URLs and one-time photo download links ([115ffe0](https://github.com/sudo-Foras666/kinwall/commit/115ffe00b9f8ff185ad212be4d4398723fe7a347))
* **auth:** say what a paired device is: wall, kid's or grown-up's ([1c6e3cf](https://github.com/sudo-Foras666/kinwall/commit/1c6e3cf9e832bb565e45a99bfe67c5452aad437c))
* **auth:** say which household a key opens in GET /api/me ([a5c0d00](https://github.com/sudo-Foras666/kinwall/commit/a5c0d00b5c56c4b6f597e1b44f918abee813cc31))
* **auth:** search and filter security activity on the server ([0fe581c](https://github.com/sudo-Foras666/kinwall/commit/0fe581c2408beb4cef02e768afd3b8b118233435))
* **auth:** tie widget and Watch keys to the phone that made them ([d109b6b](https://github.com/sudo-Foras666/kinwall/commit/d109b6bb295c586f054ce73e7ac1c90c1f362c58))
* **board:** add a Get stuff done card showing a checklist's progress ([07f7745](https://github.com/sudo-Foras666/kinwall/commit/07f77457aae19c48ff94e48e8e1302e3e9795c03))
* **board:** layouts per screen, with presets, drag and drop and text size ([a09e4ef](https://github.com/sudo-Foras666/kinwall/commit/a09e4ef375f46799411632377ef0a7ca329c21e3))
* **board:** let a display ask for its own tidbit sources ([2f2ae37](https://github.com/sudo-Foras666/kinwall/commit/2f2ae374e074f7f5aa5ff053b8e7355216dead78))
* **board:** open a tapped meal's sheet right on the board ([7e0943e](https://github.com/sudo-Foras666/kinwall/commit/7e0943ec9c8de3b1e4e73943107b8f4272cda83d))
* **board:** pick tidbit cards per display, up to three ([780eeee](https://github.com/sudo-Foras666/kinwall/commit/780eeee60cd9ed1cc7cc75080bcb6e1a1ebfd74d))
* **board:** put today's weather beside the time on a phone ([babc215](https://github.com/sudo-Foras666/kinwall/commit/babc215a62e582afcb8ffe55630f742c962ce18a))
* **board:** show photo captions legibly on the picture card ([8dc8bca](https://github.com/sudo-Foras666/kinwall/commit/8dc8bca5591a27aedac0db2206799bf314b3293c))
* **board:** show what's left to set up on parent devices ([ab81ea2](https://github.com/sudo-Foras666/kinwall/commit/ab81ea2a499631a165b34d9fa93a762151d9e421))
* **brand:** logo in Peacock colors ([455a4d9](https://github.com/sudo-Foras666/kinwall/commit/455a4d93dff82064544088763f34a3c575e02512))
* **brand:** new Kinwall logo for icons, sign-in screens and settings ([7abf2df](https://github.com/sudo-Foras666/kinwall/commit/7abf2dfeac07efbfb60a5e9679346fb9398a2100))
* **calendar:** add a notes field to events ([13225b9](https://github.com/sudo-Foras666/kinwall/commit/13225b9ba4cf636a751132236816a89e843a152e))
* **calendar:** call the main screen Home, with one Calendar tab ([81b22b1](https://github.com/sudo-Foras666/kinwall/commit/81b22b19104ce1f1f09fe541416a70428a6e190a))
* **calendar:** filter a calendar's events by keywords, all-day and category ([5918af2](https://github.com/sudo-Foras666/kinwall/commit/5918af2ba0e635eb562919757f2abfdc17839d91))
* **calendar:** open the day from a phone's month view ([b6fddf7](https://github.com/sudo-Foras666/kinwall/commit/b6fddf7c381684ed08fdb1e3180cac54998dbf20))
* **calendar:** show Day view as one shared timeline, each event once ([48edc7d](https://github.com/sudo-Foras666/kinwall/commit/48edc7da3ed8fbcf222e1062e8d20520990f7f4e))
* **calendar:** show events as free or busy, synced with providers ([be52554](https://github.com/sudo-Foras666/kinwall/commit/be5255494a68f1aaca9a05fdfb452c924e431d58))
* **calendar:** switch views from a sheet on phones ([cddd2d7](https://github.com/sudo-Foras666/kinwall/commit/cddd2d7020047dde77f8941f0b2669d97c650f29))
* **calendar:** warn about a broken calendar after two failed syncs ([96d55ab](https://github.com/sudo-Foras666/kinwall/commit/96d55ab753be06a14ce62a73069ff4890d76a47b))
* **calendar:** warn parents on Home when a calendar stops syncing ([91545fc](https://github.com/sudo-Foras666/kinwall/commit/91545fcb3c2cfe9c5d2b3d7d09c1565fddd823e4))
* **chores:** add a chore library for occasional jobs ([cb4220f](https://github.com/sudo-Foras666/kinwall/commit/cb4220f36e8e7ccd7edb02f4fa78dd9e91d07dbc))
* **chores:** count activity play from launch and show a progress ring ([d8dbf1d](https://github.com/sudo-Foras666/kinwall/commit/d8dbf1da2be7252c5255a622e64717abc639d521))
* **chores:** count activity time only while a kid is really playing ([6331fe0](https://github.com/sudo-Foras666/kinwall/commit/6331fe0430224f0c02faa552ce4508c8cac4affb))
* **chores:** let a parent reset a day's activity play time ([c772cf2](https://github.com/sudo-Foras666/kinwall/commit/c772cf2cce6421426104fd74bf286ff7d25de964))
* **chores:** let parents give bonus points outside a chore ([796bbc9](https://github.com/sudo-Foras666/kinwall/commit/796bbc943db367364e578e561206d98ae307802c))
* **chores:** open a chore's checklist in Get stuff done ([ed9a54e](https://github.com/sudo-Foras666/kinwall/commit/ed9a54e7a9ccd1b01235f0b1f07285cf91a70904))
* **contacts:** FaceTime a contact from their sheet on Apple devices ([ca101db](https://github.com/sudo-Foras666/kinwall/commit/ca101db944f138da44513cec010d9e2abd07aa06))
* **contacts:** Google Meet video call from a contact's sheet on Android ([948adeb](https://github.com/sudo-Foras666/kinwall/commit/948adeb0b124fb22717ceabdc593673736680fc0))
* **contacts:** put small Import and Add buttons in the page header ([372dec6](https://github.com/sudo-Foras666/kinwall/commit/372dec63dedfe6c674fac2d8d682f53817516e7d))
* **contacts:** review a contact shared from the phone app ([bc0fa87](https://github.com/sudo-Foras666/kinwall/commit/bc0fa8747d892ca18f528f5fab4903435250f709))
* **events:** hide a single event or its series from the family ([07d9d2d](https://github.com/sudo-Foras666/kinwall/commit/07d9d2d38a637ad51ff4ed9b361282e35207dab5))
* **journal:** keep last night's check-in open until the next morning ([4648963](https://github.com/sudo-Foras666/kinwall/commit/464896321b3ca05420941cf3893859c4c6b632a4))
* **journal:** private journals only their owner's devices can read ([e094635](https://github.com/sudo-Foras666/kinwall/commit/e094635cfd046b040d9d58e2f735009991f60480))
* **journal:** remind once in the morning when last night's check-in is open ([5976314](https://github.com/sudo-Foras666/kinwall/commit/5976314050c8d7d0114aa932362cf13d5b18b9f8))
* let each member pick English or German ([5089eb2](https://github.com/sudo-Foras666/kinwall/commit/5089eb2abe0f7ff3fbc67a5ba4ceb1673bb2ce0c))
* **lists:** add Get stuff done mode for working through a checklist ([7d3f9e4](https://github.com/sudo-Foras666/kinwall/commit/7d3f9e4ffa0292b986f38aeef6e2746e21ce1bab))
* **lists:** ask where a scanned item was found while shopping ([7656e6d](https://github.com/sudo-Foras666/kinwall/commit/7656e6d0bcd974ce0284d450766cb23f06eef430))
* **lists:** ask where an item was found when it's ticked off on a trip ([e366b73](https://github.com/sudo-Foras666/kinwall/commit/e366b73763f6087338352526252f40e716f5889f))
* **lists:** categories to filter, sort and group the grocery catalog ([264cc26](https://github.com/sudo-Foras666/kinwall/commit/264cc26bdf8107e1f0351c8f4a54231d9f94ed31))
* **lists:** confirm a new scan in a sheet before saving its barcode ([9cdd91c](https://github.com/sudo-Foras666/kinwall/commit/9cdd91cc92e4225fa63505815c4d441f4ece9e78))
* **lists:** grocery catalog API to list, add and edit remembered items ([3e6d69b](https://github.com/sudo-Foras666/kinwall/commit/3e6d69b58b0d50e6854f3e237cff65952c205dcd))
* **lists:** grocery catalog sheet to browse and edit remembered items ([0c5a031](https://github.com/sudo-Foras666/kinwall/commit/0c5a0315b77a9f45d2c6b317f489fdc6d2ec41a7))
* **lists:** keep a kid's device from changing the catalog ([9f7145c](https://github.com/sudo-Foras666/kinwall/commit/9f7145c6c42fbda634379563da5fec648305a70d))
* **lists:** let a family pick a default list for each shopping type ([0c8c965](https://github.com/sudo-Foras666/kinwall/commit/0c8c965af3586a4ad18a223a84baf21286dcecbf))
* **lists:** let a kid's device change only their own items ([52fa369](https://github.com/sudo-Foras666/kinwall/commit/52fa3693caa411247a74f349bdb1a133cd361037))
* **lists:** let an add skip names already on the list ([62de60a](https://github.com/sudo-Foras666/kinwall/commit/62de60a03181dc4a36b0da8164ae70ba6e9cb333))
* **lists:** look up household, beauty and pet barcodes too ([3121606](https://github.com/sudo-Foras666/kinwall/commit/31216066d86652fc7630a00beb82dc8dc668f3a9))
* **lists:** move items to another list of the same type ([9856951](https://github.com/sudo-Foras666/kinwall/commit/98569514a652f8c13235d4d9421f866e314034c2))
* **lists:** move the catalog's filters into a Filter & sort sheet ([03902c8](https://github.com/sudo-Foras666/kinwall/commit/03902c842fa8b2f7f7b6655e7396ceec568ec58a))
* **lists:** put the brand in front of a scanned product's name ([f7f422e](https://github.com/sudo-Foras666/kinwall/commit/f7f422e3567020466f3b6945a7e7a0ef8a0f4b23))
* **lists:** scan products into shopping lists ([b8da1df](https://github.com/sudo-Foras666/kinwall/commit/b8da1df9f4a4ac590b82a916709b2be3a32f84a0))
* **lists:** scan to check items off while shopping ([02d27e9](https://github.com/sudo-Foras666/kinwall/commit/02d27e9c05041a6c789ddb78ccf144d9d790830b))
* **lists:** show how many items are overdue on each list's card ([83dc6f7](https://github.com/sudo-Foras666/kinwall/commit/83dc6f78b5d2422dcf22581a467577b4f9291ee0))
* **lists:** show who added and checked off items, and last done ([dcbe852](https://github.com/sudo-Foras666/kinwall/commit/dcbe852cd188540fa8e21e109899627fa659e779))
* **lists:** split shopping lists into groceries and shopping types ([f319e05](https://github.com/sudo-Foras666/kinwall/commit/f319e057d4929662c378890c10bef91650b82ddb))
* **lists:** start a scanned product on the list type it belongs to ([e1cd282](https://github.com/sudo-Foras666/kinwall/commit/e1cd2829d5784ccdfcbf553c12c4f950cf8caac4))
* **lists:** swipe an item left to delete it on parent devices ([36256ad](https://github.com/sudo-Foras666/kinwall/commit/36256ad57a3f7aee72e4d281378caa5e5bb95e31))
* **lists:** walk groceries and shopping lists together on a store trip ([de10dbe](https://github.com/sudo-Foras666/kinwall/commit/de10dbe516b33a4fdbfc12215785451a61716986))
* **mcp:** default lists and book search for connected assistants ([38496c8](https://github.com/sudo-Foras666/kinwall/commit/38496c8d1ac6786e9c479d1ace1be1300ed8716d))
* **mcp:** take groceries as a list kind and a catalog on catalog tools ([557449e](https://github.com/sudo-Foras666/kinwall/commit/557449efb3314c6715d26437bf0ec2d00d319669))
* **meals:** add meal ingredients to groceries lists only ([2428fc4](https://github.com/sudo-Foras666/kinwall/commit/2428fc40088c7c6d6f4e760fc0e759a12ed0baf8))
* **meals:** open the planner on today on phones, with a Day/Week switch ([b176c80](https://github.com/sudo-Foras666/kinwall/commit/b176c803bb82d78530b72ae198b16785b2cfd465))
* **meals:** pause, resume and reset cooking timers ([7e747bc](https://github.com/sudo-Foras666/kinwall/commit/7e747bc2c74495747435249f47464f61ec53b658))
* **meals:** put swap near the top of the meal sheet ([3f4405f](https://github.com/sudo-Foras666/kinwall/commit/3f4405f05fdfcef574f22468c7418e9fb64f06b5))
* **newscast:** add Newscast as Home's fourth tab ([8ea06d4](https://github.com/sudo-Foras666/kinwall/commit/8ea06d4e16ab2f6b2efc55983c6e75688f5b29b5))
* **newscast:** derive the family's news, with announcements and reactions ([8159e24](https://github.com/sudo-Foras666/kinwall/commit/8159e24e376d1fb595386160a854dfbfa58669fd))
* **newscast:** open a photo or drawing full size on tap ([be9295f](https://github.com/sudo-Foras666/kinwall/commit/be9295f156f12f8b15f4f146e0148278f26250f8))
* **plugins:** let plugins speak through Kinwall ([7a1b08d](https://github.com/sudo-Foras666/kinwall/commit/7a1b08d63741061d4d7fe442344b7dc19ffd6dfb))
* **plugins:** tell plugins whether it's a parent's device ([8cfeba3](https://github.com/sudo-Foras666/kinwall/commit/8cfeba3984bc21e0834ca5b63c44c5ddb9bc7b5e))
* **profile:** let a kid pick their own avatar on their own device ([a7d0e0a](https://github.com/sudo-Foras666/kinwall/commit/a7d0e0a87adad73515ad066a2ef6155375f15c9d))
* **recipes:** say which recipe an import from a link will update ([1b49d24](https://github.com/sudo-Foras666/kinwall/commit/1b49d24609cc8e8aecaed1dc2514cd39497e171a))
* **rewards:** add a quiet Stop saving button under the goal ([b65c8e3](https://github.com/sudo-Foras666/kinwall/commit/b65c8e3187bb4cbde54304f51c90be5a5d6c561d))
* **rewards:** let a kid cancel their own pending reward request ([e666b1f](https://github.com/sudo-Foras666/kinwall/commit/e666b1f2b32f0e9e69577f071ae34089173e81ba))
* **server:** let other apps send actions to activity plugins ([03da7ea](https://github.com/sudo-Foras666/kinwall/commit/03da7ea28b2e9b08eea9a069b7a25b629cb9cef5))
* **server:** per-area revs in GET /api/rev ([6380f40](https://github.com/sudo-Foras666/kinwall/commit/6380f4081be5e9ddb65f5b5c5e658bc117d7595f))
* **server:** store Paint coloring pages with the family photos ([6b9431e](https://github.com/sudo-Foras666/kinwall/commit/6b9431e307021f28047cfbae8692cf18e9dd421b))
* **server:** write notifications and messages in each member's language ([98251c0](https://github.com/sudo-Foras666/kinwall/commit/98251c0d161fa14bd36ff01c52aeb6c6ae07a1b1))
* **settings:** add a family Night screen with Google Photos ([a2a13d0](https://github.com/sudo-Foras666/kinwall/commit/a2a13d006a226759db7dcda2fb925c51f922f6a1))
* **settings:** add a per-device screen scale, auto-fitting 10" tablets ([76c31b3](https://github.com/sudo-Foras666/kinwall/commit/76c31b38720c80b13e43d8bed4067f97428504f8))
* **settings:** add check-ins & journal and rewards switches ([65d2189](https://github.com/sudo-Foras666/kinwall/commit/65d2189d7e7290c2663313567fd4d4ff2d7de2a5))
* **settings:** add the Peacock color scheme ([33c131a](https://github.com/sudo-Foras666/kinwall/commit/33c131a8088a67ac6e7639349282ccda0307ad25))
* **settings:** Android buttons for medicine through Do Not Disturb and tiles ([8f6c442](https://github.com/sudo-Foras666/kinwall/commit/8f6c442da9e455d89630ad59628b9f2fc5528952))
* **settings:** fold general's cards and add settings search ([e294890](https://github.com/sudo-Foras666/kinwall/commit/e2948907ad593fe63c1a410e67c33471497c2777))
* **settings:** give the Modern color schemes more color ([3f3fd12](https://github.com/sudo-Foras666/kinwall/commit/3f3fd12bb3f281aa34103740b53ce22dbbf871ff))
* **settings:** let each member pick the app's language ([1a64b4a](https://github.com/sudo-Foras666/kinwall/commit/1a64b4a5051323f26199315f9523775bcca6d94a))
* **settings:** make eucalyptus the default color scheme ([900ebb9](https://github.com/sudo-Foras666/kinwall/commit/900ebb926d0666c800d8d3f176f9b6a863fe8a92))
* **settings:** make peacock the default color scheme ([2e4c89d](https://github.com/sudo-Foras666/kinwall/commit/2e4c89d3d0f029bd9c05eb46d7834e2a8110f494))
* **settings:** make sage the default color scheme ([d71e5a8](https://github.com/sudo-Foras666/kinwall/commit/d71e5a819cb97bd102ec0d9c86c15e5e9aaa8a6a))
* **settings:** merge quiet hours and the night screen into Night ([af8b945](https://github.com/sudo-Foras666/kinwall/commit/af8b9459c944b53349f9cc0b271789175564e3d0))
* **settings:** open security activity in a searchable sheet ([5dad415](https://github.com/sudo-Foras666/kinwall/commit/5dad415a628acb1d1c3694863970f6a5409dff20))
* **settings:** pin a checklist to a screen in Get stuff done ([3b2e102](https://github.com/sudo-Foras666/kinwall/commit/3b2e102c000df7dcec519cc3704c5ba856d6676e))
* **settings:** profile pictures from photos, drawings or the camera ([3d7a1f5](https://github.com/sudo-Foras666/kinwall/commit/3d7a1f50dfc6f534f8eecbc755c60078a6dd0b3a))
* **settings:** show security activity under settings → access ([e98f5ad](https://github.com/sudo-Foras666/kinwall/commit/e98f5ad2393d3dba2b71e4742d2f7cb1065aac85))
* **settings:** show the connected Google account for Google Photos ([4898391](https://github.com/sudo-Foras666/kinwall/commit/4898391edbc74030bbe4db8c03d28f913b402b82))
* **setup:** ask whose device this is, and wall or kid's device ([027842a](https://github.com/sudo-Foras666/kinwall/commit/027842a4fca9decad0565d669f08aec520bbee57))
* **trackers:** add a cover view to the library ([af423d6](https://github.com/sudo-Foras666/kinwall/commit/af423d61829420bc7eb9d7362ad55275492f57dd))
* **trackers:** add a family library of the books you own ([366b428](https://github.com/sudo-Foras666/kinwall/commit/366b42838661f4bbb95716423929370c01f4f48d))
* **trackers:** add a library wishlist and a whose-book picker ([e056ccc](https://github.com/sudo-Foras666/kinwall/commit/e056ccc3cee8b2449fe82d311b4d1347fe9d9803))
* **trackers:** filter the library by genre ([e4ad967](https://github.com/sudo-Foras666/kinwall/commit/e4ad9678bd3870a80120c8d9e9fdbe95b5bdf3d2))
* **trackers:** keep pages read each day on a book ([6bee24f](https://github.com/sudo-Foras666/kinwall/commit/6bee24fb614bcc5ab4dd3b7e9254f78daad239d2))
* **trackers:** lend library books and say where each one lives ([1b4e58e](https://github.com/sudo-Foras666/kinwall/commit/1b4e58e8d8e6ec756e214366444feccd72d5c3fc))
* **trackers:** log or fix reading for an earlier day ([d431a1c](https://github.com/sudo-Foras666/kinwall/commit/d431a1caa4f73df582fcb203f3a0c47e4ee81e19))
* **trackers:** look library books up on Open Library for more details ([2717f2e](https://github.com/sudo-Foras666/kinwall/commit/2717f2ec76ac0d38a6499455cb283eac950edd92))
* **trackers:** look up books and show cover links ([0ba6801](https://github.com/sudo-Foras666/kinwall/commit/0ba68016dcee757e93c45be5b2ead7a35bf13a81))
* **trackers:** make audiobooks their own library items ([6adfc58](https://github.com/sudo-Foras666/kinwall/commit/6adfc58f48663f6cfd7a3f96fb12dff7b3a0c726))
* **trackers:** move the library filters into a multi-select sheet ([ad722cf](https://github.com/sudo-Foras666/kinwall/commit/ad722cfbe818529345e277a7b60e623c0cf1c773))
* **trackers:** pick Reading, Library, Memories or Health from one view picker ([456ee6c](https://github.com/sudo-Foras666/kinwall/commit/456ee6c9494bfe7d3dfaac21ed1fc60ad1e89d24))
* **trackers:** put every book on a reading shelf in the library ([7c5bb75](https://github.com/sudo-Foras666/kinwall/commit/7c5bb7532c1e24c7e918e3ccb509092387455580))
* **trackers:** put the library filters behind one button on phones ([5ee2a4b](https://github.com/sudo-Foras666/kinwall/commit/5ee2a4b5336e8509319e1fda67e0f5f7f59d0181))
* **trackers:** save a book someone's reading to the library ([a758292](https://github.com/sudo-Foras666/kinwall/commit/a758292008f149e8e199988c30647a543844938e))
* **trackers:** scan a book's barcode in the app to look it up ([8443df0](https://github.com/sudo-Foras666/kinwall/commit/8443df06d123b1574ec525687f0f14d5641d8c4d))
* **trackers:** scan books in a row with a pause between them ([d8675c9](https://github.com/sudo-Foras666/kinwall/commit/d8675c9544f456b9fd50481f1d2fea8e7044ba72))
* **trackers:** show audiobooks as records in a crate in the library ([da4326c](https://github.com/sudo-Foras666/kinwall/commit/da4326c0297d0efdcd95d88c62b1e9cec42a9582))
* **trackers:** show the last 3 finished books on a shelf, then Show all ([7aa429a](https://github.com/sudo-Foras666/kinwall/commit/7aa429a272ece2da9e3daccacd843a99dd0fa9cf))
* **trackers:** sort the library by title, author, recently read and more ([225a9fd](https://github.com/sudo-Foras666/kinwall/commit/225a9fdafe1229071ae0fb1c3c1b683af5f3a178))
* **trackers:** track borrowed library books with due dates ([227fe1d](https://github.com/sudo-Foras666/kinwall/commit/227fe1d05fea3b74d1d8d102d2d9150fc1beb824))
* **web:** a spinner and a bigger logo on the loading screens ([b37b3a2](https://github.com/sudo-Foras666/kinwall/commit/b37b3a2e674598b8d84c6977c4379d63aec29c87))
* **web:** add a pencil brush and ten remembered brush sizes ([bb92989](https://github.com/sudo-Foras666/kinwall/commit/bb929890e1457d4e083cf3657419ae1e5374bd1b))
* **web:** add Paint brushes, Fill on coloring pages and a coloring book ([7cf74c5](https://github.com/sudo-Foras666/kinwall/commit/7cf74c55b94a632dbc9313eed12be191bf52a36a))
* **web:** bigger logo on tablet and wall loading and sign-in screens ([3122f35](https://github.com/sudo-Foras666/kinwall/commit/3122f35e0c138ffefd36c9ba83773901c6926ad4))
* **web:** bridge helpers for Android notification settings and tiles ([61ced2b](https://github.com/sudo-Foras666/kinwall/commit/61ced2bf555d433765d4358a92ee13977b0d8503))
* **web:** bundle the typefaces so no screen asks Google for fonts ([32651e6](https://github.com/sudo-Foras666/kinwall/commit/32651e67ddd5a413573c47f68d34201d12061b57))
* **web:** draw the demo's Paint pictures with Paint's own brushes ([3ec0692](https://github.com/sudo-Foras666/kinwall/commit/3ec069262640f0f38538f9def7b2d2c914feee91))
* **web:** go straight from the setup code to the passkey ([5b5625c](https://github.com/sudo-Foras666/kinwall/commit/5b5625c8ce7708c067ca462792399513e9311b40))
* **web:** hide check-ins and rewards when off, and fix feature gates ([4261bfd](https://github.com/sudo-Foras666/kinwall/commit/4261bfd55561268653c11cd4498cc3c676165755))
* **web:** open the front camera when scanning on a wall screen ([8b72751](https://github.com/sudo-Foras666/kinwall/commit/8b72751e03ca2c42c7b481bd64dc3e8b116d6721))
* **web:** quick timers from the header, shared with cooking mode ([6dd2067](https://github.com/sudo-Foras666/kinwall/commit/6dd2067e15d455781e40d5764c1fac3e4f17498a)), closes [#20](https://github.com/sudo-Foras666/kinwall/issues/20)
* **web:** redraw the coloring pages and add six more by category ([c1a6af0](https://github.com/sudo-Foras666/kinwall/commit/c1a6af009a174993c3cca04c150e008f96fbdad3))
* **web:** show profile pictures in Paint's who's-drawing picker ([4c5844a](https://github.com/sudo-Foras666/kinwall/commit/4c5844a9673148027006f86dd0bfe83cf35171fd))
* **web:** show the whole app in German ([0f91820](https://github.com/sudo-Foras666/kinwall/commit/0f91820902d42a42d47abcba22e6cb70e4a0bac2))
* **web:** tick clocks on the minute and let a device show its own time zone ([6744740](https://github.com/sudo-Foras666/kinwall/commit/67447403989d325a81ea3928c1b2ac6628f535c9))


### Fixed

* **auth:** ask before a link signs this browser in ([dfb2b13](https://github.com/sudo-Foras666/kinwall/commit/dfb2b13fb7969013fe3985baa4cc4b6fab35abd5))
* **auth:** close what connected apps and strangers could still reach ([df70dde](https://github.com/sudo-Foras666/kinwall/commit/df70dde0fe12d6be7369c8d50cd901e49215c2d9))
* **auth:** count a grown-up's own full-access device as their own device ([d8566d7](https://github.com/sudo-Foras666/kinwall/commit/d8566d7226c3c13a030c76fdbb3304b8f1b3355e))
* **auth:** count wrong quiet-hours pin tries for the whole family ([7b96990](https://github.com/sudo-Foras666/kinwall/commit/7b969907f51397d540e7a1657c9569810a7305fc))
* **auth:** finish a calendar sign-in only in the browser that started it ([7fbbfc8](https://github.com/sudo-Foras666/kinwall/commit/7fbbfc8c13fe31e0c7f97f2336c722c4c483c5ee))
* **auth:** let setup's passkey step continue in its own tab inside a panel ([72fd57e](https://github.com/sudo-Foras666/kinwall/commit/72fd57eafe9a49ee710791954e2c922b372665ed))
* **auth:** let wall and kids' devices look up books, covers and products ([531ec90](https://github.com/sudo-Foras666/kinwall/commit/531ec90e782a32efc1c2af0a03c005891c5bbba8))
* **auth:** make passkeys work in the Home Assistant app without PUBLIC_URL ([542eac1](https://github.com/sudo-Foras666/kinwall/commit/542eac181d0fd25196d26e3d292dbff5e71c7cdc))
* **auth:** never let a paired device belong to a grown-up ([1ec6d86](https://github.com/sudo-Foras666/kinwall/commit/1ec6d865cbcfaf524066196b89cc49768531893b))
* **auth:** never take a sign-in key from a URL ([657a334](https://github.com/sudo-Foras666/kinwall/commit/657a334ce5bca75be4977a83ffe0783cd4babccc))
* **auth:** point to a new tab when a passkey can't be made in a panel ([5081d60](https://github.com/sudo-Foras666/kinwall/commit/5081d60dc28558ad8946b73ebd8287c4a4159e15))
* **auth:** require a way back in when setting up a family ([7050f4d](https://github.com/sudo-Foras666/kinwall/commit/7050f4db07685ccd1ba2636548274ad6c3ec6309))
* **auth:** stop connected apps managing sign-ins or posing as the app ([34c8fbb](https://github.com/sudo-Foras666/kinwall/commit/34c8fbb9d0d8f402136c440d1da5328d1cac034c))
* **board:** count only groceries lists on the groceries tile ([b54d8d0](https://github.com/sudo-Foras666/kinwall/commit/b54d8d0c5bef2566ad67d3170d9dbf9b1b4ce513))
* **board:** count only the shown person's chores on the board ([4cf9b7e](https://github.com/sudo-Foras666/kinwall/commit/4cf9b7ed958372135f90102759177b8ce91afc0d))
* **board:** filter due soon and reward requests to the person shown ([3ba646d](https://github.com/sudo-Foras666/kinwall/commit/3ba646d4f6c39d716bb71868e05b873c98950e27))
* **board:** filter goals to the picked person, and keep grown-ups' goals off kids' devices ([dc73a13](https://github.com/sudo-Foras666/kinwall/commit/dc73a13c07d95550ba8126b9bfb96e68058929d9))
* **board:** fit the rail and scroll the board on a short landscape tablet ([d90b882](https://github.com/sudo-Foras666/kinwall/commit/d90b882ec8159b5af1a374a3517cc24bebfb4c30))
* **board:** give the count tiles room on tablets instead of cutting them off ([10c57c6](https://github.com/sudo-Foras666/kinwall/commit/10c57c685739137b7afc1725928addecc6f01a7e))
* **board:** keep a trivia card's answers on the card, never behind +N more ([014fdf2](https://github.com/sudo-Foras666/kinwall/commit/014fdf215c4be0f4962e63472c5160e385c12171))
* **board:** list today's meals by time, not by slot ([1c44e65](https://github.com/sudo-Foras666/kinwall/commit/1c44e6503947ae3ee0f8296065e454d318a86990))
* **brand:** make the logo fill the favicon ([d14e5b4](https://github.com/sudo-Foras666/kinwall/commit/d14e5b4875d2068d44f206aa8033ed499df337c6))
* **brand:** match the web app's home-screen icon to the iPhone app's ([5d24cdf](https://github.com/sudo-Foras666/kinwall/commit/5d24cdf33f9d6811fb2078664f0bf89fdaebc547))
* **calendar:** ask Google for the calendar list scope instead of calendar.readonly ([791b89a](https://github.com/sudo-Foras666/kinwall/commit/791b89a19d7a8e33ee43ae8e10420a57970652dd))
* **calendar:** keep the tablet header's buttons on screen at 768px ([7aee3b8](https://github.com/sudo-Foras666/kinwall/commit/7aee3b899455a8ff62cf3b25c1557256007db85e))
* **calendar:** line up the time grid on a phone on its side ([b969d33](https://github.com/sudo-Foras666/kinwall/commit/b969d33c638ffb19c54df59c54076d54f350d6b7))
* **calendar:** make event categories read-only on displays ([7d0d201](https://github.com/sudo-Foras666/kinwall/commit/7d0d20143b2c58a2d4812160e21c21c6270f7423))
* **calendar:** no visible "Free ·" before a free event's title; the stripes show it ([341a306](https://github.com/sudo-Foras666/kinwall/commit/341a306d73ef7a0f14f610bcd73ac4144e518df9))
* **calendar:** refuse a repeat that never happens ([9ba671c](https://github.com/sudo-Foras666/kinwall/commit/9ba671c05463f7c41fcd4f8b94e2be821b063f69))
* **calendar:** refuse events that break or flood reads, hide hidden events by id ([012d43d](https://github.com/sudo-Foras666/kinwall/commit/012d43df033235cb8ac5a5063157b42332761c72))
* **chores:** ask before a link ticks a chore off ([1ad5879](https://github.com/sudo-Foras666/kinwall/commit/1ad587903a297cc62fb32003644c820aa312677e))
* **chores:** count a completion only for a day the chore is due ([082edea](https://github.com/sudo-Foras666/kinwall/commit/082edea3e3704a4c7b77b0d470a5effd2bb94899))
* **chores:** keep the day on screen while it refreshes, so closing a sheet doesn't jump the columns ([438a7ca](https://github.com/sudo-Foras666/kinwall/commit/438a7caf1f96c375554249c81dfdeeb0ca496db8))
* **chores:** show no leaderboard rank before someone has points ([6ecdc74](https://github.com/sudo-Foras666/kinwall/commit/6ecdc7427f46966cd4e38bedc0a83bf4fefbfe2b))
* **contacts:** read phone vCards fully and lay out the import review ([02bd93c](https://github.com/sudo-Foras666/kinwall/commit/02bd93c8e9b82b8ae742af35a25aad1adec15edf))
* **contacts:** use the real vCard parser for the demo's import preview ([c3646fd](https://github.com/sudo-Foras666/kinwall/commit/c3646fdd742d1a90c935e9f76e0a45bbc6fdf69e))
* **header:** hide the phone family name instead of cutting it when offline ([0a76a83](https://github.com/sudo-Foras666/kinwall/commit/0a76a83f994483e9dbfe2ccbddf2c104311f12dd))
* **journal:** keep the trail around a private journal from being erased ([01a61f4](https://github.com/sudo-Foras666/kinwall/commit/01a61f451dc2e751ad0ae6eb6f1ac098705f9dda))
* **journal:** only a grown-up can mark themselves a kid once they have something private ([b9ab44b](https://github.com/sudo-Foras666/kinwall/commit/b9ab44bc311b734251fa3f2aad51e028ae6b12e7))
* **journal:** use grown-up wording on a grown-up's private journal ([1d98db3](https://github.com/sudo-Foras666/kinwall/commit/1d98db343e02227b2341c40e2ca8a1e4b0fe5489))
* **lists:** fill the height beside the rail and scroll a list as one on short tablets ([06b1d8a](https://github.com/sudo-Foras666/kinwall/commit/06b1d8afa2ad97ced6cbc4a1d406443f87c6d665))
* **lists:** give the catalog edit sheet's stats and forget button room ([3b28cab](https://github.com/sudo-Foras666/kinwall/commit/3b28cab5505db90b9a04532bf82ad9343d5032b0))
* **lists:** ignore a lost pointer when a swipe or drag starts ([7fad40e](https://github.com/sudo-Foras666/kinwall/commit/7fad40eecf5bf52e1530f972949745daaee9128f))
* **lists:** keep a kid's device from reopening others' items on add ([b9f9150](https://github.com/sudo-Foras666/kinwall/commit/b9f9150299947a9ff2abb92d0cf2f7b1b365c63d))
* **lists:** keep checklist rows from peeking above the sheet's add bar ([417a36e](https://github.com/sudo-Foras666/kinwall/commit/417a36ed25cc07122fdb039653397269cd635d35))
* **lists:** keep list settings, delete and order on parent devices ([3b9dd93](https://github.com/sudo-Foras666/kinwall/commit/3b9dd936241fcf0b92a5e4ddf4d2444a60376e99))
* **lists:** lift the undo toast above the phone's checkout bar ([1828227](https://github.com/sudo-Foras666/kinwall/commit/18282272199e81ae00cdbaffc25d4b71c97d4ecc))
* **lists:** one round trip for list counts, and imports without overdueCount ([20659de](https://github.com/sudo-Foras666/kinwall/commit/20659de794890ff95772f5aa8bee9c6f4e183679))
* **lists:** only parents rename or remove a catalog category everywhere ([dd5121b](https://github.com/sudo-Foras666/kinwall/commit/dd5121b74c963949e80182c9942ce6674fb53247))
* **lists:** refuse bad checkout bodies, item impersonation and oversized requests ([47fc607](https://github.com/sudo-Foras666/kinwall/commit/47fc607a2050e251e593cda64ab92ac869d7c2cb))
* **lists:** show the drag grip only in manual sort ([1516ce3](https://github.com/sudo-Foras666/kinwall/commit/1516ce37ee54e6183ff33885c8d7f250a6c96393))
* **lists:** spell check and autocorrect list items again ([772e36d](https://github.com/sudo-Foras666/kinwall/commit/772e36d2f47802da2e1398dcf3e2b516edc8665f))
* **lists:** spell gray the US way in the demo's couch note ([f4f914f](https://github.com/sudo-Foras666/kinwall/commit/f4f914f03c1450759ef8703dc6bc190dec78ee56))
* **lists:** stop open lists from panning sideways on touch ([4b1976a](https://github.com/sudo-Foras666/kinwall/commit/4b1976a7007b0bed68170a2feada9885aa83472b))
* **lists:** untick a reopened item's steps on a skipExisting add ([c521f49](https://github.com/sudo-Foras666/kinwall/commit/c521f493bbf60a7bba97114786a48b3d5194ce60))
* **mcp:** answer GET with 405 instead of an SSE stream that never closes ([e8552e2](https://github.com/sudo-Foras666/kinwall/commit/e8552e2236403b177684105bf7198c7ba8273e3a))
* **mcp:** let output schemas accept fields added later ([af9279e](https://github.com/sudo-Foras666/kinwall/commit/af9279e467c77e912c2ac956322e163990063583))
* **medications:** seal medicine reminders in the notification feed ([a367293](https://github.com/sudo-Foras666/kinwall/commit/a367293bfbcb100fe199828370fd154e7e099ae7))
* **meds:** collapse each person's medicines on the Health tab ([bbc6de7](https://github.com/sudo-Foras666/kinwall/commit/bbc6de75622f24eb8e4d140d545cc97fc863a589))
* **notes:** keep a kid's device to its own notes ([8514b7a](https://github.com/sudo-Foras666/kinwall/commit/8514b7aabf81891e4e24abbc4cae79fc86ae0add))
* **plugins:** download packages from GitHub's links, not its API ([bdf5776](https://github.com/sudo-Foras666/kinwall/commit/bdf5776daf7ed87bb61fed43db358d2dc478cb3f))
* **plugins:** unlock speech on Kinwall's first tap so Safari can speak for plugins ([51fd012](https://github.com/sudo-Foras666/kinwall/commit/51fd01244d5142975932f56df56d69db54db3c3c))
* **recipes:** harden and tidy the shared recipe page ([764768c](https://github.com/sudo-Foras666/kinwall/commit/764768c3b455611eb8cbab1da1311c69f9094ef4))
* **rewards:** keep a kid's device to its own requests, ledger and saves ([a879a17](https://github.com/sudo-Foras666/kinwall/commit/a879a17995815a6accf3df6d165dab6f5e20dab6))
* **rewards:** keep a kid's device to its own sticker book ([da88214](https://github.com/sudo-Foras666/kinwall/commit/da88214bdffa16de0eb7342d825d83304e9163e0))
* **rewards:** keep declined requests and their notes off shared wall screens ([35fc83c](https://github.com/sudo-Foras666/kinwall/commit/35fc83ca175b90243d832ba65e1af78ca3ef2e62))
* **server:** answer unexpected failures with a plain message, not internals ([55808d1](https://github.com/sudo-Foras666/kinwall/commit/55808d18a4d5f3c02cb08bafe5afc9d899eefd1a))
* **server:** check the address an outbound fetch connects to, not only its name ([8ffaccb](https://github.com/sudo-Foras666/kinwall/commit/8ffaccb9dd9ca767ee6904cc6a2e066d2d677cff))
* **server:** keep a kid's device to its own activity progress ([7ab6dea](https://github.com/sudo-Foras666/kinwall/commit/7ab6deacc69c3a2074b4a3f50f7b7a7021d311af))
* **server:** keep one failing part of the scheduled tick from failing the rest ([fb0bf72](https://github.com/sudo-Foras666/kinwall/commit/fb0bf725eb25f29e3b604b67f2dc214944005c45))
* **server:** keep other people's notifications off kids' devices ([aa79d11](https://github.com/sudo-Foras666/kinwall/commit/aa79d11dd2536ce42494ceefc70bcf249814713c))
* **server:** let the person a privacy note is about dismiss it ([490594b](https://github.com/sudo-Foras666/kinwall/commit/490594b02fe7b5b9fc7018c64db1447f795ad638))
* **server:** only send web push to the browsers' push services ([80d2de0](https://github.com/sudo-Foras666/kinwall/commit/80d2de0c3d915bbe17d2753dc0eb30717f2984cb))
* **server:** pass GOOGLE_PHOTOS_ENABLED through on Node and Docker ([dca7819](https://github.com/sudo-Foras666/kinwall/commit/dca781996e9e173c823671f09c8352afe5d8c523))
* **server:** take the caller's address from the connection, not a header ([480c40f](https://github.com/sudo-Foras666/kinwall/commit/480c40f0a2096cae5f92f770437de2c143ee1953))
* **settings:** call it the Night PIN in security activity and the API docs ([bd3a0b4](https://github.com/sudo-Foras666/kinwall/commit/bd3a0b4a5d183e157fe0120b435f8269a8072adf))
* **settings:** call the preview button Preview Night screen ([b44cb8b](https://github.com/sudo-Foras666/kinwall/commit/b44cb8b7a89b56b369fe1b68fd351e3668a30a52))
* **settings:** keep accent text readable after switching to dark ([2b72bc3](https://github.com/sudo-Foras666/kinwall/commit/2b72bc30e2042614ee424eff64701c76766d2612))
* **settings:** limit night PIN guesses per device as well as per family ([71699a1](https://github.com/sudo-Foras666/kinwall/commit/71699a1d03f35e53a430e46fdad9bd0add88a618))
* **settings:** no edit switch on read-only calendars, say they are read-only ([26947d2](https://github.com/sudo-Foras666/kinwall/commit/26947d245c73ed5dfae7f0d3b3fb27b18681995c))
* **settings:** nudge for a second way in only when there's just one ([b6a5158](https://github.com/sudo-Foras666/kinwall/commit/b6a5158d4ef1a1f38cbe77d11c954f6d90b18628))
* **settings:** only fold general's cards that hold more than one control ([d05b4d0](https://github.com/sudo-Foras666/kinwall/commit/d05b4d08775e7854dde1da08e7b442d7164eac21))
* **settings:** put the transition warnings description under its heading, not under Sound ([41d7ba1](https://github.com/sudo-Foras666/kinwall/commit/41d7ba1030d2210367d5f7c2cff48f2826f9fcfa))
* **settings:** show a kid's device follows only them for notifications ([c43ba27](https://github.com/sudo-Foras666/kinwall/commit/c43ba27649c10e097ea376bc109c90041d9e4ebe))
* **settings:** show Google refusing the Photos device after a TV sign-in ([f5d3788](https://github.com/sudo-Foras666/kinwall/commit/f5d37889149e9647817fb17da63803d70c6c5dc9))
* **setup:** keep pasted setup codes with a space intact ([e38af73](https://github.com/sudo-Foras666/kinwall/commit/e38af73354bef580dc686e13f3cce621cc2326b0))
* **setup:** mark grown-ups and finish setup cleanly on every device ([15608d5](https://github.com/sudo-Foras666/kinwall/commit/15608d5f1ca56bb4ad85664a99474c2100f013d4))
* **snapshot:** answer empty chores and list items while they're off ([218215b](https://github.com/sudo-Foras666/kinwall/commit/218215b8f8c8c80ae66bbdfdbac16c9796f81a54))
* **sync:** keep all-day events dated on the last day of a slice ([5ccc295](https://github.com/sudo-Foras666/kinwall/commit/5ccc2959a5590527ed181b458b98326ed5c97a0a))
* **sync:** keep background syncs that change nothing silent ([804d935](https://github.com/sudo-Foras666/kinwall/commit/804d93575582020350e80c7252687b6d187e550e))
* **sync:** keep END:VCALENDAR when the ICS prefilter drops the last event ([07366db](https://github.com/sudo-Foras666/kinwall/commit/07366dbaddebf7221b138cbf607272a3eea42951))
* **trackers:** adding a book by ISBN finds its ISBN-less twin ([e3e690c](https://github.com/sudo-Foras666/kinwall/commit/e3e690c04c23e0fe99f938b78a4197f7f9a9c4dd))
* **trackers:** fit the library header on one row on phones ([9db91b5](https://github.com/sudo-Foras666/kinwall/commit/9db91b5580c0efe3d9f119aa646825e2dfc3d109))
* **trackers:** let a kid's device change and delete only its own entries ([18a5662](https://github.com/sudo-Foras666/kinwall/commit/18a56623405cef1c8ad7db7765bd8f3e7ba5ba36))
* **trackers:** link what someone's already reading instead of adding a copy ([cabe3ef](https://github.com/sudo-Foras666/kinwall/commit/cabe3ef751bccfbbeff78d8c1713d5dcbd6ca7a0))
* **trackers:** name the Pick buttons after what they show ([b626e6b](https://github.com/sudo-Foras666/kinwall/commit/b626e6b4910b2afbe2be517c5656c74a1638b801))
* **trackers:** put Covers first in the library's view switch ([c1ddeb8](https://github.com/sudo-Foras666/kinwall/commit/c1ddeb8b3fd9c7aa255e428f32a8919624decc8e))
* **trackers:** put the Books heading inside its bookcase ([fcb26bb](https://github.com/sudo-Foras666/kinwall/commit/fcb26bba0d35467b8e39f6378073bc5579a14be7))
* **trackers:** put the library search beside the tabs on tablets ([c88ead4](https://github.com/sudo-Foras666/kinwall/commit/c88ead4650bccf65ff7ed698cb3bb30ff6bface5))
* **trackers:** put the library search beside the view picker on phones ([19f2bde](https://github.com/sudo-Foras666/kinwall/commit/19f2bde90cce5696d8cb1fa6af40fc99e54a1758))
* **trackers:** say why a book lookup failed ([2684ad3](https://github.com/sudo-Foras666/kinwall/commit/2684ad329421c63f0909cf3b515f21cb928ed8eb))
* **trackers:** scan one book per tap instead of reopening the camera ([b3745fe](https://github.com/sudo-Foras666/kinwall/commit/b3745fe182dfdb81c16a3798fda61ec9e7158214))
* **trackers:** show books the same way in Reading and the library ([bc85e24](https://github.com/sudo-Foras666/kinwall/commit/bc85e2448f79fc1a76de932c1a64067f6f54b4ff))
* **trackers:** want to read isn't the wishlist, and the library filters reach the server ([ddea412](https://github.com/sudo-Foras666/kinwall/commit/ddea412e0e63bde53d603bae86483e6b751fa536))
* **trackers:** wrap the library search under the tabs when it won't fit ([acae167](https://github.com/sudo-Foras666/kinwall/commit/acae167a6dbc7e3af2c2fff7561cc671f3a8a74a))
* **web:** a Try again button when the board or events fail to load ([e127fc7](https://github.com/sudo-Foras666/kinwall/commit/e127fc7a60ecae3224c0e5007bc5a961af18ed80))
* **web:** a two-hour window for the demo's grocery delivery ([37833cf](https://github.com/sudo-Foras666/kinwall/commit/37833cff3362673095c7e149f8d2e4757a4c8db8))
* **web:** clear the status-bar fade in Shopping, Cooking and Get stuff done ([900588f](https://github.com/sudo-Foras666/kinwall/commit/900588f635a09c509dd32f35e2767eb67f239c39))
* **web:** don't pad for Android's system bars twice in the app ([0203e81](https://github.com/sudo-Foras666/kinwall/commit/0203e81c78c85ce3b2461c6a9a63ee20632b86e2))
* **web:** draw the demo's Paint pictures like a kid would ([a702a6a](https://github.com/sudo-Foras666/kinwall/commit/a702a6a8ebe72111a7f18c4db03cc9ec094a0c85))
* **web:** expire setup's passkey handoff so it can't reopen the wizard later ([7d01885](https://github.com/sudo-Foras666/kinwall/commit/7d018857d89936a46925cb6b3c7fd9a85cf824ce))
* **web:** fit the board, calendar toolbar and meal planner on mid-size tablets ([0bbdc93](https://github.com/sudo-Foras666/kinwall/commit/0bbdc9325ca7394170cfeccafdfb0f8b3ae41083))
* **web:** fit the rail, header and list on a phone on its side ([b007b48](https://github.com/sudo-Foras666/kinwall/commit/b007b48468cab5dff6f249bb907bbd79fa3f17b3))
* **web:** give an activity the room above the on-screen keyboard ([8865a87](https://github.com/sudo-Foras666/kinwall/commit/8865a87339dc25e176554022cc51f8aa318dbc84))
* **web:** give setup wizard buttons the shared pointer and hover ([fbe77ed](https://github.com/sudo-Foras666/kinwall/commit/fbe77ed8f4d9370c66a283bafcd03a28dbe7fc96))
* **web:** give short tablets and phones on their side the height back ([b2f90e8](https://github.com/sudo-Foras666/kinwall/commit/b2f90e8c79721c081d140baf666fbfd453084a7a))
* **web:** give the header's people their own row on portrait tablets ([c765f3f](https://github.com/sudo-Foras666/kinwall/commit/c765f3fb1b942dfad3e8d24fa199e57ed14d1dc7))
* **web:** hide the side menu too while typing in an activity ([d7fea94](https://github.com/sudo-Foras666/kinwall/commit/d7fea947428d6364c2b3d9881f0e5e40c40c5147))
* **web:** hold the device's audio only while kinwall makes a sound ([3ecd10a](https://github.com/sudo-Foras666/kinwall/commit/3ecd10adfb71c7174958a422f01e4fe6df089c0b))
* **web:** keep an activity's title readable when its chore is done ([0ee9e91](https://github.com/sudo-Foras666/kinwall/commit/0ee9e9140b079490964a25c6d696d971e0352282))
* **web:** keep i18n.ts free of packages so the server's checks pass ([ff623eb](https://github.com/sudo-Foras666/kinwall/commit/ff623eb8fc53c5be8c6759d9f070dce83c9f6737))
* **web:** keep i18n.ts free of packages so the server's checks pass ([d1826d6](https://github.com/sudo-Foras666/kinwall/commit/d1826d6c7292c182c293ae5a57a02e75af67446e))
* **web:** keep nav badges inside a narrow rail ([6f97079](https://github.com/sudo-Foras666/kinwall/commit/6f97079b60efc3bbebc65d33cf9e5b368d8a8792))
* **web:** keep the field and its save button above the on-screen keyboard ([e7db08d](https://github.com/sudo-Foras666/kinwall/commit/e7db08d6a36d8165300cb5d4195719313e407ff4))
* **web:** keep the logo still from the app's splash to the loading screen ([21d40de](https://github.com/sudo-Foras666/kinwall/commit/21d40de9927340a75f4814cf5088860ac36f1f13))
* **web:** light mode tells the browser it's light, so scrollbars show on a light page ([b053ae2](https://github.com/sudo-Foras666/kinwall/commit/b053ae22c255c4086b8d4bc5a2dbdcb01a7e7185))
* **web:** never leave the page blank when the app fails to start ([3d2fd9a](https://github.com/sudo-Foras666/kinwall/commit/3d2fd9ade7c76ab5a93eb2e238a726cbb39c09f0))
* **web:** no brand name on the demo's sample delivery ([7bc04d8](https://github.com/sudo-Foras666/kinwall/commit/7bc04d802976b9945309131042640bb93e8f5071))
* **web:** offer to remove only the notes this device may remove ([14d832a](https://github.com/sudo-Foras666/kinwall/commit/14d832a140290b6a047f5d1fd91fb14dd5b46a30))
* **web:** paint the app's status bar black under the Night screen ([da4fa06](https://github.com/sudo-Foras666/kinwall/commit/da4fa06900f89fa867f75ed6f25a5e122a3b9e03))
* **web:** put Send a message in one row with Mark all read and Clear all ([a1616fb](https://github.com/sudo-Foras666/kinwall/commit/a1616fbe07e7b37b9c601568d0cd0dca1617e154))
* **web:** remember the color scheme across a refresh, and light up Now/Next inside the first time cue ([fb254e2](https://github.com/sudo-Foras666/kinwall/commit/fb254e20c7b689e99d057d7c4b73bb1e86764d94))
* **web:** replace a media token left over from before the v2 switch ([250c080](https://github.com/sudo-Foras666/kinwall/commit/250c0805d3ce9ee4ee4cd5bfa0ab4abf3c3a19f5))
* **web:** scroll sign-in and pairing cards on a short screen ([4f1b6c7](https://github.com/sudo-Foras666/kinwall/commit/4f1b6c706bc6701e8e44fa3a6f99228dbfa8e949))
* **web:** send first-time setup to the phone before the wall display ([c55fd33](https://github.com/sudo-Foras666/kinwall/commit/c55fd33f7e0bbf6f7fb87a138b19aba143232cde))
* **web:** shorten the any-emoji placeholder so it fits a phone ([a09378d](https://github.com/sudo-Foras666/kinwall/commit/a09378d417285135efad459efd507e25c9e8ef40))
* **web:** show scrollbars with a mouse, hide them only on touch screens ([cf69e31](https://github.com/sudo-Foras666/kinwall/commit/cf69e310e0c36f35450d5387ff62581a82af29a1))
* **web:** show UTC, not UTC+0, for zero offsets on newer browsers ([7b51bca](https://github.com/sudo-Foras666/kinwall/commit/7b51bca6f73b1e75d25ba319185b85a396c1ca84))
* **web:** start a new family without the last one's device settings ([bcb4432](https://github.com/sudo-Foras666/kinwall/commit/bcb4432befa7642a892b9b67cef129a72d29c29b))
* **web:** stop a tab and the installed app rewriting the saved look back and forth ([ba82f36](https://github.com/sudo-Foras666/kinwall/commit/ba82f36cbea955426d7a4bfc40a161297c4c5541))
* **web:** stop answering a plugin frame once it navigates away ([190cea0](https://github.com/sudo-Foras666/kinwall/commit/190cea00ddc8aa88d6c812064ad7aa9f41a8bd2e))
* **web:** stop the saved pill sticking after setup ([b491b6f](https://github.com/sudo-Foras666/kinwall/commit/b491b6f0ac997deb8bce459f32758f605d116ce3))
* **web:** stop the update banner showing for good inside Home Assistant ([5ac187e](https://github.com/sudo-Foras666/kinwall/commit/5ac187e3777c95c0f2e9bea84be8333c7fbf19ca))
* **web:** use the phone header on portrait tablets ([f790247](https://github.com/sudo-Foras666/kinwall/commit/f79024784437f7eb321daeac44bc02e0b71c0291))
* **web:** wrap long timer names instead of pushing the clock off screen ([c74a497](https://github.com/sudo-Foras666/kinwall/commit/c74a497cdd67cffa9a28df9d9da3298dffd921ec))


### Faster

* **chores:** read chore points and pending approvals through indexes ([86d3230](https://github.com/sudo-Foras666/kinwall/commit/86d3230e726b18d4ec0a723bb607ba7ba15fe0b3))
* **events:** read events by window instead of the whole table ([c39cbf0](https://github.com/sudo-Foras666/kinwall/commit/c39cbf095c16299ec954a1d8f1c72b3508298f1c))
* **lists:** read only what list detail, lists and the board need ([4a3444d](https://github.com/sudo-Foras666/kinwall/commit/4a3444d30e40dd687404cc13586c4062636b8ecf))
* **medications:** read only the settings a dose check needs ([4e163e8](https://github.com/sudo-Foras666/kinwall/commit/4e163e8324ea20de30eed3dddc06d6bb662d9079))
* **medications:** share one due-doses request and ask on the minute ([e973311](https://github.com/sudo-Foras666/kinwall/commit/e97331165633e22a9addda3e1e8029069662aa9e))
* **server:** gzip the web app on Node and Docker ([27e26c5](https://github.com/sudo-Foras666/kinwall/commit/27e26c5d40df6626c4a9fc2bec92772c1d019392))
* **server:** index sent_notifications by time for the tick's prune ([7d64be3](https://github.com/sudo-Foras666/kinwall/commit/7d64be300a3cfa56d1db3df1e90471ed2260bcde))
* **server:** reuse one date formatter per timezone ([e4ed607](https://github.com/sudo-Foras666/kinwall/commit/e4ed60763969503eda521d4285987ea0ea297236))
* **server:** synchronous NORMAL and a busy timeout for SQLite on Node ([14fdf2b](https://github.com/sudo-Foras666/kinwall/commit/14fdf2b2e06c3489b5323e4e157e1601c9c0d3ba))
* **sync:** read a slice's stored events by index ([7e20b20](https://github.com/sudo-Foras666/kinwall/commit/7e20b208d3c9a180b01ff1b21e56b1fd4089a57c))
* **web:** refetch only what changed, and don't poll from hidden tabs ([b8123e2](https://github.com/sudo-Foras666/kinwall/commit/b8123e240a485ae4dd5971fbc9a0ee2fd37b3324))


### Reverted

* hold the 1.1.0 release prep until the new logo and default scheme ([53f93cb](https://github.com/sudo-Foras666/kinwall/commit/53f93cb9c1ff161109e8c9585c641ae584e917c6))

## [1.1.0](https://github.com/JohnDuprey/kinwall/compare/v1.0.3...v1.1.0) (2026-10-02)

A big one: a Board view for the wall, meal planning and recipes, groceries that follow the store,
rewards, medications, daily check-ins, private journals, a family library, Newscast, Night, a new
logo and a lot more. Kids' devices and wall screens can change less than before. Self-hosting?
Read [Upgrading](#upgrading) first.

### Board

* A new **Board** view, now the default: the family's day at a glance with the clock, weather,
  today, coming up, due soon, chores, a rotating picture and a quote or fact.
* **Layouts per screen**: each screen uses the family's arrangement, a built-in layout (Kids,
  Kitchen, Parents, Simple), a family preset or its own. Place cards in one to four columns by
  drag and drop, with a height and text size for each card. Parents save family presets.
* The quote card can show fun facts, "On this day", trivia you tap to answer, or practical tips
  for routines, focus and feelings. Pick the sources in Settings → Quotes & facts, or give a
  screen **up to three cards** of its own, each with its own sources.
* **Count tiles** for chores, due soon, groceries, shopping and reward requests on smaller
  screens, with full cards on big ones. Each display picks Counts, Full lists or Auto, and tiles
  fill the grid without gaps.
* On a kid's device or a screen showing one person, chores, goals, due soon and reward requests
  count only that person (plus the family's unassigned ones).
* A **Take now** tile for medicines that are due.
* On a phone, **today's weather sits beside the time** on the clock card (temperature, condition,
  high and low, rain), so the card is about a fifth shorter. Narrow cards and big text keep the
  stacked layout.
* A **Finish setting up Kinwall** card on a parent's phone or computer lists only what's missing
  (a calendar, a wall screen, more people, a second way in), each linking to the right spot in
  Settings. Not now hides it for 30 days.
* Library books due back show on their day, and overdue ones stay on today.
* Tap a meal to open it right on the Board instead of jumping to Meals.
* On a wall screen the Board fits the screen, with "+3 more" for the rest.
* Pictures show whole, never cropped.

### Night

* **Quiet hours are now Night**: one family schedule, the night hours, with two effects you can
  turn off on their own: **wall screens rest** on the Night screen and **reminders wait** until
  morning. Families that had quiet hours keep both on, so nothing changes.
* What wall screens show at night, the **PIN to wake** and the moon button all live in the Night
  card under Settings → General → For the whole family. Each screen follows the family's choice
  unless it picks its own.
* Dark mode can follow the same schedule (**Dark hours: Same as night**) under Appearance.
* Tap the screen to wake it; it goes back to the Night screen after five minutes.
* Start and end the Night screen on wall screens from Home Assistant, for example when nobody's
  home.

### Medications

* **Medicine reminders**: a medicine's name, dose and times for each person. Their own devices
  get a reminder, and a **Take now** card offers Taken, Skip and Snooze.
* **Courses** that end on a date or after a number of doses, for things like antibiotics.
* Medicines live in **Trackers → Health**, added from parent devices.
* A different cheer each time you tap Taken (one calm line in low-stimulation mode).
* Each medicine says **how late it can be taken**. A long late window gets one kind follow-up,
  and a dose taken late asks **"When did you take it?"**
* **"When I start my day"** doses, reminded when the person starts their day instead of at a
  set time.
* **Catch up** on doses nobody marked from the person's page.
* Parents hear about a kid's missed dose once the late window has passed, and medicine
  reminders come through at night too.
* The Health tab can switch **whose health** it shows, and each person's medicines fold up to a
  name and a count until tapped.

### Check-ins and journals

* **Temp check**: a few quick questions at the end of a person's day: how they slept, how they
  feel and a goal for today, which shows on the Board.
* **Check-in points**: reading your day to the end and tapping "I'm all caught up" can earn
  points (Settings → Family, off by default, and only while Chores & points is on).
* An evening **goal check** ("Did you finish your goal?") with optional notes, and a personal
  **journal**.
* **Private journals**: a grown-up's journal is private by default, including what they already
  wrote, and opens only on their own devices. A parent can let a kid keep a private journal too.
  Everyone else, parents included, sees the mood and that an entry exists, so Insights and the
  battery keep working.
* Last night's check-in **stays open until the next morning** (noon, the morning Temp check or a
  skip), with one gentle reminder in the morning.
* A **drained check-in** ("How drained do you feel?") when the energy battery is on.
* A **Check-ins & journal** switch in Settings → Features turns off Temp check, goal checks, the
  energy battery, journals and Insights for the whole family (on by default; nothing is deleted).

### Insights and the energy battery

* **Insights** for each person: sleep, feelings, goals, chores and busy days as charts, with
  plain summaries and, after three weeks of check-ins, the connections that show up.
* The **Energy battery**: a rough daily energy level from sleep, feelings, events, chores and
  goals, with a heads-up the evening before a day that looks heavy. It learns from drained
  check-ins.

### Recipes and meals

* **Meal planning**: plan the week's meals, see who's eating, and add the ingredients to your
  Groceries list. Thanks to [@OwenIbarra](https://github.com/OwenIbarra) for contributing it.
* On phones the planner opens on **today**, with a Day/Week switch. **Swap** sits right under the
  meal's name.
* Put meals on **any calendar** at your usual meal times; the event follows the meal.
* **Import recipes** from any website link, pasted text or a meal kit, with step photos,
  bullets and timers kept. When a link would update a recipe you already have, Kinwall says
  which one and offers Save as a new recipe.
* **Cooking mode**: full screen, one step at a time, with the step's photo, its ingredients and
  its own named timers you can pause, resume and reset. The screen stays on while a recipe is
  open.
* **Ratings**: everyone can give a recipe 1 to 5 stars, with a Top rated sort.
* **Share links** for a recipe, with a link preview. A link shared from one Kinwall imports into
  another with nothing lost.
* **Basics** like a spice blend, sauce or dough that other recipes link to. When you add
  groceries, Kinwall asks if they're made already.
* Choose a meal's recipe from a **searchable picker**, and **swap** a planned meal with another
  one later in the week.

### Timers

* **Quick timers from the header** for homework, chores or anything else, shared with cooking
  mode. Timers keep running when you close a sheet, leave cooking mode or reload, and ring over
  everything, the Night screen included.

### Lists and groceries

* Shopping lists are now **Groceries** or **Shopping**, each with its own remembered items, so
  hardware-store things stop showing up on the grocery list. Existing lists are sorted into one
  or the other by name.
* A **catalog** of remembered items: browse and search them, fix a name, set the department and
  the aisle at each store, tag them with your own **categories** (Breakfast, Lunchbox,
  Cleaning…) and filter, sort or group by them.
* Grocery items remember their **store, aisle and department**, sort in aisle order, and stay
  crossed off in place until **Checkout** (with undo).
* **Shopping mode**: one store's trip, full screen, in walking order, grouped by aisle. Walk the
  aisles **in reverse** when you come in the other door. At a store that sells both, the trip
  shows your Groceries and Shopping items together.
* **Scan products** onto a list with the Kinwall app's camera. A product the family added before
  goes straight on under the family's name for it. Anything new is looked up in
  [Open Food Facts](https://world.openfoodfacts.org), then its sister databases
  [Open Products Facts](https://world.openproductsfacts.org),
  [Open Beauty Facts](https://world.openbeautyfacts.org) and
  [Open Pet Food Facts](https://world.openpetfoodfacts.org), so household, beauty and pet items
  are found too. A sheet shows the name (brand first) to check, starts it on Groceries or Shopping
  by what it is, and can save the barcode to the catalog. Only the barcode is sent, by the server.
* In Shopping mode, **scan to check items off** (or add them already checked off), and Kinwall asks
  which aisle it was in when it doesn't know yet. Wall screens scan with the front camera.
* A **default list** for each type: scans, meal ingredients, the Kinwall app's widgets and Siri,
  and connected assistants use it.
* **Move** an item to another list of the same type.
* See **who added and who checked off** an item, and when a reusable list was last done.
* **Swipe an item left** to delete it on a parent's device, with Undo.
* Each list's card shows how many items are **overdue**.
* A to-do's priority shows as a labeled badge.
* **Autocomplete** when adding shopping items.
* The Lists page groups lists into **Shopping, To-dos and Reusable** sections, and parents can
  **reorder** them.
* An item's notes get more room to read.
* **Offline**: the app opens without a connection, and list and chore changes sync when it's
  back.

### Chores and rewards

* **Chore library** for occasional jobs that don't fit a schedule (clean out the car, wash the
  windows): save them once, then hand one out from Chores → Library in a few taps (who, then Today,
  Tomorrow, This weekend or a date). An optional "about every N weeks" shows when it was last done
  and floats due-ish jobs to the top. New families start with eight common ones. Parent devices
  only. MCP `list_chore_library` and `assign_chore_from_library`.
* **Rewards** that kids spend chore points on, with limits, goals on the Board and parent
  approval. A kid can **cancel their own request** while it's still waiting, and gets the points
  back, and a quiet **Stop saving** button sits under the goal.
* Optional **parent approval** for chores: a tick waits for a parent's OK before it earns points.
* **Chore checklists**: link a list to a chore, and it's done once every item is ticked.
* **Activity chores** like "5 min of Sight words", done by playing.
* Ticking an Anyone chore asks who did it, so the right person gets the points.
* Chores can be ticked off from a person's day.
* A **Rewards** switch in Settings → Family → Chores (`rewardsEnabled`, on by default), for
  families who'd rather spend points only on stickers.

### Profiles and family

* A **profile** for each person: chores and points over time, streaks, their bookshelf, badges,
  sticker book and a birthday countdown when it's close.
* Kids can **pick their own avatar** on their own device.
* **Grown-ups**: mark a member as a grown-up, and their chores never wait for an OK. First-time
  setup asks Grown-up or Kid for each person.
* **Transition reminders** for each person before their events, with warning times you pick
  and repeat, and friendly headlines that change from day to day.
* **Start prep by**: a meal's event counts down to when to start cooking, not just when to leave.
* Tap the family name on a phone to filter to one person or open their day.

### Newscast

* A fourth Home tab: a 30-day digest built from chores, rewards given, photos and drawings, books,
  memories and birthdays, plus announcements (up to 280 characters, optional emoji and photo,
  everyone or grown-ups only) and 👏 ❤️ 🎉 reactions shown as faces. Wall screens ask who's
  reacting. Tap a photo or drawing to see it full size. Parents can take a post down or pause a
  kid's posting; anyone can opt out of being featured. Off switch under Settings → Features. API `GET /api/newscast`, MCP `list_newscast`,
  webhook `newscast.posted`.

### Calendar

* The main screen is called **Home** in the navigation, and its views are Board | Calendar |
  Schedule: Calendar opens in place into Day, Week (3 Day on phones) and Month and remembers the
  last one per device. The phone view sheet has the same structure. `#/home` is an alias for
  `#/calendar`, which keeps working for links, notifications, widgets and Home Assistant.
* **Filter a calendar**: show only the events that match, or hide them, by keywords, all-day or
  timed, and category, with presets like "School: days off & half days".
* **Hide an event**, its whole series or every event like it, even on read-only calendars.
  Parents can show hidden events faded, and bring them back from Settings.
* **Free or busy**: events marked free (synced both ways with Google, Outlook, iCloud and
  CalDAV) are striped, sit behind busy ones, and don't count for Now / Next, leave-by,
  transition reminders or the energy battery.
* **Day view is one shared timeline**, like Week: events at the same time sit side by side with
  the faces of who they're for, and an event on two calendars shows once with everyone from both.
* **Notes on events**: write them under Location; they show labeled, with links you can tap. The
  event's comment thread is now called Discussion. Outlook events keep their full description
  instead of the first 255 characters, and editing one no longer cuts it down.
* On phones, tap a day in Month to open it in Day view, with Back to Month. The + button adds to
  the day on screen.
* **A calendar that stops syncing** shows a warning on Home on parent devices after two failed
  syncs in a row, with a link to fix it in Settings → Calendars.
* On phones, switch views from one button instead of five cramped tabs.
* Clocks change right on the minute, and a traveling phone or laptop can show **its own time
  zone** on the clock (chores, reminders and "today" stay on family time).
* Sync writes only the events that changed instead of rewriting them all.
* Signing in to a calendar account that fails now brings you back to Settings with a message.
* Google Calendar asks for narrower scopes: `calendar.events` and
  `calendar.calendarlist.readonly` replace `calendar.readonly`, which was only used to list
  calendars. Setup steps say which scopes to declare.

### Contacts

* A household **contacts directory** for people, services and places, with vCard import and a
  duplicate review. Thanks to [@OwenIbarra](https://github.com/OwenIbarra) for contributing it.
* Importing from a phone keeps every phone number, email, address, label, date and company, and
  the review shows everything before you save.
* **FaceTime** a contact from their sheet on Apple devices.
* Visibility levels that mean something: everyone, grown-ups only, chosen people or parents
  only.

### Trackers

* Track **reading**, **memories** and **health** visits for each person or the whole family.
* **Audiobooks** in the reading tracker, with listening time and a narrator.
* **Look up a book** in [Open Library](https://openlibrary.org) by the
  [Internet Archive](https://archive.org) to fill in the title, author, pages and cover, or scan
  its barcode with the Kinwall app. The server fetches covers, so screens never contact Open
  Library.
* A book keeps **pages read each day**, shown as the last 14 days in its sheet. A shelf shows
  what's being read and wanted, then the last three finished, with Show all.
* A **family library** of the books you own: scan them in one after another or search, with series,
  reading level and description. Say where each one lives, lend it to someone, track books
  **borrowed** from the town library or a friend with a due date (a heads-up two days before and on
  the day), and keep a **wishlist**. Read it starts a reading entry (or links the one someone
  already has), and Save to library works the other way.
* Trackers pick Reading, Library, Memories or Health from one view picker.

### Activities and photos

* **Family photos** for the Board, the Night screen and a Photos page. Save a Paint drawing to
  them.
* Add **activities made by others**, like Sight words and Math practice, from a list reviewed
  for Kinwall. They run sandboxed, away from your family's data.
* Paint has forty colors plus any color you pick, **brushes** (Marker, Crayon, Highlighter, Spray,
  Rainbow and Stamps), Fill, and a **coloring book** of ten pages plus your own, added on a
  parent's device from a picture or a PDF.

### Appearance

* A **new Kinwall logo** everywhere: the app icon, favicon and installed-app icons, the sign-in,
  setup, pairing and loading screens, and the foot of Settings, which now shows the version with
  links to help, the source code and open-source credits. The logo's colors follow your scheme.
* Loading screens show a small spinner and a bigger logo, and in the Kinwall app the logo holds
  still from the splash screen to the loading screen.
* **Color schemes**: eighteen built-in ones, including seasons, holidays and a Modern group led by
  Peacock, plus your own with a contrast check. Pick one for the whole family, or a different one
  on a device.
* **Peacock** 🦚 is the default for new families: deep peacock blue with a sky-blue accent, the
  logo's colors. Families who never picked a scheme keep the colors they have.
* The **Modern** schemes have more color.
* **Typefaces**: seven, including Hyperlegible (Atkinson Hyperlegible Next) and
  Dyslexia-friendly (Lexend), plus Modern, Playful, Storybook and Handwritten, for the whole
  family or per device, picked from a sheet of samples.
* Kinwall follows the device's **light or dark mode** by default.
* **12-hour or 24-hour** clock times, for the family or per device.
* **Easier for colorblind eyes**: a warning when two people's colors look alike, and charts,
  priorities and categories that don't rely on color alone.
* Settings → Features turns off what your family doesn't use, like Paint, Photos, Notes or
  Check-ins & journal (thanks to [@OwenIbarra](https://github.com/OwenIbarra) for these
  switches), and Rewards has its own. What's off also leaves the Board's layout editor, the Night
  screen and Newscast, and a chore's checklist goes with Lists.

### Devices and access

* Pairing asks **what the device is**: a wall screen or a kid's device. A wall screen turns on
  Use as a wall screen by itself. Grown-ups use their own phone's sign-in instead, and first-time
  setup asks whose phone it is.
* Settings → Access groups devices by kind, with each phone's widgets nested under it. Removing
  a phone signs its widgets out too.
* **Kids' devices change only their own things**: their own calendars, list items (or
  unassigned ones), notes, tracker entries, sticker book and activity progress. Adding to a list
  still works everywhere.
* **Wall screens and kids' devices can't** rename, archive, delete or reorder lists, change the
  family's event categories, edit the grocery catalog, add, edit or delete chores, or change
  family settings. They can still tick chores and items off.
* **Kids' devices get only their own notifications** and the family's, not messages or
  reminders meant for a grown-up.
* **First-time setup starts on a phone or computer**: on a wall screen it shows a QR code that
  opens setup there with the code filled in. Setup always leaves a way back in, a passkey or, where
  the browser can't make one, recovery codes.
* The Kinwall app for iPhone and Android (1.1.0) follows the family's feature switches in Siri,
  widgets and the Apple Watch, scans barcodes, and has the new logo and splash screen.
* A Help button in the same spot on every screen.
* Phones get a new header, a More tab when there are more than five screens, landscape support
  and an install prompt.
* Old iPads (iOS 12 to 16.3) get a compatibility build.

### Home Assistant and automations

* Automations can keep their own events in sync on a local calendar, like meal kit
  deliveries.
* A weekly meal kit blueprint imports your HelloFresh meals (through the
  [HelloFresh integration](https://github.com/kedube/ha-hellofresh) by Katherine Dubé), plans them as
  dinners and can put them on a calendar.
* Recipe, meal, contact and reward events for webhooks, and chore events carry who and how many
  points.
* Kinwall tells Home Assistant which part changed (events, lists or chores), and background
  calendar syncs that change nothing stay quiet, so the integration fetches much less.
* The Kinwall integration (1.9.0) follows the family's feature switches: with Chores & points or
  Lists off, their entities aren't created and their data isn't fetched. The blueprints say which
  features they need.
* The integration and the Home Assistant app have the new logo.
* A guide for connecting Kinwall to [n8n](https://n8n.io).

### Privacy and security

* **Health data is encrypted at rest**, always, on every host: health visits, medicines, Temp
  check sleep and feelings, goal checks, journal entries and drained check-ins.
* **Connected apps** (AI assistants and MCP) get no health data unless the family turns it on in
  Settings → Access → Connected apps, and can no longer manage sign-ins, keys or other connected
  apps.
* **No more requests to Google for fonts**: every typeface ships with Kinwall. See
  [Credits](docs/contributing/credits.md).
* **Security activity** under Settings → Access on parent devices: passkeys, sign-ins, recovery
  codes, keys, paired devices, connected apps, the Night PIN and private journal changes, kept for
  a year and searchable. A new passkey or a recovery-code sign-in also notifies parents. Privacy
  notes now show only on that person's own devices, and they can dismiss them there.
* **Opening a sign-in link asks first**, naming the family and the address, so nobody can sign
  your browser into their family with a link.
* Connecting a Google or Microsoft calendar finishes only in the browser that started it.
* Photos, covers and the photo download no longer put your key in the address (where it lands in
  browser history and logs); they use media tokens and one-time links.
* Medicine reminders in the notification feed are encrypted like the medicines themselves.
* A kid's device sees only its own reward requests and point history, and wall screens no longer
  show declined requests or a parent's note.
* Marking a grown-up as a kid is refused once they have a private journal, unless it's done from
  their own device, and the change is logged.
* Connected apps can no longer subscribe to push notifications or set up webhooks.
* Unexpected errors show "Something went wrong" with a short reference, never the server's
  internals.
* A self-hosted server checks the address an outbound fetch (webhooks, calendar feeds, recipe
  pages, images) actually connects to, so a public name pointing into your home network is
  refused.
* Sign-in attempt limits count the connection's own address, not a header anyone can set.
* A link can't tick a chore off without asking first, and a tick counts only for a day the chore
  is due.
* Push notifications go only to Apple's, Google's, Microsoft's and Mozilla's push services.
* Wrong Night PIN guesses are limited per screen and per family, and wrong setup codes per
  address, so one guesser can't lock the owner out.

### Faster

* Calendar views, the Board, lists and the notification check read far less from the database.
* Self-hosted servers send the web app compressed, so a phone's first load is about twice as
  fast.
* The app refetches only what changed, and hidden tabs stop polling (wall screens keep going).
* SQLite on Node and Docker skips an extra disk sync on every write and waits briefly for a
  backup instead of failing.

### API, MCP and export

* **Breaking**: a private journal entry's `text` is `null` (in the API and in exports) for anyone
  but its owner. `DELETE /api/notifications` keeps privacy lines.
* **Breaking**: display keys get `403` on list rename, archive, delete and reorder
  (`PATCH /api/lists/{id}` takes only `sortBy`, `groupBy` and `keepChecked`), on event category
  writes, on catalog edits, and, on a kid's device, on other people's items, notes, tracker
  entries, stickers and activity progress. A display key can't be owned by a grown-up (`400`).
* **Breaking**: connected apps (OAuth) get `403` on sign-in management routes (keys, recovery
  codes, passkeys, pairing, sign-in providers, connected apps).
* **Breaking**: `GET /mcp` answers `405` instead of holding an SSE stream open.
* **Breaking**: `GET /api/oauth/{kind}/start?key=` is removed. Start a calendar connection with
  `POST /api/oauth/{kind}/start` and the `Authorization` header; the callback finishes only in the
  browser carrying the cookie it sets. An embedding host must redirect its shared OAuth callback
  to the instance (SPEC.md, "Embedding the server").
* **Breaking**: a full key as `?key=` on image routes and `GET /api/photos/export.zip` gets `401`.
  Send it in the `Authorization` header, or use `GET /api/media-token` (for `?key=` on image
  routes) and `POST /api/photos/export-link` (a one-time zip link).
* **Breaking**: request bodies over 2 MB get `413` (the photo zip, plugin packages and import keep
  their own limits); an unreadable body on `.../clear-completed` or `.../reset` is a `400` and
  changes nothing; a kid's device can assign an item only to itself or no one.
* **Breaking**: a chore completion's date must be a day the chore is due (wall screens and kids'
  devices: the last 7 days to tomorrow). Events need valid `start`, `end` and `rrule`; repeats
  finer than daily or that can never happen are refused; `from`/`to` must be dates at most 400
  days apart, and a series gives at most 1,000 instances per read. A hidden event is a `404` by id
  to display keys.
* **Breaking**: a kid's device gets `403` on other members' reward requests and only a sibling's
  balance, not their ledger. Connected apps get `403` on push subscriptions and webhooks
  (migration 0087 removes push subscriptions they already made).
* An unexpected failure answers "Something went wrong. Please try again." with a `ref` that's also
  in the server log.
* `GET /api/lists/{id}` returns empty stores, categories and aisles for non-shopping lists, and
  takes `?suggestions=false`.
* New: `revs` in `GET /api/rev`; `householdId` in `GET /api/me`; `busy` on events;
  `includeHidden=true` for parents; `itemsRev` and `overdueCount` on lists; `addedBy`,
  `checkedBy`, `lastDoneAt` and `lastDoneBy` on items; `?skipExisting=1` on adding items;
  `POST /api/lists/{id}/items/move`; the grocery catalog under `/api/lists/remembered` (with
  `?catalog=` and `?tag=`) and `/api/lists/remembered-tags`; device kinds on keys
  (`PATCH /api/keys/{id}`, `PUT /api/me/owner`); `PUT /api/members/{id}/avatar`;
  `POST /api/rewards/redemptions/{id}/cancel`; per-display sources on `GET /api/tidbits`;
  `GET /api/security-events` (parent devices, with `q`, `kinds` and `before`); `removable` on
  notifications; `syncFailures` on calendars; `isDefault` on lists;
  `/api/chore-library`; `/api/library` and `GET /api/books/search`; `coverUrl` on reading entries
  and `GET /api/trackers/{id}/cover`; `/api/lists/{id}/barcodes/{code}`; `/api/coloring-pages`.
* MCP: `list_remembered_items`, `update_remembered_item` and `move_list_items`; `groceries` as a
  list kind; `busy` on events; `list_library`, `add_to_library`, `update_library_book` and
  `search_books`; `isDefault` on `update_list`, and `add_list_items` with no list uses the default
  Groceries list.
* Export: `itemBarcodes`, `libraryBooks` and `choreLibrary` are included; older files still import.
* Older export files (without `overdueCount`) still import.
* `GET /api/board` and `GET /api/snapshot` (and MCP `get_board` / `get_snapshot`) answer empty
  `chores` while Chores & points is off and empty `items` while Lists is off, in the same shape.
* New settings: `features.checkIns` and `rewardsEnabled` (both default on). Reward requests
  answer `403` while rewards are off.

### Fixed

* The **update banner** no longer shows for good inside Home Assistant.
* A calendar feed no longer loses every event when its last event is old.
* Deleting a chore keeps the points already earned from it.
* Marking a chore not done asks first, so a stray tap doesn't take points back.
* The update banner no longer gets stuck behind cooking mode or shopping mode.
* A refresh no longer flashes the default colors before your color scheme loads.
* A browser tab and the installed app no longer fight over the saved look and pin the CPU.
* Recipe ratings and steps no longer show twice.
* Shared recipe pages no longer fail on an old recipe's source link, and skip photos they can't
  show.
* Foggy weather shows a cloud instead of a gray square on iPhone and iPad.
* Profile sections no longer squash on short screens.
* Contact phone numbers survive a vCard import with a photo, and one bad value no longer fails
  the whole import.
* Merged contacts stay as private as the stricter copy.
* Passkeys work behind Home Assistant's ingress, and other proxies, when Home Assistant serves
  https itself (also in 1.0.3).
* Passkeys work in the Home Assistant app (add-on) without setting `PUBLIC_URL`: requests through the
  Supervisor's ingress proxy (172.30.32.2 only) use the browser's own address, even when an
  upstream proxy rewrites Host. A page on the wrong address gets a clear 400 naming the right one.
  Inside a frame (Safari refuses passkeys there), Settings links to Kinwall in its own tab.
* Contact import keeps Apple and Android labels, names, departments, yearless birthdays,
  anniversaries and extensions. The review matches the contact editor and offers to update a
  duplicate.
* First-time setup: going back keeps the people already added, starter chores work on a wall
  screen, a reload resumes setup, and the "Saved" pill no longer sticks.
* A new family's leaderboard no longer ranks everyone #1 at 0 points.
* The Cloudflare setup script runs on Windows.
* Tapping to wake the Night screen no longer taps what's underneath.
* Returning to the Board when idle no longer pulls a kid out of an activity or a parent's phone
  away from what they're reading.
* Scrollbars show with a mouse and on light pages; open lists no longer pan sideways on touch.
* Long timer names wrap instead of pushing the clock off screen.
* A Try again button when the Board or events fail to load.
* Activities no longer disappears when Paint, Photos and the sticker book are off but an added
  activity (like Math practice) is on, and a chore's Play link always opens its activity.
* With Photos off, the Board's picture card falls back to other pictures instead of going blank,
  and the Night screen shows drawings only while Paint is on.
* All-day events from a synced calendar no longer drop out for a few hours around midnight and
  come back (which also sent two updates and webhooks a day for each one).
* One failing part of the scheduled background work (calendar sync, reminders, the daily summary,
  cleanup) no longer stops the rest, and one calendar that fails to sync doesn't hold up the
  others.
* Accent text (links, the active tab, focus rings) stays readable after switching to dark mode.
  Dark schemes with a deep accent, like Peacock, showed it most.
* On narrow phones the header hides the family name instead of cutting it to "O…" when the offline
  icon or the Night button is showing, and every icon keeps its full size.
* The Board lists today's meals by time, so a 3:30 snack no longer shows after a 6:00 dinner.
* Count tiles take two rows on tablets instead of being cut off, and the tablet header's buttons
  stay on screen.
* Day and Week line up with their hour labels on a phone turned on its side.
* An activity's title stays readable on a phone when its chore is done.
* A setup code pasted with a space works, and a new family on a reinstalled server no longer picks
  up the last family's Board layout, filters or unsynced changes.
* A time zone with no offset shows as UTC, not UTC+0.

### Upgrading

* **Database migrations run automatically** when the server starts (Docker, Node and the Home
  Assistant app) or on the first request (Cloudflare Workers). There's nothing to run by
  hand.
* **Health data needs an `ENCRYPTION_KEY`.** Docker and the Home Assistant app already have
  one: if you didn't set `ENCRYPTION_KEY` or `ENCRYPTION_KEY_FILE`, it was generated into
  `encryption.key` in your data folder on first boot. On Cloudflare Workers, make sure the
  `ENCRYPTION_KEY` secret is set (the setup script sets one). Without a key, Kinwall refuses to
  save health visits, medicines and check-in answers rather than store them unencrypted, and an
  import that includes them is refused. Keep the key with your backups: a lost key can't be
  recovered.
* **Kids' devices and wall screens can do less.** They can no longer delete, archive, rename or
  reorder lists, edit event categories or the grocery catalog, or add, edit and delete chores.
  On a kid's device, other people's list items, notes and tracker entries open read-only, and
  notifications follow only that kid. Parent devices are unchanged.
* **Grown-ups' journals become private**, including past entries, and open only on that
  grown-up's own devices. Each grown-up should pick themselves under Settings → Access → **This device** so their
  phone counts as theirs. A paired display that belonged to a grown-up shows under **Needs a
  fix**; pick a wall screen or a kid for it.
* **Quiet hours are now Night** (Settings → General → For the whole family → Night). Your times,
  PIN and night screen carry over, and both effects stay on. Old links to the quiet hours page
  redirect.
* **Shopping lists are split** into Groceries and Shopping by name. Check that each list landed
  on the right side, and change its type under **Edit** → **Type** if not. Meal ingredients go only
  to Groceries lists.
* **Color scheme**: new families start on Peacock. If you never picked a scheme, you keep Peach:
  migration 0079 stores it for you. Migration 0094 does the same for the default Peacock replaces,
  but a server upgrading from 1.0.x already has Peach stored, so it changes nothing there.
* **New switches start on.** Check-ins & journal (`features.checkIns`) and Rewards
  (`rewardsEnabled`) default on, so nothing disappears; turning one off hides it and keeps its
  data. Check-in points now also need Chores & points on.
* **Board and snapshot answers follow the switches.** `GET /api/board` and `GET /api/snapshot`
  (and MCP `get_board` / `get_snapshot`) return empty `chores` while Chores & points is off and
  empty `items` while Lists is off, in the same shape, and `checkInPoints` reads 0 while check-in
  points can't be earned. Anything reading them should expect empty arrays.
* **Behind a reverse proxy or Cloudflare Tunnel** (Docker or Node), set `TRUST_PROXY=1` and
  publish the port only to the proxy. Kinwall now ignores `X-Forwarded-For` without it, so
  sign-in attempt limits would count everyone behind the proxy as one address. Don't set it when
  the port is reachable directly. See [Configuration](docs/self-hosting/configuration.md).
* **Fonts** now come from your own server. If you run a reverse proxy with its own
  Content-Security-Policy, it no longer needs the Google Fonts hosts.
* **Home Assistant**: update the Kinwall Home Assistant app to 1.1.0 and the Kinwall integration to
  1.9.0 or later, so it fetches only what changed and follows the feature switches (1.8.0 fetches
  less too, but keeps the entities of a switched-off feature).
* **The Kinwall app for iPhone and Android**: update to 1.1.0. Connecting a Google or Microsoft
  calendar from inside the app needs it (older versions are told to update or use a browser), as
  do barcode scanning and the feature switches in Siri, widgets and the Watch.
* **Home Assistant app**: `PUBLIC_URL` is no longer needed for passkeys. Use https and a host
  name; each address needs its own passkey, or set `PUBLIC_URL` and use only that address.
* **Your own Google OAuth client**: Kinwall now requests `calendar.events`,
  `calendar.calendarlist.readonly`, `openid` and `email`. Declare those under the consent screen's
  **Data access** (drop `calendar.readonly`). Accounts connected before keep working; their grant
  covers more.
* **Cloudflare Workers**: deploy with this release's `wrangler.toml`, which adds the routes for
  recipe share links and activities.
* Connected apps that managed keys, passkeys or other sign-ins through the API need a parent's
  own sign-in for that now, and can no longer subscribe to push or set up webhooks.
* **Scripts and integrations using the API**: a full key in the address (`?key=`) no longer works
  for images or the photo download, and calendar connections start with
  `POST /api/oauth/{kind}/start`. A sign-in link (`#key=`) now asks before it signs a browser in.
  The other breaking API changes are listed under [API, MCP and export](#api-mcp-and-export);
  nothing else breaks.
* The old accent and background presets are replaced by color schemes; an accent you set carries
  over.
* Self-hosters can see how to delete their family's data in Settings.
