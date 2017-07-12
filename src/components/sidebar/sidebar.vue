<template>
  <div class="sidebar">
    <div class="sidebar-wrp slimscrollleft">
      <!--- Divider -->
      <div class="sidebar-menu">

        <ul>
          <li v-for="item in items" :key="item"
            :class="{
              'menu-title': !item.items,
              'active': item === this.itemactive,
              'dropped': item.dropped
            }">
            <span v-if="!item.items">{{ item.title }}</span>

            <template v-if="item.items">
              <a v-on:click="toggleItem(item, $event)" >
                <i v-if="item.icon" :class="item.icon"></i>
                <span> {{item.title}} </span>
                <span class="menu-arrow"></span>
              </a>
              <ul>
                <li v-for="item2 in item.items" :key="item2">
                  <a :href="item2.href" v-on:click="toggleSubItem(item, item2, $event)">{{ item2.title }}</a>
                </li>
              </ul>
            </template>

          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {


  },
  methods: {
    toggleItem(item, e) {

      if (this.itemActive)
      {
        this.itemActive.dropped = false;
      }

      this.itemActive = item;
      this.itemActive.dropped = true;


      // If item has child items, drop it like its hot
      if (item.items && item.items.length > 0)  {

        // Funky jQuery rocket science, cus we can!

          //$(e.target).parents('ul:first').slideUp(350);
        $(e.currentTarget).next("ul").slideDown(350);
      }
    },

    toggleSubItem(item, subitem)
    {

    }
  },
  data() {

    return {
      itemActive: null,
      items: require('./items.json')
    };
  }
}
</script>

<style lang="scss">
@import "./sidebar.scss";
</style>
