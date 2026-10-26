import SocialLinks from './SocialLinks.vue'

import { getSocialLinks } from '@/content'

export default {
  title: 'Social Links',
  component: SocialLinks,
}

export const Default = {
  args: { links: getSocialLinks() },
}
