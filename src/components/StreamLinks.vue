<template>
  <div
    class="stream-links"
    :class="{ overlay }"
  >
    <div
      v-if="showFeature"
      id="feature"
    >
      <slot />
    </div>
    <ul>
      <li
        v-for="link in links"
        :key="link.link"
      >
        <StreamLink
          :icon="link.icon"
          :href="link.link"
        >
          {{ link.title }}
        </StreamLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import StreamLink from './StreamLink.vue'

defineProps({
  /** The streaming sites to link to, each with an icon, title, and link. */
  links: { type: Array, required: true },
  overlay: { type: Boolean, required: true },
  showFeature: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

a {
  text-decoration: none;
}

#feature div {
  width: 102%;
  height: 400px;
  margin-bottom: 30px;
  border: 4px solid #d1d1d1;
  border-radius: 5px;
  box-shadow: #c5c5c5 -10px 10px 0;
}

.stream-links {
  position: relative;
  padding: 20px;
  padding-top: 60px;
  background: transparent;
  opacity: 0;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);

  &:not(.overlay) {
    padding-top: 30px;
    background: #d1d1d1;
    box-shadow: -10px 10px 0 $red-primary;
    opacity: 1;
  }
}

ul {
  padding: 0;
}

li {
  margin-bottom: 20px;

  &::before {
    content: unset;
  }
}

button {
  position: absolute;
  top: 7px;
  right: -11px;
  width: 36px;
  height: 36px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  box-shadow: -5px 4px 0 #0000000f;
  transition: all 250ms ease-in-out;

  &:hover {
    color: $red-primary;
    cursor: pointer;
    background: 1px solid $red-primary;
    background: #d3d3d3;
  }
}
</style>
