<template>
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">
      <!--- Divider -->
      <div id="sidebar-menu">

        <ul>
          <li v-for="item in items" :key="item"
            :class="{
              'menu-title': !item.items,
              'active': item === this.itemactive,
              'dropped': item.dropped
            }">
            <span v-if="!item.items">{{ item.title }}</span>

            <template v-if="item.items">
              <a v-on:click="toggleItem(item)" >
                <i v-if="item.icon" :class="item.icon"></i>
                <span> {{item.title}} </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li v-for="item2 in item.items" :key="item2">
                  <a :href="item2.href">{{ item2.title }}</a>
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
  name: 'sidebar',
  mounted() {

    window.$on('funky', () => {

      $("#wrapper").toggleClass("enlarged");
      $("#wrapper").addClass("forced");

      if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {

        $("body").removeClass("fixed-left").addClass("fixed-left-void");
      } else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {

        $("body").removeClass("fixed-left-void").addClass("fixed-left");
      }

      if($("#wrapper").hasClass("enlarged")) {

        $(".left ul").removeAttr("style");
      } else {

        $(".subdrop").siblings("ul:first").show();
      }

      //toggle_slimscroll(".slimscrollleft");
      $("body").trigger("resize");
    }, false);
  },
  methods: {
    toggleItem(item) {

      this.items.forEach((i) => {

        i.dropped = false;
      });

      item.dropped = true;

      this.itemActive = item;
    }
  },
  data() {

    return {
      itemActive: null,
      items: [
        {
          title: 'Navigation',
        },
        {
          title: 'Dashboard',
          icon: 'ti-home',
          active: true,
          dropped: false,
          items: [{
            title: 'Dashboard 1'
          },
          {
            title: 'Dashboard 2'
          }]
        },
        {
          title: 'Identity',
          icon: 'ti-user',
          active: false,
          dropped: false,
          items: [{
            title: 'Identity',
            href: '#/identity'
          },
          {
            title: 'Clients',
            href: '#/identity/clients'
          }]
        }
      ]
    };

  }
}
</script>

<style lang="scss">
@import "./sidebar.scss";
</style>
