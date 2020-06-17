import {
    action
} from '@storybook/addon-actions'

import Release from "./Release.vue";



export default {
    title: 'Release',
    excludeStories: /.*Data$/
}

export const actionsData = {
    onClick: action('release click'),
    onLoad: () => {
        action('icon loaded');
        this.loading = false;
    }
}

export const releaseData = {
    title: "Refraction",
    coverPath: "Refraction.jpg",
    streaming: [{
        icon: ''
    }],
    type: "album",
    loading: true
};

const template = "<Release :loading='false' :title='title' :coverPath='coverPath' :streaming='streaming' :type='type' @click='onClick' @load='loading = false'></Release>"

const loadingTemplate = "<Release :loading='loading'  :title='title' :coverPath='coverPath' :streaming='streaming' :type='type'  @click='onClick' @load='loading = false'></Release>"


export const Default = () => ({
    components: {
        Release
    },
    template: template,
    data() {
        return releaseData
    },
    methods: actionsData
})

export const Loading = () => ({
    components: {
        Release
    },
    template: loadingTemplate,
    data() {
        return releaseData
    },
    methods: actionsData
})