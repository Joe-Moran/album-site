<template>
  <section id="drawer" :class="{open : isOpen}" @click="isOpen = !isOpen">
    <div id="bar"></div>
    <div id="container">
      <ul id="content" v-show="isOpen">
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
export default {
  name: "Drawer",
  components: { Arrow },
  data() {
    return {
      isOpen: false
    };
  },
  props: { links: { type: Array, required: true } },
  computed: {
    arrowColor() {
      return this.isOpen ? "black" : globals.redPrimary;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

#bar {
  display: none;
  width: 100%;
  height: 10px;
  background: $red-primary;
}

#sdrawer {
  position: absolute;
  top: 0;
  width: 100%;
  display: block;
  z-index: 1000;
}

#container {
  transform: scaleY(0);
  background: $red-primary;
  padding: 0;
  transition: transform 500ms ease-in-out;
  transform-origin: top;
}

#arrow {
  position: relative;
  top: 10px;
  left: 0;
  padding: 20px;
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

  #container {
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

@media (max-width: $sm) {
  .open {
    #arrow {
      transform: scaleY(1);
    }
  }

  #arrow {
    top: unset;
    bottom: 60px;
    transform: scaleY(-1);
  }

  #drawer {
    top: unset;
    bottom: -60px;
  }

  #container {
    transform-origin: bottom;
    box-shadow: #29110c 0px -6px 0px;
  }

  #bar {
    height: 36px;
  }
}

@media (min-width: $md) {
  #bar {
    display: block;
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
  padding: 20px 0 0 0;
}
</style>