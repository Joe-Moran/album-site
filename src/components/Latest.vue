<template>
  <div class="latest">
   <iframe style="border: 0; width: 426px; height: 518px;" src="https://bandcamp.com/EmbeddedPlayer/track=1548797469/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="https://xrgb.bandcamp.com/track/prequinox-drive">Prequinox Drive by xRGB</a></iframe>
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
