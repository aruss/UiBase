<template>
  <div class="container page">
    <uib-page-header title="Foos" subtitle="Here some kind of explanation what this hack is all about"></uib-page-header>
    <uib-grid
      :hover="true"
      :small="true"
      :listx="list"
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
      this.list = require('./data-list.json')

      var that = this

      return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve({
            'take': 10,
            'skip': 0,
            'total': 260,
            'sort': {
              'name': 1
            },
            'items': [{
              '_id': '596aac8f33122fe6a912930f',
              'name': 'Fitzpatrick Cantu',
              'phone': '+1 (857) 579-3382',
              'address': '386 Garfield Place, Bourg, California, 2331',
              'picture': 'http://placehold.it/32x32',
              'isActive': false,
              'balance': '$3,594.36',
              'age': 28,
              'gender': 'male',
              'company': 'REMOLD',
              'email': 'fitzpatrickcantu@remold.com'
            }]
          })
        }, 500)
      }).then((x) => {
        console.log(that === this)
        this.list = x
      })
    }
  },
  mounted () {
    this.fetch()
  },
  data () {
    return {
      list: null,
      columns: [
        {
          title: 'Name',
          field: 'name',
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
        {
          component: 'grid-row-actions',
          actions: {
            method: (row, event) => {
              console.log('X', row, event)
            }
          }
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
