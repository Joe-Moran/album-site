import { fn } from 'storybook/test'

import ReleaseCard from './ReleaseCard.vue'

export default {
  title: 'Release',
  component: ReleaseCard,
  args: {
    title: 'Refraction',
    coverPath: 'Refraction.jpg',
    streaming: [{ icon: 'spotify.png', title: 'Spotify', link: 'https://open.spotify.com' }],
    type: 'album',
    releasePath: 'release/refraction',
    loading: false,
    onClick: fn(),
    onLoad: fn(),
  },
}

export const Default = {}

export const Loading = {
  args: { loading: true },
}
