<template>
    <nav class="navi clearfix">
      <ul class="nav">
        <li v-for="item1 in items"
            :key="item1.name"
            :class="{
              'hidden-folded padder m-t m-b-sm text-muted text-xs': !item1.items,
              'active': item1.isActive
            }">
          <span v-if="item1.isGroup">{{ item1.title }}</span>

          <router-link v-if="!item1.isGroup && !item1.items"
                       :key="item1.name"
                       :to="item1.path">
            <i v-if="item1.icon"
               :class="item1.icon"></i>
            <span>{{ item1.title }}</span>
          </router-link>

          <template v-if="item1.items">
            <a v-on:click="toggleItem(item1, $event)"
               class="auto">
              <span class="pull-right text-muted"
                    v-if="item1.items">
                <i class="fa fa-fw fa-angle-right text"></i>
                <i class="fa fa-fw fa-angle-down text-active"></i>
              </span>
              <i v-if="item1.icon"
                 :class="item1.icon"></i>
              <span :class="{'font-bold': item1.bold}">{{ item1.title }}</span>
            </a>

            <ul class="nav nav-sub dk">
              <li class="nav-sub-header"><!--<a href><span>Whaaat</span></a>--></li>
              <li v-for="item2 in item1.items"
                  :class="{'active': item2.isActive }">
                <!-- default component -->
                <router-link :key="item2.name"
                             :to="item2.options.path"
                             v-if="!item2.component">

                  <i v-if="item2.options.icon"
                     :class="item2.options.icon"></i>

                  <span>{{ item2.options.title }}</span>
                </router-link>
                <!-- custom component -->
                <component :is="item2.component" :item="item2"></component>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>

</template>

<script>

/*
  Main menu component, that displays menu items as a tree

  Options:
    - group: Displays menu items only for specific group
        default: null
*/

import UiBase from '../../main'

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

      let item = itemsByPath[path]
      if (item) {

        this.toggleItem(item);
      }
    }

    UiBase.on('routechanged', (d) => {

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
      state: UiBase.state,
      context: UiBase.context,
      itemActive: null,
      items: []
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
