import xrgb from "./xrgb.vue"

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