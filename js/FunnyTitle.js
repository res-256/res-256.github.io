// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.8/images/funny.ico");
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.8/images/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});


/* 主页半透明度 */
.layout_page {
  opacity: 0.9;
}

/* 取消页脚背景 */
#footer {
  background: none;
}

/* 取消banner背景 */
#page-header {
  /* 采用透明的方式取消，最后一个0表示透明 */
  background-color: rgba(255, 255, 255, 0);
}

/* 滚动条优化 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgba(73, 177, 245, 0.2);
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  border-radius: 2em;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-moz-selection {
  color: #fff;
  background-color: #ec29f3;
}

/* 阅读模式 */
.read-mode {
  /* 字体大小 */
  font-size: 17px;
  /* 可以在这里引入自定义字体，具体方法请自行百度css引入字体 */
}
.read-mode #web_bg {
  /* 背景颜色 */
  background: #fdf6e3;
}

/* 隐藏按钮不消失 */
.hide-block>a.hide-button.open, .hide-inline>a.hide-button.open {
  display: inline-block;
}
/* 用于修复隐藏按钮的hover问题 */
#article-container a:hover {
  text-decoration: none;
  cursor: pointer;
}

/*友链相关*/
/* 边框呼吸灯效果 */
@keyframes link_custom {
  from {
    box-shadow: 0 0 5px var(--primary-color, grey),
      inset 0 0 5px var(--primary-color, grey),
      0 1px 0 var(--primary-color, grey);
  }
  to {
    box-shadow: 0 0 20px var(--primary-color, grey),
      inset 0 0 10px var(--primary-color, grey),
      0 1px 0 var(--primary-color, grey);
  }
}
@keyframes link_custom1 {
  0% {
    box-shadow: 0 0 4px #ca00ff;
  }
  25% {
    box-shadow: 0 0 16px #00b5e5;
  }
  50% {
    box-shadow: 0 0 4px #00f;
  }
  75% {
    box-shadow: 0 0 16px #b1da21;
  }
  100% {
    box-shadow: 0 0 4px red;
  }
}
@keyframes borderFlash {
  from {
    border-color: transparent;
  }
  to {
    border-color: var(--primary-color, grey);
  }
}
@keyframes auto_rotate_left {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes auto_rotate_right {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.flink#article-container .flink-list > .flink-list-item a:hover {
  color: #fff;
}
.flink .flink-list > .flink-list-item a {
  color: var(--primary-color, #49b1f5);
  text-decoration: none;
}
.flink .flink-list > .flink-list-item:hover {
  box-shadow: 0 2px 20px var(--primary-color, #49b1f5);
  animation-play-state: paused;
}
.flink#article-container .flink-list > .flink-list-item:before {
  background: var(--primary-color, #49b1f5);
}
.flink .flink-list > .flink-list-item {
  border: 0 solid var(--primary-color, #49b1f5);
}
.flink#article-container .flink-list > .flink-list-item:hover img {
  -webkit-transform: rotate(var(--primary-rotate));
  -moz-transform: rotate(var(--primary-rotate));
  -o-transform: rotate(var(--primary-rotate));
  -ms-transform: rotate(var(--primary-rotate));
  transform: rotate(var(--primary-rotate));
}
.flink#article-container .flink-list > .flink-list-item a .lauto {
  animation: auto_rotate_left var(--autotime) linear infinite;
}
.flink#article-container .flink-list > .flink-list-item a .rauto {
  animation: auto_rotate_right var(--autotime) linear infinite;
}
.flink#article-container .flink-list > .flink-list-item .customcolor {
  color: var(--namecolor, #1f2d3d);
}
.flink#article-container .flink-list > .flink-list-item .customcolor:hover {
  color: #fff;
}

/* 跳动的心 */
#heartbeat {
  color: red;
  animation: iconAnimate 1.33s ease-in-out infinite;
}
@-moz-keyframes iconAnimate {
  0%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(0.9);
  }
  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1);
  }
  50%,
  70% {
    transform: scale(1.1);
  }
}
@-webkit-keyframes iconAnimate {
  0%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(0.9);
  }
  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1);
  }
  50%,
  70% {
    transform: scale(1.1);
  }
}
@-o-keyframes iconAnimate {
  0%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(0.9);
  }
  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1);
  }
  50%,
  70% {
    transform: scale(1.1);
  }
}
@keyframes iconAnimate {
  0%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(0.9);
  }
  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1);
  }
  50%,
  70% {
    transform: scale(1.1);
  }
}

