import ContentContainer from '@/components/ContentContainer/ContentContainer.vue'

/**
 * Setup
 */
export default {
  title: 'Content Container',
  id: 'content-container',
  component: ContentContainer,
  subcomponents: {},
  argTypes: {},
}

/**
 * Template
 */
const Template = (args, { argTypes }) => ({
  components: { ContentContainer },
  props: Object.keys(argTypes),
  template: '<content-container v-bind="$props"></content-container>',
})

/**
 * Stories
 */
export const contentContainer = Template.bind({})
contentContainer.args = { title: 'Example Title', scrollPosition: 20 }
