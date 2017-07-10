<template>
  <div>
    <h1>Dashboard</h1>

    <grid></grid>
  </div>
</template>

<script>

const Grid = () => import(/* webpackChunkName: "group-common" */ '@/components/grid/grid.vue');

export default {
  name: 'dashboard',
  mounted() {

  },
  components: {
    Grid
  }
}
</script>

<style lang="scss">

</style>
