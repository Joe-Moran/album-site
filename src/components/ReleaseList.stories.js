import ReleaseList from './ReleaseList.vue'

import { getReleases } from '@/content'

export default {
  title: 'Releases',
  component: ReleaseList,
}

export const Default = {
  args: { releases: getReleases().filter((release) => release.type === 'album') },
}
