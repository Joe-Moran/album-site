<template>
  <ul class="releases">
    <li
      v-for="release in $options.releases.albums"
      :key="release.name"
      class="release-container"
    >
      <Release
        :loading="release.loading"
        :title="release.title"
        :cover-path="release.coverPath"
        :streaming="release.streaming"
        :type="release.type"
        :release-path="release.path ? 'release' + release.path : null"
        @load="release.loading = false"
      />
    </li>
  </ul>
</template>

<script>
import Release from './Release'
import releases from '@/releases-data'
export default {
  name: 'Releases',
  components: {
    Release,
  },
  /**
   * this.$options.releases
   */
  releases,
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';

.releases {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

li {
  list-style: none;
}

.release-container {
  max-width: 30rem;
}
</style>
