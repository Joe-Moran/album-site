import {
    action
} from '@storybook/addon-actions'

import Link from "./Link.vue"

import siteSections from "../site-sections"

import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

export default {
    title: 'Link',
    excludeStories: /.*Data$/
}

export const actionsData = {
    onClick: action('link click'),
}


const linkTemplate = "<Link :link='linkObj' @click='onClick'></Link>"
const linkSelectedTemplate = "<Link :link='linkObj' selected @click='onClick'></Link>"



export const Default = () => ({
    components: {
        Link
    },
    template: linkTemplate,
    props: {
        linkObj: {
            default: () => {
                return {
                    path: "latest",
                    label: "The Latest"
                }
            }
        }
    },
    methods: actionsData
})

export const Selected = () => ({
    components: {
        Link
    },
    template: linkSelectedTemplate,
    props: {
        linkObj: {
            default: () => {
                return {
                    path: "latest",
                    label: "The Latest"
                }
            }
        }
    },
    methods: actionsData
})