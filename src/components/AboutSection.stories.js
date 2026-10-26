import AboutSection from './AboutSection.vue'

import { getAbout } from '@/content'

export default {
  title: 'Sections/About',
  component: AboutSection,
}

export const Primary = {
  args: getAbout(),
}
