<template>
  <div class="aside-box">
    <div class="aside-title">Linux 入门教程</div>
    <menu-box :menus="menus" :dictAble="true"></menu-box>
  </div>
</template>
<script>
import MenuBox from "./menu";
export default {
  name: "AsideBox",
  components: { MenuBox },
  data() {
    return {
      menus: [
        {
          title: "Linux 基础课程介绍",
          path: "/home"
        },
        {
          title: "操作系统（科普章节）",
          path: "/os",
          children: [
            {
              title: "操作系统的发展史",
              path: "/os/history"
            }
          ]
        },
        {
          title: "文件和目录（理解）",
          path: "/filedir"
        },
        {
          title: "Ubuntu 图形界面入门",
          path: "/ubuntu"
        },
        {
          title: "常用 Linux 命令的基本使用",
          path: "/linux",
          children: [
            {
              title: "Linux 终端命令格式",
              path: "/linux/format"
            },
            {
              title: "文件和目录常用命令",
              path: "/linux/filedir"
            },
            {
              title: "远程管理常用命令",
              path: "/linux/remote"
            },
            {
              title: "用户权限相关命令",
              path: "/linux/mod"
            },
            {
              title: "系统信息相关命令",
              path: "/linux/system"
            },
            {
              title: "其他命令",
              path: "/linux/other"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.aside-box {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 1.25;
  font-size: 14px;
  color: #364149;
  background-color: #fff;
  overflow-y: auto;
  .aside-title {
    position: sticky;
    top: 0;
    left: 0;
    padding: 10px 15px;
    background-color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>