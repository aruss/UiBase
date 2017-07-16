<template>
  <uib-panel
    :title="title"
    :subtitle="subtitle"
    class="grid"
    :class="{'grid-headless': !title && !subtitle}">

    <div class="table-responsive">
      <table class="table table-hover table table-actions-bar">
        <thead>
          <tr>
            <th v-for="column in cols" :key="column">
              <component :is="column.headerComponent" :column="column"></component>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in rows" :key="row">
            <td width="1" v-for="column in columns" :key="column">
              <component :is="column.rowComponent" :row="row" :column="column"></component>
            </td>
            <td width="*"><template v-if="rowActions && rowActions.length > 0">
              <button v-for="action in rowActions"
                :key="action"
                v-on:click="action.method(row, $event)">{{ action.title }}</button>
            </template></td>
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
require('./grid-row-image.js');

export default {
  props: [
    'data',
    'title',
    'subtitle',
    'rows',
    'columns',
    'row-actions'
  ],
  computed: {
    cols() {

      return this.columns.map((c) => {

        if (typeof c.title === 'undefined') {

          c.title =  c.field;
        }

        c.rowComponent = c.rowComponent || 'uib-grid-row-default';
        c.headerComponent = c.headerComponent || 'uib-grid-header-default';

        return c;
      });
    }
  },
  methods: {

  },
  components: {
    uibPanel
  }
}
</script>


<style lang="scss">
@import "./grid.scss";
</style>
