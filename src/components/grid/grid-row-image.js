import Vue from 'vue';

Vue.component('uib-grid-row-image', {
  template: '<img :src="row[column.field]" />',
  props: ['column', 'row']
});


