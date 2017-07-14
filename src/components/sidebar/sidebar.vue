<template>
  <div class="sidebar">
    <div class="sidebar-wrp slimscrollleft">
      <!--- Divider -->
      <div class="sidebar-menu">
        <ul>
          <li v-for="item in items" :key="item"
            :class="{
              'menu-title': !item.items,
              'dropped': item.dropped
            }">
            <span v-if="!item.items">{{ item.title }}</span>

            <template v-if="item.items">
              <a v-on:click="toggleItem(item, $event)" >
                <i v-if="item.icon" :class="item.icon"></i><span>{{item.title}}</span><span class="menu-arrow"></span>
              </a>
              <ul>
                <router-link tag="li" v-for="item2 in item.items"
                  :key="item2" :to="item2.path">
                  <a>{{ item2.title }}</a>
                </router-link>
              </ul>
            </template>

          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
      <div class="sidebar-footer">
        Menu footer
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {

    var items = require('./items.json');
    let itemsByPath = {};
    for(let i = 0; i < items.length; i++) {

      let parent = items[i];
      if (parent.items && parent.items.length > 0) {

        for(let j = 0; j < parent.items.length; j++) {

          let item = parent.items[j];
          item.parent = parent;

          if (!itemsByPath[item.path]) {
            itemsByPath[item.path] = item;
          }
        }
      }
    }
    this.items = items;

    let setItem = (path) => {

      let item = itemsByPath[path];
      if (item) {

        this.toggleItem(item.parent);
      }
    };

    window.$on('routechanged', (d) => {

      setItem(this.$route.path);
    });
    setItem(this.$route.path);
  },
  methods: {
    toggleItem(item, e) {

      if (this.itemActive == item) {
        return;
      }

      if (this.itemActive)
      {
        this.itemActive.dropped = false;
      }

      $('.sidebar-menu li.dropped > ul').slideUp(350);

      this.itemActive = item;
      this.itemActive.dropped = true;

      setTimeout(() => {
        $('.sidebar-menu li.dropped > ul').slideDown(350);
      });
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
