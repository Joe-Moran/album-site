import TheNavigationHeader from './TheNavigationHeader.vue'

import xrgbSocialLinks from '@/data/links-social-media'
import routes from '@/routing/routes'

export default {
  title: 'components/Layout/The navigation header',
  id: 'the-navigation-header',
  component: TheNavigationHeader,
}

export const Default = {
  args: {
    navigationLinks: Object.values(routes),
    socialLinks: xrgbSocialLinks,
  },
}
