<template>
  <div class="container page">
    <uib-page-header title="Foos" subtitle="Here some kind of explanation what this hack is all about"></uib-page-header>
    <uib-grid
      v-on:rowclick="onRowClick"
      :hover="true"
      :small="true"
      :list="list"
      :columns="columns"></uib-grid>
  </div>
</template>

<script>
const uibGrid = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/grid/grid.vue')
const uibPageHeader = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/page/header.vue')

require('./grid-row-custom.js')

export default {
  methods: {
    fetch () {

      let list = require('./data-list.json'); 

      this.list = list; 

      // Fake API call
      /*new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(list); 
        }, 500)
      }).then((r) => {
        this.list = r
      })*/

      this.$route.push('/somewhere-else');
    },

    onRowClick (e, item) {

      this.$route.push('/somewhere-else');
      console.log('onRowClick', e, item); 
    }
  },
  mounted () {
    this.fetch()
  },
  data () {
    return {
      list: null,
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'E-Mail', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Company', field: 'company' },
        { title: 'Age', field: 'age' },
        { title: 'Gender', field: 'gender' },
        { title: 'Balance', field: 'balance' },
        { title: 'Active', field: 'isActive' },
        {
          component: 'grid-row-actions',
          actions: [{
            icon: 'fa fa-remove',
            method: (e, item) => {
              console.log('action method!', e, item); 
            }
          }]
        }
      ]
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
