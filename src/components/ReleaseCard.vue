<template>
  <div class="release">
    <h3>{{ title }}</h3>
    <div class="cover">
      <StreamLinks
        v-if="showStreaming"
        :links="streaming"
        overlay
        class="release-stream-links overlay-release"
      />
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
        />
      </picture>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import StreamLinks from './StreamLinks.vue'

import { useMediaQuery } from '@/composables/useMediaQuery'
import globals from '@/globals'

const coverPictures = import.meta.glob('../assets/{albums,singles}/*.jpg', {
  eager: true,
  import: 'default',
  query: { w: '480;960', format: 'avif;webp;jpg', as: 'picture' },
})

const props = defineProps({
  title: { type: String, required: true },
  coverPath: { type: String, required: true },
  streaming: { type: Array, required: true },
  type: { type: String, required: true },
})

const isMobile = useMediaQuery(`(width < ${globals.md}px)`)
const isStreamingRequested = ref(false)

const showStreaming = computed(() => !isMobile.value || isStreamingRequested.value)
const coverPicture = computed(() => {
  const assetDirectory = props.type === 'album' ? 'albums' : 'singles'

  return coverPictures[`../assets/${assetDirectory}/${props.coverPath}`]
})
const coverImageAlt = computed(() => `${props.title} Cover Art`)

function toggleStreaming() {
  isStreamingRequested.value = !isStreamingRequested.value
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
</style>
