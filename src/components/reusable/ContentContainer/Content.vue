<template>
  <article :id="name" ref="userContent" class="content-container">
    <h2>{{ name }}</h2>
    <slot></slot>
  </article>
</template>

<script>
/**
 * A styled container for content blocks or chunks.
 */
export default {
  name: 'ContentContainer',
  props: {
    name: { type: String, required: true },
    scrollPosition: { type: Number, default: 0 },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  watch: {
    scrollPosition() {
      this.determineIfVisible()
    },
    isVisible(value) {
      if (value) {
        this.$emit('visible', this.name)
      }
    },
  },
  mounted() {
    this.determineIfVisible()
  },
  methods: {
    determineIfVisible() {
      // TODO Intersection Observer
      const container = this.$refs.userContent.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      const top = container.top
      const bottom = container.bottom
      this.isVisible = top <= windowHeight / 2 && bottom > windowHeight / 2
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/sass/global';

.user-content {
  width: 100%;
  margin-bottom: 90px;
  @media (max-width: $sm) {
    width: 77%;
    margin: auto;
    margin-bottom: 60px;
  }
}

h2 {
  margin-bottom: 60px;
  font-family: consolas, sans-serif;
  font-size: 20px;
  font-weight: 100;
  color: white;
  text-align: center;
  text-transform: lowercase;
  &::before,
  &::after {
    display: inline-block;
    width: 100px;
    height: 1px;
    margin-right: 20px;
    margin-left: 20px;
    vertical-align: middle;
    content: '';
    background: white;
  }
}

@media (max-width: $sm) {
  h2::before,
  h2::after {
    width: 50px;
  }
}
</style>
