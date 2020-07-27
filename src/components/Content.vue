<template>
  <section class="user-content" ref="userContent" :id="name">
    <h2 v-if="displayName">{{name}}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "content",
  props: {
    name: { type: String, required: true },
    scrollPosition: { type: Number, default: 0 },
    displayName: { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    determineIfVisible() {
      let container = this.$refs.userContent.getBoundingClientRect();
      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      let top = container.top;
      let bottom = container.bottom;
      this.isVisible = top <= windowHeight / 2 && bottom > windowHeight / 2;
    }
  },
  watch: {
    scrollPosition() {
      this.determineIfVisible();
    },
    isVisible(value) {
      if (value) {
        this.$emit("visible", this.name);
      }
    }
  },
  mounted() {
    this.determineIfVisible();
  }
};
</script>

<style scoped lang="scss">
@import "../sass/_global.scss";
.user-content {
  width: 100%;
  margin-bottom: 90px;
}

h2 {
  color: white;
  font-family: consolas;
  text-transform: lowercase;
  text-align: center;
  font-weight: 100;
  font-size: 20px;
  margin-bottom: 60px;
  &:before,
  &:after {
    content: "";
    display: inline-block;

    width: 100px;
    height: 1px;
    margin-right: 20px;
    margin-left: 20px;
    vertical-align: middle;
    background: white;
  }
}

@media (max-width: $sm) {
  h2:before,
  h2:after {
    width: 50px;
  }

  .user-content {
    width: 77%;
    margin: auto;
    margin-bottom: 60px;
  }
}
</style>