/* 头像点击特效 */
.card-info-avatar:hover {
  background: url(https://gitee.com/lovelijunyi/images/raw/master/20200530181856.gif);
}

/* 标签自定义颜色 */
/* 分类 */
.card-folder-animation {
  color: rgba(107, 72, 255, 1);
}
/* 最近文章 */
.card-history-animation {
  color: rgb(34, 218, 241);
}
/* 天气 */
.card-umbrella-animation {
  color: rgba(255, 80, 47, 1);
}
/* 标签 */
.card-tags-animation {
  color: rgba(13, 63, 103, 1);
}

/*上标外挂标签相关css*/
.tip {
  position: relative;
  color: #fff;
  background: #20a0ff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#20a0ff),
    to(#20b8ff)
  );
  background: -webkit-linear-gradient(left, #5b1bd0, #20b8ff);
  background: linear-gradient(90deg, #0092ff, #6a3fb9);
  padding: 6px 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0 3px 5px rgba(32, 160, 255, 0.5);
  box-shadow: 0 3px 5px rgba(32, 160, 255, 0.5);
  margin-bottom: 20px;
}
.tip p {
  margin: 5px 0 !important;
}
.tip:before {
  background: #20a0ff;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#0092ff),
    to(#20b8ff)
  );
  background: -webkit-linear-gradient(bottom, #0092ff, #20b8ff);
  background: linear-gradient(0deg, #0092ff, #20b8ff);
  border-radius: 50%;
  color: #fff;
  content: "\f129";
  font-size: 12px;
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24.5px;
  left: -12px;
  top: -12px;
  -webkit-box-shadow: 0 0 0 2.5px #fff;
  box-shadow: 0 0 0 2.5px #fff;
  font-weight: 600;
  font-family: "Font Awesome 5 Free";
  text-align: center;
}
.btn,
.getit a {
  position: relative;
}
.well .tip:before {
  -webkit-box-shadow: 0 0 0 2.5px #f7f8f9;
  box-shadow: 0 0 0 2.5px #f7f8f9;
}
.tip ol {
  margin: 0;
}
.tip.success {
  background: #61be33;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#61be33),
    to(#8fce44)
  );
  background: -webkit-linear-gradient(left, #61be33, #8fce44);
  background: linear-gradient(90deg, #61be33, #8fce44);
  text-shadow: 0 -1px #61be33;
  -webkit-box-shadow: 0 3px 5px rgba(104, 195, 59, 0.5);
  box-shadow: 0 3px 5px rgba(104, 195, 59, 0.5);
}
.tip.success:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#52bb1d),
    to(#95d34b)
  );
  background: -webkit-linear-gradient(bottom, #52bb1d, #95d34b);
  background: linear-gradient(0deg, #52bb1d, #95d34b);
  content: "\f00c";
  text-shadow: 0 -1px #61be33;
}
.tip.warning {
  background: #ff953f;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff953f),
    to(#ffb449)
  );
  background: -webkit-linear-gradient(left, #ff953f, #ffb449);
  background: linear-gradient(90deg, #ff953f, #ffb449);
  text-shadow: 0 -1px #ff953f;
  -webkit-box-shadow: 0 3px 5px rgba(255, 154, 73, 0.5);
  box-shadow: 0 3px 5px rgba(255, 154, 73, 0.5);
}
.tip.warning:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff8f35),
    to(#ffc149)
  );
  background: -webkit-linear-gradient(bottom, #ff8f35, #ffc149);
  background: linear-gradient(0deg, #ff8f35, #ffc149);
  content: "\f12a";
  text-shadow: 0 -1px #ff953f;
}
.tip.error {
  background: #ff4949;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff4949),
    to(#ff7849)
  );
  background: -webkit-linear-gradient(left, #ff4949, #ff7849);
  background: linear-gradient(90deg, #ff4949, #ff7849);
  text-shadow: 0 -1px #ff4949;
  -webkit-box-shadow: 0 3px 5px rgba(255, 73, 73, 0.5);
  box-shadow: 0 3px 5px rgba(255, 73, 73, 0.5);
}
.tip.error:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff3838),
    to(#ff7849)
  );
  background: -webkit-linear-gradient(bottom, #ff3838, #ff7849);
  background: linear-gradient(0deg, #ff3838, #ff7849);
  content: "\f00d";
  text-shadow: 0 -1px #ff4949;
}
.tip.wtgo {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#3d8b48),
    to(#477837)
  );
  background: -webkit-linear-gradient(bottom, #3c3, #459431);
  background: linear-gradient(530deg, #78ca33, #25822c);
  content: "\f00d";
  text-shadow: 0 -1px #4cf706;
}
.tip.wtgo:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#3c0),
    to(#3c0)
  );
  background: -webkit-linear-gradient(bottom, #3c3, #459431);
  background: linear-gradient(776deg, #78ca33, #25822c);
  content: "\f0e7";
  text-shadow: 0 -1px #4cf706;
}
.tip.ban {
  background: #ff4949;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff4949),
    to(#ff3443)
  );
  background: -webkit-linear-gradient(left, #ff4949, #ff1022);
  background: linear-gradient(90deg, #ff4949, #f03b49);
  text-shadow: 0 -1px #ff4949;
  -webkit-box-shadow: 0 3px 5px rgba(255, 73, 73, 0.5);
  box-shadow: 0 3px 5px rgba(255, 73, 73, 0.5);
}
.tip.ban:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff3838),
    to(#ce4617)
  );
  background: -webkit-linear-gradient(bottom, #ff3838, #d23e49);
  background: linear-gradient(0deg, #ff3838, #ff1022);
  content: "\f05e";
  text-shadow: 0 -1px #ff4949;
}
.tip.home {
  background: #15e5ff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#5bc6d4) to(#0ec0ef)
  );
  backgroune: -webkit-linear-gradient(left, #0ec0ef, #80e0f9);
  background: linear-gradient(90deg, #0ec0ef, #80e0f7);
  text-shadow: 0 -1px #0ec0ef;
  -webkit-box-shadow: 0 3px 5px #01caff;
  box-shadow: 0 3px 5px #01caff;
}
.tip.home:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    form(#0ec0ee) to(#0ee0cc)
  );
  background: -webkit-linear-gradient(bottom, #0ec0ee, #0ec2ee);
  background: linear-gradient(0deg, #0ec0ee, #0ec0ea);
  content: "\f015";
  text-shadow: 0 -1px #0ec0ea;
}
.tip.important {
  background: #f3a700;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ffbd2b),
    to(#ffbd2b)
  );
  background: -webkit-linear-gradient(left, #ffbd2b, #ffd26f);
  background: linear-gradient(290deg, #ef6e6e, #ffb000);
  text-shadow: 0 -1px #a97a12;
  -webkit-box-shadow: 0 3px 5px #ffb000;
  box-shadow: 0 3px 5px #ffb000;
}
.tip.important:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff3838),
    to(#ffbd2b)
  );
  background: -webkit-linear-gradient(bottom, #ff3838, #ffbd2b);
  background: linear-gradient(270deg, #ffbd2b, #f5626d);
  content: "\f129";
  text-shadow: 0 -1px #ffbd2b;
}
.tip.ref {
  background: #00a9ff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#51a7bd33),
    to(#c7eef9)
  );
  background: -webkit-linear-gradient(left, #53cff1, #2e9fbd);
  background: linear-gradient(230deg, #47c0e0, #2dc342);
  text-shadow: 0 -1px #1bcdfc;
  -webkit-box-shadow: 0 3px 5px #1bcdfc;
  box-shadow: 0 3px 5px #20b1ad;
}
.tip.ref:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#00c3f7),
    to(#88d3e6)
  );
  background: -webkit-linear-gradient(bottom, #83e5ff, #0aa8d2);
  background: linear-gradient(270deg, #40c0e2, #3dc550);
  content: "\f021";
  text-shadow: 0 -1px #17cfff;
}
.tip.ffa {
  background: #1502ff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#51a7bd33),
    to(#8379ff)
  );
  background: -webkit-linear-gradient(left, #5246e2, #5246e2);
  background: linear-gradient(230deg, #40c0e2, #5247e2);
  text-shadow: 0 -1px #8278fd;
  -webkit-box-shadow: 0 3px 5px #4037a7;
  box-shadow: 1 3px 5px #5e52ec;
}
.tip.ffa:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#3020f3),
    to(#b1abf5)
  );
  background: -webkit-linear-gradient(bottom, #5246e2, #5246e2);
  background: linear-gradient(560deg, #40c0e2, #5246e2);
  content: "\f085";
  text-shadow: 0 -1px #098cf5;
}
.tip.key {
  background: #25c33b;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#51a7bd33),
    to(#8379ff)
  );
  background: -webkit-linear-gradient(left, #648798, #90a4ae);
  background: linear-gradient(230deg, #90a4ae, #b7a7a7);
  text-shadow: 0 -1px #c1c0d4;
  -webkit-box-shadow: 0 3px 5px #d3d2de;
  box-shadow: 1 3px 5px #d5d4de;
}
.tip.key:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#dddce8),
    to(#b1abf5)
  );
  background: -webkit-linear-gradient(bottom, #5246e2, #5246e2);
  background: linear-gradient(560deg, #bccdd2, #cfced4);
  content: "\f084";
  text-shadow: 0 -1px #a9b2b9;
}
.tip.socd {
  background: #25c33b;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#51a7bd33),
    to(#8379ff)
  );
  background: -webkit-linear-gradient(left, #648798, #90a4ae);
  background: linear-gradient(230deg, #ffaa0d, #deb455);
  text-shadow: 0 -1px #c1c0d4;
  -webkit-box-shadow: 0 3px 5px #d3d2de;
  box-shadow: 1 3px 5px #d5d4de;
}
.tip.socd:before {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#dddce8),
    to(#b1abf5)
  );
  background: -webkit-linear-gradient(bottom, #5246e2, #5246e2);
  background: linear-gradient(560deg, #f9ae07, #ffb615);
  content: "\f0f3";
  text-shadow: 0 -1px #ffb81b;
}

/*用于上标标签兼容黑暗模式，勿要删除*/

[data-theme="dark"] .tip {
  filter: brightness(0.7);
}
[data-theme="dark"] .tip {
  color: #4c4948;
}