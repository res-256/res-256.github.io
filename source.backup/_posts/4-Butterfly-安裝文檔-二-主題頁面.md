---
title: Butterfly 安装文档(二) 主题页面
date: 2020-05-28 22:34:41
tags:
  - 教程
  - Hexo
  - 主题
  - butterfly
categories: 
  - 代码
keywords: 'hexo,butterfly,主题,doc,教程,文档'
description: Butterfly安装文档-主题页面
cover: https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png
abbrlink: dc584b87
top: 99
comments: false
---

{% note blue 'fas fa-bullhorn' %}

 📖  本教程更新於 2022 年 08 月 18 日，教程的内容针对最新**稳定版**而更新（如果你是旧版，教程会有些出入，请留意）

 🦋  Butterfly 已经更新到 [4.4.0](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/4.4.0)

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  文档目录

{% post_link Butterfly-安装文档-一-快速开始 ' 🚀 快速开始' %} - {% post_link Butterfly-安装文档-二-主题页面 ' 📑 主题页面' %} - {% post_link Butterfly-安装文档-三-主题配置-1 ' 🛠 主题配置-1' %} - {% post_link Butterfly-安装文档-四-主题配置-2 ' ⚔️ 主题配置-2' %} - {% post_link Butterfly-安装文档-五-主题问答 ' ❓ 主题问答' %} - {% post_link Butterfly-安装文档-六-进阶教程 ' ⚡️ 进阶教程' %} - {% post_link Butterfly-安装文档-七-更新日志 ' ✨ 更新日志' %} - {% post_link Butterfly-打赏 ' 🤞 打赏' %}

{% endnote %}

{% note orange 'fas fa-magic' %}

你可以通过右下角的 **简** 按钮切换为简体显示 

{% endnote %}

***

## Front-matter

**Front-matter 是 markdown 文件最上方以 `---` 分隔的区域，用於指定个别档案的变数。**

- Page Front-matter 用於`页面`配置
- Post Front-matter 用於`文章页`配置

{% note info %}

如果标注`可选`的参数，可根据自己需要添加，不用全部都写在markdown里

{% endnote %}

### Page Front-matter

```markdown
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---
```

| 写法             | 解释                                                         |
| ---------------- | ------------------------------------------------------------ |
| title            | 【必需】页面标题                                             |
| date             | 【必需】页面创建日期                                         |
| type             | 【必需】标签、分类和友情链接三个页面需要配置                 |
| updated          | 【可选】页面更新日期                                         |
| description      | 【可选】页面描述                                             |
| keywords         | 【可选】页面关键字                                           |
| comments         | 【可选】显示页面评论模块(默认 true)                          |
| top_img          | 【可选】页面顶部图片                                         |
| mathjax          | 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false) |
| katex            | 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false) |
| aside            | 【可选】显示侧边栏 (默认 true)                               |
| aplayer          | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的`音乐` 配置 |
| highlight_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置) |

### Post Front-matter

```markdown
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
```

| 写法                  | 解释                                                         |
| :-------------------- | ------------------------------------------------------------ |
| title                 | 【必需】文章标题                                             |
| date                  | 【必需】文章创建日期                                         |
| updated               | 【可选】文章更新日期                                         |
| tags                  | 【可选】文章标签                                             |
| categories            | 【可选】文章分类                                             |
| keywords              | 【可选】文章关键字                                           |
| description           | 【可选】文章描述                                             |
| top_img               | 【可选】文章顶部图片                                         |
| cover                 | 【可选】文章缩略图(如果没有设置top_img,文章页顶部将显示缩略图，可设为false/图片地址/留空) |
| comments              | 【可选】显示文章评论模块(默认 true)                          |
| toc                   | 【可选】显示文章TOC(默认为设置中toc的enable配置)             |
| toc_number            | 【可选】显示toc_number(默认为设置中toc的number配置)          |
| toc_style_simple      | 【可选】显示 toc 简洁模式                                    |
| copyright             | 【可选】显示文章版权模块(默认为设置中post_copyright的enable配置) |
| copyright_author      | 【可选】文章版权模块的`文章作者`                             |
| copyright_author_href | 【可选】文章版权模块的`文章作者`链接                         |
| copyright_url         | 【可选】文章版权模块的`文章连结`链接                         |
| copyright_info        | 【可选】文章版权模块的`版权声明`文字                         |
| mathjax               | 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false) |
| katex                 | 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false) |
| aplayer               | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的`音乐` 配置 |
| highlight_shrink      | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置) |
| aside                 | 【可选】显示侧边栏 (默认 true)                               |

