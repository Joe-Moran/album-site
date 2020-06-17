<template>
  <section id="drawer" :class="{open :isOpen, scrolling: isScrolling}" @click="drawerClick">
    <div id="bar" :style="{color: color}"></div>
    <div id="drop-container" :style="{color: color}" v-show="isOpen">
      <div id="anchor">
        <slot name="anchor"></slot>
      </div>
      <ul id="drawer-content">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href">{{link.label}}</a>
        </li>
      </ul>
    </div>
    <Arrow :color="arrowColor" />
  </section>
</template>

<script>
import Arrow from "./Arrow";
import globals from "../globals";
import xrgbSocialLinks from "../xrgbSocialLinks";
export default {
  name: "Drawer",
  components: { Arrow },
  props: {
    links: { type: Array, required: true },
    isOpen: { type: Boolean, required: false, default: false },
    color: { type: String, required: false },
    isScrolling: { type: Boolean, required: false }
  },
  data() {
    return {
      socialLinks: xrgbSocialLinks
    };
  },
  computed: {
    arrowColor() {
      return this.isOpen ? "black" : globals.redPrimary;
    },
    isInteractive() {
      return document.body.clientWidth < globals.md;
    }
  },
  methods: {
    drawerClick() {
      if (this.isInteractive) {
        this.$emit("click", this.isOpen);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

#bar {
  display: block;
  width: 100%;
  height: 26px;
  background: $red-primary;
  cursor: pointer;
  transition: height 100ms ease-in-out;
  position: fixed;
  border-bottom: 7px solid black;
}

.scrolling #bar {
  height: 40px !important;
}

#drawer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  z-index: 1000;
  text-align: center;
}

#drop-container {
  transform: scaleY(0);
  background: $red-primary;
  padding: 0;
  transition: transform 500ms ease-in-out;
  transform-origin: top;
}

#anchor {
  padding-bottom: 24px;
  margin: auto;
}

#arrow {
  position: relative;
  top: 5px;
  left: 0;
  padding: 10px;
  transition: all 200ms ease-in;

  &:hover {
    cursor: pointer;
  }
}

.open {
  #arrow {
    top: -60px;
    transform: scaleY(-1);
  }

  #drop-container {
    box-shadow: #29110c 0px 6px 0px;
    padding: 0 20px 70px 20px;
    transform: scaleY(1);
    transition: transform 500ms ease-in-out;
  }

  a {
    color: black;
    transition: color 250ms ease-in;
  }
}

a {
  text-decoration: none;
  color: transparent;
  font-family: Arial;
  font-size: 40pt;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  transition: color 250ms ease-in;

  &:hover {
    color: white;
  }
}

ul {
  margin-top: 0;
  list-style: none;
  padding: 0;
}

@media (min-width: $md) {
  #arrow {
    display: none;
  }

  #bar:hover {
    cursor: default;
  }
}
</style>