import xrgbSocialLinks from '../data/links-social-media';

export default {
  title: 'Social Links',
  excludeStories: /.*Data$/,
};

const linksTemplate = "<SocialLinks :links='linkData'/>";

export const Default = () => ({
  components: {
    xrgbSocialLinks,
  },
  template: linksTemplate,
  props: {
    linkData: {
      default: () => xrgbSocialLinks,
    },
  },
});
