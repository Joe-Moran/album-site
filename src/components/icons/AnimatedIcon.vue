<template>
  <div id="xrgb-container">
    <Xrgb />
  </div>
</template>

<script>
import Xrgb from '@/assets/xrgb-logo.svg'

export default {
  name: 'AnimatedIcon',
  components: { Xrgb },
}
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

:deep(.st0) {
  fill: #00aeef;
  animation: flicker 10s infinite;
}

:deep(.st1) {
  fill: #d11d66;
  animation: flicker 5s 3s infinite;
}

#xrgb-container {
  width: 100%;
}

@keyframes flicker {
  0% {
    fill-opacity: 1;
  }

  29% {
    fill-opacity: 1;
  }

  30% {
    fill-opacity: 0.5;
  }

  32% {
    fill-opacity: 1;
  }

  48% {
    fill-opacity: 1;
  }

  49% {
    fill-opacity: 0.3;
  }

  50% {
    fill-opacity: 1;
  }

  51% {
    fill-opacity: 0.7;
  }

  53% {
    fill-opacity: 1;
  }

  80% {
    fill-opacity: 1;
  }

  84% {
    fill-opacity: 1;
  }

  85% {
    fill-opacity: 0.4;
  }

  90% {
    fill-opacity: 1;
  }
}
</style>
