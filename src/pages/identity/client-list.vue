<template>
  <div>
    <h1>Identity Page / Clients</h1>

    <grid :data="gridData"></grid>
  </div>
</template>

<script>

const Grid = () => import(/* webpackChunkName: "group-common" */ '@/components/grid/grid.vue');
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
          { title: 'Link', field: 'bar', rowComponent: 'grid-row-link'},
          { title: 'Foo', field: 'foo', rowComponent: 'grid-row-default' },
          { title: 'Bar', field: 'bar', rowComponent: 'grid-row-custom'  },
        ]
      }
    }
  },
  components: {
    Grid
  }
}
</script>

<style lang="scss">

</style>
