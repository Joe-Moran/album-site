<template>
  <section id="drawer" :class="{open :isOpen, scrolling: isScrolling}" @click="drawerClick">
    <div id="bar" :style="{color: color}">
      <button id="menu-btn">
        <img :src="require('../assets/menu.png')" />
      </button>
    </div>
    <div id="drop-container" :style="{color: color}" v-show="isOpen">
      <div id="anchor">
        <slot name="anchor"></slot>
      </div>
      <ul id="drawer-content">
        <li v-for="(link, index) in links" :key="index">
          <a :href="'#' + link.path">{{link.label}}</a>
        </li>
      </ul>
      <Arrow :color="arrowColor" :up="isOpen" />
    </div>
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
      socialLinks: xrgbSocialLinks,
      clientWidth: 1900
    };
  },
  computed: {
    arrowColor() {
      return this.isOpen ? "black" : globals.redPrimary;
    },
    isInteractive() {
      return this.clientWidth <= globals.md;
    }
  },

  watch: {
    isInteractive(newValue) {
      if (!newValue) {
        this.$emit("close");
      }
    }
  },
  methods: {
    drawerClick() {
      if (this.isInteractive) {
        this.$emit("click", this.isOpen);
      }
    },
    resizeHandler() {
      this.clientWidth = document.body.clientWidth;
    }
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

#menu-btn {
  background: transparent;
  border: none;
  opacity: 0.8;
  padding: 15px;
  right: 0;
  position: absolute;
  display: none;
  transition: all 200ms ease-in-out;
  z-index: 4000;
  &:hover {
    cursor: pointer;
  }
}

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
  height: 40px;
}

#arrow {
  margin-top: 30px;
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
  position: fixed;
  width: 100%;
  background: $red-primary;
  padding: 0;
  transition: all 500ms ease-in-out;
  transform-origin: top;
  transform: scaleY(0);
}

#anchor {
  padding-bottom: 24px;
  margin: auto;
  padding-top: 10px;
}

.open {
  #drop-container {
    box-shadow: #29110c 0px 6px 0px;
    padding-bottom: 40px;
    transform: scaleY(1);
    transition: all 500ms ease-in-out;
  }

  &#drawer {
    z-index: 3000;
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

li:hover {
  cursor: pointer;
}

@media (max-width: $md) {
  #menu-btn {
    display: block;
  }

  #bar {
    height: 50px !important;
  }
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