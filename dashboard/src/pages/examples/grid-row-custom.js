import UiBase from 'vue-uibase';

UiBase.vue.component('grid-row-custom', {
  template: '<div class="text-md-center"><i class="fa" :class="{\'fa-mars\': ' +
    'item[column.field] === \'male\', \'fa-venus\': item[column.field] === ' +
    '\'female\' }" aria-hidden="true"></i></div>',
  props: ['column', 'item']
});
