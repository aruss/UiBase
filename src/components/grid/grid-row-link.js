import Vue from 'vue';

Vue.component('grid-row-link', {
  template: '<a href="" v-on:click.stop="$broadcast()"> FUCK </a>',
  props: ['column', 'row']
});
