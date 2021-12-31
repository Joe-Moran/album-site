<template>
  <article
    :id="title"
    ref="userContent"
    class="content-container"
  >
    <h2>{{ title }}</h2>

    <!-- @slot slot for content inside container -->
    <slot name="default" />
  </article>
</template>

<script>
/**
 * A styled container for an entire block of content. Use for all releases, streaming embeds, etc.
 * @example albums, soundcloud embed links.
 */
export default {
  name: 'ContentContainer',
  props: {
    /**
     * The title of the content block.
     * Utilized for the article heading text and aria-attributes.
     */
    title: { type: String, required: true },

    /**
     * The scroll position of the user on the y-axis of the viewport.
     */
    scrollPosition: { type: Number, default: 0 },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  watch: {
    scrollPosition() {
      this.determineIfVisible();
    },
    isVisible(value) {
      if (value) {
        this.$emit('visible', this.title);
      }
    },
  },

  methods: {
    determineIfVisible() {
      // TODO Intersection Observer
      const container = this.$refs.userContent.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const { top } = container;
      const { bottom } = container;
      this.isVisible = top <= windowHeight / 2 && bottom > windowHeight / 2;
    },
  },
  mounted() {
    this.determineIfVisible();
  },
};
</script>

<style lang="scss" scoped>
@import '@/sass/global';

.content-container {
  margin-bottom: 4rem;
  padding: 1.2rem;
}

h2 {
  margin-bottom: 3.5rem;
  font-family: 'Lato', sans-serif;
  color: #e1e1e1;
  text-transform: capitalize;
  font-size: 2rem;
  border-bottom: $red-primary solid;
  padding: 0.2rem 0;
}
</style>
