<template>
  <div class="sidebar">
    <div class="sidebar-wrp slimscrollleft">
      <!--- Divider -->
      <div class="sidebar-menu">
        <ul>
          <li v-for="item in items" :key="item.key"
            :class="{
              'menu-title': !item.items,
              'active': item.active
            }">
            <span v-if="!item.items">{{ item.title }}</span>

            <template v-if="item.items">
              <a v-on:click="toggleItem(item, $event)" >
                <i v-if="item.icon" :class="item.icon"></i><span>{{item.title}}</span><b class="menu-arrow"></b>
              </a>
              <div>
                <router-link v-for="item2 in item.items" :key="item2.key" :to="item2.path">
                  {{ item2.title }}
                </router-link>
              </div>
              <!--<ul>
                <router-link tag="li" v-for="item2 in item.items"
                  :key="item2" :to="item2.path">
                  <a>{{ item2.title }}</a>
                </router-link>
              </ul>-->
            </template>

          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
      <div class="sidebar-footer">
        <button type="button" class="btn btn-sidebartoggle" v-on:click.stop="$broadcast('sidebartoggle')"><i class="dripicons-chevron-left"></i></button>
      </div>
    </div>
  </div>
</template>

<script>

import UiBase from '../../uibase';

export default {
  mounted() {

    let items = UiBase.menu.getSitebarItems();

    // transforme it to view model
    let vm = [];
    let itemsByPath = {};
    for(let i = 0; i < items.length; i++) {

      let item = items[i];
      vm.push({
        key: i,
        title: item.title
      });

      for(let j = 0; j < item.items.length; j++) {

        let item2 = item.items[j];
        vm.push({
          key: j,
          title: item2.title,
          icon: item2.icon,
          items: item2.items
        });

        /*item2.items.forEach((item3) => {

          vm.push(item3);
        });*/
      }
    }

    this.items = vm;

    /*let items = require('./items.json');
    let itemsByPath = {};
    for(let i = 0; i < items.length; i++) {

      let parent = items[i];
      parent.key = i;
      if (parent.items && parent.items.length > 0) {

        for(let j = 0; j < parent.items.length; j++) {

          let item = parent.items[j];
          item.key = j;
          item.parent = parent;

          if (!itemsByPath[item.path]) {
            itemsByPath[item.path] = item;
          }
        }
      }
    }
    this.items = items;*/

    let setItem = (path) => {

      let item = itemsByPath[path];
      if (item) {

        this.toggleItem(item.parent);
      }
    };

    window.$on('routechanged', (d) => {

      if (this.$route) {
        setItem(this.$route.path);
      }
    });
    if (this.$route) {
      setItem(this.$route.path);
    }

    window.$on('sidebartoggle', (d) => {

      setItem($('body').toggleClass("sidebar-closed"));
    });
  },
  methods: {
    toggleItem(item, e) {

      if (this.itemActive == item) {
        return;
      }

      if (this.itemActive)
      {
        this.itemActive.active = false;
      }

      let isOpened = !$('body').hasClass('sidebar-closed');
      if (isOpened) {
       // $('.sidebar-menu li.active > div').slideUp(350);
      }

      this.itemActive = item;
      this.itemActive.active = true;

      if (isOpened) {
        setTimeout(() => {
          //$('.sidebar-menu li.active > div').slideDown(350);
        });
      }
    }
  },
  data() {

    return {
      itemActive: null,
      items: [],
    };
  }
}
</script>

<style lang="scss">
@import "./sidebar.scss";
</style>
