<template>
  <div class="container page">
    <uib-page-header title="Foos" subtitle="Here some kind of explanation what this hack is all about"></uib-page-header>
    <uib-grid
      title="Some title"
      subtitle="some subtitle"
      :hover="true"
      :small="true"
      :list="list"
      :columns="columns"></uib-grid>
  </div>
</template>

<script>

const uibGrid = () => import(/* webpackChunkName: "group-common" */ '@/components/grid/grid.vue');
const uibPanel = () => import(/* webpackChunkName: "group-common" */ '@/components/panel/panel.vue');
const uibPageHeader = () => import(/* webpackChunkName: "group-common" */ '@/components/page/header.vue');

require('./grid-row-custom.js');
// import ClientDetails from './client-details.vue';

export default {
  methods: {
    fetch() {
      return new Promise((resolve, reject) => {

        // Fake loading time
        setTimeout(() => {

          this.list = require('./data-list.json');

          resolve();
        }, 200);
      });
    }
  },
  mounted() {
    this.fetch();
  },
  data() {
    return {
      list: null,
      columns: [
        /*{
          title: '',
          field: 'picture',
          component: 'grid-row-image'
        },*/
        {
          title: 'Name', field: 'name',
          component: 'grid-row-link',
          route: 'mymodule-foos-details',
          idField: '_id'
        },
        { title: 'E-Mail', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Company', field: 'company' },
        { title: 'Age', field: 'age' },
        { title: 'Gender', field: 'gender' },
        { title: 'Balance', field: 'balance' },
        { title: 'Active', field: 'isActive' },
        /*{
          component: 'grid-row-actions',
          actions: {
            method: (row, event) => {

              console.log('X', row, event);
            }
          }
        }*/
      ]
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
