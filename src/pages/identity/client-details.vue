<template>
  <div class="container page">
    <page-header title="Client" subtitle="Some subtitle what ever it means"></page-header>

    <panel>
      hier details about clients yoo!
    </panel>


    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-3">
        <panel>1</panel>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3">
        <panel>2</panel>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3">
        <panel>3</panel>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3">
        <panel>4</panel>
      </div>
    </div>
  </div>

</template>

<script>

const Panel = () => import(/* webpackChunkName: "group-common" */ '@/components/panel/panel.vue');
const PageHeader = () => import(/* webpackChunkName: "group-common" */ '@/components/page/header.vue');

export default {
  name: 'identity-client-details',
  data() {
    return {

    }
  },
  components: {
    Panel,
    PageHeader
  }
}
</script>

<style lang="scss">

</style>
