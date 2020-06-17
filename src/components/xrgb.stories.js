import {
    xrgb
} from "./xrgb"

export default {
    title: 'xRGB Logo',
    excludeStories: /.*Data$/
}

const template = "<xrgb></xrgb>"



export const Default = () => ({
    components: {
        xrgb
    },
    template: template
})