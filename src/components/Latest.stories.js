import {
    action
} from '@storybook/addon-actions'


import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

export default {
    title: 'Latest',
    excludeStories: /.*Data$/
}





const template = "<drawer :links='links' @click='onClick'></drawer>"


export const Default = () => ({
    components: {
        Latest
    },
    template: template,
    props: {
        links: {
            default: () => drawerData
        }
    },
    methods: actionsData
})