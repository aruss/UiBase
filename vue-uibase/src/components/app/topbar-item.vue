<template>
  <li>
    <button class="button-menu-mobile float-left">
      <i class="dripicons-menu"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: ["item"],

  mounted() {
    // Transform model to view model
    this.items = this.item.items;
  },

  data() {
    return {
      options: UiBase.options,
      identity: UiBase.identity,
      items: []
    };
  }
};
</script>
