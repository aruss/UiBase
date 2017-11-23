<template>
  <aside id="aside" class="app-aside hidden-xs bg-dark">
      <div class="aside-wrap">
          <uib-aside-menu></uib-aside-menu>
      </div>
  </aside>
</template>

<script>
// import UiBase from '../../main';
import uibAsideMenu from './aside-menu.vue';

export default {
  mounted () {

  },
  components: {
    uibAsideMenu
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
