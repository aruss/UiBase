<template>
  <div id="wrapper">
    <uib-top-bar></uib-top-bar>
    <div class="app-body">
      <uib-side-bar></uib-side-bar>
      <main class="main"></main>
    </div>
    <uib-footer></uib-footer>
  </div>
</template>

<script>
import "../../../node_modules/jquery/dist/jquery.js";
import "../../../node_modules/popper.js/dist/popper.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import uiBase from "../../main.js";
import utils from "../../utils.js";

// components
import uibTopBar from "./topbar.vue";
import uibSideBar from "./sidebar.vue";
import uibFooter from "./footer.vue";

export default {
  mounted() {


    // TODO: Make it configurable
    utils.toggleBodyClass("header-fixed sidebar-fixed aside-menu-fixed");

    uiBase.on("sidebar-toggle", d => {

      this.options.sidebarMinimized = !this.options.sidebarMinimized;
      // TODO: Save options and emit optins change event


      utils.toggleBodyClass("sidebar-minimized brand-minimized", this.options.sidebarMinimized);
    });

/*
    uiBase.on("routechanged", d => {

      // TODO: Add meta info for title and scopes
      document.title = d.to.path;
    });

    // TODO: Add debounce
    window.addEventListener('resize', () => {


      console.log("resized");
    });
    */

   uiBase.broadcast("app-mounted", {});
  },
  components: {
    uibTopBar,
    uibSideBar,
    uibFooter
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

// TODO: Move to own file

// Load it inbetween so you can override bootstrap vars

@import "./scss/common.scss";

// @import "../../../node_modules/bootstrap/scss/bootstrap";
//@import "../../../node_modules/bootstrap/scss/_functions";
//@import "../../../node_modules/bootstrap/scss/_variables";
//@import "../../../node_modules/bootstrap/scss/_mixins";

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


@import "./scss/layout.scss";
@import "./scss/utils.scss";
@import "./scss/dropdown.scss";

// UiDash
// @import "./scss/common";
// @import "./scss/helper";
// @import "./scss/bootstrap-reset";
// @import "./scss/pagination";
// @import "./scss/form-components";
// @import "./scss/tabs-accordions";
// @import "./scss/alerts";
// @import "./scss/modals";
// @import "./scss/carousel";
// @import "./scss/menu";
// @import "./scss/animation";
// @import "./scss/waves";
// @import "./scss/print";
// @import "./scss/buttons";
// @import "./scss/checkbox-radio";
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
// @import "./scss/responsive";

// @import "./scss/icons/dripicons.scss";
// @import "./scss/icons/material-design-iconic-font.scss";
// @import "./scss/icons/themify-icons.scss";
// @import "./scss/icons/font-awesome.scss";




</style>
