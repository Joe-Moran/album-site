import BasicButton from './BasicButton.vue';

export default {
  title: 'Components/Basic Button',
};

const Template = (args, { argTypes }) => ({
  components: { BasicButton },
  props: Object.keys(argTypes),
  template: '<BasicButton :prepend-icon="prependIcon" :append-icon="appendIcon">{{text}}</BasicButton>',
});

export const Primary = Template.bind({});
Primary.args = { text: 'Button' };

//   export const Prepend = Template.bind({});
//   Prepend.args = {text: "Prepend", prependIcon: "arrow-right"};

//   export const AppendIcon = Template.bind({});
//   AppendIcon.args = {text: "AppendIcon", appendIcon: "arrow-right"}
