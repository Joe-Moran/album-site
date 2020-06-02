<template>
  <div id="app">
    <Drawer />
    <AnimatedAlbum :class="{'hide': !showHidden}" id="album" />
    <div id="container" :class="{'hide': showHidden}">
      <xrgb></xrgb>
      <Date @click="clickHandler" />
    </div>
  </div>
</template>

<script>
import AnimatedAlbum from "./components/AnimatedAlbum.vue";
import Drawer from "./components/Drawer";
import Date from "./components/Date";
import xrgb from "./components/xrgb";

export default {
  name: "app",
  components: {
    AnimatedAlbum,
    Date,
    Drawer,
    xrgb
  },
  data() {
    return {
      showHidden: false
    };
  },
  methods: {
    clickHandler() {
      this.showHidden = !this.showHidden;
    }
  }
};
</script>


<style lang="scss">
@import "./sass/_global.scss";
@import url("https://fonts.googleapis.com/css?family=Knewave|Raleway:900&display=swap");

#container {
  position: absolute;
  top: 200px;
  width: 100%;
  z-index: 1;
}

.hide {
  opacity: 0;
}

#album {
  position: relative;
  top: 100px;
}

#artsy {
  &.show-text {
    top: 160px;
    letter-spacing: 32px;
  }
}

html {
  overflow: hidden;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: black;
  width: 70%;
  margin: auto;
  display: block;
  position: relative;
}

html {
  background-color: black;
  overflow-y: hidden;
  height: 100%;
}

@media (max-width: $sm) {
  span {
    position: relative;
  }

  #artsy.show-text {
    top: 113px;
  }

  #app {
    width: 100%;
  }
}

@media (min-width: $md) and (max-width: $lg) {
  #app {
    width: 80%;
  }
}

@media (min-width: $md) {
  #album {
    width: 100%;
    position: absolute;
    top: 32px;
  }
}
</style>
