<template>
  <figure>
    <img :src="require('../assets/' + imageSource)" />
  </figure>
</template>

<script>
export default {
  name: "MeImage",
  props: {
    imageSource: {
      type: String
    }
  }
};
</script>

<style>
img {
  height: 550px;
}
</style>