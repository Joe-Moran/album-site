<template>
  <ul>
    <li
      v-for="release in releases"
      :key="release.name"
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
export default {
  name: 'Releases',
  components: {
    Release,
  },
  props: {
    releases: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

li {
  width: 100%;
  list-style: none;
}

@media (max-width: $sm) {
  ul {
    margin-left: -35px;
  }
}

@media (min-width: $sm) {
  // display two
  li {
    width: 45%;
    margin: 2.5%;
  }

  ul {
    padding-bottom: 0;
  }
}

@media (min-width: $md) {
  li {
    width: 33%;
    margin-bottom: 40px;
  }
  ul {
  }
}
</style>
