<template>
  <div id="app">
    <AnimatedAlbum />
    <SocialLinks />
  </div>
</template>

<script>
import AnimatedAlbum from "./components/AnimatedAlbum.vue";
import SocialLinks from "./components/SocialLinks";

export default {
  name: "app",
  components: {
    AnimatedAlbum,
    SocialLinks
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

html {
  background-color: black;
  overflow-y: hidden;
  height: 100%;
}
</style>
