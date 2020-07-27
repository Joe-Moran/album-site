<template>
  <div id="release-view">
    <StreamLinks
      :links="release.streaming"
      @click="listenClick = false"
      :overlay="false"
      show-feature
    >
      <div v-html="release.feature"></div>
    </StreamLinks>
  </div>
</template>

<script>
import StreamLinks from "../components/StreamLinks";
export default {
  name: "ReleaseLinks",
  props: { release: { type: Object, required: true } },
  components: { StreamLinks }
};
</script>

<style>
#release-view {
  width: 50%;
  margin: auto;
}
</style>