<template>
  <div :class="{ selected: selected }">
    <router-link
      :to="'#' + link.path"
      append
    >
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    link: { type: Object, required: true },
    selected: { type: Boolean, required: false },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';

$max: 240px;

a {
  position: relative;
  font-family: 'Consolas';
  font-size: 22px;
  color: white;
  text-decoration: none;
  transition: color 350ms ease-in-out;

  &:hover {
    color: $red-primary;
  }
}

.selected a::before {
  position: absolute;
  top: 10px;
  left: -10px;
  z-index: -1;
  display: block;
  width: 132%;
  height: 20pt;
  content: ' ';
  background: #0631a2c7;
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
  position: relative;
  max-width: $max;
  padding: 0 10px 0 10px;
}
</style>
