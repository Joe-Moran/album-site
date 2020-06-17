<template>
  <div class="latest">
    <iframe
      width="100%"
      height="450"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/836040574%3Fsecret_token%3Ds-h0ornZ5onFW&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
    <div
      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
    >
      <a
        href="https://soundcloud.com/xrgb"
        title="xRGB"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
      >xRGB</a> ·
      <a
        href="https://soundcloud.com/xrgb/joint-pain-1/s-h0ornZ5onFW"
        title="Joint Pain"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
      >Joint Pain</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Latest",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

.latest {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 73%;
  margin: auto;
  box-shadow: -10px 10px 0px $red-primary;
}
</style>