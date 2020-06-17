import {
    action
} from '@storybook/addon-actions'


import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

export default {
    title: 'About',
    excludeStories: /.*Data$/
}





const template = "<about :links='links' @click='onClick'></about>"


export const Default = () => ({
    components: {
        About
    },
    template: template,
    props: {
        links: {
            default: () => drawerData
        }
    },
    methods: actionsData
})