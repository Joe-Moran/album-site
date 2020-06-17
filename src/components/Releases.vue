<template>
  <ul>
    <li v-for="release in releases" :key="release.name">
      <release
        :loading="release.loading"
        :title="release.title"
        :coverPath="release.coverPath"
        :streaming="release.streaming"
        :type="release.type"
        @load="release.loading = false"
      ></release>
    </li>
  </ul>
</template>

<script>
import Release from "./Release";
export default {
  name: "Releases",
  props: {
    releases: { type: Array, required: true }
  },
  components: {
    Release
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 37px;
}

li {
  width: 100%;
  margin-bottom: 40px;
  list-style: none;
}

@media (min-width: $sm) {
  // display two
  li {
    width: 50%;
  }
}

@media (min-width: $md) {
  li {
    width: 33%;
  }
}
</style>