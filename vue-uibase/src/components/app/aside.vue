<template>
  <aside id="aside" class="app-aside hidden-xs bg-dark">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <component v-for="item in items" :is="item.component" :item="item"></component>
      </div>
      <div class="app-aside-footer">
        <div class="wrapper bg-dark">
          <a class="btn no-shadow"
            :class="{'active': state.isAsideFolded}"
            v-on:click.stop="$broadcast('aside-toggle')">
            <i class="fa fa-dedent fa-fw text"></i>
            <i class="fa fa-indent fa-fw text-active"></i>
          </a>
        </div>
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
      state: UiBase.state,
      items: []
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
