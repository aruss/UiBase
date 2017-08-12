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
        </table>
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

    console.log(this.fuck, this.$fuck, this._fuck, this.fuck$, this.fuck_)

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
  },

  methods: {

    sort(e, column) {

      this.columns_.forEach((col) => {
        if (col === column) {
          column.sort = column.sort === 0 ? 1 : column.sort === 1 ? -1 : 0;
        }
        else {
          col.sort = 0;
        }
      });
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
