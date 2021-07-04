<template>
  <span>
    <a
      v-for="link in links"
      :id="link.label"
      :key="link.href"
      :href="link.href"
      target="_blank"
    >
      <img
        :src="require(`../assets/social-media/${link.logoPath}`)"
        :alt="link.label"
      />
    </a>
  </span>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    links: { type: Array, required: true },
  },
}
</script>

<style scoped lang="scss">
span {
  display: block;
  height: 35px;
}
a {
  top: 13px;
  display: inline-block;
  padding: 5px;
  vertical-align: middle;
}

a {
  margin: 0 5px 0 5px;
}
img {
  width: 28px;
  opacity: 0.8;
  transition: all 1s ease-in-out;
}

img:hover {
  filter: blur(0.5px);
  opacity: 1;
  transform: rotate(-34deg);
}
</style>
