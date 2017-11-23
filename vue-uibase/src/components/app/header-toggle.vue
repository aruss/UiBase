<template>
  <div class="nav navbar-nav hidden-xs">
    <a class="btn no-shadow navbar-btn active"  v-on:click.stop="$broadcast(data.event)">
      <i class="fa fa-dedent fa-fw text"></i>
      <i class="fa fa-indent fa-fw text-active"></i>
    </a>
  </div>
</template>

<script>
export default {
   props: ['data'],
   mounted() {

     console.log(this.data);
   }
}
</script>

<style lang="less">
//@import "./less/variables.less";
</style>


