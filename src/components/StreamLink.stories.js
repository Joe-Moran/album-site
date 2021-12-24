import StreamLink from './StreamLink.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**
 * Setup
 */
export default {
  title: 'Links/StreamLink',
  id: 'stream-link',
  component: StreamLink,
  subcomponents: { FontAwesomeIcon },
  argTypes: {},
}

/**
 * Template
 */
const Template = (args, { argTypes }) => ({
  components: { StreamLink },
  props: Object.keys(argTypes),
  template: '<StreamLink> v-bind="$props"></StreamLink>',
})

/**
 * Stories
 */
export const streamLink = Template.bind({})
streamLink.args = {
  icon: '',
  title: 'Youtube',
  link: 'youtube.com',
}
