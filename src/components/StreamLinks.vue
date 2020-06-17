<template>
  <div class="stream-links" :class="{open: open, overlay: overlay}">
    <button @click="$emit('close')">X</button>
    <ul>
      <li v-for="link in links" :key="link.link">
        <StreamLink :link="link.link" :icon="link.icon" :title="link.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import StreamLink from "./StreamLink";
export default {
  name: "StreamLinks",
  components: {
    StreamLink
  },
  props: {
    links: { type: Array, required: true },
    open: { type: Boolean, required: false, default: false },
    overlay: { type: Boolean, required: false, default: true }
  },
  computed: {
    linksToDisplay() {
      if (this.links && this.links.length) {
        return this.expanded ? this.links : this.links.slice(0, 3);
      }
      return [];
    },
    allowExpasion() {
      return this.links && this.links.length > 3;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";
.stream-links {
  background: transparent;
  padding: 20px;
  position: relative;
  padding-top: 60px;
  opacity: 0;
  transition: all 250ms ease-in-out;

  &:not(.overlay) {
    max-width: 540px;
    background: #d1d1d1;
    box-shadow: -10px 10px 0px $red-primary;
  }

  &.open {
    opacity: 1;
  }

  //   &:after {
  //     content: " ";
  //     border-top: 20px solid #d1d1d1;

  //     border-left: 20px solid transparent;
  //     border-right: 20px solid transparent;
  //     height: 0;
  //     width: 0;
  //     position: absolute;
  //     top: 100%;
  //     left: 50%;
  //     transform: translateX(-50%);
  //   }
}
ul {
  padding: 0;
}

li {
  list-style: none;
  margin-bottom: 20px;
}

button {
  font-family: Arial;
  font-weight: bold;
  height: 36px;
  width: 36px;
  border-radius: 2px;
  box-shadow: -5px 4px 0px #0000000f;
  border: none;
  position: absolute;
  right: -11px;
  top: 7px;
  transition: all 250ms ease-in-out;
  &:hover {
    color: $red-primary;
    background: 1px solid $red-primary;
    background: lightgray;
    cursor: pointer;
  }
}
</style>