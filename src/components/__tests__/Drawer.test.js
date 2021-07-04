import { mount } from '@vue/test-utils'
import Drawer from '../Drawer.vue'

const mockLinks = [
  {
    href: 'www.',
    label: 'the internet',
  },
  {
    href: 'me.com',
    label: 'me',
  },
]

describe('Drawer', () => {
  test('links display correctly', () => {
    const wrapper = mount(Drawer, {
      propsData: {
        links: mockLinks,
      },
    })
    expect(wrapper.html().toContain('<a href="www.">the internet</a>'))
    expect(wrapper.html().toContain('<a href="me.com"></a>'))
  })

  test('user cant interact with drawer unless on mobile', () => {
    // const wrapper = mount(Drawer, {
    //     propsData: {
    //         links: mockLinks
    //     }
    // });
    // todo mock document.body.outerWidth
  })

  test('Arrow is black when drawer is open', () => {
    // const wrapper = mount(Drawer, {
    //     propsData: {
    //         links: mockLinks
    //     }
    // });
    // todo
  })
})
