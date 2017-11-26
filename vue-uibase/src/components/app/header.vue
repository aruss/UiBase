<template>
  <header id="header" class="app-header navbar" role="menu">
      <!-- navbar header -->
      <div class="navbar-header bg-dark">
        <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">
          <i class="glyphicon glyphicon-cog"></i>
        </button>
        <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">
          <i class="glyphicon glyphicon-align-justify"></i>
        </button>
        <!-- brand -->
        <a href="#/" class="navbar-brand text-lt">
          <i class="fa fa-btc"></i>
          <img src="../../images/logo_mini.png" alt="." class="hide">
          <span class="hidden-folded m-l-xs">Angulr</span>
        </a>
        <!-- / brand -->
      </div>
      <!-- / navbar header -->

      <!-- navbar collapse -->
      <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">

        <div v-for="item in itemsLeft" :key="item.name">
          <div class="navbar-left">
            <component :is="item.component" :item="item"></component>
          </div>
        </div>

        <div v-for="item in itemsRight" :key="item.name">
          <div class="navbar-right">
            <component :is="item.component" :item="item"></component>
          </div>
        </div>
      </div>
      <!-- / navbar collapse -->
  </header>
</template>

<script>
import UiBase from '../../main';

export default {

  mounted() {

    UiBase.header.getItems().forEach((item) => {

      if ('right' === item.group) {

        this.itemsRight.push(item);
      }
      else {

        this.itemsLeft.push(item);
      }
    });
  },
  data () {

    return {
      global: UiBase.global,
      itemsLeft: [],
      itemsRight: []
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
