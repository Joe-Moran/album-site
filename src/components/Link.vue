<template>
  <div :class="{selected: selected}">
    <router-link :to="'#' + link.path" append>{{link.label}}</router-link>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    link: { type: Object, required: true },
    selected: { type: Boolean, required: false }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

$max: 240px;

a {
  color: white;
  text-decoration: none;
  font-family: "Consolas";
  font-size: 22px;
  position: relative;
  transition: color 350ms ease-in-out;

  &:hover {
    color: $red-primary;
  }
}

.selected a::before {
  content: " ";
  background: #0631a2c7;
  display: block;
  height: 20pt;
  width: 132%;
  top: 10px;
  left: -10px;
  position: absolute;
  z-index: -1;
  animation: fade 200ms ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

div {
  max-width: $max;
  padding: 0px 10px 0px 10px;
  position: relative;
}
</style>