<template>
  <div class="container page">
    <uib-page-header title="Foos" subtitle="Here some kind of explanation what this hack is all about"></uib-page-header>
    <uib-grid :data="gridData"></uib-grid>
  </div>
</template>

<script>

const uibGrid = () => import(/* webpackChunkName: "group-common" */ '@/components/grid/grid.vue');
const uibPanel = () => import(/* webpackChunkName: "group-common" */ '@/components/panel/panel.vue');
const uibPageHeader = () => import(/* webpackChunkName: "group-common" */ '@/components/page/header.vue');

require('./grid-row-custom.js');
// import ClientDetails from './client-details.vue';

export default {
  name: 'identity-client-list',
  data() {
    return {
      gridData: {
        rows: [
          { id: 1, foo: "foo 1", bar: "bar 1" },
          { id: 2, foo: "foo 2", bar: "bar 2" },
          { id: 3, foo: "foo 3", bar: "bar 3" },
          { id: 4, foo: "foo 4", bar: "bar 4" },
          { id: 5, foo: "foo 5", bar: "bar 5" },
          { id: 6, foo: "foo 6", bar: "bar 6" }
        ],
        columns: [
          { title: 'ID', field: 'id', rowComponent: 'uib-grid-row-checkbox' },
          { title: 'Link', field: 'bar', rowComponent: 'uib-grid-row-link', route: 'mymodule-foos-details', idField: 'id' },
          { title: 'Foo', field: 'foo', rowComponent: 'uib-grid-row-default' },
          { title: 'Bar', field: 'bar', rowComponent: 'uib-grid-row-custom'  },
        ]
      }
    }
  },
  components: {
    uibGrid,
    uibPanel,
    uibPageHeader
  }
}
</script>

<style lang="scss">

</style>
