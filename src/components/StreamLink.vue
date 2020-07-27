<template>
  <a :href="link" target="_blank">
    <div class="img-container">
      <img v-if="icon" :src="require(`../assets/streaming/${icon}`)" />
    </div>
    {{title}}
  </a>
</template>

<script>
export default {
  name: "StreamLink",
  props: {
    icon: { type: String, required: false },
    title: { type: String, required: true },
    link: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";
a {
  display: flex;
  align-content: space-around;
  text-decoration: none;
  color: black;
  font-family: "Arial Narrow", Arial;
  font-weight: bold;
  font-size: 25px;
  background: white;
  padding: 11px 20px;
  width: 100%;
  border-radius: 5px;
  box-shadow: -10px 10px 0px #0000000f;
  transition: all 250ms ease-in-out;

  &:hover {
    box-shadow: -12px 10px 0px #0000004d;
    width: 101%;
    margin-left: 2px;
  }
}

.img-container {
  height: 30px;
  width: 30px;
  margin-right: 12px;
}

img {
  width: 100%;
  height: auto;
}

@media (max-width: $lg) {
  a {
    font-size: 18px;
  }

  .img-container {
    height: 24px;
    width: 24px;
  }
}
</style>