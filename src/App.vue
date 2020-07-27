<template>
  <div id="app">
    <header :class="{scrolling: isScrolling}">
      <Drawer
        :isOpen="isDrawerOpen"
        :isScrolling="isScrolling"
        :links="sections"
        @click="isDrawerOpen = !isDrawerOpen"
        @close="isDrawerOpen = false"
      >
        <template v-slot:anchor>
          <SocialLinks :links="socialLinks" class="social" />
        </template>
      </Drawer>
      <SocialLinks :links="socialLinks" class="social" id="desktop-social" />
      <xrgb></xrgb>
    </header>

    <div id="container" :class="{'hide': showHidden}">
      <Sidebar :links="sections" :currentSelection="visibleContent" id="sidebar" />
      <section id="content">
        <router-view :scroll-position="scrollPosition" @newContent="newContentHandler"></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import Drawer from "./components/Drawer";
import xrgb from "./components/xrgb";
import SocialLinks from "./components/SocialLinks";
import xrgbSocialLinks from "./xrgbSocialLinks";
import { debounce } from "debounce";
import home from "./views/Home";
import siteSections from "./site-sections";
import Sidebar from "./components/Sidebar";

export default {
  name: "app",
  components: {
    Drawer,
    xrgb,
    SocialLinks,
    Sidebar,
    home
  },
  data() {
    return {
      showHidden: false,
      isDrawerOpen: false,
      socialLinks: xrgbSocialLinks,
      sections: siteSections,
      isScrolling: false,
      scrollPosition: 0,
      visibleContent: null
    };
  },
  methods: {
    clickHandler() {
      this.showHidden = !this.showHidden;
    },
    newContentHandler(newContent) {
      this.visibleContent = newContent;
    },
    scrollListener() {
      if (window.scrollY > 38) {
        this.isScrolling = true;
      } else {
        this.isScrolling = false;
      }

      this.scrollPosition = window.scrollY;
    }
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", debounce(this.scrollListener, 10));
  }
};
</script>


<style lang="scss" >
@import "./sass/_global.scss";
@import url("https://fonts.googleapis.com/css?family=Knewave|Raleway:900&display=swap");

$scrolling-transition: all 100ms ease-in-out;

#sidebar {
  width: 17%;
  position: fixed;
  top: 325px;
  left: 10%;
}

#content {
  width: 77%;
  position: absolute;
  right: 0;
}

header {
  height: 200px;
  margin-bottom: 150px;
  transition: all 100ms ease-in-out;
}

#container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
  z-index: 1;
  margin: 0 10% 0 10%;
}

.hide {
  opacity: 0;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background: black;
  display: block;
  position: relative;
}

#desktop-social {
  position: absolute;
  top: 35px;
  right: 40px;
  z-index: 1000;
}

.scrolling {
  #desktop-social {
    top: 0px;
    position: fixed;
  }

  #xrgb {
    position: fixed;
    top: 0;
    padding-top: 3px;
    z-index: 1000;
    transform: scale(0.3);
    transform: translateX(-50%);
    left: 50%;
    transform-origin: top;
    filter: grayscale(100%);

    svg {
      height: 35px;
      margin: auto;
      display: block;
    }
  }
}

html {
  background-color: black;
  height: 100%;
}

@media (max-width: $sm) {
  header {
    margin-bottom: 50px;
  }

  section {
    margin-bottom: 65px;
  }

  #xrgb {
    padding-top: 8px;
  }
}

@media (max-width: $md) {
  #sidebar {
    display: none;
  }

  span {
    position: relative;
  }

  #artsy.show-text {
    top: 113px;
  }

  #app {
    width: 100%;
  }

  #content {
    width: 100%;
  }

  #container {
    width: 100%;
    left: 0;
    margin: 0;
  }

  #desktop-social {
    display: none;
  }
}

@media (min-width: $md) {
  #container {
    width: 90%;
  }
}
</style>
