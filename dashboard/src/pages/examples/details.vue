<template>
  <div>
    <uib-page-header title="Dashboard" subtitle="foo bar lorem ipsum"></uib-page-header>
    <div class="wrapper-md">

      <uib-panel>
        hier details about clients yoo!
      </uib-panel>

    </div>
  </div>
</template>

<script>
const uibPanel = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/panel.vue');
const uibPageHeader = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/page-header.vue');

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

<style lang="less">

</style>
