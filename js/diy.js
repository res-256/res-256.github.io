
// 添加图片，背景图片会在这里随机选取一个设置为banner
xiaokang.bannerList = [
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/25-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/23-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/24-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/2-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/27-min.jpg",
];
xiaokang.randomBanner(true);

    mobileSidebar: function () {
      var mobile_sidebar_menus = document.getElementById(
        "mobile-sidebar-menus"
      );
      var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
        "menus_item_child"
      );
      var menus_expand = mobile_sidebar_menus.getElementsByClassName(
        "menus-expand"
      );
      for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
        menus_expand[i].className += " menus-closed";
      }
      return this;
    },