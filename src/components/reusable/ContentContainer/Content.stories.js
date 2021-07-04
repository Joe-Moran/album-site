

import Content from "./Content.vue";



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