<template>
  <div class="the-soundpacks-view">
    <div
      v-for="soundpack in soundpacks"
      :key="soundpack.title"
      class="soundpack"
    >
      <h1>{{ soundpack.title }}</h1>
      <div class="soundpack-introduction">
        <div class="soundpack-introduction-cover-image">
          <picture>
            <source
              v-for="(srcset, format) in soundpack.cover.sources"
              :key="format"
              :type="`image/${format}`"
              :srcset="srcset"
              sizes="(max-width: 37.5rem) 90vw, 321px"
            />
            <img
              :src="soundpack.cover.img.src"
              :alt="soundpack.coverAlt"
            />
          </picture>
        </div>
        <div class="soundpack-introduction-summary-and-links">
          <div
            class="soundpack-introduction-summary"
            v-html="soundpack.summary"
          />
          <div class="soundpack-introduction-links">
            <ButtonLink
              :href="soundpack.download"
              :download="soundpack.download"
              class="download-button"
            >
              Download
            </ButtonLink>
          </div>
        </div>
      </div>

      <div class="soundpack-details">
        <h2>Details</h2>
        <div class="soundpack-devices">
          <article
            v-for="device in soundpack.devices"
            :key="device.title"
            class="soundpack-device"
          >
            <h3 class="soundpack-device-title">
              {{ device.title }}
            </h3>

            <ul class="soundpack-device-patches">
              <li
                v-for="(patch, patchIndex) in device.patches"
                :key="patchIndex"
                class="soundpack-device-patch"
              >
                <div class="soundpack-device-patch-content">
                  <p>{{ patch.category }} - {{ formatPatchCount(patch.count) }}</p>
                  <p
                    v-if="patch.description"
                    class="soundpack-device-patch-description"
                  >
                    {{ patch.description }}
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div class="soundpack-demos">
        <h2>Demos</h2>
        <template
          v-for="demo in soundpack.demos"
          :key="demo.embedUrl"
        >
          <h3>{{ demo.title }}</h3>
          <iframe
            :title="demo.playerTitle"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="demo.embedUrl"
          />
        </template>
      </div>
      <div class="soundpack-author-note">
        <h2>A Note From The Author</h2>
        <div class="soundpack-author-note-content">
          <div v-html="soundpack.note" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonLink from '@/components/ButtonLink.vue'
import { getSoundpacks } from '@/content'

const soundpacks = getSoundpacks()

function formatPatchCount(count) {
  return `${count} ${count > 1 ? 'patches' : 'patch'}`
}
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

.the-soundpacks-view {
  color: #fff;

  h1 {
    margin-bottom: 3.5rem;
    color: $red-tertiary;
  }
}

.soundpack-introduction {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.soundpack-introduction-cover-image {
  flex: 1 0 16rem;

  img {
    width: 100%;
  }
}

.soundpack-introduction-summary-and-links {
  display: flex;
  flex: 1 0 250px;
  flex-direction: column;
  justify-content: space-between;
}

.soundpack-introduction-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    justify-content: center;
  }
}

.download-button {
  color: $black-primary;
  background: $red-primary;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
  }
}

.soundpack-devices {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(13rem, 45vw, 18rem), 1fr));
}

.soundpack-device-title {
  color: $red-tertiary;
}

.soundpack-device-patch {
  max-width: 17.5rem;
}

.soundpack-device-patch-description {
  font-style: italic;
  color: $gray-tertiary;
}

.soundpack-demos {
  h3 {
    margin-bottom: 1rem;
  }

  iframe {
    margin-bottom: 2rem;
  }
}

.soundpack-author-note-content {
  display: flex;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  background: #d1d1d146;
  border-radius: 0.3125rem;

  > * {
    max-width: 70ch;
  }
}
</style>
