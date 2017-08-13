import Vue from 'vue'

Vue.component('grid-row-link', {
  template: '<router-link to="/examples/details">{{ item[column.field] }}</router-link>',
  props: ['column', 'item'],
  computed: {
    rowValue () {
      console.log(this.item[this.column.field]);
      console.log(this.item[this.column.idField]);
      return this.item[this.column.field];
    },
    linkTo () {

      return '/foo/bar'
    }
  }
})
