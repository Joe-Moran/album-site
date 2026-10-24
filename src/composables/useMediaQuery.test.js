import { mount } from '@vue/test-utils'
import { defineComponent, h, nextTick } from 'vue'

import { useMediaQuery } from './useMediaQuery'

function stubMatchMedia(initialMatches) {
  const listeners = new Set()
  const mediaQueryList = {
    matches: initialMatches,
    addEventListener: (type, listener) => listeners.add(listener),
    removeEventListener: (type, listener) => listeners.delete(listener),
  }
  vi.stubGlobal('matchMedia', () => mediaQueryList)

  return {
    listeners,
    change: (matches) => listeners.forEach((listener) => listener({ matches })),
  }
}

function mountWithQuery() {
  let matches
  const wrapper = mount(
    defineComponent({
      setup() {
        matches = useMediaQuery('(width < 960px)')
        return () => h('div')
      },
    })
  )

  return { wrapper, matches: () => matches.value }
}

afterEach(() => vi.unstubAllGlobals())

it('Reports a match when the query already matches on mount', () => {
  stubMatchMedia(true)
  const { matches } = mountWithQuery()
  expect(matches()).toBe(true)
})

it('Updates when the media query starts matching', async () => {
  const mediaQuery = stubMatchMedia(false)
  const { matches } = mountWithQuery()
  mediaQuery.change(true)
  await nextTick()
  expect(matches()).toBe(true)
})

it('Stops listening when the component unmounts', () => {
  const mediaQuery = stubMatchMedia(false)
  const { wrapper } = mountWithQuery()
  wrapper.unmount()
  expect(mediaQuery.listeners.size).toBe(0)
})
