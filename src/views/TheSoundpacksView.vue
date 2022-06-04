<template>
  <div class="the-soundpacks-view">
    <div
      v-for="(soundpack, index) in $options.soundpacks"
      :key="index"
      class="soundpack"
    >
      <h1>{{ soundpack.title }}</h1>
      <div class="soundpack-introduction">
        <div class="soundpack-introduction-cover-image">
          <img
            :src="require('../assets/refraction sound pack.jpg')"
            alt="A blurred face, flooded with red and blue hues split down the middle.
            Text reads Refraction Sound Pack."
          >
        </div>
        <div class="soundpack-introduction-summary-and-links">
          <div class="soundpack-introduction-summary">
            <p>
              Synth leads, sounds, and textures designed for my album
              <i class="italic">Refraction</i>.
            </p>
            <p>
              Requires <strong class="bold">Prophet REV2</strong>,
              <strong class="bold">Omnisphere 2</strong>,
              and/or <strong class="bold">Ableton Live</strong>.
            </p>
          </div>
          <div class="soundpack-introduction-links">
            <ButtonLink
              href="/Refraction Sound Pack.zip"
              download="/Refraction Sound Pack.zip"
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
            v-for="(device, deviceIndex) in soundpack.devices"
            :key="deviceIndex"
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
                  <p>
                    {{ patch.category }} - {{ patch.patchCount | patchCount }}
                  </p>
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
        <h3>Prophet REV 2 Patches</h3>
        <iframe
          title="Soundcloud Player for Prophet REV 2 patches"
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1436441497&color=%237e4395&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <h3>Omnisphere Patches</h3>
        <iframe
          title="Soundcloud Player for Onnisphere patches"
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1276519099&color=%237e4395&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
      </div>
      <div class="soundpack-author-note">
        <h2>A Note From The Author</h2>
        <div
          class="soundpack-author-note-content"
          v-html="soundpack.note"
        />
      </div>
    </div>
  </div>
</template>

<script>
import soundpacks from '@/data/soundpack';
import ButtonLink from '@/components/ButtonLink.vue';
/**
 * The soundpacks view, where users can download soundpacks.
 */
export default {
  name: 'TheSoundpacksView',
  components: { ButtonLink },
  props: {},
  /**
   * this.$options.soundpacks
   */
  soundpacks,
  data() {
    return {

    };
  },
  filters: {
    patchCount(count) {
      return `${count} ${count > 1 ? 'patches' : 'patch'}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/global";

.the-soundpacks-view {
  color: white;

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
    color: white;
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
