<template>
  <nav>
    <ul>
      <li v-for="linkObj in links" :key="linkObj.path">
        <Link :link="linkObj" :selected="isCurrentSection(linkObj)" />
      </li>
    </ul>
  </nav>
</template>

<script>
import Link from "./Link";
import nav from "../mixins/nav.js";
export default {
  name: "Sidebar",
  props: {
    currentSelection: { type: String, required: true, default: null }
  },
  components: {
    Link
  },
  methods: {
    isCurrentSection(section) {
      return this.currentSelection && section.path === this.currentSelection;
    }
  },
  mixins: [nav]
};
</script>

<style lang="scss" scoped>
$max: 240px;
$li-margin: 20px;

nav {
  width: $max;
}

li {
  padding-bottom: $li-margin;
  list-style: none;
  &:not(:first-child) {
    padding: $li-margin 0px $li-margin 0px;
  }
}

ul {
  list-style: none;
  padding: 0;
}
</style>