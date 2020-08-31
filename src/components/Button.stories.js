import {
    action
} from '@storybook/addon-actions'

import Button from "./Button.vue";

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';



export default {
    title: 'Button'
}

const template = "<Button>Default</Button>"

export const Default = () => ({
    components: {
        Button
    },
    template: template,
    data() {

    }

});