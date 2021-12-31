<template>
  <div id="xrgb-container">
    <Xrgb />
  </div>
</template>

<script>
import Xrgb from '../../../public/xrgb-logo.svg';

export default {
  name: 'AnimatedIcon',
  components: { Xrgb },
};
</script>

<style lang="scss" scoped>
@import '@/sass/_global.scss';

.st0 {
  fill: #00aeef;
}
.st1 {
  fill: #d11d66;
}

#xrgb-container {
  width: 100%;
}

.st1 {
  animation: flicker 5s 3s infinite;
}

.st0 {
  animation: flicker 10s infinite;
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

@media (max-width: $sm) {
  #xrgb-container {
    width: 80%;
    margin: auto;
  }
}

@media (min-width: $md) {
  #xrgb-container {
    width: 85%;
    margin: auto;
  }
}
</style>
