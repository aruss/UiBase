import Vue from 'vue';

Vue.component('uib-grid-row-custom', {
  template: '<span>Custom: {{ item[column.field] }}</span>',
  props: ['column', 'item']
});
