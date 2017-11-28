<template>
  <div class="app"
    :class="{
      'app-aside-folded': state.isAsideFolded,
      'app-header-fixed': state.isHeaderFixed
    }">
    <uib-aside></uib-aside>
    <uib-header></uib-header>
    <div id="content" class="app-content" role="main">
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

export default {
  mounted() {

    UiBase.on('aside-toggle', (d) => {

      this.state.isAsideFolded = !this.state.isAsideFolded;
    });
  },

  components: {
    uibAside,
    uibHeader,
    uibFooter
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
