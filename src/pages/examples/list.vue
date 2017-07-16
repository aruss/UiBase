<template>
  <div class="container page">
    <uib-page-header title="Foos" subtitle="Here some kind of explanation what this hack is all about"></uib-page-header>
    <uib-grid
      :rows="rows"
      :columns="columns"
      :row-actions="rowActions"></uib-grid>
  </div>
</template>

<script>

const uibGrid = () => import(/* webpackChunkName: "group-common" */ '@/components/grid/grid.vue');
const uibPanel = () => import(/* webpackChunkName: "group-common" */ '@/components/panel/panel.vue');
const uibPageHeader = () => import(/* webpackChunkName: "group-common" */ '@/components/page/header.vue');

require('./grid-row-custom.js');
// import ClientDetails from './client-details.vue';

export default {
  data() {
    return {
      rows: require('./data-list.json').items,
      columns: [
        { title: '', field: 'picture', rowComponent: 'uib-grid-row-image' },
        { title: 'Name', field: 'name', rowComponent: 'uib-grid-row-link', route: 'mymodule-foos-details', idField: '_id' },
        { title: 'E-Mail', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Company', field: 'company' },
        { title: 'Age', field: 'age' },
        { title: 'Gender', field: 'gender' },
        { title: 'Balance', field: 'balance' },
        { title: 'Active', field: 'isActive' }
      ],
      rowActions: [{
        title: 'X',
        method: (row, event) => {

          console.log('X', row, event);
        }
      }]
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
/*
"_id": "596aac8f33122fe6a912930f",
"picture": "http://placehold.it/32x32",
"name": "Fitzpatrick Cantu",
"phone": "+1 (857) 579-3382",
"address": "386 Garfield Place, Bourg, California, 2331",
"isActive": false,
"balance": "$3,594.36",
"age": 28,
"gender": "male",
"company": "REMOLD",
"email": "fitzpatrickcantu@remold.com"*/
</style>
