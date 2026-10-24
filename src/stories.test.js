import { composeStories } from '@storybook/vue3-vite'
import { render } from '@testing-library/vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import routes from './routing/routes'

const storyModules = import.meta.glob('./**/*.stories.js', { eager: true })

function createStoryRouter() {
  return createRouter({ history: createMemoryHistory(), routes: Object.values(routes) })
}

describe.each(Object.entries(storyModules))('%s', (storyPath, storyModule) => {
  it.each(Object.entries(composeStories(storyModule)))(
    'Renders the %s story the same as its snapshot',
    (storyName, Story) => {
      const { container } = render(Story, { global: { plugins: [createStoryRouter()] } })
      expect(container).toMatchSnapshot()
    }
  )
})
