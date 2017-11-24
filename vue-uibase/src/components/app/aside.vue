<template>
  <aside id="aside" class="app-aside hidden-xs bg-dark">
      <div class="aside-wrap">
          <div v-for="item in components" :key="item.id">
            <component :is="item.component" :data="item.data"></component>
          </div>
      </div>
      <div class="app-aside-footer">
        <div class="wrapper bg-dark">
          <a class="btn no-shadow active" v-on:click.stop="$broadcast('aside-toggle')">
            <i class="fa fa-dedent fa-fw text"></i>
            <i class="fa fa-indent fa-fw text-active"></i>
          </a>
        </div>
      </div>
  </aside>
</template>

<script>

import UiBase from '../../main';
import uibAsideMenu from './aside-menu.vue';

export default {
  mounted () {

    this.components = UiBase.aside.components.getItems();
  },
  components: {
    uibAsideMenu
  },
  data () {

    return {
      global: UiBase.global,
      components: []
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
