<template>
  <div class="navi-wrap">
    <nav ui-nav="" class="navi clearfix">

      <ul class="nav">
        <li v-for="item in items" :key="item.key"
            :class="{
              'hidden-folded padder m-t m-b-sm text-muted text-xs': !item.items,
              'active': item.isActive
            }">
            <span v-if="item.isGroup">{{ item.title }}</span>

            <router-link v-if="!item.isGroup && !item.items" :key="item.key" :to="item.path">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </router-link>

            <template v-if="item.items">
              <a v-on:click="toggleItem(item, $event)" class="auto">
                <span class="pull-right text-muted" v-if="item.items">
                  <i class="fa fa-fw fa-angle-right text"></i>
                  <i class="fa fa-fw fa-angle-down text-active"></i>
                </span>
                <i v-if="item.icon" :class="item.icon"></i>
                <span class="font-bold">{{ item.title }}</span>
              </a>
              <ul class="nav nav-sub dk">
                <li class="nav-sub-header" v-for="item2 in item.items">
                  <router-link :key="item2.name" :to="item2.options.path">
                    <i v-if="item2.options.icon" :class="item2.options.icon"></i>
                    <span>{{ item2.options.title }}</span>
                  </router-link>
                </li>
              </ul>
            </template>
        </li>
      </ul>
    </nav>
  </div>
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

    for (let i = 0; i < items.length; i++) {

      let item = items[i];

      vm.push({
        key: i,
        title: item.options ? item.options.title || item.name : item.name,
        isGroup: true,
        isActive: false
      });

      for (let j = 0; j < item.items.length; j++) {

        let item2 = item.items[j];

        vm.push({
          key: j,
          title: item2.options ? item2.options.title || item2.name : item2.name,
          icon: item2.options ? item2.options.icon : null,
          items: item2.items,
          isGroup: false,
          isActive: false
        });
      }
    }

    this.items = vm;

    let setItem = (path) => {

      let item = itemsByPath[path]

      if (item) {

        this.toggleItem(item.parent);
      }
    }

    UiBase.on('routechanged', (d) => {

      if (this.$route) {

        setItem(this.$route.path);
      }
    });

    if (this.$route) {

      setItem(this.$route.path);
    }
  },

  methods: {
    toggleItem(item, e) {

      if (this.itemActive === item) {

        this.itemActive.isActive = !this.itemActive.isActive;
        return;
      }

      if (this.itemActive) {

        this.itemActive.isActive = false;
      }

      this.itemActive = item;
      this.itemActive.isActive = true;
    }
  },

  data() {

    return {
      global: UiBase.global,
      itemActive: null,
      items: []
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>
