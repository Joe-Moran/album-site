import {
    action
} from '@storybook/addon-actions'

import StreamLinks from "./StreamLinks.vue";

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';



export default {
    title: 'Stream Links',
    excludeStories: /.*Data$/
}

const template = "<StreamLinks :links='linkData' style='margin: 20px' open> </StreamLinks>"

export const Default = () => ({
    components: {
        StreamLinks
    },
    template: template,
    data() {
        return {
            linkData: [{
                iconPath: "Icon awesome-spotify.png",
                title: "Spotify",
                link: "joe.com"
            }, {
                iconPath: "Icon awesome-spotify.png",
                title: "Spotify",
                link: "joe.com"
            }, {
                iconPath: "Icon awesome-spotify.png",
                title: "Spotify",
                link: "joe.com"
            }]
        }
    }
});