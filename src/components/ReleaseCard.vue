<template>
  <div class="release">
    <h3>{{ title }}</h3>
    <div class="cover">
      <StreamLinks
        v-if="showStreaming"
        :links="streaming"
        overlay
        class="release-stream-links overlay-release"
        :release-path="releasePath"
        reduce
      />
      <div class="loading" />
      <button
        v-if="isMobile"
        type="button"
        class="cover-toggle"
        :aria-expanded="showStreaming"
        @click="toggleStreaming"
      >
        <picture>
          <source
            v-for="(srcset, format) in coverPicture.sources"
            :key="format"
            :type="`image/${format}`"
            :srcset="srcset"
            sizes="(max-width: 60rem) 90vw, 480px"
          />
          <img
            loading="lazy"
            :src="coverPicture.img.src"
            :alt="coverImageAlt"
            @load="$emit('load', true)"
          />
        </picture>
      </button>
      <picture v-else>
        <source
          v-for="(srcset, format) in coverPicture.sources"
          :key="format"
          :type="`image/${format}`"
          :srcset="srcset"
          sizes="(max-width: 60rem) 90vw, 480px"
        />
        <img
          loading="lazy"
          :src="coverPicture.img.src"
          :alt="coverImageAlt"
          @load="$emit('load', true)"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import StreamLinks from './StreamLinks.vue'

import globals from '@/globals'

const coverPictures = import.meta.glob('../assets/{albums,singles}/*.jpg', {
  eager: true,
  import: 'default',
  query: { w: '480;960', format: 'avif;webp;jpg', as: 'picture' },
})

export default {
  name: 'ReleaseCard',
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
  emits: ['load'],
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
    coverPicture() {
      return coverPictures[`../assets/${this.releaseAssetsPath}/${this.coverPath}`]
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
    toggleStreaming() {
      this.listenClick = !this.listenClick
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

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

.cover-toggle {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: none;
  border: 0;
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

  &:hover .overlay-release,
  &:focus-within .overlay-release {
    opacity: 1;
  }
}

h3 {
  padding: 0.2rem 0;
  font-family: Lato, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e1e1e1;
  text-transform: capitalize;
  border-bottom: 4px $blue-tertiary dotted;
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
