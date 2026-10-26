<template>
  <div class="about">
    <div class="image-container">
      <picture>
        <source
          v-for="(srcset, format) in photo.sources"
          :key="format"
          :type="`image/${format}`"
          :srcset="srcset"
          sizes="(max-width: 60rem) 90vw, 614px"
        />
        <img
          id="me"
          loading="lazy"
          :src="photo.img.src"
          :alt="photoAlt"
        />
      </picture>
    </div>
    <div
      class="about-text"
      v-html="text"
    />
  </div>
</template>

<script setup>
defineProps({
  photo: { type: Object, required: true },
  photoAlt: { type: String, required: true },
  /** Rendered HTML from the Markdown in about.yml. */
  text: { type: String, required: true },
})
</script>

<style scoped lang="scss">
@use '@/sass/global' as *;

.about {
  display: flex;
  flex-wrap: wrap;
}

#me {
  width: 100%;
}

.image-container {
  flex: 3 0 21.875rem;
}

.about-text {
  flex: 1 0 40ch;
  padding: 0 1rem;
  color: #fff;

  :deep(p) {
    max-width: 70ch;
    margin: 0;
  }

  :deep(p + p) {
    margin-top: 1rem;
  }
}
</style>
