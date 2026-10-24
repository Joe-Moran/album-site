<template>
  <figure>
    <img
      :src="imageUrl"
      alt=""
    />
  </figure>
</template>

<script>
export default {
  name: 'MeImage',
  props: {
    imageSource: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return new URL(`../assets/${this.imageSource}`, import.meta.url).href
    },
  },
}
</script>

<style>
figure {
  padding: 0;
  margin: 0;
}

@media only screen and (width <= 924px) {
  img {
    width: 100%;
  }
}

@media only screen and (width >= 925px) and (width <= 1079px) {
  img {
    width: 80%;
  }
}

@media only screen and (width >= 1080px) and (width <= 1449px) {
  img {
    width: 60%;
  }
}

@media only screen and (width >= 1450px) and (width <= 1599px) {
  img {
    width: 50%;
  }
}

@media only screen and (width >= 1600px) {
  img {
    width: 45%;
  }
}
</style>
