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
              <th v-for="column in columns_" :key="column.key">
                <component :is="column.componentHead" :column="column" v-on:sort="sort"></component>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list.items" :key="item.key" v-on:click="rowClick($event, item)">
              <td v-for="column in columns_" :key="column.key" :width="column.width" :align="column.align">
                <component :is="column.component" :item="item" :column="column"></component>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </uib-panel>
  </uib-panel>
</template>

<script>

const uibPanel = () => import('../panel/panel.vue');
const uibPagination = () => import('../pagination/pagination.vue');
const Lazy = require('lazy.js');

require('./grid-header-default.js');
require('./grid-row-default.js');
require('./grid-row-checkbox.js');
require('./grid-row-link.js');
require('./grid-row-image.js');
require('./grid-row-actions.js');

export default {
  props: [
    'id',

    // header
    'title',
    'subtitle',

    // data
    'fetch',
    'columns',

    // styles
    'hover',
    'small',
    'stripped'
  ],

  data() {
    return {
      columns_: [],
      list: {}
    }
  },

  created() {

    // compute columns
    for(let i = 0; i < this.columns.length; i++) {

      let col = Object.assign({
        key: i,
        component: 'grid-row-default',
        componentHead: 'grid-header-default',
        width: '*',
        align: 'left', // left | center | right
        sort: 0 // -1|0|1
      }, this.columns[i]);

      col.title = col.title || col.field;
      this.columns_.push(col);
    }

    this.fetch_();
  },

  methods: {

    args_() {

      if (this.args && typeof this.args === 'function') {

        // the provided method so it generates args on its own
        return this.args(this.columns_);
      }
      else {

        // use default logic to create args
        let col = Lazy(this.columns_).find((x) => x.sort != 0);
        let args = {};

        if (col) {
          console.log(col);
          args.sort = {};
          args.sort[col.field] = col.sort;
        }

        return Promise.resolve(args);
      }
    },

    fetch_() {

      if (this.fetch && typeof this.fetch === 'function') {

        this.args_().then((args) => {

          this.fetch(args).then((data) => {

            this.list = data;
          });
        });
      }
      else {

        // Return provided list or a default empy one
        return Promise.resolve(this.list || {
          total: 0,
          take: 10,
          skip: 0,
          items: []
        })
      }
    },

    sort(e, column) {

      this.columns_.forEach((col) => {
        if (col === column) {
          column.sort = column.sort === 0 ? 1 : column.sort === 1 ? -1 : 0;
        }
        else {
          col.sort = 0;
        }
      });

      this.fetch_();
    },

    rowClick(e, item) {

      console.log(this.id + '.rowClick', e, item);
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
