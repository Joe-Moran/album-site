import { fn } from 'storybook/test'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

import NavigationDrawer from './NavigationDrawer.vue'
import SocialLinks from './SocialLinks.vue'

import xrgbSocialLinks from '@/data/links-social-media'

const mobileViewport = {
  parameters: { viewport: { options: INITIAL_VIEWPORTS } },
  globals: { viewport: { value: 'iphonex', isRotated: false } },
}

export default {
  title: 'Drawer',
  component: NavigationDrawer,
  args: {
    links: [{ href: 'href', label: 'link one' }],
    onClick: fn(),
  },
}

export const Default = {}

export const Scrolling = {
  args: { isScrolling: true },
}

export const Mobile = { ...mobileViewport }

export const MobileOpen = {
  ...mobileViewport,
  args: { isOpen: true },
}

export const MobileOpenWithAnchor = {
  ...mobileViewport,
  render: (args) => ({
    components: { NavigationDrawer, SocialLinks },
    setup() {
      return { args, socialLinks: xrgbSocialLinks }
    },
    template: `
      <NavigationDrawer v-bind="args" isOpen>
        <template #anchor><SocialLinks :links="socialLinks" class="social" /></template>
      </NavigationDrawer>
    `,
  }),
}
