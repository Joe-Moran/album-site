import {
    action
} from '@storybook/addon-actions'

import StreamLinks from "./Button.vue";

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';



export default {
    title: 'Button',
    excludeStories: /.*Data$/
}

const template = "<Button> </Button>"

export const Default = () => ({
    components: {
        Button
    },
    template: template,
    data() {

    }

});