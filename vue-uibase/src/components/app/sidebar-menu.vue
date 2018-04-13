<template>
  <div id="sidebar-menu">

    <ul>
        <li v-for="item1 in items"
            :key="item1.name"
            :class="{
              'text-muted menu-title': item1.isGroup,
              'has_sub': !item1.isGroup
            }">

          <!-- small gray title -->
          <span v-if="item1.isGroup">{{item1.title}}</span>

          <template v-if="!item1.isGroup">
              <a href="javascript:void(0);"
                class="subdrop"
                :class="{
                  'active': item1.isActive
                }"
                v-on:click="toggleItem(item1)">
                <i class="ti-home"></i>
                <span>{{item1.title}}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                  <li v-for="item2 in item1.items"
                    :class="{'active': item2.isActive}"
                    :key="item2.name">

                    <router-link :key="item2.name"
                      :to="item2.options.path"
                      v-if="!item2.component">

                      <i v-if="item2.options.icon"
                        :class="item2.options.icon"></i>

                      <span>{{item2.options.title}}</span>
                    </router-link>

                  </li>
              </ul>
          </template>
        </li>

        <!--<li class="text-muted menu-title">Navigation</li>
          <li class="has_sub">
              <a href="javascript:void(0);" class=""><i class="ti-home"></i> <span> Dashboard </span> <span class="menu-arrow"></span></a>
              <ul class="list-unstyled">
                  <li><a href="index.html">Dashboard 1</a></li>
                  <li><a href="dashboard_2.html">Dashboard 2</a></li>
                  <li><a href="dashboard_3.html">Dashboard 3</a></li>
                  <li><a href="dashboard_4.html">Dashboard 4</a></li>
              </ul>
          </li>-->

    </ul>
    <div class="clearfix"></div>
  </div>
</template>

<script>
/*
  Main menu component, that displays menu items as a tree

  Options:
    - group: Displays menu items only for specific group
        default: null
*/

import uiBase from '../../main'

export default {

  props: ['item'],

  mounted() {

    // Transform model to view model
    let items = this.item.items;
    let vm = [];
    let itemsByPath = {};

    items.forEach((item1, i) => {

      let item1vm = {
        name: item1.name,
        title: item1.options ? item1.options.title || item1.name : item1.name,
        isGroup: true,
        isActive: false
      }
      vm.push(item1vm);

      item1.items.forEach((item2, j) => {

        let item2vm = {
          name: item2.name,
          title: item2.options ? item2.options.title || item2.name : item2.name,
          icon: item2.options ? item2.options.icon : null,
          bold: item2.options.bold,
          isGroup: false,
          isActive: false,
          parent: item1vm,
          items: []
        };
        vm.push(item2vm);

        item2.items.forEach((item3, k) => {

          let item3vm = {
            name: item3.name,
            component: item3.component,
            options: item3.options,
            isActive: false,
            parent: item2vm
          };

          if (item3.options && item3.options.path) {
            itemsByPath[item3.options.path] = item3vm;
          }

          item2vm.items.push(item3vm);
        });
      });
    });

    this.items = vm;

    let setItem = (path) => {
      let item = itemsByPath[path];
      if (item) {
        this.toggleItem(item);
      }
    }

    uiBase.on('routechanged', (d) => {
      if (this.$route) {
        setItem(this.$route.path);
      }
    });
  },

  methods: {
    toggleItem(item, e) {

      if (this.itemActive === item) {
        this.itemActive.isActive = !this.itemActive.isActive;
        return;
      }

      if (this.itemActive) {

        this.itemActive.isActive = false;

        if (this.itemActive.parent) {
          this.itemActive.parent.isActive = false;
        }
      }

      this.itemActive = item;
      this.itemActive.isActive = true;

      if (this.itemActive.parent) {
        this.itemActive.parent.isActive = true;
      }
    }
  },

  data() {

    return {
      options: uiBase.options,
      context: uiBase.context,
      itemActive: null,
      items: []
    }
  }
}
</script>

<style lang="scss">

</style>
