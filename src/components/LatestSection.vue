<template>
  <div class="latest">
    <iframe
      title="Prequinox Drive by xRGB on Bandcamp"
      style="width: 100%; height: 120px; border: 0"
      src="https://bandcamp.com/EmbeddedPlayer/track=1548797469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://xrgb.bandcamp.com/track/prequinox-drive">Prequinox Drive by xRGB</a>
    </iframe>
  </div>
</template>

<style lang="scss" scoped>
@use '@/sass/global' as *;

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
