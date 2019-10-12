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
@media only screen and (max-width: 869px) {
  img {
    width: 100%;
  }
}

@media only screen and (min-width: 870px) {
  img {
    height: 100%;
    width: 50%;
  }
}
</style>