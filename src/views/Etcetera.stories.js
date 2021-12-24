import Etcetera from '@/components/views/Etcetera/Etcetera.vue';

/**
 * Setup
 */
export default {
  title: 'views/Etcetera/',
  id: 'etcetera',
  component: Etcetera,
  subcomponents: { },
  argTypes: {}
};

/**
 * Template
 */
const Template = (args, { argTypes }) => ({
  components: { Etcetera },
  props: Object.keys(argTypes),
  template: '<etcetera v-bind="$props"></etcetera>',
});

/**
 * Stories
 */
export const etcetera = Template.bind({});
etcetera.args = {};
