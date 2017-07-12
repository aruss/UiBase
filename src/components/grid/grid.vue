<template>
  <uib-panel :title="title" :subtitle="subtitle" class="grid">
    <div class="table-responsive">
      <table class="table table-hover table table-actions-bar">
        <thead>
          <tr>
            <th v-for="column in columns" :key="column">
              <component :is="column.headerComponent" :column="column"></component>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in rows" :key="row">
            <td v-for="column in columns" :key="column">
              <component :is="column.rowComponent" :row="row" :column="column"></component>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </uib-panel>
</template>

<script>

import uibPanel from '@/components/panel/panel.vue';

require('./grid-header-default.js');
require('./grid-row-default.js');
require('./grid-row-checkbox.js');
require('./grid-row-link.js');

export default {
  props: ['data', 'title', 'subtitle'],
  computed: {
    rows() {

      return this.data.rows;
    },
    columns() {

      return this.data.columns.map((c) => {

        c.rowComponent = c.rowComponent || 'uib-grid-row-default';
        c.headerComponent = c.headerComponent || 'uib-grid-header-default';

        return c;
      });
    }
  },
  components: {
    uibPanel
  }
}
</script>


<style lang="scss">
@import "./grid.scss";
</style>
