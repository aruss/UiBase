<template>
  <!-- Left Sidebar Start -->
  <div class="sidebar">
    <div class="sidebar-inner">

     <component
        :is="item.component"
        :item="item"
        v-for="item in items"
        :key="item.name"></component>

      <div class="clearfix"></div>
    </div>
    <div class="sidebar-footer">

        <ui-trigger 
        icon="ti-angle-left"
        icon-active="ti-angle-right"
        v-on:click="$broadcast('sidebar-toggle')" >
      </ui-trigger>

    </div>
  </div>
  <!-- Left Sidebar End -->
</template>

<script>
import uiBase from "../../main";
import utils from "../../utils";

import uiTrigger from "./trigger.vue";

export default {
  mounted() {
    uiBase.on("sidebar-toggle", d => {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      utils.addBodyClass("sidebar-collapsed", this.sidebarCollapsed);
      // TODO: Save options
    });
  },
  computed: {
    items: function() {
      return UiBase.sidebar.getItems();
    }
  },
  data() {
    return {
      sidebarCollapsed: false,
      enbaleFooter: false, 
      options: uiBase.options,
      context: uiBase.context
    };
  },
  components: {
    uiTrigger
  }
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

.sidebar {
  bottom: 0;
  top: 0;
  width: $sidebar-width;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: $topbar-height;

  .sidebar-inner {
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: $footer-height;
    width:100%;
  }

  .sidebar-footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    bottom: 0;
    text-align: left !important;
    padding: 15px;
    position: absolute;
    right: 0;
    width: 100%;
    font-size: 13px;
    height: $footer-height;
  }
}

body.sidebar-collapsed .sidebar{
  width: $sidebar-collapsed-width;


}
</style>
