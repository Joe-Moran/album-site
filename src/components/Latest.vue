<template>
  <div class="latest">
    <iframe
      width="100%"
      height="450"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/621321513&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    />
    <div
      style="
        font-size: 10px;
        color: #cccccc;
        line-break: anywhere;
        word-break: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
          Garuda, Verdana, Tahoma, sans-serif;
        font-weight: 100;
      "
    >
      <a
        href="https://soundcloud.com/xrgbmusic"
        title="xRGB"
        target="_blank"
        style="color: #cccccc; text-decoration: none"
      >xRGB</a>
      ·
      <a
        href="https://soundcloud.com/xrgbmusic/sets/refraction"
        title="Refraction"
        target="_blank"
        style="color: #cccccc; text-decoration: none"
      >Refraction</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Latest',
  components: {},
};
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';

.latest {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  @extend %retro-shadow;
}

@media (max-width: $lg) {
  iframe {
    height: 250px;
  }
}

@media (max-width: $sm) {
  iframe {
    height: 160px;
  }

  .latest {
    width: 100%;
  }
}
</style>
