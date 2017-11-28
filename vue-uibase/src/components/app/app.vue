<template>
  <div class="app"
    :class="{
      'app-header-fixed': state.isHeaderFixed,
      'app-aside-fixed': state.isAsideFixed,
      'app-aside-folded': state.isAsideFolded,
      'app-aside-dock': state.isAsideDock,
      'container': state.isContainer
    }">

    <uib-aside></uib-aside>
    <uib-header></uib-header>
    <div id="content" class="app-content" role="main">
      <uib-loading-bar></uib-loading-bar>
      <router-view></router-view>
    </div>
    <uib-footer></uib-footer>
  </div>
</template>

<script>

// Import basic shared libraries
import '../../../node_modules/jquery/dist/jquery.js';
// import '../../../node_modules/tether/dist/js/tether.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';

import UiBase from '../../main';

// Import basic shared components
import uibAside from './aside.vue';
import uibHeader from './header.vue';
import uibFooter from './footer.vue';
import uibLoadingBar from './loading-bar.vue';

export default {
  mounted() {

    UiBase.on('aside-toggle', (d) => {

      this.state.isAsideFolded = !this.state.isAsideFolded;
    });
  },

  components: {
    uibAside,
    uibHeader,
    uibFooter,
    uibLoadingBar
  },

  watch: {
    state: function(val, oldVal){

      console.log(val);
    }
  },

  data() {

    return {
      state: UiBase.state,
      context: UiBase.context
    };
  }
}
</script>

<style lang="less">
@import "./less/main.less";
</style>
