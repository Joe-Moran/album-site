import {
    action
} from '@storybook/addon-actions'
import Drawer from "./Drawer";
export default {
    title: 'Drawer',
    excludeStories: /.*Data$/
}

export const actionsData = {
    onOpen: action('onOpen'),
    onClose: action('onClose')
}

export const drawerData = [{
    href: "href",
    label: "link one"
}];

const drawerTemplate = "<drawer :links='drawerData' @openDrawer='onOpen' @closeDrawer='onClose'></drawer>"

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