<template>
    <div class="app-content-body ">
    <uib-page-header title="All components" subtitle="Here you can see all the basic components"></uib-page-header>
    <div class="wrapper-md">
      place components here...
    </div>
  </div>
</template>

<script>
const uibPageHeader = () => import('../../components/page-header.vue');

export default {

  mounted () {

  },

  components: {
    uibPageHeader
  }
}
</script>

<style lang="less">

</style>
