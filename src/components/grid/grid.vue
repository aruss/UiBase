<template>
  <panel>
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
  </panel>
</template>

<script>

import Panel from '@/components/panel/panel.vue';

require('@/components/grid/grid-header-default.js');
require('@/components/grid/grid-row-default.js');
require('@/components/grid/grid-row-checkbox.js');
require('@/components/grid/grid-row-link.js');

export default {
  name: 'grid',
  props: ['data'],
  computed: {
    rows() {

      return this.data.rows;
    },
    columns() {

      return this.data.columns.map((c) => {

        c.rowComponent = c.rowComponent || 'grid-row-default';
        c.headerComponent = c.headerComponent || 'grid-header-default';

        return c;
      });
    }
  },
  components: {
    Panel
  }
}
</script>


<style lang="scss">
@import "./grid.scss";
</style>
