import { fn } from 'storybook/test';
import Release from './Release.vue';

export default {
  title: 'Release',
  component: Release,
  args: {
    title: 'Refraction',
    coverPath: 'Refraction.jpg',
    streaming: [{ icon: '' }],
    type: 'album',
    releasePath: 'release/refraction',
    loading: false,
    onClick: fn(),
    onLoad: fn(),
  },
};

export const Default = {};

export const Loading = {
  args: { loading: true },
};
