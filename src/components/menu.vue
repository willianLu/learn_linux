<template>
  <ul class="menu-ul">
    <li
      v-for="(item, index) in menus"
      :key="`${dictPrefix}${index+1}${item.title}`"
      :class="(`${routePath}/`).includes(`${item.path}/`) ? 'active':''"
    >
      <router-link :class="routePath === item.path ? 'active':''" :to="item.path">
        <b v-if="dictAble">{{dictPrefix}}{{index+1}}.</b>
        {{item.title}}
      </router-link>
      <menu-box
        v-if="item.children&&item.children.length"
        :menus="item.children"
        :dictAble="dictAble"
        :dictPrefix="handleDictPrefix(index+1)"
      ></menu-box>
    </li>
  </ul>
</template>
<script>
export default {
  name: "MenuBox",
  data() {
    return {
      routePath: ""
    };
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    dictAble: {
      type: Boolean,
      default: false
    },
    dictPrefix: {
      type: String,
      default: ""
    }
  },
  watch: {
    $route(to) {
      if (this.routePath !== to.path) {
        this.routePath = to.path;
      }
    }
  },
  created() {
    this.routePath = this.$route.path;
  },
  methods: {
    handleDictPrefix(index) {
      if (this.dictAble) {
        return `${this.dictPrefix}${index}.`;
      }
      return "";
    }
  }
};
</script>
<style lang="less" scoped>
.menu-ul {
  margin: 0;
  list-style: none;
  li {
    a {
      display: block;
      padding: 10px 15px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-decoration: none;
      color: #364149;
      cursor: pointer;
      &.active,
      &:hover {
        color: #008cff;
      }
    }
    &.active {
      & > ul {
        display: block;
      }
    }
    ul {
      display: none;
      padding-left: 20px;
    }
  }
}
</style>