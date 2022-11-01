/*
 * @Author: N0ts
 * @Date: 2021-05-18 22:53:40
 * @LastEditTime: 2022-10-26 16:23:40
 * @Description: 前端配置
 * @FilePath: /heng/config/config.js
 * @Mail：mail@n0ts.cn
 */

export default {
    lovexhj: {
        // 后端地址
        ServerBase: "https://giteeapi.z555.icu/",
        // 码云账号
        owner: "res-256",
        // 仓库名称
        repo: "notes",
        // 页面刚加载文字
        loadingText: "正在打开小本本",
        // 首页
        lovexhjHeader: {
            // 首页标题
            title: "吐槽小本本",
            // 本本标题
            bookTitle: "Note"
        },
        // 目录页标题
        pageTitle: "目录",
        // 目录页副标题
        pageSubTitle: "点击就可以查看啦",
        // 当前页数 / 一次加载多少条数据
        pageloadNum: [1, 10],
        // 没有记仇时提示文字
        pageNone: "这么清静？还不去记仇？",
        // 切换按钮文字
        wdnmdTextButton: ["吐个槽", "查看小本本"],
        // 记仇标题提示文字
        wdnmdPlaceholder: "吐槽也要来个标题吧！",
        // 记仇内容提示文字
        editText: "这个槽我先吐了！",
        // 提交记仇按钮文字
        wdnmdSubmit: "记到小本本",
        // 记仇成功提醒文字
        wdnmdOk: "小本本又多了一条吐槽~",
        // 未填写密码提示文字
        passwordTitle: "吐槽也是需要密码的！",
        // 密码录入成功后提示文字
        passwordSetOk: "现在可以吐槽啦！",
        // 谁发的
        identity: [
            {
                // 名字
                name: "佩琪",
                // 颜色
                color: "#e84393"
            },
            {
                name: "乔治",
                color: "#0984e3"
            }
        ]
    }
};
