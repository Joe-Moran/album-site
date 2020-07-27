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
    padding-bottom: 0px;
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