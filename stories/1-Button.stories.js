import {
  action
} from '@storybook/addon-actions';
import {
  linkTo
} from '@storybook/addon-links';

import MyButton from './MyButton';

export default {
  title: 'Button',
  component: MyButton,
};

export const Text = () => ({
  components: {
    MyButton
  },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: {
    action: action('clicked')
  },
});