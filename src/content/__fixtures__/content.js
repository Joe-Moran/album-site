const samplePicture = {
  sources: {
    avif: '/sample-480.avif 480w, /sample-960.avif 960w',
    webp: '/sample-480.webp 480w, /sample-960.webp 960w',
  },
  img: { src: '/sample-960.jpg', w: 960, h: 960 },
}

export function getReleases() {
  return [
    {
      title: 'Sample Album',
      type: 'album',
      cover: samplePicture,
      streaming: [
        { icon: 'spotify.png', title: 'Spotify', link: 'https://open.spotify.com/album/sample' },
        { icon: 'bandcamp.png', title: 'Bandcamp', link: 'https://xrgb.bandcamp.com/album/sample' },
      ],
    },
    {
      title: 'Sample Single',
      type: 'single',
      cover: samplePicture,
      streaming: [
        { icon: 'spotify.png', title: 'Spotify', link: 'https://open.spotify.com/track/sample' },
      ],
    },
  ]
}

export function getSoundpacks() {
  return [
    {
      title: 'Sample Soundpack',
      cover: samplePicture,
      coverAlt: 'Sample soundpack cover',
      summary: '<p>Sounds from a <em>sample</em> album.</p>\n',
      download: '/sample.zip',
      devices: [
        {
          title: 'Sample Synth Patches',
          patches: [
            { category: 'Pads', count: 1 },
            { category: 'Leads', count: 3, description: 'Bright and loud' },
          ],
        },
      ],
      demos: [
        {
          title: 'Sample Demo',
          playerTitle: 'Player for sample demo',
          embedUrl: 'https://w.soundcloud.com/player/?url=sample',
        },
      ],
      note: '<p>Thanks for listening!</p>\n',
    },
  ]
}

export function getLatest() {
  return {
    title: 'Sample track on Bandcamp',
    embedUrl: 'https://bandcamp.com/EmbeddedPlayer/track=sample',
    height: 120,
    link: { label: 'Sample track', url: 'https://xrgb.bandcamp.com/track/sample' },
  }
}

export function getAbout() {
  return { photo: samplePicture, photoAlt: 'Sample photo', text: '<p>Sample about text.</p>\n' }
}

export function getSocialLinks() {
  return [
    {
      label: 'bandcamp',
      href: 'https://xrgb.bandcamp.com/',
      logoPath: 'Icon awesome-bandcamp.png',
    },
    {
      label: 'instagram',
      href: 'https://www.instagram.com/sample',
      logoPath: 'Icon simple-instagram.png',
    },
  ]
}
