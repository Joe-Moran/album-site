import {
    action
} from '@storybook/addon-actions'

import Drawer from "./Drawer.vue";
import SocialLinks from "./SocialLinks.vue"

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

import xrgbSocialLinks from "../xrgbSocialLinks";
export default {
    title: 'Drawer',
    excludeStories: /.*Data$/
}

export const actionsData = {
    onClick: action('drawer click'),
}

export const drawerData = [{
    href: "href",
    label: "link one"
}];

const drawerTemplate = "<drawer :links='links' @click='onClick'></drawer>"
const drawerScrollingTemplate = "<drawer :links='links' @click='onClick' isScrolling></drawer>"

const openDrawerTemplate = "<drawer :links='links' @click='onClick' isOpen></drawer>"
const openDrawerWithAnchorTemplate = "<drawer :links='links' @click='onClick' isOpen><template v-slot:anchor><SocialLinks :links='socialLinks' class='social' /></template></drawer>"



export const Default = () => ({
    components: {
        Drawer
    },
    template: drawerTemplate,
    props: {
        links: {
            default: () => drawerData
        }
    },
    methods: actionsData
})

export const Scrolling = () => ({
    components: {
        Drawer
    },
    template: drawerScrollingTemplate,
    props: {
        links: {
            default: () => drawerData
        }
    },
    methods: actionsData
})

export const Mobile = () => ({
    components: {
        Drawer
    },
    template: drawerTemplate,
    props: {
        links: {
            default: () => drawerData
        }
    },
    methods: actionsData,

})

Mobile.story = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        }
    }
}

export const MobileOpen = () => ({
    components: {
        Drawer
    },
    template: openDrawerTemplate,
    props: {
        links: {
            default: () => drawerData
        }
    },
    methods: actionsData
})

MobileOpen.story = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        }
    }
}

export const MobileOpenWithAnchor = () => ({
    components: {
        Drawer,
        SocialLinks
    },
    template: openDrawerWithAnchorTemplate,
    props: {
        socialLinks: {
            default: () => xrgbSocialLinks
        },
        links: {
            default: () => drawerData
        }
    }
})

MobileOpenWithAnchor.story = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        }
    }
}