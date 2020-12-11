/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/19CoV/index.html","407e0e56b903094eff5aca44e195dc1e"],["/2048/index.html","f2809053712a187645c3af28ac233e80"],["/404.html","d45d53f1c84a757cb412f2ef170492df"],["/Butterfly/css/clouds_back.jpg","f4b04f285cf786aa4e49b12c180d7e16"],["/Butterfly/css/clouds_front.jpg","ac1d40d5d9c861e3e950d1cd190d6a3e"],["/Butterfly/css/clouds_left.jpg","e2cf7bbd6de42986ab8a8820e645ae24"],["/Butterfly/css/clouds_right.jpg","d7bf92c390f9fd0ab61ac5d30e6306f1"],["/Butterfly/css/clouds_top.jpg","a12aa45de57c8525e68895b80fbc33ea"],["/Butterfly/css/hazy_lake_top.jpg","7c8f0dc9625ecb805ec2f0861c18549f"],["/Butterfly/css/reset.css","dd4f3e693101ea621d45ba7d35b84772"],["/Butterfly/css/style.css","307c3164b75764bd76879c830be4e862"],["/Butterfly/icon.png","b560bdb1c7ed8fe818219d63eb4f830b"],["/Butterfly/index.html","5ac47e048524953e9be24059d84098d4"],["/Cat/index.html","f2a2914f4f6bd9e7cb7eb3f9268fdf41"],["/Chest/index.html","3f14da984480d6459b7915c8fb92c73f"],["/Element/index.html","fe0c6878f8e0bfc9076e6584b153a54b"],["/Flud/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/Flud/app_badge.png","4ef867722c11cee79f712cf72c7f28da"],["/Flud/dat.gui.min.js","8636a524aeb9c5b20cccbc21f5f69b92"],["/Flud/gp_badge.png","68b4283b0efeb1bb7b55b53e4f853ab2"],["/Flud/iconfont.ttf","6fbe6d852c410206aa1dbc06623a0016"],["/Flud/index.html","2315cf2929b056172b170b6daed458d7"],["/Flud/logo.png","36dd559eda52d475099b25ffd72f5e9e"],["/Flud/promo_back.png","e63cc621ae32c5932a134a451e68891c"],["/Flud/screenshot.jpg","5959783a45c34c28b89479212c9a5687"],["/Flud/script.js","153c1eea3fd58c1dca94329780956689"],["/Gallery/Avatars/index.html","311288522f08bfe0aecfb1809c92e2e1"],["/Gallery/DailyLife/index.html","9fb69ac17695096409da5df815299289"],["/Gallery/Girls/index.html","cb7da2aa386c803edc94477fe7f6a89d"],["/Gallery/Marvel/index.html","af309d09d0357a76a515550d26e876d8"],["/Gallery/Wallpapers/index.html","2e7eea1764393ad639fc4391da3758ad"],["/Gallery/index.html","8e271d02279a7be6876d5fbd8b79c3d8"],["/NetEase/icon.png","b560bdb1c7ed8fe818219d63eb4f830b"],["/NetEase/index.html","47ae325a8322df1399e6f21763cdd433"],["/NetEase/网抑云一言热评.html","c013bd8f13c70f46f857ba0238b586a4"],["/PacMan/index.html","5717d709f0d30b5fedbfc0aa9dc040d2"],["/Piano/index.html","446bfd9598b8a875a00b3a2f38702c38"],["/about/index.html","0b1676a648f92df5fe3e168328dc0a12"],["/archives/2019/03/index.html","91939bdb154d3bf56cd09a33240413ee"],["/archives/2019/04/index.html","505c93ae84e2fef3f6ddde1f6321c441"],["/archives/2019/05/index.html","7adc51b23c3b546d21a4e7911bfdc18b"],["/archives/2019/index.html","9c701d2fb2aa357cb5f66e359416347c"],["/archives/2020/04/index.html","11b3d64574244fd7591adc1c01b06029"],["/archives/2020/08/index.html","3bb2379299dbe912ac07e3d283609216"],["/archives/2020/11/index.html","45afa2c86de2683fdcb0c6f240acec0e"],["/archives/2020/index.html","ae39248c293618ac11a4948e24caa0ea"],["/archives/index.html","742c45cd466ab4fe5886376e21428d33"],["/archives/page/2/index.html","88bedf017ff36cc4df5e8704028b4eb2"],["/artitalk/index.html","3676e7ce2abebac0cec02a26d22c184e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bb/index.html","b345454780458cafb4adea2c495cb978"],["/box/about/index.html","b23638ccdd60180e9d90306f1ff232f0"],["/box/index.html","96cc17d380d24de307e76db9c9ab9a04"],["/categories/Hexo/index.html","0d967ce192635acc57412b2ee16b5000"],["/categories/ToolBox/IDEA/index.html","eeb0b7f0416a8585e2dedcce09beb33f"],["/categories/ToolBox/PictureBed/index.html","cea593962ae5d90588b730e6de7e4e98"],["/categories/ToolBox/index.html","ff79f72e42481376d657ed634bb7fbe5"],["/categories/index.html","a2b4b6e14d056b43e09fe01c414ba52b"],["/categories/下载/index.html","bfa0b5aac974577a8429ff3d2abb6a4f"],["/categories/下载/转载内容/index.html","14ab0f11ac6b440739309c72cd033db2"],["/categories/句子/index.html","66a7bbbaad00e621eb699bc6d608348a"],["/categories/技术/index.html","798a25359f2f15d20457e4d0f2d94b37"],["/categories/数据结构与算法/index.html","55c98a7eba5b1a8b699f3955ef524122"],["/categories/数据结构与算法/二叉树/index.html","3551bf398547be03b4a444287186ac92"],["/categories/数据结构与算法/堆/index.html","ef9cf2a9b94f33d31a9c99b8046f12c6"],["/categories/转载/index.html","1555aee7ed6d6896d01d6b65bae11973"],["/categories/骚话/index.html","5d9901b37f9ed94fc16b473289843e4f"],["/confession/css/theme.css","9c15f39458269fed6862af9477ce89ef"],["/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/confession/images/2.jpg","5defeb0874f176d361cf31864bae07ae"],["/confession/images/3.jpg","bd72ec1b747127452e47e9c9aed75a24"],["/confession/images/emoji_bixin.jpg","48c03878525aebf53987348574cbab66"],["/confession/images/emoji_kelian.jpg","d5fae6391e74e3b5cbdb3837c8e25d30"],["/confession/images/music_note_big.png","a1547b442fa322bddba0f24d206ce494"],["/confession/index.html","ed185d4ba077bbbb14cd6cac96cc4ebc"],["/confession/js/jquery-2.0.3.min.js","cabd72e28948160be8b5144f25d229f2"],["/confession/js/jweixin-1.2.0.js","07e62fffb93d84781308b2516e5abae4"],["/confession/js/start_onlyyou.js","0fab43f3ddb785142a704d53663aaf55"],["/confession/js/theme_common.js","911bfab800e5a88fbaa60ad910b63bda"],["/confession/js/typed.min.js","6ab5792bc615cd6ba16b71581eedfcc7"],["/css/artitalk.min.css","2338b0dbd97c5cef3f13081188c619a2"],["/css/chocolate.css","b73f42653d9e15fb2e9d49f459a42d57"],["/css/font.css","2f3e1c91fbcd09fae06bd0b5918bc5c8"],["/css/index.css","780792aaebe9f2cf0fb09fe708e7e061"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ysnsn.css","1c2853a8277a64f2011c1c3d75f5a8e9"],["/homepage/assets/css/font.min.css","fe9450b7c0a10c0fd69ef6ec9217158c"],["/homepage/assets/css/style.css","2cbb97b0cebe1817422cbb903b4f33e3"],["/homepage/assets/img/favicon.png","c6ff34f2316fe7572a29bc8d661d502c"],["/homepage/assets/js/background.js","5da1e13fd670370ff204653c88e801ce"],["/homepage/assets/js/main.js","7d4046c8779cf720ad73aec0cb6bd614"],["/homepage/index.html","c169703ee42b073c44e523a491905741"],["/img/1.gif","14306fa49578be775db5a521f6dff77a"],["/img/2.jpg","5defeb0874f176d361cf31864bae07ae"],["/img/3.jpg","bd72ec1b747127452e47e9c9aed75a24"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.png","3f0b8ceeb7a2ab52e912285a725fb325"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/emoji_bixin.jpg","48c03878525aebf53987348574cbab66"],["/img/emoji_kelian.jpg","d5fae6391e74e3b5cbdb3837c8e25d30"],["/img/error_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/favicon.png","9609cf76f1a5a6803e3016dc69970a9f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","75865b1a4dcbb3648f52c7aa36c06f4b"],["/img/loading.gif","35dd31e31958064b147c1a9c9a2623c6"],["/img/music_note_big.png","a1547b442fa322bddba0f24d206ce494"],["/index.html","fc43a06f6122be396ff666a7522d5ad4"],["/js/ClickShowText.js","8172fee7ded44ae7b7bcb73fe3caf119"],["/js/DigitalRain.js","10ad69afa3d50bb48995a2f8bd855fea"],["/js/FunnyTitle.js","9d00375ee182236008838042c6e40a26"],["/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/js/artitalk.js","346f61002cdcb1b374985d3b717239a5"],["/js/baiduanalysis.js","5631f24964c0d4fe66fe589f3bbdcae7"],["/js/calendar.js","7c97c12ab5c2c59378bcef3ea8c4594b"],["/js/cdn_post.js","25b81ddc876a94f0ce8f0efddd3700d5"],["/js/chocolate.js","9e0da6ecb01e3f965374d12b5aba3261"],["/js/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/js/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/js/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/js/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/js/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/js/foot.js","8febac6976e8d3a16f40ebed420aa5c9"],["/js/ip.js","c723c107464ec9188ae8ca2c648b5021"],["/js/jquery-2.0.3.min.js","72988bcd9f0193a8595e61d34ea37c6b"],["/js/jweixin-1.2.0.js","8c7380a5600b304f3424fa8971187ba3"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/maodian.js","ff8b5432cba48a4a814ab85c29591098"],["/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/showdown.min.js","c6379016080ac38f712de1e5bafa53dc"],["/js/snow.js","0c7ce51b942e50560520914734cc5469"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/js/volantis.js","e9816bea97d1480045de219158e3df8d"],["/link/index.html","737070f45e83c83b5bd76544b602444b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","7f137c50769d8e51488e32d907d20aa2"],["/page/2/index.html","6cdcebe5658bdecb21db3b59518338d0"],["/post/26d47f8f.html","04f81c2e98821affa850ede94e8d9201"],["/post/43511.html","99a439d7deaa2231b4ea92f5387a19f9"],["/post/4e66a6ca.html","c5284447742c5d479ed5a87b4a393b1a"],["/post/4e66a6ce.html","fe811c6136fbce831d35c3f4be6124a6"],["/post/58458.html","40329d69015ff8c6d4dc499b64252f83"],["/post/641eb086.html","df6d37eb738878e16c0ae0ce590f9931"],["/post/676bc2fe.html","fcb9e21597a549c05a62005ba6c8b4ca"],["/post/6b8663d.html","719304f6175856ac757f85f47ac25844"],["/post/71c1c665.html","8df719b38cf6077ee9fccf74888b814c"],["/post/74409432.html","203ecf53883367c7a6682d475ddae659"],["/post/82246bb3.html","2c56586052fbe76f792c8bab43a53655"],["/post/8c24d4e6.html","1e789c5e4ba9bb763bfb7e300da9d00e"],["/post/9f6e8943.html","7dbcc4122ba91dc9b04f5667368af484"],["/post/c4d910e6.html","22548c543d0b5469ec47b204aaf7cc8c"],["/post/e947bc6a.html","561ab9a359d7139f85b4ae3479efebb3"],["/post/f17fc012.html","1e5da99dab0375ab6f05861b495e644a"],["/post/f1a26c5e.html","50a49f30f450b3880d783fee14291973"],["/sw-register.js","a7c9fcf1d1cf15b553690899caadf98b"],["/tags/Git/index.html","00688e32c32b27d355e5fb8c7532a6e2"],["/tags/HEXO/index.html","6007346cce473352c5c0f34b976f5997"],["/tags/Hexo/index.html","f2bde3ee710c256af7c6032f5380ac53"],["/tags/IDEA/index.html","5e8ce5504a2a5fe0c051ab9ccfa62116"],["/tags/Markdown/index.html","351e2951fc5c8539c4a251f3b3f583a8"],["/tags/NexT/index.html","7d55c1bbe0db3d927d83618fb16b88ba"],["/tags/PictureBed/index.html","43bf24e57a7861d34b28ca9ec0104678"],["/tags/Springboot/index.html","0feb00a1e6c5d5fb1342b38adee201e2"],["/tags/Template/index.html","a4e5333aa591b515a6943208329880ac"],["/tags/ToolBox/index.html","73b98c174a080eb79b3315560e80a4f6"],["/tags/butterfly/index.html","6e7a2f59f6358c5f03bdab9f01fd2c58"],["/tags/index.html","8279add0c0ed04b8ac864249efa7c1ea"],["/tags/二叉树/index.html","34c75cd081be93b7b6ca14d7aeb4a8a8"],["/tags/堆/index.html","0d768f0b948652524cafa86f803a8001"],["/tags/小程序/index.html","751ce7f2fe9efaba49896053cc7d1722"],["/tags/数据结构与算法/index.html","54f27fb75a3b3eb5445db5540fe88109"],["/tags/正则表达式/index.html","cb0e2725fc5b01521cf37eff74eb8401"],["/tags/正文/index.html","5adfe057b722415729c7d3de2feb3a5d"],["/tags/温柔/index.html","e5b02571f52b110772ccc9bd89e943a6"],["/tags/网站/index.html","1239cba523c5d98eca6c26bb88ca8d57"],["/tags/色块/index.html","84ea5234af40e1f908ccca02195fd126"],["/tags/论文/index.html","0e8cf9277114609e8633137795696a63"],["/tags/转载/index.html","a74f2aea56a86e39e946535b2e184ad5"],["/tags/转载内容/index.html","4227ffd3c108adfc9e989598ed1f4b18"],["/tags/邮箱验证/index.html","76d4e8b58389d4886709845ffaa0dd45"],["/volantis/404.html","f6bd1659ddad9d50e14798b589e678c1"],["/volantis/about/index.html","eb0750ab4aae2f0c70f59e75fd6698bd"],["/volantis/archives/2019/03/index.html","ac4bc40c496162da2aa4e84d27c7e5e4"],["/volantis/archives/2019/04/index.html","ce62cff274cd2a3f97738fa4e45b620c"],["/volantis/archives/2019/05/index.html","447c67dc5c9c4842391a16091d8f2c26"],["/volantis/archives/2019/index.html","06c796ce6446a37e9ba7339dbce5820a"],["/volantis/archives/2020/04/index.html","d2f44ab0b531ebffb9fd38652cb3f3a8"],["/volantis/archives/2020/08/index.html","7230e590d2c9fe678846c325ba9d35b7"],["/volantis/archives/2020/12/index.html","f1a0bac03dea557af9b256e0529b2f6e"],["/volantis/archives/2020/index.html","b1060ab065a6a1e167fea14c71d432be"],["/volantis/archives/index.html","1cfb72233555c19c1933764e98bdffce"],["/volantis/archives/page/2/index.html","1132a9d6a2acd3fefbf5be19a1eab1f7"],["/volantis/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/volantis/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/volantis/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/volantis/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/volantis/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/volantis/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/volantis/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/volantis/categories/Hexo/index.html","a4658e75cbe858f830ae886a6a355ab9"],["/volantis/categories/ToolBox/IDEA/index.html","b292d9142be20160016fc28fedf40af5"],["/volantis/categories/ToolBox/PictureBed/index.html","0e9c20bdf40879e8acb2af2a564eca78"],["/volantis/categories/ToolBox/index.html","99b8e77e5ccb354d9ed6462fb0cb3b51"],["/volantis/categories/下载/index.html","329f25a7b23edecb1129eef1147ea427"],["/volantis/categories/下载/转载内容/index.html","bda3d5b9cc617eb96fff96511409911d"],["/volantis/categories/技术/index.html","cca9ab84eba149a9038b8ab62f46b4cb"],["/volantis/categories/数据结构与算法/index.html","58ce3807496d5a4c7c510ca4c397aaa1"],["/volantis/categories/数据结构与算法/二叉树/index.html","23f755a684d107c37b8064179a4b98ca"],["/volantis/categories/数据结构与算法/堆/index.html","481a2a37d4b7f82803f7ab67372cc5db"],["/volantis/categories/转载/index.html","8c7243e6fc0f508b509be6ee912d0bf5"],["/volantis/css/style.css","136bf8d1a2456f47b108ad5811ab8a49"],["/volantis/images/bg.jpg","4ec24775c9e45e3a3f6aed4db5c58ed0"],["/volantis/index.html","052ea81c6420e6762e8d4f1637d28ebb"],["/volantis/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/volantis/js/app.js","40c6dbfc05d8d0373e2e053169749741"],["/volantis/js/issues.js","74c35c12b2f8a064f81a454408855f03"],["/volantis/js/search.js","c2d0ae92d2f03fa4b56078ed1707a8a5"],["/volantis/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/volantis/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/volantis/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/volantis/link/index.html","5350fc0572f16aca62d13cbd16d0166a"],["/volantis/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/volantis/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/volantis/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/volantis/page/2/index.html","5d0af41eaf01d99a35e91480b872b314"],["/volantis/post/0.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/26d47f8f.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/43511.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/4e66a6ce.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/58458.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/641eb086.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/676bc2fe.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/6b8663d.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/74409432.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/82246bb3.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/8c24d4e6.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/9f6e8943.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/c4d910e6.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/e947bc6a.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/f17fc012.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/post/f1a26c5e.html","d41d8cd98f00b204e9800998ecf8427e"],["/volantis/sw-register.js","41fdf0b1adf78dc03a85266925ee0b70"],["/volantis/sw.js","1039707922b3af7933f75bfda5956c4f"],["/volantis/tags/Git/index.html","3b67f543d60d0aa63fa34fc66bf67881"],["/volantis/tags/Hexo/index.html","28038ebca1c7a258bb7c830abd0f7c17"],["/volantis/tags/IDEA/index.html","f57cdf6f3b0a3709a9c9de16c05b117a"],["/volantis/tags/Markdown/index.html","e7c5d63902551354706d7dd473b05361"],["/volantis/tags/NexT/index.html","49767cd41c9a4b9ef4c04cd65247ad32"],["/volantis/tags/PictureBed/index.html","b6fd4c5870769f03edeaaa099821511a"],["/volantis/tags/Springboot/index.html","a943df62f3756b053f05261add39569a"],["/volantis/tags/Template/index.html","d44ec97c2dde4e0b507c9504a31ccc26"],["/volantis/tags/ToolBox/index.html","817b791098dae68a6b29ad4b03336d38"],["/volantis/tags/butterfly/index.html","f45e5accc0a8939ee4ce60d1439a7c8a"],["/volantis/tags/index.html","ac2ab6626300eff8747094a496685900"],["/volantis/tags/二叉树/index.html","177bc34a562878bc31a383688af12a9d"],["/volantis/tags/堆/index.html","a97c4630bb7448dc3d0ca80864c5486b"],["/volantis/tags/小程序/index.html","ccd95c6ab00b0e77b52cc3f0c37d2f9d"],["/volantis/tags/数据结构与算法/index.html","61ec5c1280237a7170394a43f040da62"],["/volantis/tags/正则表达式/index.html","498cf2f7dc04e5bcf5a1a2c94d2548af"],["/volantis/tags/正文/index.html","cc93884b509ac40964d0ede0920b0705"],["/volantis/tags/网站/index.html","e26465dbd080bdcf3ea337b34479f730"],["/volantis/tags/论文/index.html","290be57bf3676568c151c9e4215f2ab1"],["/volantis/tags/转载/index.html","80c9dce4ef6f1eee6cf8814261026b7e"],["/volantis/tags/转载内容/index.html","90ae8ab01b68bd1c95a0ad4970b088d8"],["/volantis/tags/邮箱验证/index.html","73a3e113b7785f314181ffeeb4b769ec"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
