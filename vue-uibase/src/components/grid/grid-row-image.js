import Vue from 'vue'

Vue.component('grid-row-image', {
  template: '<img :src="item[column.field]" />',
  props: ['column', 'item']
})
