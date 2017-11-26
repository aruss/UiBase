<template>
  <aside id="aside" class="app-aside hidden-xs bg-dark">
      <div class="aside-wrap">
          <div v-for="item in items" :key="item.name">
            <component :is="item.component" :item="item"></component>
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

    this.items = UiBase.aside.getItems();
  },
  components: {
    uibAsideMenu
  },
  data () {

    return {
      global: UiBase.global,
      items: []
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
