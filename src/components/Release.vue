<template>
  <div class="release">
    <h3>{{ title }}</h3>
    <div class="cover" @click="clickHandler">
      <StreamLinks
        v-if="showStreaming"
        :links="streaming"
        overlay
        class="release-stream-links overlay-release"
        :release-path="releasePath"
        reduce
        @click="listenClick = false"
      />
      <div class="loading" />
      <img
        :src="require('../assets/' + releaseAssetsPath + '/' + coverPath)"
        :alt="coverImageAlt"
        @load="$emit('load', true)"
      />
    </div>
  </div>
</template>

<script>
import globals from '@/globals'
import StreamLinks from './StreamLinks'

export default {
  name: 'Release',
  components: {
    StreamLinks,
  },
  props: {
    loading: { type: Boolean, default: false },
    title: { type: String, required: true },
    coverPath: { type: String, required: true },
    streaming: { type: Array, required: true },
    type: { type: String, required: true },
    releasePath: { type: String, required: true },
  },
  data() {
    return {
      listenClick: false,
      clientWidth: 1900,
    }
  },
  computed: {
    releaseAssetsPath() {
      return this.type === 'album' ? 'albums' : 'singles'
    },
    isMobile() {
      return this.clientWidth < globals.md
    },
    showStreaming() {
      return (this.listenClick && this.isMobile) || !this.isMobile
    },
    coverImageAlt() {
      return `${this.title} Cover Art`
    },
  },
  mounted() {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      this.clientWidth = document.body.clientWidth
    },
    clickHandler() {
      if (this.isMobile) {
        this.listenClick = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';

.cover {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 100%;
  border: 2px solid #ffffff38;
  @extend %retro-shadow;
}

@media (max-width: $md) {
  .cover {
    animation: nudge-user infinite 3s;
  }
}

@keyframes nudge-user {
  0% {
    box-shadow: -10px 10px $red-primary;
  }

  50% {
    box-shadow: -15px 14px $red-primary;
  }
}

img {
  width: 100%;
  height: 100%;
}

.release-stream-links {
  position: absolute;
  right: 0;
  bottom: 107%;
  left: 0;
  opacity: 0;
  &.overlay-release {
    top: 0;
    bottom: 0;
  }
}

button {
  position: absolute;
  top: 40%;
  left: 10%;
  width: 80%;
  height: 20%;
  padding: 6% 15%;
  font-family: Arial;
  font-size: 1.5vw;
  font-weight: bold;
  color: white;
  text-align: center;
  background: #00000082;
  border: 2px solid #fff;
  opacity: 0;
  transition: all 200ms ease-in-out;

  &:hover {
    left: 7.5%;
    width: 85%;
    color: #d11d66;
    cursor: pointer;
    background: #00000090;
  }
}

.loading {
  // width: 350px;
  // height: 350px;
  width: 100%;
  height: 100%;
  background: $red-primary;
  opacity: 0.5;
  animation: blink infinite 1.2s ease-in-out;
}

.release {
  max-width: 700px;

  &:hover button {
    opacity: 1;
  }

  &:hover .overlay-release {
    opacity: 1;
  }
}

h3 {
  border-bottom: 4px $blue-tertiary dotted;

  font-weight: bold;
  text-transform: capitalize;
  font-family: 'Lato', sans-serif;
  color: #e1e1e1;
  font-size: 1.5rem;
  padding: 0.2rem 0;
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
