<template>
  <div id="wrapper" class="forced">
    <topbar></topbar>
    <sidebar></sidebar>
    <div class="content-page">
      <div class="content">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
      <div class="footer text-right">
          © 2017. All rights reserved.
      </div>
    </div>
    <slidebar></slidebar>
  </div>
</template>

<script>
import '../../../node_modules/jquery/dist/jquery.js'
import '../../../node_modules/tether/dist/js/tether.js'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'

import Topbar from '@/components/topbar/topbar.vue'
import Sidebar from '@/components/sidebar/sidebar.vue'
import Slidebar from '@/components/slidebar/slidebar.vue'

export default {
  name: 'app',
  mounted() {

  },
  components: {
    Sidebar,
    Topbar,
    Slidebar
  }
}
</script>

<style lang="scss">
// Core variables and mixins
@import "../../../node_modules/bootstrap/scss/_variables.scss";
@import "../../../node_modules/bootstrap/scss/mixins";
@import "../../../node_modules/bootstrap/scss/custom";

// Reset and dependencies
@import "../../../node_modules/bootstrap/scss/normalize";
@import "../../../node_modules/bootstrap/scss/print";

// Core CSS
@import "../../../node_modules/bootstrap/scss/reboot";
@import "../../../node_modules/bootstrap/scss/type";
@import "../../../node_modules/bootstrap/scss/images";
@import "../../../node_modules/bootstrap/scss/code";
@import "../../../node_modules/bootstrap/scss/grid";
@import "../../../node_modules/bootstrap/scss/tables";
@import "../../../node_modules/bootstrap/scss/forms";
@import "../../../node_modules/bootstrap/scss/buttons";

// Components
@import "../../../node_modules/bootstrap/scss/transitions";
@import "../../../node_modules/bootstrap/scss/dropdown";
@import "../../../node_modules/bootstrap/scss/button-group";
@import "../../../node_modules/bootstrap/scss/input-group";
@import "../../../node_modules/bootstrap/scss/custom-forms";
@import "../../../node_modules/bootstrap/scss/nav";
@import "../../../node_modules/bootstrap/scss/navbar";
@import "../../../node_modules/bootstrap/scss/card";
@import "../../../node_modules/bootstrap/scss/breadcrumb";
@import "../../../node_modules/bootstrap/scss/pagination";
@import "../../../node_modules/bootstrap/scss/badge";
@import "../../../node_modules/bootstrap/scss/jumbotron";
@import "../../../node_modules/bootstrap/scss/alert";
@import "../../../node_modules/bootstrap/scss/progress";
@import "../../../node_modules/bootstrap/scss/media";
@import "../../../node_modules/bootstrap/scss/list-group";
@import "../../../node_modules/bootstrap/scss/responsive-embed";
@import "../../../node_modules/bootstrap/scss/close";

// Components w/ JavaScript
@import "../../../node_modules/bootstrap/scss/modal";
@import "../../../node_modules/bootstrap/scss/tooltip";
@import "../../../node_modules/bootstrap/scss/popover";
@import "../../../node_modules/bootstrap/scss/carousel";

// Utility classes
@import "../../../node_modules/bootstrap/scss/utilities";

@import "./scss/variables.scss";
@import "./scss/common.scss";
@import "./scss/helper.scss";
@import "./scss/bootstrap-reset.scss";

@import "./scss/icons/dripicons.scss";
@import "./scss/icons/material-design-iconic-font.scss";
@import "./scss/icons/themify-icons.scss";
</style>