## 标签页

1. 前往你的 Hexo 博客的根目录

2. 输入`hexo new page tags`

3. 你会找到`source/tags/index.md`这个文件

4. 修改这个文件：

   **记得添加 `type: "tags"`**

```markdown
---
title: 标签
date: 2018-01-05 00:00:00
type: "tags"
---
```

## 分类页

1. 前往你的 Hexo 博客的根目录

2. 输入`hexo new page categories`

3. 你会找到`source/categories/index.md`这个文件

4. 修改这个文件：

   **记得添加 `type: "categories"`**

```markdown
---
title: 分类
date: 2018-01-05 00:00:00
type: "categories"
---
```

## 友情链接

为你的博客创建一个友情链接！

### 创建友情链接页面

1. 前往你的 Hexo 博客的根目录

2. 输入 `hexo new page link`

3. 你会找到`source/link/index.md`这个文件

4. 修改这个文件：

   记得添加 `type: "link"`

```markdown
---
title: 友情链接
date: 2018-06-07 22:17:49
type: "link"
---
```

### 友情链接添加

{% tabs flink-add %}

<!-- tab 本地生成 -->

在Hexo博客目录中的`source/_data`（如果没有 _data 文件夹，请自行创建），创建一个文件`link.yml`

```yml
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网志框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
```

`class_name`  和 `class_desc` 支持 html 格式书写，如不需要，也可以留空。

<!-- endtab -->

<!-- tab 远程拉取 -->

从 `4.0.0` 开始，支持从远程加载友情链接，远程拉取只支持 `json`。

注意： 选择远程加载後，本地生成的方法会无效。

在  `source/link/index.md` 这个文件的 front-matter 添加远程链接

```markdown
flink_url: xxxxx
```

Json 的格式

```json
[
  {
    "class_name": "友情链接",
    "class_desc": "那些人，那些事",
    "link_list": [
      {
        "name": "Hexo",
        "link": "https://hexo.io/zh-tw/",
        "avatar": "https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",
        "descr": "快速、简单且强大的网志框架"
      }
    ]
  },
  {
    "class_name": "网站",
    "class_desc": "值得推荐的网站",
    "link_list": [
      {
        "name": "Youtube",
        "link": "https://www.youtube.com/",
        "avatar": "https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png",
        "descr": "视频网站"
      },
      {
        "name": "Weibo",
        "link": "https://www.weibo.com/",
        "avatar": "https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png",
        "descr": "中国最大社交分享平台"
      },
      {
        "name": "Twitter",
        "link": "https://twitter.com/",
        "avatar": "https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png",
        "descr": "社交分享平台"
      }
    ]
  }
]
```

<!-- endtab -->

{% endtabs %}

### 友情链接界面设置

由 2.2.0 起，友情链接界面可以由用户自己自定义，只需要在友情链接的md档设置就行，以普通的Markdown格式书写。

## 图库

图库页面只是普通的页面，你只需要`hexo n page xxxxx` 创建你的页面就行

然後使用标签外挂 [galleryGroup](https://butterfly.js.org/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A%E5%9C%96%E5%BA%AB)，具体用法请查看对应的内容。

```yaml
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关於漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关於OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关於漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关於OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

### 子页面

子页面也是普通的页面，你只需要`hexo n page xxxxx` 创建你的页面就行

然後使用标签外挂 [gallery](/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A)，具体用法请查看对应的内容。

```yaml
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
```

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

{% note pink 'fas fa-sitemap' %}

如果你想要使用 `/photo/ohmygirl` 这样的链接显示你的图片内容

你可以把创建好的 `ohmygirl`整个文件夹移到 `photo`文件夹里去

{% endnote %}

## 404页面

主题内置了一个简单的404页面，可在设置中开启

{% note info %}

本地预览时，访问出错的网站是不会跳到404页面的。

如需本地预览，请访问`http://localhost:4000/404.html`

{% endnote %}

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: "页面没有找到"
  background: 
```

![](https://fastly.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-error404.png)

{% btn '/posts/4aa8abbe/',🛠 Butterfly 安装文档(三) 主题配置,far fa-hand-point-right,block pink right larger %}