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
            <th v-for="column in cols" :key="column">
              <component :is="column.componentHead" :column="column"></component>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in list.items" :key="item">
            <td v-for="column in columns" :key="column" :width="column.width" :align="column.align">
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
</template>

<script>

import uibPanel from '@/components/panel/panel.vue';
import uibPagination from '@/components/pagination/pagination.vue';

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
  computed: {
    pagesCurrent() {
      return Math.ceil(this.list.total / this.list.take);
    },
    pagesTotal() {
      return this.list.skip / this.list.take + 1;
    },
    itemsFrom() {
      return this.list.skip +1;
    },
    itemsTo() {
      return Math.min(this.list.skip + this.list.take, this.list.total);
    },
    cols() {

      return this.columns.map((c) => {

        if (typeof c.title === 'undefined' && c.field) {

          c.title =  c.field;
        }

        c.component = c.component || 'grid-row-default';
        c.componentHead = c.componentHead || 'grid-header-default';

        return c;
      });
    }
  },
  methods: {

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
