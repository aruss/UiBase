<template>
  <li>
    <button class="topbar-item" type="button" :id="id">
      <i class="dripicons-menu"></i>
    </button>

  </li>
</template>

<script>
export default {
  props: ["item"],
  data () {
    return {
      id: null,
      items: []
    }
  }, 
  mounted () {
    this.id = 'btn-' + this._uid;
    this.items = this.item.items;
  }
};
</script>

<style lang="scss">
  .topbar-item {
    border: none;
    color: #ffffff;
    display: inline-block;
    height: 70px;
    width: 60px;
    background-color: #36404a;
    font-size: 16px;
    cursor: pointer;   
  }
</style>