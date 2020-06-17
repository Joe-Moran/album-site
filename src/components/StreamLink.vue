<template>
  <a :href="link" target="_blank">
    <img v-if="icon" :src="require(`../assets/streaming/${icon}`)" />
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
  font-size: 30px;
  background: white;
  padding: 16px 20px 16px 20px;
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

img {
  height: 35px;
  width: 35px;
  margin-right: 12px;
}
</style>