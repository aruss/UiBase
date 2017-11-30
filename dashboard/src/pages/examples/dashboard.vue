<template>
  <div>
    <uib-page-header title="Dashboard" subtitle="foo bar lorem ipsum"></uib-page-header>
    <div class="wrapper-md">
      test
    </div>
  </div>
</template>

<script>
const uibPageHeader = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/page-header.vue');

export default {
  name: 'dashboard',
  mounted () {

  },
  components: {
    uibPageHeader
  }
}
</script>

<style lang="less">

</style>
