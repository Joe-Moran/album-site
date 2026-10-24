import BasicButton from './BasicButton.vue';

export default {
  title: 'Components/Basic Button',
  component: BasicButton,
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args };
    },
    template: '<BasicButton :prepend-icon="args.prependIcon" :append-icon="args.appendIcon">{{ args.text }}</BasicButton>',
  }),
};

export const Primary = {
  args: { text: 'Button' },
};
