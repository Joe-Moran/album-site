import StreamLinks from './StreamLinks.vue'

const spotifyLink = { icon: 'spotify.png', title: 'Spotify', link: 'https://open.spotify.com' }

export default {
  title: 'Stream Links',
  component: StreamLinks,
}

export const Default = {
  args: {
    links: [
      spotifyLink,
      { ...spotifyLink, link: `${spotifyLink.link}/2` },
      { ...spotifyLink, link: `${spotifyLink.link}/3` },
    ],
    overlay: false,
    releasePath: 'release/refraction',
    style: 'margin: 20px',
  },
}
