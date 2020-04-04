<template>
  <div id="app" :style="`padding-left:${width}px`">
    <aside id="aside" :style="`width:${width}px`">
      <aside-box></aside-box>
    </aside>
    <main id="main">
      <header>
        <div class="align-justify" @click="handleAsideShow">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <article>
        <router-view></router-view>
      </article>
    </main>
  </div>
</template>

<script>
import AsideBox from "@/components/aside";
export default {
  name: "App",
  components: { AsideBox },
  data() {
    return {
      width: 298,
      isMini: false
    };
  },
  created() {
    this.isMini = document.body.clientWidth < 768;
    if (this.isMini) {
      this.width = 0;
    }
  },
  methods: {
    handleAsideShow() {
      if (this.width > 0) {
        this.width = 0;
      } else {
        this.width = this.isMini ? 200 : 298;
      }
    }
  }
};
</script>

<style lang="less">
html,
body,
#app,
#main {
  width: 100%;
  height: 100%;
}
#app {
  position: relative;
  box-sizing: border-box;
}
#aside {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 90;
  height: 100%;
  border-right: 1px solid #ddd;
}
#main {
  position: relative;
  overflow-y: auto;
  & > header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
  & > article {
    .markdown-body {
      padding: 0 20px;
      margin: 0 auto;
      min-width: 200px;
      max-width: 760px;
    }
  }
}
.align-justify {
  padding: 18px 15px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ccc;
  }
  span + span {
    margin-top: 2px;
  }
  &:hover {
    span {
      background-color: #333;
    }
  }
}
</style>
