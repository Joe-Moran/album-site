<template>
  <div class="latest">
    <iframe
      :title="title"
      :style="{ width: '100%', height: `${height}px`, border: 0 }"
      :src="embedUrl"
      seamless
    >
      <a :href="link.url">{{ link.label }}</a>
    </iframe>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  embedUrl: { type: String, required: true },
  height: { type: Number, required: true },
  link: { type: Object, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

.latest {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;

  @extend %retro-shadow;
}

@media (max-width: $lg) {
  iframe {
    height: 250px;
  }
}

@media (max-width: $sm) {
  iframe {
    height: 160px;
  }

  .latest {
    width: 100%;
  }
}
</style>
