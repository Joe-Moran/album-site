<template>
  <span>
    <a id="link.label" :href="link.href" target="_blank" v-for="link in links" :key="link.href">
      <img :src="require(`../assets/social-media/${link.logoPath}`)" />
    </a>
  </span>
</template>

<script>
export default {
  name: "SocialLinks",
  props: {
    links: { type: Array, required: true }
  }
};
</script>

<style scoped>
span {
  height: 35px;
  display: block;
}
a {
  display: inline-block;
  vertical-align: middle;
  padding: 5px;
  top: 13px;
}

a {
  margin: 0px 5px 0px 5px;
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