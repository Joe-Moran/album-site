<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="stream-link"
  >
    <div class="link-content">
      <div class="streaming-icon">
        <img
          :src="iconSource"
          alt=""
        />
      </div>
      <!-- @slot The link text -->
      <slot />
    </div>
    <div class="icon-container">
      <FontAwesomeIcon
        :icon="faExternalLinkAlt"
        class="external-link-icon"
      />
    </div>
  </a>
</template>

<script setup>
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = defineProps({
  /** File name of the icon in assets/streaming. */
  icon: { type: String, required: true },
  href: { type: String, required: true },
})

const iconSource = computed(
  () => new URL(`../assets/streaming/${props.icon}`, import.meta.url).href
)
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

.stream-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.7rem 1.25rem;
  font-family: $font-family-link;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  background: #fff;
  border-radius: 5px;
  box-shadow: -0.625rem 0.625rem 0 #0000000f;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    width: 101%;
    margin-left: 0.125rem;
    box-shadow: -0.75rem 0.625rem 0 #0000004d;
  }
}

.streaming-container {
  width: 1.875rem;
  height: 1.875rem;
  margin-right: 0.75rem;
}

.link-content {
  display: flex;
  align-items: center;

  .streaming-icon {
    width: 1.75rem;
    height: 1.75rem;
    padding-right: 0.5rem;

    img {
      width: 100%;
    }
  }
}

.external-link-icon {
  width: 1.25rem;
}
</style>
