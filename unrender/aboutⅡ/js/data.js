/*
 * @Author: N0ts
 * @Date: 2021-06-12 20:02:41
 * @LastEditTime: 2022-03-03 22:34:59
 * @Description: 我的第三个个人主页
 * @FilePath: /NutssssIndex3/js/data.js
 * @Mail：mail@n0ts.cn
 */

export default {
    themeSelect: "white",
    // 主题
    themes: {
        white: [
            // 背景颜色
            ["--bgColor", "rgb(255, 165, 92)"],
            // 第一屏背景颜色
            ["--firstBgColor", "linear-gradient(to top, rgb(255, 165, 92), rgb(255, 159, 49))"],
            // 山颜色
            ["--hillColor1", "rgb(115, 49, 54)"],
            ["--hillColor2", "rgb(131, 55, 59)"],
            ["--hillColor3", "rgb(162, 72, 80)"],
            ["--hillColor4", "rgb(221, 102, 107)"],
            // 大地颜色
            ["--earth", "linear-gradient(to top right, rgb(202, 112, 117), rgb(126, 50, 53))"],
            // 小草颜色
            ["--cao", "linear-gradient(to top, rgb(202, 112, 117), rgb(126, 50, 53))"],
            // 标题文字颜色
            ["--titleColor", "rgb(255, 69, 32)"],
            // 标题文字阴影
            ["--titleShadow", "2px 2px 0px rgba(255, 255, 255, .8), 0 0 10px rgba(0, 0, 0, .5)"],
            // 图标菜单阴影
            ["--iconShadow", "0 0 5px white"],
        ],
        dark: [
            // 背景颜色
            ["--bgColor", "rgb(48, 37, 95)"],
            // 第一屏背景颜色
            ["--firstBgColor", "linear-gradient(to top, rgb(78, 36, 88), rgb(13, 18, 51))"],
            // 山颜色
            ["--hillColor1", "rgb(36, 32, 74)"],
            ["--hillColor2", "rgb(41, 35, 94)"],
            ["--hillColor3", "rgb(65, 37, 71)"],
            ["--hillColor4", "rgb(87, 50, 95)"],
            // 大地颜色
            ["--earth", "linear-gradient(to top right, rgb(43, 38, 95), rgb(61, 36, 95))"],
            // 小草颜色
            ["--cao", "linear-gradient(to top, rgb(85, 49, 96), rgb(78, 72, 128))"],
            // 标题文字颜色
            ["--titleColor", "rgb(136, 65, 167)"],
            // 标题文字阴影
            ["--titleShadow", "2px 2px 0px rgba(255, 255, 255, .8), 0 0 10px rgba(0, 0, 0, .5)"],
            // 图标菜单阴影
            ["--iconShadow", "0 0 2px white"],
        ]
    },
    lovexhj1: {
        title: "我是 Adam",
        subTitle: "我终其一生都在探索和寻求，我活着是为了什么？",
        menu: [{
                name: "Hexo",
                icon: "fa-wordpress",
                link: "https://z555.icu/"
            },
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:h1553270051@163.com"
            },
            {
                name: "Github",
                icon: "fa-github",
                link: "https://gitee.com/res-256"
            },
            {
                name: "QQ",
                icon: "fa-qq",
                link: "https://wpa.qq.com/msgrd?v=3&uin=1553270051&site=qq&menu=yes"
            }
        ]
    },
    lovexhj2: {
        content: `                    <h1>你好！</h1>
        <h2>我是 Adam</h2>
        <p><b>临床医学生</b>一枚，22级大学生。</p>
        <p>喜欢Fork#️⃣代码</p>
        <p>喜欢骑车</p>
        <p>喜欢篮球</p>
        <p>即使前方的路看似绝境🌋，也要有硬生生为自己开辟出一条道路的勇气！💪</p>
        <p>
            Github：<a href="https://gitee.com/n0ts" target="_blank">📁Github</a>；Hexo：<a
                href="https://z555.icu/"
                target="_blank"
                >📚Blog</a
            >。
        </p>`,
        img: "https://jsd.cdn.zzko.cn/gh/res-256/pic@main/202210162055305.jpg"
    }
}