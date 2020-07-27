<template>
  <div>
    <Content
      :scroll-position="scrollPosition"
      name="latest"
      :displayName="false"
      @visible="contentVisible"
    >
      <Latest></Latest>
    </Content>
    <Content name="singles" :scroll-position="scrollPosition" @visible="contentVisible">
      <Releases :releases="singles"></Releases>
    </Content>
    <Content name="albums" :scroll-position="scrollPosition" @visible="contentVisible">
      <Releases :releases="albums"></Releases>
    </Content>
    <Content name="about" :scroll-position="scrollPosition" @visible="contentVisible">
      <About />
    </Content>
  </div>
</template>

<script>
import About from "../components/About";
import Content from "../components/Content";
import Releases from "../components/Releases";
import Latest from "../components/Latest";
import view from "../mixins/view";
import releasesData from "../releases-data.js";

export default {
  name: "home",
  components: {
    Content,
    Releases,
    About,
    Latest
  },
  mixins: [view],
  data() {
    return {
      albums: releasesData.albums,
      singles: releasesData.singles
    };
  }
};
</script>

<style>
</style>