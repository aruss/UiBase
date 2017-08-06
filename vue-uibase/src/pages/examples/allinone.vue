<template>
  <div class="container page">
    <uib-page-header title="Client" subtitle="Some subtitle what ever it means"></uib-page-header>

    <uib-panel>
      hier details about clients yoo!
    </uib-panel>


    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-3">
        <uib-panel>1</uib-panel>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3">
        <uib-panel>2</uib-panel>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3">
        <uib-panel>3</uib-panel>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3">
        <uib-panel>4</uib-panel>
      </div>
    </div>
  </div>

</template>

<script>
const uibPanel = require('../../components/panel/panel.vue')
const uibPageHeader = require('../../components/page/header.vue')

export default {
  data () {
    return {

    }
  },
  components: {
    uibPanel,
    uibPageHeader
  }
}
</script>
<style lang="scss">

</style>
