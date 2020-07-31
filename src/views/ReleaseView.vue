<template>
  <div id="release-view">
    <Content
      :scroll-position="scrollPosition"
      name="links"
      :displayName="false"
      @visible="contentVisible"
    >
      <StreamLinks
        :links="release.streaming"
        @click="listenClick = false"
        :overlay="false"
        show-feature
        name="links"
      >
        <div v-html="release.feature"></div>
      </StreamLinks>
    </Content>

    <!-- <Content :scroll-position="scrollPosition" name="about" @visible="contentVisible">
      <div v-html="release.about"></div>
    </Content>-->
  </div>
</template>

<script>
import StreamLinks from "../components/StreamLinks";
import Content from "../components/Content";
import view from "../mixins/view";
export default {
  name: "ReleaseView",
  props: { release: { type: Object, required: true } },
  components: { StreamLinks, Content },
  mixins: [view]
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

#release-view {
  width: 70%;
  margin: auto;
}

@media(max-width: $md) {
  #release-view {
    width: 90%;
  }
      
}

@media(max-width: $sm) {
  #release-view {
    width: 100%;
  }
      
}

</style>