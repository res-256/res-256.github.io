/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/res-256.github.io/19CoV/index.html","9bdd92da293412e62ace5b40fb24e074"],["/res-256.github.io/2048/index.html","1a3408d41b0a6dc07e3965b2c5271130"],["/res-256.github.io/404.html","1da008042f837595701b8058fde927b8"],["/res-256.github.io/Butterfly/css/clouds_back.jpg","f4b04f285cf786aa4e49b12c180d7e16"],["/res-256.github.io/Butterfly/css/clouds_front.jpg","ac1d40d5d9c861e3e950d1cd190d6a3e"],["/res-256.github.io/Butterfly/css/clouds_left.jpg","e2cf7bbd6de42986ab8a8820e645ae24"],["/res-256.github.io/Butterfly/css/clouds_right.jpg","d7bf92c390f9fd0ab61ac5d30e6306f1"],["/res-256.github.io/Butterfly/css/clouds_top.jpg","a12aa45de57c8525e68895b80fbc33ea"],["/res-256.github.io/Butterfly/css/hazy_lake_top.jpg","7c8f0dc9625ecb805ec2f0861c18549f"],["/res-256.github.io/Butterfly/css/reset.css","765988c7d634d00625fd1dab67a0f927"],["/res-256.github.io/Butterfly/css/style.css","f64c27ad93f039b37256c4eb4768996b"],["/res-256.github.io/Butterfly/icon.png","b560bdb1c7ed8fe818219d63eb4f830b"],["/res-256.github.io/Butterfly/index.html","ee2d04b65e6b6e21431735f6d2ff7133"],["/res-256.github.io/Cat/index.html","9894fd7f38f50394cc375d08dcbfcd72"],["/res-256.github.io/Chest/index.html","974adf7a37b57fbaa6c8bf6e89bae07f"],["/res-256.github.io/Element/index.html","7189946e36f5b115926eb9a10eccccef"],["/res-256.github.io/Flud/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/res-256.github.io/Flud/app_badge.png","4ef867722c11cee79f712cf72c7f28da"],["/res-256.github.io/Flud/dat.gui.min.js","a6dd688c7f8dbf6faff76181e23ac077"],["/res-256.github.io/Flud/gp_badge.png","68b4283b0efeb1bb7b55b53e4f853ab2"],["/res-256.github.io/Flud/iconfont.ttf","6fbe6d852c410206aa1dbc06623a0016"],["/res-256.github.io/Flud/index.html","3953683214b6e6c771ae49adedaff504"],["/res-256.github.io/Flud/logo.png","36dd559eda52d475099b25ffd72f5e9e"],["/res-256.github.io/Flud/promo_back.png","e63cc621ae32c5932a134a451e68891c"],["/res-256.github.io/Flud/screenshot.jpg","5959783a45c34c28b89479212c9a5687"],["/res-256.github.io/Flud/script.js","5c595a6ebe3fe44306e18cb3cc0c330a"],["/res-256.github.io/Gallery/Avatars/index.html","801748f635ce63a2e991b3d2b8924dd8"],["/res-256.github.io/Gallery/DailyLife/index.html","ff6661b5c8a3794f56998d53df16ee7b"],["/res-256.github.io/Gallery/Girls/index.html","3215c9db1f652a83632701a51dba644c"],["/res-256.github.io/Gallery/Marvel/index.html","a3b538f52502cc16c5bf5db3e9ace4dc"],["/res-256.github.io/Gallery/Wallpapers/index.html","de72a43cc64abfb4ddcde316303f207f"],["/res-256.github.io/Gallery/index.html","709f6613b84b383a4ffc0f69d29b8a2a"],["/res-256.github.io/NetEase/icon.png","b560bdb1c7ed8fe818219d63eb4f830b"],["/res-256.github.io/NetEase/index.html","fe6c21d5c7a0d497b50cdbc5748932dc"],["/res-256.github.io/NetEase/网抑云一言热评.html","05ddf77887a0e2fb334f1a475247b1ba"],["/res-256.github.io/PacMan/index.html","668459c951e81129cfc468d4f84cff7f"],["/res-256.github.io/Piano/index.html","da92fc9447c6896e85928ed2d7b25cb7"],["/res-256.github.io/about/index.html","ee192818b44abc223524a58c6f6dca13"],["/res-256.github.io/archives/2019/03/index.html","9e3a1c5b3639f7ca060ca4bf0bd567c8"],["/res-256.github.io/archives/2019/04/index.html","e9a45bc2b8be3c7d10714026006a9d48"],["/res-256.github.io/archives/2019/05/index.html","f72a22ad0dbe7096f85b5267a702ed5d"],["/res-256.github.io/archives/2019/index.html","54b8c333e2f686f8c6bde17b4d1ad328"],["/res-256.github.io/archives/2020/04/index.html","8dd23f0edfda72f3dac0b9574db55b6e"],["/res-256.github.io/archives/2020/08/index.html","9d868f5eed459caaf225b0f156d4b96d"],["/res-256.github.io/archives/2020/10/index.html","24e4c82e7580f31c23a62bd97aa2ab25"],["/res-256.github.io/archives/2020/11/index.html","904e36a771ac0d762b1402b7d240c308"],["/res-256.github.io/archives/2020/12/index.html","2e66b06ccab1e9f0e131300b9d825e7e"],["/res-256.github.io/archives/2020/index.html","7e6a126834a30538ad82d04395fa0416"],["/res-256.github.io/archives/index.html","20b56d644c80a8c62ee3e19347ab89ba"],["/res-256.github.io/archives/page/2/index.html","12e18471b463369f6395f5ff195955da"],["/res-256.github.io/artitalk/index.html","09c9620252c20ce1fba7b70e096d7af7"],["/res-256.github.io/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/res-256.github.io/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/res-256.github.io/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/res-256.github.io/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/res-256.github.io/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/res-256.github.io/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/res-256.github.io/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/res-256.github.io/bb/index.html","ee33cd26122fce3b576698ad6e4bd655"],["/res-256.github.io/box/about/index.html","fc838116effc5344b7efc0560b004f99"],["/res-256.github.io/box/index.html","275509e1ded21066059b8272780f29ac"],["/res-256.github.io/categories/Hexo/index.html","54178d6f4f1dca95d3a4f3a5a56c72d1"],["/res-256.github.io/categories/ToolBox/IDEA/index.html","f3f4c658057eda04e79449e5bb7412d7"],["/res-256.github.io/categories/ToolBox/PictureBed/index.html","04e5226dfdbf5c03ad2e03dd2f751441"],["/res-256.github.io/categories/ToolBox/index.html","47350047160be97d8cbfb16551e128f4"],["/res-256.github.io/categories/index.html","253f8e1cafe8d1e732cd102f64fe7752"],["/res-256.github.io/categories/下载/index.html","508bb844606ad9aa06b44762fbfec901"],["/res-256.github.io/categories/下载/转载内容/index.html","71f0061f6e32f649cbc0d6729773b13c"],["/res-256.github.io/categories/外挂标签/index.html","f8c777f8b4668e0f19f1678259fb425b"],["/res-256.github.io/categories/技术/index.html","3cf9a4550f78c944eefc598727bf2358"],["/res-256.github.io/categories/数据结构与算法/index.html","3b396781b8cce4a5cd6126f13d2e8bb3"],["/res-256.github.io/categories/数据结构与算法/二叉树/index.html","b1d85f1a3c74bf53dea7cc60fe9277d2"],["/res-256.github.io/categories/数据结构与算法/堆/index.html","9a26ecb17bd169263980e3ca833aa8bd"],["/res-256.github.io/categories/转载/index.html","7480a8df42d900f28f758f047991e5ed"],["/res-256.github.io/categories/骚话/index.html","33d57bd7886bb37056e6d1069e382126"],["/res-256.github.io/confession/css/theme.css","cba2aff1f4d97b53c9f8e5672deb490b"],["/res-256.github.io/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/res-256.github.io/confession/images/2.jpg","5defeb0874f176d361cf31864bae07ae"],["/res-256.github.io/confession/images/3.jpg","bd72ec1b747127452e47e9c9aed75a24"],["/res-256.github.io/confession/images/emoji_bixin.jpg","48c03878525aebf53987348574cbab66"],["/res-256.github.io/confession/images/emoji_kelian.jpg","d5fae6391e74e3b5cbdb3837c8e25d30"],["/res-256.github.io/confession/images/music_note_big.png","a1547b442fa322bddba0f24d206ce494"],["/res-256.github.io/confession/index.html","27dbabe5c7cd138a8967cb5209f8d8ec"],["/res-256.github.io/confession/js/jquery-2.0.3.min.js","07938d527840c6dc063a7a258c51ed8a"],["/res-256.github.io/confession/js/jweixin-1.2.0.js","0137753ba8648928c0d356da78e0b6a8"],["/res-256.github.io/confession/js/start_onlyyou.js","00c547f726c1067b45bfc68464790f44"],["/res-256.github.io/confession/js/theme_common.js","656505a77f00337351662df413f30b73"],["/res-256.github.io/confession/js/typed.min.js","4f25cb0bb2c78257cca2765cb7994d54"],["/res-256.github.io/css/artitalk.min.css","2338b0dbd97c5cef3f13081188c619a2"],["/res-256.github.io/css/chocolate.css","b73f42653d9e15fb2e9d49f459a42d57"],["/res-256.github.io/css/font.css","2f3e1c91fbcd09fae06bd0b5918bc5c8"],["/res-256.github.io/css/index.css","780792aaebe9f2cf0fb09fe708e7e061"],["/res-256.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/res-256.github.io/css/ysnsn.css","1c2853a8277a64f2011c1c3d75f5a8e9"],["/res-256.github.io/homepage/assets/css/font.min.css","5a0a11c284ce1ba377edbcb3b877d24b"],["/res-256.github.io/homepage/assets/css/style.css","f9de909526e0e1012077a382051e8b1a"],["/res-256.github.io/homepage/assets/img/favicon.png","c6ff34f2316fe7572a29bc8d661d502c"],["/res-256.github.io/homepage/assets/js/background.js","a421d4b5d23c4e399350589ebc3ae93c"],["/res-256.github.io/homepage/assets/js/main.js","5938f77a801f005652f2de976bd0cd77"],["/res-256.github.io/homepage/index.html","a783711c9d34cc88b69ecc5f193d548a"],["/res-256.github.io/img/1.gif","14306fa49578be775db5a521f6dff77a"],["/res-256.github.io/img/2.jpg","5defeb0874f176d361cf31864bae07ae"],["/res-256.github.io/img/3.jpg","bd72ec1b747127452e47e9c9aed75a24"],["/res-256.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/res-256.github.io/img/avatar.png","3f0b8ceeb7a2ab52e912285a725fb325"],["/res-256.github.io/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/res-256.github.io/img/emoji_bixin.jpg","48c03878525aebf53987348574cbab66"],["/res-256.github.io/img/emoji_kelian.jpg","d5fae6391e74e3b5cbdb3837c8e25d30"],["/res-256.github.io/img/favicon.png","9609cf76f1a5a6803e3016dc69970a9f"],["/res-256.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/res-256.github.io/img/icp.png","75865b1a4dcbb3648f52c7aa36c06f4b"],["/res-256.github.io/img/loading.gif","35dd31e31958064b147c1a9c9a2623c6"],["/res-256.github.io/img/music_note_big.png","a1547b442fa322bddba0f24d206ce494"],["/res-256.github.io/index.html","277029f39a7cbac20c78b5490fe78e69"],["/res-256.github.io/js/ClickShowText.js","8172fee7ded44ae7b7bcb73fe3caf119"],["/res-256.github.io/js/DigitalRain.js","10ad69afa3d50bb48995a2f8bd855fea"],["/res-256.github.io/js/FunnyTitle.js","9d00375ee182236008838042c6e40a26"],["/res-256.github.io/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/res-256.github.io/js/artitalk.js","346f61002cdcb1b374985d3b717239a5"],["/res-256.github.io/js/baiduanalysis.js","5631f24964c0d4fe66fe589f3bbdcae7"],["/res-256.github.io/js/calendar.js","7c97c12ab5c2c59378bcef3ea8c4594b"],["/res-256.github.io/js/cdn_post.js","25b81ddc876a94f0ce8f0efddd3700d5"],["/res-256.github.io/js/chocolate.js","9e0da6ecb01e3f965374d12b5aba3261"],["/res-256.github.io/js/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/res-256.github.io/js/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/res-256.github.io/js/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/res-256.github.io/js/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/res-256.github.io/js/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/res-256.github.io/js/foot.js","8febac6976e8d3a16f40ebed420aa5c9"],["/res-256.github.io/js/ip.js","c723c107464ec9188ae8ca2c648b5021"],["/res-256.github.io/js/jquery-2.0.3.min.js","72988bcd9f0193a8595e61d34ea37c6b"],["/res-256.github.io/js/jweixin-1.2.0.js","8c7380a5600b304f3424fa8971187ba3"],["/res-256.github.io/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/res-256.github.io/js/main.js","b382597891e958e71bb7c1099977ec66"],["/res-256.github.io/js/maodian.js","ff8b5432cba48a4a814ab85c29591098"],["/res-256.github.io/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/res-256.github.io/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/res-256.github.io/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/res-256.github.io/js/showdown.min.js","c6379016080ac38f712de1e5bafa53dc"],["/res-256.github.io/js/snow.js","0c7ce51b942e50560520914734cc5469"],["/res-256.github.io/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/res-256.github.io/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/res-256.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/res-256.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/res-256.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/res-256.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/res-256.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/res-256.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/res-256.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/res-256.github.io/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/res-256.github.io/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/res-256.github.io/js/volantis.js","e9816bea97d1480045de219158e3df8d"],["/res-256.github.io/link/index.html","d43d883e96a3692db096911570607569"],["/res-256.github.io/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/res-256.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/res-256.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/res-256.github.io/music/index.html","ed8f68863f1f86223a270b7584859a8b"],["/res-256.github.io/page/2/index.html","1ab7408db64ceb5071896d53684c9f48"],["/res-256.github.io/post/26d47f8f.html","640cbafd606c92b3b6940ae500928ef3"],["/res-256.github.io/post/2faa635d.html","a2753e7eba3ba2fa731dcf6ec39d4582"],["/res-256.github.io/post/43511.html","896c3729591cdbe85807c1cf7e009609"],["/res-256.github.io/post/4e66a6ce.html","cc3764fe7c49e4609657b5c5bbc98353"],["/res-256.github.io/post/58458.html","b56549a6b177c4e40d4cf7047bb5a5db"],["/res-256.github.io/post/641eb086.html","56685f98e5e072a8333e5c9dddd57e46"],["/res-256.github.io/post/676bc2fe.html","6b4dcb1181cf751ceb02d29eeed151df"],["/res-256.github.io/post/6b8663d.html","4f242bb8ce33a52c130a50559e3f9161"],["/res-256.github.io/post/71c1c665.html","bb9dd659cf8c3af82ca1cee1795e8d3b"],["/res-256.github.io/post/74409432.html","e74ee57ce337e7437df09fa44e7cf0f1"],["/res-256.github.io/post/82246bb3.html","fd9e7d7ae035f0cb4ea5845e9f78cb36"],["/res-256.github.io/post/8c24d4e6.html","9239176342b25790de58ea1b924cf0ec"],["/res-256.github.io/post/9f6e8943.html","4fbf12a27bfcd1397c351b28fb5d6050"],["/res-256.github.io/post/c4d910e6.html","b59470810618e558920197153c7bc54d"],["/res-256.github.io/post/e947bc6a.html","a2e4e524ea0592b0e09928c6af8e1460"],["/res-256.github.io/post/f17fc012.html","b27c381f1a6ff2f31ab3d813eccf895b"],["/res-256.github.io/post/f1a26c5e.html","059a79a206ed66b1368dd18f74602a51"],["/res-256.github.io/sw-register.js","b6d20b256af5c459b51f1ce45c6278ac"],["/res-256.github.io/tags/Git/index.html","a50c0ff12f50a51680e4c3fe2d67d52a"],["/res-256.github.io/tags/HEXO/index.html","739f6680696c4395d59c88105ec48143"],["/res-256.github.io/tags/Hexo/index.html","2918605bcbfefbc9748f83e719cd5e20"],["/res-256.github.io/tags/IDEA/index.html","547dcedfa8e4f0719d2b1e2ff8f4a52a"],["/res-256.github.io/tags/Markdown/index.html","a682a0d59518701d5b4cc572c230ccfb"],["/res-256.github.io/tags/NexT/index.html","47a079cc71b037029289bbce1ec0ce8e"],["/res-256.github.io/tags/PictureBed/index.html","49c9154cf9c119da3727dd0384a65eac"],["/res-256.github.io/tags/Springboot/index.html","d567d52c1af4c38b767aa9e9614590a4"],["/res-256.github.io/tags/Template/index.html","b2d9154a08a8dfb839d7944c2bab3a5e"],["/res-256.github.io/tags/ToolBox/index.html","217d6b82f664e6dfbda893fe21ae0f5a"],["/res-256.github.io/tags/butterfly/index.html","1d53ac93d384b30463f60face6591665"],["/res-256.github.io/tags/index.html","8ae84f37fddf9f06b5270a18af17ee56"],["/res-256.github.io/tags/二叉树/index.html","f0335ed2f139478cdb585a3864a50de2"],["/res-256.github.io/tags/堆/index.html","733966ea3e04098096a2298a0cf836ce"],["/res-256.github.io/tags/小程序/index.html","f186bb48506592132663202b9e56b3c8"],["/res-256.github.io/tags/数据结构与算法/index.html","de171d55a10baa58b0f0166b767ca342"],["/res-256.github.io/tags/正则表达式/index.html","43dee9f9738b672b3b34a436328314c7"],["/res-256.github.io/tags/正文/index.html","5e6ea8eddb8c997e6442e93938d49d68"],["/res-256.github.io/tags/网站/index.html","da5666b0d794b133c9ecfe2bdc2c5f13"],["/res-256.github.io/tags/色块/index.html","9c318bdc5f1fde4bc21f90a663d4d19b"],["/res-256.github.io/tags/论文/index.html","5a8fecb6edcbab5ef4f02b9037b7e6b8"],["/res-256.github.io/tags/转载/index.html","acc40a88d0d27e73009b16e308d36834"],["/res-256.github.io/tags/转载内容/index.html","9f97948c73960086b83a4816575cd5d2"],["/res-256.github.io/tags/邮箱验证/index.html","34894facb9dc39ad369fbf24f9eed745"]];
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
