import Vue from 'vue';

Vue.component('uib-grid-row-custom', {
  template: '<span>Custom: {{ row[column.field] }}</span>',
  props: ['column', 'row']
});
