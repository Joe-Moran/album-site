import { fn } from 'storybook/test';
import Link from './Link.vue';

export default {
  title: 'Link',
  component: Link,
  args: {
    link: { path: 'latest', label: 'The Latest' },
    onClick: fn(),
  },
};

export const Default = {};

export const Selected = {
  args: { selected: true },
};
