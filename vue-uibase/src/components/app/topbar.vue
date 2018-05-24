<template>
  <div class="topbar">

    <!-- LOGO -->
    <div class="topbar-logo">

      <div class="text-center">
        <a href="index.html" class="logo">
          <i v-if="options.icon" :class="options.icon" class="icon-c-logo"></i>
          <span>{{options.title}}</span>
        </a>
        <!-- Image Logo here -->
        <!--<a href="index.html" class="logo">-->
        <!--<i class="icon-c-logo"> <img src="assets/images/logo_sm.png" height="42"/> </i>-->
        <!--<span><img src="assets/images/logo_light.png" height="20"/></span>-->
        <!--</a>-->
      </div>

    </div>

    <!-- Button mobile view to collapse sidebar menu -->
    <nav class="topbar-items">

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
@import "./scss/variables.scss";

// https://getbootstrap.com/docs/4.0/layout/overview/

.topbar {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;

  .topbar-logo {
    float: left;
    position: relative;
    width: $sidebar-width;
    z-index: 1;
    background-color: $dark;
    min-height: $topbar-height;

    .logo {
      color: $white !important;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 70px;
      text-transform: uppercase;
      h1 {
        height: 50px;
        margin: 0 auto;
        text-align: center;
      }
      i {
        color: $custom;
      }
      .icon-c-logo {
        display: none;
      }
    }
  }

  .topbar-items {
    border-radius: 0;
    margin-bottom: 0;
    padding: 0 10px 0 0;
    margin-left: $sidebar-width;
    background-color: $dark;
    min-height: $topbar-height;
  }
}

@media (min-width: 768px) {
  .topbar {
    .topbar-items {
      // background-color: pink;
    }
  }
}
</style>
