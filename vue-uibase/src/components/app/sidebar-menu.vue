<template>
  <div class="sidebar-menu">

    <ul>
        <li v-for="item1 in items"
            :key="item1.name"
            :class="{
              'text-muted menu-title': item1.isGroup,
              'has-sub': !item1.isGroup,
              'active': item1.isActive
            }">

          <!-- small gray title -->
          <span v-if="item1.isGroup">{{item1.title}}</span>

          <template v-if="!item1.isGroup">
              <a href="javascript:void(0);"

                v-on:click="toggleItem(item1)">
                <i :class="item1.icon"></i>
                <span>{{item1.title}}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul >
                <router-link
                  :exact="false"
                  active-class="active"
                  exact-active-class=""
                  v-for="item2 in item1.items"
                  v-if="!item2.component"
                  tag="li"
                  :key="item2.name"
                  :to="item2.options.path">

                  <a>
                    <i v-if="item2.options.icon"
                      :class="item2.options.icon"></i>
                    <span>{{item2.options.title}}</span>
                  </a>
                </router-link>
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

import uiBase from "../../main";

export default {
  props: ["item"],

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
      };
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

    let setItem = path => {
      let item = itemsByPath[path];
      if (item) {
        this.toggleItem(item);
      }
    };

    uiBase.on("routechanged", d => {
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
    };
  }
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

.sidebar-menu {
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;

  // Cleanup all elements
  ul,
  li,
  a {
    border: 0;
    font-weight: normal;
    line-height: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    text-decoration: none;
  }

  > ul {
    > li {
      &.menu-title {
        padding: 12px 20px !important;
        letter-spacing: 0.035em;
        pointer-events: none;
        cursor: default;
        font-size: 13px;
      }

      > a {
        color: $dark;
        display: block;
        padding: 12px 20px;
        margin: 4px 0;
        border-left: 3px solid $white;

        &:hover {
          color: $custom;
          text-decoration: none;
        }

        // Menu item text
        > span {
          vertical-align: middle;
          line-height: 17px;
        }

        // Menu item icon
        > i {
          display: inline-block;
          font-size: 16px;
          line-height: 17px;
          margin-left: 3px;
          margin-right: 15px;
          text-align: center;
          vertical-align: middle;
          width: 20px;
        }

        // Menu item arrow for dropdowns
        > span.menu-arrow {
          -webkit-transition: -webkit-transform 0.15s;
          -o-transition: -o-transform 0.15s;
          transition: transform 0.15s;
          position: absolute;
          right: 20px;
          display: inline-block;
          font-family: "Material Design Iconic Font";
          text-rendering: auto;
          line-height: 17px;
          font-size: 17px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-transform: translate(0, 0);
          -ms-transform: translate(0, 0);
          -o-transform: translate(0, 0);
          transform: translate(0, 0);
          color: $muted;
          &:before {
            content: "\f1b6";
          }
        }
      }

      // Sub menu
      ul {
        // border: 2px solid $lightdark;
        margin-top: -5px;
        padding-top: 5px;
        z-index: 9999;
        background-color: $white;
        display: none;

        li {
          a {
            color: #75798b;
            display: block;
            padding: 10px 20px 10px 65px;
            line-height: 1.3;

            &:hover {
              color: $custom;
            }
          }

          &.active {
            > a {
              color: $custom;
            }
          }
        }
      }

      // Active main item
      &.has-sub.active {
        > a {
          background: $lightdark;
          border-left: 3px solid $custom;
          color: $custom;

          > span.menu-arrow {
            -ms-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }
        }

        > ul {
          display: block;
        }
      }
    }
  }
}

body.sidebar-collapsed .sidebar-menu {
  z-index: 5;

  > ul {
    > li {
      position: relative;
      white-space: nowrap;

      &.menu-title {
        display: none;
      }

      > a {
        padding: 15px 20px;
        min-height: 52px;

        > i {
          margin-right: 20px;
          font-size: 20px;
        }

        > span {
          display: none;
        }
      }

      &.active {
        > a {
          > span {
            display: inline;
          }
        }

         > ul {
           border-left: 3px solid $lightdark;
           border-right: 3px solid $lightdark;
           border-bottom: 3px solid $lightdark;

            > li {
              > a {
                padding-left: 26px;
              }
            }
          }
      }
    }
  }
}
</style>
