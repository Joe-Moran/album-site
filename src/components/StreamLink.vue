<template>
  <!-- TODO: refactor and rename this to something more generic -->
  <div class="stream-link" @mouseover="hoverHandler" @mouseleave="hoverHandler">
    <div class="img-container streaming-icon">
      <img
        v-if="icon"
        :src="require(`../assets/streaming/${icon}`)"
        alt="title"
      />
    </div>
    {{ title }}
    <div class="img-container go-arrow" @mouseover="arrowHoverHandler">
      <transition name="fade" mode="out-in">
        <SvgIcon :key="arrowImage" :icon="arrowImage" />
      </transition>
    </div>
  </div>
</template>

<script>
import SvgIcon from './icons/SVGIcon'
export default {
  name: 'StreamLink',
  components: {
    SvgIcon,
  },
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
  },
  data() {
    return {
      isHovering: false,
    }
  },
  computed: {
    arrowImage() {
      return require(`../assets/${
        this.isHovering ? 'arrow-right-circle' : 'arrow-right'
      }`)
    },
  },
  methods: {
    hoverHandler() {
      this.isHovering = !this.isHovering
    },
    arrowHoverHandler() {
      this.isHovering = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';
.stream-link {
  position: relative;
  display: flex;
  align-content: space-around;
  width: 100%;
  padding: 11px 20px;
  font-family: 'Arial Narrow', Arial;
  font-size: 25px;
  font-weight: bold;
  color: black;
  background: white;
  border-radius: 5px;
  box-shadow: -10px 10px 0 #0000000f;
  transition: all 250ms ease-in-out;

  &:hover {
    width: 101%;
    margin-left: 2px;
    box-shadow: -12px 10px 0 #0000004d;
  }
}

.img-container {
  width: 30px;
  height: 30px;
  margin-right: 12px;
}

img {
  width: 100%;
  height: auto;
}

.go-arrow {
  position: absolute;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 80ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: $lg) {
  a {
    font-size: 18px;
  }

  .img-container {
    width: 24px;
    height: 24px;
  }
}
</style>
