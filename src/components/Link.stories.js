import {
  action,
} from '@storybook/addon-actions';

import Link from './Link.vue';

export default {
  title: 'Link',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('link click'),
};

const linkTemplate = "<Link :link='linkObj' @click='onClick'></Link>";
const linkSelectedTemplate = "<Link :link='linkObj' selected @click='onClick'></Link>";

export const Default = () => ({
  components: {
    Link,
  },
  template: linkTemplate,
  props: {
    linkObj: {
      default: () => ({
        path: 'latest',
        label: 'The Latest',
      }),
    },
  },
  methods: actionsData,
});

export const Selected = () => ({
  components: {
    Link,
  },
  template: linkSelectedTemplate,
  props: {
    linkObj: {
      default: () => ({
        path: 'latest',
        label: 'The Latest',
      }),
    },
  },
  methods: actionsData,
});
