import SocialLinks from './SocialLinks.vue';
import xrgbSocialLinks from '../data/links-social-media';

export default {
  title: 'Social Links',
  component: SocialLinks,
};

export const Default = {
  args: { links: xrgbSocialLinks },
};
