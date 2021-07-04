import StreamLink from './StreamLink.vue'

export default {
  title: 'Stream Link',
  excludeStories: /.*Data$/,
}

const template =
  "<div style='width: 500px; background: #a06969; height: 300px;padding: 40px;'><StreamLink :link='linkData.link' :title='linkData.title' :iconPath='linkData.iconPath'> </StreamLink></div>"

export const Default = () => ({
  components: {
    StreamLink,
  },
  template: template,
  data() {
    return {
      linkData: {
        iconPath: 'Icon awesome-spotify.png',
        title: 'Spotify',
        link: 'joe.com',
      },
    }
  },
})
