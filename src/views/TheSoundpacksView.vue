<template>
  <div class="the-soundpacks-view">
    <div
      v-for="(soundpack, index) in $options.soundpacks"
      :key="index"
      class="soundpack"
    >
      <h1>{{ soundpack.title }}</h1>
      <div class="soundpack-introduction">
        <div class="soundpack-introduction-cover-image" />
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
            <BasicButton>Download</BasicButton>
            <BasicButton>Donate</BasicButton>
          </div>
        </div>
      </div>

      <div class="soundpack-demos">
        <h2>Demos</h2>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          class="soundpack-demos-embedded-player"
          :src="soundpack.demoPlayerEmbedPath"
        />
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
import BasicButton from '@/components/Button/BasicButton.vue';
/**
 * The soundpacks view, where users can download soundpacks.
 */
export default {
  name: 'TheSoundpacksView',
  components: { BasicButton },
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
@import '../sass/global.scss';

.the-soundpacks-view {
  color: white;
  background: black;

  h1 {
    color: $red-tertiary;
  }
}

.soundpack-introduction {
  display: flex;
}

.soundpack-introduction-cover-image {
  flex: 2;
height: 400px;
}

.soundpack-introduction-summary-and-links {
  flex: 3;
display: flex;
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

.soundpack-devices {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}

.soundpack-device-title {
  color: $red-tertiary;
}

.soundpack-device-patch {
  max-width: 17.5rem;
}

.soundpack-device-patch-description {
  color: $gray-tertiary;
  font-style: italic;
}

.soundpack-author-note-content {
  padding: .875rem 1.5rem;
  border-radius: .3125rem;

  background: rgba(158, 155, 155, 0.219);

  display: flex;
  justify-content: center;

  > * {
    max-width: 70ch;
  }
}

</style>
