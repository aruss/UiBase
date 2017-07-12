<template>
  <div class="container page">
    <page-header title="Clients" subtitle="Some subtitle what ever it means"></page-header>
    <grid :data="gridData"></grid>

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

const Grid = () => import(/* webpackChunkName: "group-common" */ '@/components/grid/grid.vue');
const Panel = () => import(/* webpackChunkName: "group-common" */ '@/components/panel/panel.vue');
const PageHeader = () => import(/* webpackChunkName: "group-common" */ '@/components/page/header.vue');

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
          { title: 'ID', field: 'id', rowComponent: 'grid-row-checkbox' },
          { title: 'Link', field: 'bar', rowComponent: 'grid-row-link', route: 'identity-clients-details', idField: 'id' },
          { title: 'Foo', field: 'foo', rowComponent: 'grid-row-default' },
          { title: 'Bar', field: 'bar', rowComponent: 'grid-row-custom'  },
        ]
      }
    }
  },
  components: {
    Grid,
    Panel,
    PageHeader
  }
}
</script>

<style lang="scss">

</style>
