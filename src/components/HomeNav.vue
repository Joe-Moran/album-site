<template>
  <button @click="$router.push({path: '/'})">
    <img :src="require('../assets/arrow-left.png')" />Home
  </button>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

img {
  height: 18px;
  width: auto;
  justify-self: center;
  padding: 0px 24px 0px 14px;
  align-self: center;
}

button {
  &:hover {
    cursor: pointer;
    box-shadow: -10px 10px 0px $blue-tertiary;
  }

  transition: box-shadow ease-in-out 400ms;
  display: flex;
  border-radius: 5px;
  background: transparent;
  border: 3px solid #d11d66;
  position: fixed;
  top: 60px;
  color: #d11d66;
  padding: 14px;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Consolas;
  letter-spacing: 13px;
}
</style>