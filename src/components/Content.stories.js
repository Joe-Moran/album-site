import {
    action
} from '@storybook/addon-actions'

import Content from "./Content.vue";

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';


export default {
    title: 'Content',
    excludeStories: /.*Data$/
}

const template = "<Content title='title'>hi </Content>"

export const Default = () => ({
    components: {
        Content
    },
    template: template
});