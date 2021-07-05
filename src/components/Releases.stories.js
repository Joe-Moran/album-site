import Releases from './Releases.vue'

export default {
  title: 'Releases',
  excludeStories: /.*Data$/,
}

export const releasesData = [
  {
    title: 'Refraction',
    coverPath: 'Refraction.jpg',
    streaming: [
      {
        icon: '',
      },
    ],
    type: 'album',
    loading: false,
  },
  {
    title: 'Refraction',
    coverPath: 'Refraction.jpg',
    streaming: [
      {
        icon: '',
      },
    ],
    type: 'album',
    loading: false,
  },
  {
    title: 'Refraction',
    coverPath: 'Refraction.jpg',
    streaming: [
      {
        icon: '',
      },
    ],
    type: 'album',
    loading: false,
  },
  {
    title: 'Refraction',
    coverPath: 'Refraction.jpg',
    streaming: [
      {
        icon: '',
      },
    ],
    type: 'album',
    loading: false,
  },
]

const template = "<Releases :releases='releases' @click='onClick'></Releases>"

export const Default = () => ({
  components: {
    Releases,
  },
  template: template,
  data() {
    return {
      releases: releasesData,
    }
  },
})
