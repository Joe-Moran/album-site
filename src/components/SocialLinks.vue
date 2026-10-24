<template>
  <div class="social-links">
    <a
      v-for="link in links"
      :id="link.label"
      :key="link.href"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        :src="logoSource(link.logoPath)"
        :alt="link.label"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    links: { type: Array, required: true },
  },
  methods: {
    logoSource(logoPath) {
      return new URL(`../assets/social-media/${logoPath}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped lang="scss">

.social-links {
  display: flex;
  align-items: center;
}

a {
  display: block;
  padding: .3125rem;
  width: 1.5rem;
}

img {
  width: 100%;
  transition: all 1s ease-in-out;
}

img:hover {
  filter: blur(0.5px);
  opacity: 1;
  transform: rotate(-34deg);
}
</style>
