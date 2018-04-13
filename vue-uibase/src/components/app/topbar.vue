<template>
  <div class="topbar">

      <!-- LOGO -->
      <div class="topbar-left">
          <div class="text-center">
              <a href="index.html" class="logo">uiBase</a>
              <!-- Image Logo here -->
              <!--<a href="index.html" class="logo">-->
              <!--<i class="icon-c-logo"> <img src="assets/images/logo_sm.png" height="42"/> </i>-->
              <!--<span><img src="assets/images/logo_light.png" height="20"/></span>-->
              <!--</a>-->
          </div>
      </div>

      <!-- Button mobile view to collapse sidebar menu -->
      <nav class="navbar-custom">

          <ul class="list-inline menu-right mb-0 float-right">
            <component
              :is="item.component"
              :item="item"
              v-for="item in itemsRight"
              :key="item.name"></component>
          </ul>

          <ul class="list-inline menu-left mb-0">
            <component
              :is="item.component"
              :item="item"
              v-for="item in itemsLeft"
              :key="item.name"></component>
          </ul>
      </nav>
  </div>
</template>

<script>
import uiBase from "../../main";

export default {
  mounted() {
    uiBase.topbar.getItems().forEach(item => {
      if ("right" === item.group) {
        this.itemsRight.push(item);
      } else {
        this.itemsLeft.push(item);
      }
    });
  },
  data() {
    return {
      options: uiBase.options,
      context: uiBase.context,
      itemsLeft: [],
      itemsRight: []
    };
  }
};
</script>

<style lang="scss">

</style>
