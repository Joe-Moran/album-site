import StreamLink from './StreamLink.vue'

export default {
  title: 'Links/StreamLink',
  id: 'stream-link',
  component: StreamLink,
  render: (args) => ({
    components: { StreamLink },
    setup() {
      return { args }
    },
    template: '<StreamLink v-bind="args">Spotify</StreamLink>',
  }),
}

export const Default = {
  args: {
    icon: 'spotify.png',
    href: 'https://open.spotify.com',
  },
}
