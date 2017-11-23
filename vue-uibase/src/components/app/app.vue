<template>
  <div class="app"
    :class="{
      'app-aside-folded': global.isAsideFolded,
      'app-header-fixed': global.isHeaderFixed
    }">
    <uib-aside></uib-aside>
    <uib-header></uib-header>
    <div class="content-page">
      <div class="content">
        <router-view></router-view>
      </div>
      <uib-footer></uib-footer>
    </div>
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

      this.global.isAsideFolded = !this.global.isAsideFolded;
    });
  },

  components: {
    uibAside,
    uibHeader,
    uibFooter
  },

  data() {

    return {
      global: UiBase.global
    };
  }
}
</script>

<style lang="less">
@import "./less/main.less";
</style>
