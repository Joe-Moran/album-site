<template>
  <div class="release" :class="{loading: loading}">
    <div class="cover">
      <StreamLinks
        :open="showStreaming"
        :links="streaming"
        :overlay="!isMobile"
        class="release-stream-links"
        :class="{'overlay-release': !isMobile}"
        @close="showStreaming = false"
      />
      <img :src="require('../assets/' + releasePath + '/' + coverPath)" @load="$emit('load', true)" />
      <button @click="showStreaming = true" v-if="isMobile">Listen</button>
    </div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
import StreamLinks from "./StreamLinks";
import globals from "../globals";

export default {
  name: "Release",
  components: {
    StreamLinks
  },
  props: {
    loading: { type: Boolean, default: true },
    title: { type: String, required: true },
    coverPath: { type: String, required: true },
    streaming: { type: Array, required: false },
    type: { type: String, required: true }
  },
  data() {
    return {
      showStreaming: false
    };
  },
  computed: {
    releasePath() {
      return this.type === "album" ? "albums" : "singles";
    },
    isMobile() {
      return document.body.clientWidth < globals.md;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

.cover {
  width: 100%;
  max-width: 700px;
  height: 100%;
  border: 2px solid #ffffff38;
  box-shadow: -10px 10px $red-primary;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
}

.release-stream-links {
  position: absolute;
  bottom: 107%;
  left: 0;
  right: 0;
  &.overlay-release {
    bottom: 0;
    top: 0;
  }
}

button {
  font-family: Arial;
  font-weight: bold;
  font-size: 1.5vw;
  padding: 6% 15%;
  position: absolute;
  background: #00000082;
  border: 2px solid #fff;
  color: white;
  width: 80%;
  left: 10%;
  top: 40%;
  height: 20%;
  transition: all 200ms ease-in-out;
  opacity: 0;
  text-align: center;

  &:hover {
    color: #d11d66;
    background: #00000090;
    cursor: pointer;
    width: 85%;
    left: 7.5%;
  }
}

.release {
  max-width: 700px;

  &.loading {
    background: $red-primary;
    opacity: 0.5;
    animation: blink infinite 1.2s ease-in-out;
    width: 350px;
    height: 350px;
  }

  &:hover button {
    opacity: 1;
  }
}

h3 {
  font-family: consolas;
  font-weight: 100;
  color: white;
  text-align: center;
}

@keyframes blink {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
}
</style>