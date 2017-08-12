<template>
  <div class="container page">
    <uib-page-header title="Foos" subtitle="Here some kind of explanation what this hack is all about"></uib-page-header>
    <uib-grid
      v-on:rowclick="onRowClick"
      :hover="true"
      :small="true"
      :fetch="fetch"
      :columns="columns"></uib-grid>
  </div>
</template>

<script>
require('./grid-row-custom.js');
const Lazy = require('lazy.js');
const uibGrid = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/grid/grid.vue');
const uibPageHeader = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/page/header.vue');

export default {
  methods: {
    onRowClick (e, item) {

      console.log('navigate to /somewhere-else');
      // this.$route.push('/somewhere-else');
    }
  },

  data () {
    return {
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'E-Mail', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Company', field: 'company' },
        { title: 'Age', field: 'age' },
        { title: 'Gender', field: 'gender', component: 'grid-row-custom' },
        { title: 'Balance', field: 'balance' },
        { title: 'Active', field: 'isActive' },
        /* {
          component: 'grid-row-actions',
          actions: [{
            icon: 'fa fa-remove',
            method: (e, item) => {
              console.log('action method!', e, item);
            }
          }]
        } */
      ],
      fetch: (args) => {

        console.log(args);

        let list = require('./data-list.json');
        let query = Lazy(list.items);

        if (args.sort) {

          let keys = Object.keys(args.sort);
          if (keys.length > 0) {

            let dir = args.sort[keys[0]];
            if (dir != 0) {

              query = query.sortBy((c) => {
                return c[keys[0]]
              }, dir === -1);
            }
          }
        }

        list.skip = args.skip;
        list.take = args.take;
        list.sort = args.sort;
        list.items = query.skip(args.skip).take(args.take).toArray();

        return Promise.resolve(list);
      }
    }
  },
  components: {
    uibGrid,
    uibPageHeader
  }
}
</script>

<style lang="scss">

</style>
