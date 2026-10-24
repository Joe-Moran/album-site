import { setup } from '@storybook/vue3-vite'
import { themes } from 'storybook/theming'
import { createMemoryHistory, createRouter } from 'vue-router'

import routes from '@/routing/routes'

setup((app) => {
  app.use(createRouter({ history: createMemoryHistory(), routes: Object.values(routes) }))
})

export default {
  parameters: {
    docs: {
      theme: themes.light,
    },
    controls: { expanded: true },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
}
