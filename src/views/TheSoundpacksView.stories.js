import TheSoundpacksView from '@/views/TheSoundpacksView.vue';

/**
 * Setup
 */
export default {
  title: 'views/The soundpacks view',
  id: 'the-soundpacks-view',
  component: TheSoundpacksView,
  subcomponents: { },
  argTypes: {},
};

/**
 * Template
 */
const Template = (args, { argTypes }) => ({
  components: { TheSoundpacksView },
  props: Object.keys(argTypes),
  template: '<the-soundpacks-view v-bind="$props"></the-soundpacks-view>',
});

/**
 * Stories
 */
export const theSoundpacksView = Template.bind({});
theSoundpacksView.args = {};
