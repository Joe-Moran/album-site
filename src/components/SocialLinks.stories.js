import {
    action
} from '@storybook/addon-actions'

import SocialLinks from "./SocialLinks.vue";

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

import xrgbSocialLinks from "../xrgbSocialLinks"

export default {
    title: 'Social Links',
    excludeStories: /.*Data$/
}

const linksTemplate = "<SocialLinks :links='linkData'/>"

export const Default = () => ({
    components: {
        SocialLinks
    },
    template: linksTemplate,
    props: {
        linkData: {
            default: () => xrgbSocialLinks
        }
    }
});