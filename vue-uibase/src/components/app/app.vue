<template>
  <div id="wrapper" class="forced">
    <uib-top-bar></uib-top-bar>
    <uib-side-bar></uib-side-bar>
    <div class="content-page">
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer text-right">
          © 2017. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import "../../../node_modules/jquery/dist/jquery.js";
import "../../../node_modules/popper.js/dist/popper.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./js/detect.js";
import "./js/fastclick.js";
import "./js/jquery.slimscroll.js";
import "./js/jquery.blockUI.js";
// import "./js/waves.js";
import "./js/wow.min.js";
import "./js/jquery.nicescroll.js";
import "./js/jquery.scrollTo.min.js";

import uiBase from "../../main";

import uibTopBar from "./topbar.vue";
import uibSideBar from "./sidebar.vue";

export default {
  mounted() {
    uiBase.on("sidebar-toggle", d => {

      this.options.isSidebarFolded = !this.options.isSidebarFolded;
    });
  },
  components: {
    uibTopBar,
    uibSideBar
  },
  data() {
    return {
      options: uiBase.options,
      context: uiBase.context
    };
  }
};
</script>

<style lang="scss">
@import "../../../node_modules/bootstrap/scss/_functions.scss";
@import "../../../node_modules/bootstrap/scss/_variables.scss";

// Load it inbetween so you can override bootstrap vars
@import "./scss/variables.scss";

@import "../../../node_modules/bootstrap/scss/_functions";
@import "../../../node_modules/bootstrap/scss/_variables";
@import "../../../node_modules/bootstrap/scss/_mixins";
@import "../../../node_modules/bootstrap/scss/_root";
@import "../../../node_modules/bootstrap/scss/_reboot";
@import "../../../node_modules/bootstrap/scss/_type";
@import "../../../node_modules/bootstrap/scss/_images";
@import "../../../node_modules/bootstrap/scss/_code";
@import "../../../node_modules/bootstrap/scss/_grid";
@import "../../../node_modules/bootstrap/scss/_tables";
@import "../../../node_modules/bootstrap/scss/_forms";
@import "../../../node_modules/bootstrap/scss/_buttons";
@import "../../../node_modules/bootstrap/scss/_transitions";
@import "../../../node_modules/bootstrap/scss/_dropdown";
@import "../../../node_modules/bootstrap/scss/_button-group";
@import "../../../node_modules/bootstrap/scss/_input-group";
@import "../../../node_modules/bootstrap/scss/_custom-forms";
@import "../../../node_modules/bootstrap/scss/_nav";
@import "../../../node_modules/bootstrap/scss/_navbar";
@import "../../../node_modules/bootstrap/scss/_card";
@import "../../../node_modules/bootstrap/scss/_breadcrumb";
@import "../../../node_modules/bootstrap/scss/_pagination";
@import "../../../node_modules/bootstrap/scss/_badge";
@import "../../../node_modules/bootstrap/scss/_jumbotron";
@import "../../../node_modules/bootstrap/scss/_alert";
@import "../../../node_modules/bootstrap/scss/_progress";
@import "../../../node_modules/bootstrap/scss/_media";
@import "../../../node_modules/bootstrap/scss/_list-group";
@import "../../../node_modules/bootstrap/scss/_close";
@import "../../../node_modules/bootstrap/scss/_modal";
@import "../../../node_modules/bootstrap/scss/_tooltip";
@import "../../../node_modules/bootstrap/scss/_popover";
@import "../../../node_modules/bootstrap/scss/_carousel";
@import "../../../node_modules/bootstrap/scss/_utilities";
@import "../../../node_modules/bootstrap/scss/_print";

// UiDash
@import "./scss/common";
@import "./scss/helper";
@import "./scss/bootstrap-reset";
// @import "./scss/pagination";
// @import "./scss/form-components";
// @import "./scss/tabs-accordions";
@import "./scss/alerts";
@import "./scss/modals";
// @import "./scss/carousel";
@import "./scss/menu";
@import "./scss/animation";
@import "./scss/waves";
@import "./scss/print";
@import "./scss/buttons";
@import "./scss/checkbox-radio";
// @import "./scss/portlets";
// @import "./scss/progressbars";
// @import "./scss/tables";
// @import "./scss/widgets";
// @import "./scss/form-advanced";
// @import "./scss/form-wizard";
// @import "./scss/calendar";
// @import "./scss/wysiwig";
// @import "./scss/notification";
// @import "./scss/bootstrap-range-slider";
// @import "./scss/sweet-alert";
// @import "./scss/charts";
// @import "./scss/countdown";
// @import "./scss/timeline";
// @import "./scss/email";
// @import "./scss/gallery";
// @import "./scss/maintenance";
// @import "./scss/maps";
// @import "./scss/nestable-list";
// @import "./scss/pricing";
// @import "./scss/profile";
// @import "./scss/sitemap";
// @import "./scss/faq";
// @import "./scss/search-result";
// @import "./scss/contact";
// @import "./scss/opportunities";
// @import "./scss/products";
// @import "./scss/account-pages";
// @import "./scss/treeview";
// @import "./scss/tour";
// @import "./scss/taskboard";
@import "./scss/responsive";

@import "./scss/icons/dripicons.scss";
@import "./scss/icons/material-design-iconic-font.scss";
@import "./scss/icons/themify-icons.scss";
@import "./scss/icons/font-awesome.scss";
</style>
