import AnimatedIcon from './AnimatedIcon.vue';

export default {
  title: 'Animated Icon',
  excludeStories: /.*Data$/,
};

const template = '<AnimatedIcon/>';

export const Default = () => ({
  components: {
    AnimatedIcon,
  },
  template,
});
