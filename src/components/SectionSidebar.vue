<template>
  <nav>
    <ul>
      <li
        v-for="linkObj in links"
        :key="linkObj.path"
      >
        <SectionLink
          :link="linkObj"
          :selected="isCurrentSection(linkObj)"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import SectionLink from './SectionLink.vue'

import nav from '@/mixins/nav'

export default {
  name: 'SectionSidebar',
  components: {
    SectionLink,
  },
  mixins: [nav],
  props: {
    currentSelection: { type: String, default: null },
  },
  methods: {
    isCurrentSection(section) {
      return this.currentSelection && section.path === this.currentSelection
    },
  },
}
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
    padding: $li-margin 0 $li-margin 0;
  }
}

ul {
  padding: 0;
  list-style: none;
}
</style>
