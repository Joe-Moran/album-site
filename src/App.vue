<template>
  <div id="app">
    <SocialLinks />
    <AnimatedAlbum />
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
  margin-top: 60px;
  background-color: black;
}

html {
  background-color: black;
  overflow-y: hidden;
}
</style>
