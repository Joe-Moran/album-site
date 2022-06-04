import TheNavigationHeader from '@/components/layout/TheNavigationHeader.vue';

/**
 * Setup
 */
export default {
  title: 'components/Layout/The navigation header',
  id: 'the-navigation-header',
  component: TheNavigationHeader,
  subcomponents: { },
  argTypes: {}
};

/**
 * Template
 */
const Template = (args, { argTypes }) => ({
  components: { TheNavigationHeader },
  props: Object.keys(argTypes),
  template: '<the-navigation-header v-bind="$props"></the-navigation-header>',
});

/**
 * Stories
 */
export const theNavigationHeader = Template.bind({});
theNavigationHeader.args = {};
