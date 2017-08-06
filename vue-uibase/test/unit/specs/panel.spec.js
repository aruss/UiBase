import Vue from 'vue'
import Panel from '@/components/panel/panel.vue'

describe('panel.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Panel)
    const props = { title: 'Hello', subtitle: 'World' }
    const vm = new Constructor(props).$mount()

    expect(vm.$el.querySelector('b').textContent)
      .to.equal(props.title)

    expect(vm.$el.querySelector('p').textContent)
      .to.equal(props.subtitle)
  })
})
