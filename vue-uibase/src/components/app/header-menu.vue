<template>
  <div>
    <template v-for="item in items">
      <div class="nav navbar-nav"  v-if="!item.items" :item-name="item.name">
        <!-- default component -->
        <a href="#" class="btn no-shadow navbar-btn" v-if="!item.component">
          <i v-if="item.options.icon" :class="item.options.icon"></i>
          <span v-if="item.options.title">{{ item.options.title }}</span>
        </a>
        <!-- custom component -->
        <component :is="item.component" :item="item"></component>
      </div>
      <ul class="nav navbar-nav" v-if="item.items" :item-name="item.name">
        <li class="dropdown">
          <!-- default component -->
          <a href="#" data-toggle="dropdown" class="dropdown-toggle" v-if="!item.component">
            <span>{{ item.options.title }}</span>
            <span class="caret"></span>
          </a>
          <!-- custom component -->
          <component :is="item.component" :item="item"></component>

          <ul class="dropdown-menu" v-if="item.items">
            <li
              v-for="item2 in item.items"
              :item-name="item2.name"
              :class="item2.options.cssClass">
              <!-- default component -->
              <a href="" v-if="!item2.component">
                <span v-if="item2.options.badge"
                  class="badge pull-right"
                  :class="item2.options.badge.cssClass">{{ item2.options.badge.title }}</span>
                <span v-if="item2.options.label"
                  class="label bg-info pull-right">{{ item2.options.label.title }}</span>
                <span>{{ item2.options.title }}</span>
              </a>
              <!-- custom component -->
              <component :is="item2.component" :item="item2"></component>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {

  props: ['item'],

  mounted() {

      // Transform model to view model
    this.items = this.item.items;
  },

  data() {

    return {
      state: UiBase.state,
      context: UiBase.context,
      items: [],
    }
  }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>


