import Vue from 'vue'

Vue.component('grid-header-default', {
  template: '<span v-on:click="onClicked($event, column)">{{ column.title }} ' + 
    '<i class="md" :class="{\'md-keyboard-arrow-up\': column.sort === -1, ' + 
    ' \'md-keyboard-arrow-down\': column.sort === 1}"></i></span>',
  props: ['column'],
  methods: {
    onClicked (e, column) {
      e.stopPropagation(); 
      this.$emit('sort', e, column); 
    }
  }
})
