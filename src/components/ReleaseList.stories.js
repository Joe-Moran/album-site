import ReleaseList from './ReleaseList.vue'

import releases from '@/data/release'

export default {
  title: 'Releases',
  component: ReleaseList,
}

export const Default = {
  args: { releases: releases.albums },
}
