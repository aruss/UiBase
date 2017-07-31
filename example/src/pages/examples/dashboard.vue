<template>
  <div class="container page">
    <uib-page-header title="Dashboard"></uib-page-header>

  </div>
</template>

<script>

const uibPageHeader = () => import('@/components/page/header.vue');

export default {
  name: 'dashboard',
  mounted() {

  },
  components: {
    uibPageHeader
  }
}
</script>

<style lang="scss">

</style>
