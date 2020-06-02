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
figure {
  margin: 0;
  padding: 0;
}
@media only screen and (max-width: 924px) {
  img {
    width: 100%;
  }
}

@media only screen and (min-width: 925px) and (max-width: 1079px) {
  img {
    width: 80%;
  }
}

@media only screen and (min-width: 1080px) and (max-width: 1449px) {
  img {
    width: 60%;
  }
}

@media only screen and (min-width: 1450px) and (max-width: 1599px) {
  img {
    width: 50%;
  }
}

@media only screen and (min-width: 1600px) {
  img {
    width: 45%;
  }
}
</style>