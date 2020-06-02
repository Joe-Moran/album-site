<template>
  <span>
    <a id="soundcloud" href="https://soundcloud.com/xrgb" target="_blank">
      <img src="../assets/social-media/logo_big_white-65c2b096da68dd533db18b9f07d14054.png" />
    </a>
    <a id="instagram" href="https://www.instagram.com/xrgb_music/" target="_blank">
      <img src="../assets/social-media/glyph-logo_May2016-white.png" />
    </a>
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
  right: 10%;
  top: -64px;
  height: 64px;
  background: #9f012c9e;
  padding: 10px;
  bottom: -40px;
  z-index: 100;
  transition: top 500ms ease-in-out;
}

span:hover {
  top: 0;
}

span::after {
  content: " ";
  height: 10px;
  bottom: 10px;
  top: 15px;
  background: white;
  position: absolute;
}
a {
  position: relative;
  padding: 5px;
  top: 13px;
}

@media (max-width: 450px) {
  span {
    position: relative;
  }
}

a {
  margin: 0px 5px 0px 5px;
}
img {
  min-width: 35px;
  max-width: 50px;
  opacity: 0.8;
  transition: all 1s ease-in-out;
}

img:hover {
  filter: blur(0.5px);
  opacity: 1;
  transform: rotate(-34deg);
}

#bandcamp img {
  width: 35px;
}

#soundcloud img {
  width: 50px;
}

#instagram img {
  width: 30px;
}
</style>