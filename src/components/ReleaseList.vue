<template>
  <ul class="releases">
    <li
      v-for="release in releases"
      :key="release.title"
      class="release-container"
    >
      <ReleaseCard
        :title="release.title"
        :cover="release.cover"
        :streaming="release.streaming"
      />
    </li>
  </ul>
</template>

<script setup>
import ReleaseCard from './ReleaseCard.vue'

defineProps({
  releases: { type: Array, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

.releases {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;

  li::before {
    content: unset;
  }
}

.release-container {
  max-width: 30rem;
}
</style>
