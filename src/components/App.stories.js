import { action } from '@storybook/addon-actions';

import App from '../App.vue';

export default {
  title: 'App',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('link click'),
};

const template = '<app />';

const templateScrolling = "<app :isScrolling='true' />";

export const Default = () => ({
  components: {
    App,
  },
  template,
  props: {},
  methods: actionsData,
});

export const Scrolling = () => ({
  components: {
    App,
  },
  template: templateScrolling,
  props: {},
  methods: actionsData,
});
