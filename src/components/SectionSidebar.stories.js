import SectionSidebar from './SectionSidebar.vue'

import siteSections from '@/routing/routes'

const links = Object.values(siteSections)

export default {
  title: 'Sidebar',
  component: SectionSidebar,
  args: { links, currentSelection: '' },
}

export const Default = {}

export const WithSelectedSection = {
  args: { currentSelection: links[1].path },
}
