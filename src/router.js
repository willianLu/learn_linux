import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/index";
import Os from "@/views/os";
import OsHistory from "@/views/os_history";
import Filedir from "@/views/filedir";
import Ubuntu from "@/views/ubuntu";
import Linux from "@/views/linux";
import LinuxFormat from "@/views/linux_format";
import LinuxFiledir from "@/views/linux_filedir";
import LinuxRemote from "@/views/linux_remote";
import LinuxMod from "@/views/linux_mod";
import LinuxSystem from "@/views/linux_system";
import LinuxOther from "@/views/linux_other";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/os",
      component: Os
    },
    {
      path: "/os/history",
      component: OsHistory
    },
    {
      path: "/filedir",
      component: Filedir
    },
    {
      path: "/ubuntu",
      component: Ubuntu
    },
    {
      path: "/linux",
      component: Linux
    },
    {
      path: "/linux/format",
      component: LinuxFormat
    },
    {
      path: "/linux/filedir",
      component: LinuxFiledir
    },
    {
      path: "/linux/remote",
      component: LinuxRemote
    },
    {
      path: "/linux/mod",
      component: LinuxMod
    },
    {
      path: "/linux/system",
      component: LinuxSystem
    },
    {
      path: "/linux/other",
      component: LinuxOther
    }
  ]
});

router.afterEach(() => {
  // 让页面回到顶部
  Vue.nextTick(() => {
    document.getElementById("main").scrollTop = 0;
  });
});
export default router;
