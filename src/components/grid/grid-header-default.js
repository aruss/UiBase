import Vue from 'vue';

Vue.component('uib-grid-header-default', {
  template: '<span> {{ column.title }}</span>',
  props: ['column', 'row']
});
