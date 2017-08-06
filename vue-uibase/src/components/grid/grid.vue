<template>
  <uib-panel
     :title="title"
     :subtitle="subtitle"
     class="grid"
     :class="{
       'grid-headless': !title && !subtitle,
     }">

    <div class="table-responsive">
      <table class="table table-actions-bar"
          v-if="list"
          :class="{
            'table-hover': hover,
            'table-sm': small,
            'table-striped': stripped
          }">
          <thead>
            <tr>
              <th v-for="column in cols" :key="column.key">
                <component :is="column.componentHead" :column="column" v-on:sort="onSort"></component>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in list.items" :key="item.key" v-on:click="onRowClick($event, item)">
              <td v-for="column in cols" :key="column.key" :width="column.width" :align="column.align">
                <component :is="column.component" :item="item" :column="column"></component>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row" v-if="list">
        <div class="col-sm-12 col-md-6">
          <span class="pagination-info">Showing {{itemsFrom}} to {{itemsTo}} of {{list.total}} entries</span>
        </div>
        <div class="col-sm-12 col-md-6">
          <uib-pagination
            small="true"
            :total="pagesTotal"
            :current="pagesCurrent"></uib-pagination>
        </div>
      </div>
    </uib-panel>
  </uib-panel>
</template>

<script>

const uibPanel = () => import('../panel/panel.vue');
const uibPagination = () => import('../pagination/pagination.vue');

require('./grid-header-default.js');
require('./grid-row-default.js');
require('./grid-row-checkbox.js');
require('./grid-row-link.js');
require('./grid-row-image.js');
require('./grid-row-actions.js');

export default {
  props: [
    'title',
    'subtitle',
    'list',
    'columns',
    'hover',
    'small',
    'stripped'
  ],

  data () {
    return {
      pageCurrent: 0
    }
  },

  mounted () {
    console.log('ROUTE', this.$router); 
  },

  computed: {

    pagesCurrent () {
      console.log('pagesCurrent')
      return Math.ceil(this.list.skip / this.list.take)
    },

    pagesTotal () {
      console.log('pagesTotal', this.list.total, this.list.take,  this.list.total / this.list.take)
      return Math.ceil(this.list.total / this.list.take);
    },

    itemsFrom () {
      console.log('itemsFrom')
      return this.list.skip + 1
    },

    itemsTo () {
      console.log('itemsTo')
      return Math.min(this.list.skip + this.list.take, this.list.total)
    },

    items () {
      console.log('items')
      let items = []
      /* for(let i = 0; i < this.list.items.length; i++) {

        items.push({
          key: i,
          value:  this.list.items[i]
        })
      } */

      return items
    },

    cols () {

      let cols = []; 
      for(let i = 0; i < this.columns.length; i++) {

        let col = Object.assign({
          key: i,
          component: 'grid-row-default',
          componentHead: 'grid-header-default',
          width: '*',
          align: 'left',
        }, this.columns[i]);

        col.title = col.title || col.field; 

        cols.push(col);
      } 

      return cols; 
    }
  },

  methods: {
    onSort (e, column) {
      console.log('onSort', e, column); 
    },

    onRowClick (e, item) {
      this.$emit('rowclick', e, item); 
    }
  },

  components: {
    uibPanel,
    uibPagination
  }
}
</script>


<style lang="scss">
@import "./grid.scss";
</style>
