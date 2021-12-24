<template>
  <button @click="$router.push({ path: '/' })">
    <img :src="require('../assets/arrow-left.png')" alt="" />Home
  </button>
</template>

<script>
export default {
  name: 'HomeNav',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';

img {
  align-self: center;
  justify-self: center;
  width: auto;
  height: 18px;
  padding: 0 24px 0 14px;
}

button {
  &:hover {
    cursor: pointer;
    box-shadow: -10px 10px 0 $blue-tertiary;
  }

  position: fixed;
  top: 60px;
  display: flex;
  padding: 14px;
  font-family: Consolas;
  font-size: 1.5625rem;
  font-weight: bold;
  color: #d11d66;
  text-transform: uppercase;
  letter-spacing: 13px;
  background: transparent;
  border: 3px solid #d11d66;
  border-radius: 5px;
  transition: box-shadow ease-in-out 400ms;
}
</style>
