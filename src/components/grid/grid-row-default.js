import Vue from 'vue';

Vue.component('uib-grid-row-default', {
  template: '<span>{{ row[column.field] }}</span>',
  props: ['column', 'row']
});
