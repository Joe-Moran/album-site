<template>
  <a :href="link" target="_blank" @mouseover="hoverHandler" @mouseleave="hoverHandler">
    <div class="img-container streaming-icon">
      <img v-if="icon" :src="require(`../assets/streaming/${icon}`)" />
    </div>
    {{title}}
    <div class="img-container go-arrow" @mouseover="arrowHoverHandler">
      <transition name="fade" mode="out-in">
        <img :src="arrowImage" :key="arrowImage" />
      </transition>
    </div>
  </a>
</template>

<script>
export default {
  name: "StreamLink",
  props: {
    icon: { type: String, required: false },
    title: { type: String, required: true },
    link: { type: String, required: true }
  },
  data() {
    return {
      isHovering: false
    };
  },
  methods: {
    hoverHandler() {
      this.isHovering = !this.isHovering;
    },
    arrowHoverHandler(event) {
      this.isHovering = true;
    }
  },
  computed: {
    arrowImage() {
      return require(`../assets/${
        this.isHovering ? "arrow-right-circle.svg" : "arrow-right.svg"
      }`);
    }
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
  position: relative;

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

.go-arrow {
  right: 0;
  position: absolute;
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
    height: 24px;
    width: 24px;
  }
}
</style>