<template>
  <div id="release-view">
    <Content
      :scroll-position="scrollPosition"
      name="links"
      :display-name="false"
      @visible="contentVisible"
    >
      <StreamLinks
        :links="release.streaming"
        :overlay="false"
        show-feature
        name="links"
        @click="listenClick = false"
      >
        <div>{{ release.feature }}</div>
      </StreamLinks>
    </Content>

    <!-- <Content :scroll-position="scrollPosition" name="about" @visible="contentVisible">
      <div v-html="release.about"></div>
    </Content>-->
  </div>
</template>

<script>
import view from '@/mixins/view'
import Content from '@/components/reusable/ContentContainer/Content.vue'
import StreamLinks from '@/components/StreamLinks'
export default {
  name: 'ReleaseView',
  components: { StreamLinks, Content },
  mixins: [view],
  props: { release: { type: Object, required: true } },
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

#release-view {
  width: 70%;
  margin: auto;
}

@media (max-width: $md) {
  #release-view {
    width: 90%;
  }
}

@media (max-width: $sm) {
  #release-view {
    width: 100%;
  }
}
</style>
