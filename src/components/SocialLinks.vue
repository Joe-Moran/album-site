<template>
  <span>
    <a id="soundcloud" href="https://soundcloud.com/xrgb" target="_blank">
      <img src="../assets/social-media/logo_big_white-65c2b096da68dd533db18b9f07d14054.png" />
    </a>
    <a id="instagram" href="https://www.instagram.com/xrgb_music/" target="_blank"></a>
    <a id="bandcamp" href="https://xrgb.bandcamp.com/" target="_blank">
      <img src="../assets/social-media/bandcamp-button-bc-circle-white-64.png" />
    </a>
  </span>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  position: absolute;
  right: 0;
  margin-right: 25px;
  top: 15px;
}

a {
  margin: 0px 5px 0px 5px;
}
img {
  min-width: 35px;
  max-width: 50px;
}

#bandcamp img {
  width: 35px;
}

#soundcloud img {
  width: 50px;
}
</style>