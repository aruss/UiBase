<template>
  <button v-on:click.stop="onClick"
    class="btn btn-link btn-trigger"
    :class="{'active': active}">
    <i :class="icon"></i>
    <i class="btn-trigger-active" :class="iconActive"></i>
  </button>
</template>

<script>
import uiBase from "../../main";

export default {
  props: [ 'icon', 'icon-active', 'is-active' ],
  mounted() {

  },
  methods: {
    onClick() {
      this.active = !this.active;
      this.$emit('click');
    }
  },
  data() {
    return {
      active: this.isActive,
      options: uiBase.options,
      context: uiBase.context
    };
  }
};
</script>

<style lang="scss">

</style>
