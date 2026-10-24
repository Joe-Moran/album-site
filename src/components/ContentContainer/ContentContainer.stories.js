import ContentContainer from '@/components/ContentContainer/ContentContainer.vue';

export default {
  title: 'Content Container',
  id: 'content-container',
  component: ContentContainer,
};

export const contentContainer = {
  args: { title: 'Example Title', scrollPosition: 20 },
};
