/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/res-256.github.io/19CoV/index.html","2817206b284ba4279a17a79816da5a47"],["/res-256.github.io/2048/index.html","1a3408d41b0a6dc07e3965b2c5271130"],["/res-256.github.io/404.html","244f46d76de46fa54cb3517247fac68e"],["/res-256.github.io/Butterfly/css/clouds_back.jpg","f4b04f285cf786aa4e49b12c180d7e16"],["/res-256.github.io/Butterfly/css/clouds_front.jpg","ac1d40d5d9c861e3e950d1cd190d6a3e"],["/res-256.github.io/Butterfly/css/clouds_left.jpg","e2cf7bbd6de42986ab8a8820e645ae24"],["/res-256.github.io/Butterfly/css/clouds_right.jpg","d7bf92c390f9fd0ab61ac5d30e6306f1"],["/res-256.github.io/Butterfly/css/clouds_top.jpg","a12aa45de57c8525e68895b80fbc33ea"],["/res-256.github.io/Butterfly/css/hazy_lake_top.jpg","7c8f0dc9625ecb805ec2f0861c18549f"],["/res-256.github.io/Butterfly/css/reset.css","765988c7d634d00625fd1dab67a0f927"],["/res-256.github.io/Butterfly/css/style.css","f64c27ad93f039b37256c4eb4768996b"],["/res-256.github.io/Butterfly/icon.png","b560bdb1c7ed8fe818219d63eb4f830b"],["/res-256.github.io/Butterfly/index.html","0c80e9b1c7bceaced12436ca2f8564d0"],["/res-256.github.io/Cat/index.html","9894fd7f38f50394cc375d08dcbfcd72"],["/res-256.github.io/Chest/index.html","974adf7a37b57fbaa6c8bf6e89bae07f"],["/res-256.github.io/Element/index.html","7189946e36f5b115926eb9a10eccccef"],["/res-256.github.io/Flud/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/res-256.github.io/Flud/app_badge.png","4ef867722c11cee79f712cf72c7f28da"],["/res-256.github.io/Flud/dat.gui.min.js","a6dd688c7f8dbf6faff76181e23ac077"],["/res-256.github.io/Flud/gp_badge.png","68b4283b0efeb1bb7b55b53e4f853ab2"],["/res-256.github.io/Flud/iconfont.ttf","6fbe6d852c410206aa1dbc06623a0016"],["/res-256.github.io/Flud/index.html","d5ff10e646f3a0628772a89c64593e37"],["/res-256.github.io/Flud/logo.png","36dd559eda52d475099b25ffd72f5e9e"],["/res-256.github.io/Flud/promo_back.png","e63cc621ae32c5932a134a451e68891c"],["/res-256.github.io/Flud/screenshot.jpg","5959783a45c34c28b89479212c9a5687"],["/res-256.github.io/Flud/script.js","5c595a6ebe3fe44306e18cb3cc0c330a"],["/res-256.github.io/Gallery/Avatars/index.html","36b11b92b09ca5786464334312d3af7f"],["/res-256.github.io/Gallery/DailyLife/index.html","f56f38e17cbd8605bdd7e6f834ed2d04"],["/res-256.github.io/Gallery/Girls/index.html","3dabb98666dfde7ca04a30e5f11e4376"],["/res-256.github.io/Gallery/Marvel/index.html","b857e1ab3fe87037d1b7888cb4389955"],["/res-256.github.io/Gallery/Wallpapers/index.html","7b5e803502864ed948e2aa2dc139a95c"],["/res-256.github.io/Gallery/index.html","f576f90213279f10d1eaa5d0a4600e3c"],["/res-256.github.io/NetEase/icon.png","b560bdb1c7ed8fe818219d63eb4f830b"],["/res-256.github.io/NetEase/index.html","9e6046da29d57bae64dc52d843bcade6"],["/res-256.github.io/NetEase/网抑云一言热评.html","8f0793f2270d53ef5428325e87af9955"],["/res-256.github.io/PacMan/index.html","668459c951e81129cfc468d4f84cff7f"],["/res-256.github.io/Piano/index.html","da92fc9447c6896e85928ed2d7b25cb7"],["/res-256.github.io/about/index.html","0ab862deb4e6e4c12600885f0c6a7a86"],["/res-256.github.io/archives/2019/03/index.html","953804a82944529d2164a1b34e0711f6"],["/res-256.github.io/archives/2019/04/index.html","8eccde736cb3cc2e9e1bdcde91624563"],["/res-256.github.io/archives/2019/05/index.html","ebebe2c9796f15fa3352b06b20c71410"],["/res-256.github.io/archives/2019/index.html","d7a660b5bc3b6fa7f42d913302d87bb4"],["/res-256.github.io/archives/2020/04/index.html","8548a712a33ee82365a707c936e08a61"],["/res-256.github.io/archives/2020/08/index.html","5d5e876614a44375677f8db43e86b03f"],["/res-256.github.io/archives/2020/10/index.html","5bc28421832a1682581a3107707f06ec"],["/res-256.github.io/archives/2020/11/index.html","01c1df786da82f5c7ec4be27c7020a2d"],["/res-256.github.io/archives/2020/12/index.html","0f098f3c5aa313dddc0f3350ae26231f"],["/res-256.github.io/archives/2020/index.html","666d7926349ba5ddf2fc2bd6f684b906"],["/res-256.github.io/archives/index.html","0628b5de13aaebbc9b2e9b9e668a2d60"],["/res-256.github.io/archives/page/2/index.html","f8331eeaf2759661bed5cd6169ed5d2c"],["/res-256.github.io/artitalk/index.html","09c9620252c20ce1fba7b70e096d7af7"],["/res-256.github.io/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/res-256.github.io/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/res-256.github.io/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/res-256.github.io/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/res-256.github.io/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/res-256.github.io/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/res-256.github.io/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/res-256.github.io/bb/index.html","ee33cd26122fce3b576698ad6e4bd655"],["/res-256.github.io/box/about/index.html","334c6c7252c06fcaa3bc16343ffad56d"],["/res-256.github.io/box/index.html","275509e1ded21066059b8272780f29ac"],["/res-256.github.io/categories/Hexo/index.html","e6390cd2bad3cb6698a50febb6ff8338"],["/res-256.github.io/categories/ToolBox/IDEA/index.html","6a2056495577a676921ef6bbd0ec96ac"],["/res-256.github.io/categories/ToolBox/PictureBed/index.html","e0d1c420f103cf285cfee9ce7a4f2c3e"],["/res-256.github.io/categories/ToolBox/index.html","e29367999f58588c2bf1da6fa62f6ea9"],["/res-256.github.io/categories/index.html","0433175147aae316c10da458514e2a2b"],["/res-256.github.io/categories/下载/index.html","7ccbbe429dda25312386f8648ed498e5"],["/res-256.github.io/categories/下载/转载内容/index.html","d58bdba5e2fe7afed239ba7aac5cc298"],["/res-256.github.io/categories/外挂标签/index.html","617f99c2f7070e12bc087079ce492ff7"],["/res-256.github.io/categories/技术/index.html","338df181d3de08bb9a738114a3611691"],["/res-256.github.io/categories/数据结构与算法/index.html","24fceb0d3b77c2e0d69ee278707cafb1"],["/res-256.github.io/categories/数据结构与算法/二叉树/index.html","7c1859121cae2ddb8e3a027c31ab2c55"],["/res-256.github.io/categories/数据结构与算法/堆/index.html","379af7b599bfeeef982122c624b58a80"],["/res-256.github.io/categories/转载/index.html","8da3f1f8c107114a141bd155540e26bc"],["/res-256.github.io/categories/骚话/index.html","565d926b4a69d9c441f70cf9dc70d59b"],["/res-256.github.io/confession/css/theme.css","cba2aff1f4d97b53c9f8e5672deb490b"],["/res-256.github.io/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/res-256.github.io/confession/images/2.jpg","5defeb0874f176d361cf31864bae07ae"],["/res-256.github.io/confession/images/3.jpg","bd72ec1b747127452e47e9c9aed75a24"],["/res-256.github.io/confession/images/emoji_bixin.jpg","48c03878525aebf53987348574cbab66"],["/res-256.github.io/confession/images/emoji_kelian.jpg","d5fae6391e74e3b5cbdb3837c8e25d30"],["/res-256.github.io/confession/images/music_note_big.png","a1547b442fa322bddba0f24d206ce494"],["/res-256.github.io/confession/index.html","e278104b03df3bbf757eb83ee6ed3c56"],["/res-256.github.io/confession/js/jquery-2.0.3.min.js","07938d527840c6dc063a7a258c51ed8a"],["/res-256.github.io/confession/js/jweixin-1.2.0.js","0137753ba8648928c0d356da78e0b6a8"],["/res-256.github.io/confession/js/start_onlyyou.js","00c547f726c1067b45bfc68464790f44"],["/res-256.github.io/confession/js/theme_common.js","656505a77f00337351662df413f30b73"],["/res-256.github.io/confession/js/typed.min.js","4f25cb0bb2c78257cca2765cb7994d54"],["/res-256.github.io/css/artitalk.min.css","2338b0dbd97c5cef3f13081188c619a2"],["/res-256.github.io/css/chocolate.css","b73f42653d9e15fb2e9d49f459a42d57"],["/res-256.github.io/css/font.css","2f3e1c91fbcd09fae06bd0b5918bc5c8"],["/res-256.github.io/css/index.css","780792aaebe9f2cf0fb09fe708e7e061"],["/res-256.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/res-256.github.io/css/ysnsn.css","1c2853a8277a64f2011c1c3d75f5a8e9"],["/res-256.github.io/homepage/assets/css/font.min.css","5a0a11c284ce1ba377edbcb3b877d24b"],["/res-256.github.io/homepage/assets/css/style.css","f9de909526e0e1012077a382051e8b1a"],["/res-256.github.io/homepage/assets/img/favicon.png","c6ff34f2316fe7572a29bc8d661d502c"],["/res-256.github.io/homepage/assets/js/background.js","a421d4b5d23c4e399350589ebc3ae93c"],["/res-256.github.io/homepage/assets/js/main.js","5938f77a801f005652f2de976bd0cd77"],["/res-256.github.io/homepage/index.html","a783711c9d34cc88b69ecc5f193d548a"],["/res-256.github.io/img/1.gif","14306fa49578be775db5a521f6dff77a"],["/res-256.github.io/img/2.jpg","5defeb0874f176d361cf31864bae07ae"],["/res-256.github.io/img/3.jpg","bd72ec1b747127452e47e9c9aed75a24"],["/res-256.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/res-256.github.io/img/avatar.png","3f0b8ceeb7a2ab52e912285a725fb325"],["/res-256.github.io/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/res-256.github.io/img/emoji_bixin.jpg","48c03878525aebf53987348574cbab66"],["/res-256.github.io/img/emoji_kelian.jpg","d5fae6391e74e3b5cbdb3837c8e25d30"],["/res-256.github.io/img/favicon.png","9609cf76f1a5a6803e3016dc69970a9f"],["/res-256.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/res-256.github.io/img/icp.png","75865b1a4dcbb3648f52c7aa36c06f4b"],["/res-256.github.io/img/loading.gif","35dd31e31958064b147c1a9c9a2623c6"],["/res-256.github.io/img/music_note_big.png","a1547b442fa322bddba0f24d206ce494"],["/res-256.github.io/index.html","58f9d578165af4a8f0c3f10255b2372a"],["/res-256.github.io/js/ClickShowText.js","8172fee7ded44ae7b7bcb73fe3caf119"],["/res-256.github.io/js/DigitalRain.js","10ad69afa3d50bb48995a2f8bd855fea"],["/res-256.github.io/js/FunnyTitle.js","9d00375ee182236008838042c6e40a26"],["/res-256.github.io/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/res-256.github.io/js/artitalk.js","346f61002cdcb1b374985d3b717239a5"],["/res-256.github.io/js/baiduanalysis.js","5631f24964c0d4fe66fe589f3bbdcae7"],["/res-256.github.io/js/calendar.js","7c97c12ab5c2c59378bcef3ea8c4594b"],["/res-256.github.io/js/cdn_post.js","25b81ddc876a94f0ce8f0efddd3700d5"],["/res-256.github.io/js/chocolate.js","9e0da6ecb01e3f965374d12b5aba3261"],["/res-256.github.io/js/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/res-256.github.io/js/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/res-256.github.io/js/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/res-256.github.io/js/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/res-256.github.io/js/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/res-256.github.io/js/foot.js","8febac6976e8d3a16f40ebed420aa5c9"],["/res-256.github.io/js/ip.js","c723c107464ec9188ae8ca2c648b5021"],["/res-256.github.io/js/jquery-2.0.3.min.js","72988bcd9f0193a8595e61d34ea37c6b"],["/res-256.github.io/js/jweixin-1.2.0.js","8c7380a5600b304f3424fa8971187ba3"],["/res-256.github.io/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/res-256.github.io/js/main.js","b382597891e958e71bb7c1099977ec66"],["/res-256.github.io/js/maodian.js","ff8b5432cba48a4a814ab85c29591098"],["/res-256.github.io/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/res-256.github.io/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/res-256.github.io/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/res-256.github.io/js/showdown.min.js","c6379016080ac38f712de1e5bafa53dc"],["/res-256.github.io/js/snow.js","0c7ce51b942e50560520914734cc5469"],["/res-256.github.io/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/res-256.github.io/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/res-256.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/res-256.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/res-256.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/res-256.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/res-256.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/res-256.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/res-256.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/res-256.github.io/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/res-256.github.io/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/res-256.github.io/js/volantis.js","e9816bea97d1480045de219158e3df8d"],["/res-256.github.io/link/index.html","00ff96ea687d9c9363f9cd9b683f2ce2"],["/res-256.github.io/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/res-256.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/res-256.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/res-256.github.io/music/index.html","8c13a346995edeeeecd4cf4cbaea771f"],["/res-256.github.io/page/2/index.html","a9c2b2b6b27d407a30b5dbcf4ae551d3"],["/res-256.github.io/post/26d47f8f.html","ab55564c2815efddb17b6e08e3f70375"],["/res-256.github.io/post/2faa635d.html","a09cf7572363eb744ef22c0225f6ccf9"],["/res-256.github.io/post/43511.html","453f91ccde177b0cfbfc691d0985b477"],["/res-256.github.io/post/4e66a6ce.html","b26c3ccdbc120b5c8da554d4209c7bfc"],["/res-256.github.io/post/58458.html","a646123b1a423ce8d5f59019f7c75dd5"],["/res-256.github.io/post/641eb086.html","b5c5d353bbd7ce277a04da6b997b2618"],["/res-256.github.io/post/676bc2fe.html","f257e1ff3009d1ccf4e8c8b7f91a419b"],["/res-256.github.io/post/6b8663d.html","62f7e517e52fa587cdaec074c9a5704b"],["/res-256.github.io/post/71c1c665.html","68ddbeab23728a78b324b3e31bc1ed77"],["/res-256.github.io/post/74409432.html","ce977bf4de8bf548cd275ac21191e0c2"],["/res-256.github.io/post/82246bb3.html","61a2c2338125ca1596ad6cc3a7e39961"],["/res-256.github.io/post/8c24d4e6.html","37afe8c72167170cd542d81d6b600ffc"],["/res-256.github.io/post/9f6e8943.html","82cd4d1154251b1e551e0d93d32ffeaa"],["/res-256.github.io/post/c4d910e6.html","f21ad17fc575f1a778e6f1ff52ec6a0f"],["/res-256.github.io/post/e947bc6a.html","727e872c46e3a50d504e004cb1b28bf4"],["/res-256.github.io/post/f17fc012.html","d5d0b248d4c202afac26329cc0d50231"],["/res-256.github.io/post/f1a26c5e.html","fcb4de93fbf2faebb63c8c3aa1877c57"],["/res-256.github.io/sw-register.js","6f4d9a2022852077aecae380040582d8"],["/res-256.github.io/tags/Git/index.html","060b26ad184079a352f8e03bff68c716"],["/res-256.github.io/tags/HEXO/index.html","9cf933978eca68c49af345d8af21905e"],["/res-256.github.io/tags/Hexo/index.html","722b245410b03f08b1a29e756376fcdd"],["/res-256.github.io/tags/IDEA/index.html","bb7e31b301723597cf0788de07ee7bd9"],["/res-256.github.io/tags/Markdown/index.html","620e8dedb9d15267b3e340bd9792515a"],["/res-256.github.io/tags/NexT/index.html","5d376741df345033613f78d8480fceba"],["/res-256.github.io/tags/PictureBed/index.html","15b3bde76162d84b0af2e27433f857d3"],["/res-256.github.io/tags/Springboot/index.html","1f866412d790b64cdd4f37cf3bbf795e"],["/res-256.github.io/tags/Template/index.html","9b812335777b362c8b564c60601ddb20"],["/res-256.github.io/tags/ToolBox/index.html","e7d8f6552b35ee9c31eaf6348df334a6"],["/res-256.github.io/tags/butterfly/index.html","374fb0acf336685860dea89cd37cb2d1"],["/res-256.github.io/tags/index.html","8eb48aba685a46b23f73914b29e65443"],["/res-256.github.io/tags/二叉树/index.html","0fa0400b155bc463b5554f684c0df3c4"],["/res-256.github.io/tags/堆/index.html","6eacf5d10585c15f8020cc608cb03bec"],["/res-256.github.io/tags/小程序/index.html","e59a0d3791f8c1f24545a45030d1583c"],["/res-256.github.io/tags/数据结构与算法/index.html","f50820d8c002b8b19525c7cbde1e6c36"],["/res-256.github.io/tags/正则表达式/index.html","d6994d3b1090a044972197e9098c9b48"],["/res-256.github.io/tags/正文/index.html","b2c0cd3981a5118d3545d0e73010185b"],["/res-256.github.io/tags/网站/index.html","0dc0f14c6ddd51586002102c6044838c"],["/res-256.github.io/tags/色块/index.html","ecbaec320cfaeebce5f10616010699c5"],["/res-256.github.io/tags/论文/index.html","21c8a2ee19198a36d14d33005eae2ac3"],["/res-256.github.io/tags/转载/index.html","6b4677dc6863c4e111272322aca87297"],["/res-256.github.io/tags/转载内容/index.html","8b3a9887f971ae0bb6bfe934dc7c3451"],["/res-256.github.io/tags/邮箱验证/index.html","60535eaf0af47551c814c27761f733eb"]];
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
