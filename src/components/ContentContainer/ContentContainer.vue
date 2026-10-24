<template>
  <article
    :id="title"
    class="content-container"
  >
    <h2>{{ title }}</h2>

    <slot />
  </article>
</template>

<script setup>
defineProps({
  /** Heading text, also used as the article id for in-page links. */
  title: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

.content-container {
  padding: 1.2rem;
  margin-bottom: 4rem;
}

h2 {
  padding: 0.2rem 0;
  margin-bottom: 3.5rem;
  font-family: Lato, sans-serif;
  font-size: 2rem;
  color: #e1e1e1;
  text-transform: capitalize;
  border-bottom: $red-primary solid;
}
</style>
