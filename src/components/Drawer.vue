<template>
  <section
    id="drawer"
    :class="{ open: isOpen, compact: compact }"
    @click="updateState"
  >
    <div
      id="bar"
      :style="{ color: color }"
    />
    <div
      v-show="isOpen"
      id="drop-container"
      :style="{ color: color }"
    >
      <div id="anchor">
        <slot />
      </div>

      <Arrow
        :color="arrowColor"
        :up="isOpen"
      />
    </div>
  </section>
</template>

<script>
import globals from '@/globals';
import xrgbSocialLinks from '@/data/links-social-media';
import nav from '@/mixins/nav';
import Arrow from './Arrow.vue';

/**
 * The nav drawer for the top of the site.
 */
export default {
  name: 'Drawer',
  components: { Arrow },
  mixins: [nav],
  props: {
    /**
     * The links to add to the drawer for navigation purposes.
     */
    links: { type: Array, required: true },

    /**
     * Whether to style the bar as compact or small.
     */
    compact: { type: Boolean },
  },
  data() {
    return {
      socialLinks: xrgbSocialLinks,
      clientWidth: 1900,
      isOpen: false,
    };
  },
  computed: {
    arrowColor() {
      return this.isOpen ? 'black' : globals.redPrimary;
    },
    isMobile() {
      return this.clientWidth <= globals.md;
    },
  },
  methods: {
    updateState() {
      if (this.isMobile) {
        this.isOpen = !this.isOpen;
      } else this.isOpen = false;
    },
    resizeHandler() {
      this.clientWidth = document.body.clientWidth;
    },
  },

  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

#menu-btn {
  position: absolute;
  right: 0;
  z-index: 4000;
  display: none;
  padding: 15px;
  background: transparent;
  border: none;
  opacity: 0.8;
  transition: all 200ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
}

#bar {
  position: fixed;
  display: block;
  width: 100%;
  height: 26px;
  cursor: pointer;
  background: $red-primary;
  border-bottom: 7px solid black;
  transition: height 100ms ease-in-out;
}

.compact #bar {
  height: 2.5rem;
}

#arrow {
  margin-top: 30px;
}

#drawer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: block;
  width: 100%;
  text-align: center;
}

#drop-container {
  position: fixed;
  width: 100%;
  padding: 0;
  background: $red-primary;
  transition: all 500ms ease-in-out;
  transform: scaleY(0);
  transform-origin: top;
}

#anchor {
  padding-top: 10px;
  padding-bottom: 24px;
  margin: auto;
}

.open {
  #drop-container {
    padding-bottom: 40px;
    box-shadow: #29110c 0 6px 0;
    transition: all 500ms ease-in-out;
    transform: scaleY(1);
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
  font-family: Consolas;
  font-size: 2.5rem;
  font-style: italic;
  font-weight: bold;
  color: transparent;
  text-align: center;
  text-decoration: none;
  transition: color 250ms ease-in;

  &:hover {
    color: white;
  }
}

ul {
  padding: 0;
  margin-top: 0;
  list-style: none;
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
