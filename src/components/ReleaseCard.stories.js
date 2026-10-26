import ReleaseCard from './ReleaseCard.vue'

import { getReleases } from '@/content'

const firstAlbum = getReleases().find((release) => release.type === 'album')

export default {
  title: 'Release',
  component: ReleaseCard,
  args: {
    title: firstAlbum.title,
    cover: firstAlbum.cover,
    streaming: firstAlbum.streaming.slice(0, 1),
  },
}

export const Default = {}
