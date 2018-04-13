<template>
  <li class="hide-phxone app-search float-left">
    <form role="search" class="">
      <input type="text" placeholder="Search..." class="form-control">
      <a href=""><i class="fa fa-search"></i></a>
    </form>
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
