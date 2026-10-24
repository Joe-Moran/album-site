import { fn } from 'storybook/test'

import SectionLink from './SectionLink.vue'

export default {
  title: 'Link',
  component: SectionLink,
  args: {
    link: { path: 'latest', label: 'The Latest' },
    onClick: fn(),
  },
}

export const Default = {}

export const Selected = {
  args: { selected: true },
}
