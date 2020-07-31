<template>
  <div>
    <UserContent
      :scroll-position="scrollPosition"
      name="latest"
      :displayName="false"
      @visible="contentVisible"
    >
      <Latest></Latest>
    </UserContent>
    <UserContent name="singles" :scroll-position="scrollPosition" @visible="contentVisible">
      <Releases :releases="singles"></Releases>
    </UserContent>
    <UserContent name="albums" :scroll-position="scrollPosition" @visible="contentVisible">
      <Releases :releases="albums"></Releases>
    </UserContent>
    <UserContent name="about" :scroll-position="scrollPosition" @visible="contentVisible">
      <About />
    </UserContent>
  </div>
</template>

<script>
import About from "../components/About";
import UserContent from "../components/Content";
import Releases from "../components/Releases";
import Latest from "../components/Latest";
import view from "../mixins/view";
import releasesData from "../releases-data.js";

export default {
  name: "home",
  components: {
    UserContent,
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