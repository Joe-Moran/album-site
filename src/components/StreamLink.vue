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
        :icon="$options.externalLinkIcon"
        class="external-link-icon"
      />
    </div>
  </a>
</template>

<script>
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**
 * A link to a streaming service.
 * Mostly styling with frequent components.
 */
export default {
  name: 'StreamLink',
  components: { FontAwesomeIcon },
  props: {
    /**
     * The icon of the link.
     */
    icon: { type: String, required: true },

    /**
     * The href for the link.
     */
    href: { type: String, required: true },
  },
  /**
   * this.$options.externalLinkIcons
   */
  externalLinkIcon: faExternalLinkAlt,
  data() {
    return {}
  },
  computed: {
    iconSource() {
      return new URL(`../assets/streaming/${this.icon}`, import.meta.url).href
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global';

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
