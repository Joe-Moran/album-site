<template>
  <div id="app">
    <SvgSprite />
    <header :class="{ scrolling: isScrolling }">
      <Drawer
        :links="[...sections, { path: '/', label: 'Home' }]"
        :is-open="isDrawerOpen"
        :is-scrolling="isScrolling"
        @click="isDrawerOpen = !isDrawerOpen"
        @close="isDrawerOpen = false"
      >
        <SocialLinks
          :links="socialLinks"
          class="social"
        />
      </Drawer>
      <SocialLinks
        id="desktop-social"
        :links="socialLinks"
        class="social"
      />
      <xrgb />
    </header>

    <div
      id="container"
      :class="{ hide: showHidden }"
    >
      <transition name="fade">
        <router-view
          id="home-nav"
          name="homenav"
        />
      </transition>
      <section id="sidebar">
        <transition name="fade">
          <Sidebar
            :current-selection="visibleContent"
            :links="sections"
          />
        </transition>
      </section>

      <section id="content">
        <transition name="fade">
          <router-view
            :scroll-position="scrollPosition"
            @newContent="newContentHandler"
          />
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import { debounce } from 'debounce'
import xrgb from './components/xrgb'
import SocialLinks from './components/SocialLinks'
import xrgbSocialLinks from './xrgbSocialLinks'
import siteSections from './site-sections'
import Sidebar from './components/Sidebar'
import Drawer from './components/Drawer'
import SvgSprite from './components/icons/SvgSprite'

export default {
  name: 'App',
  components: {
    Sidebar,
    xrgb,
    SocialLinks,
    Drawer,
  },
  data() {
    return {
      showHidden: false,
      isDrawerOpen: false,
      socialLinks: xrgbSocialLinks,
      sections: siteSections.default,
      isScrolling: false,
      scrollPosition: 0,
      visibleContent: null,
    }
  },
  computed: {},
  mounted() {
    window.addEventListener('scroll', debounce(this.scrollListener, 10))
    this.sections =
      this.$router.path && this.$router.path.indexOf('/release') > -1
        ? siteSections.release
        : siteSections.default
    this.$router.afterEach((to) => {
      if (to.path === '/') {
        this.sections = siteSections.default
      } else if (to.path.indexOf('/release') > -1) {
        this.sections = siteSections.release
      }
    })
  },
  methods: {
    clickHandler() {
      this.showHidden = !this.showHidden
    },
    newContentHandler(newContent) {
      this.visibleContent = newContent || null
    },
    scrollListener() {
      if (window.scrollY > 38) {
        this.isScrolling = true
      } else {
        this.isScrolling = false
      }

      this.scrollPosition = window.scrollY
    },
  },
}
</script>

<style lang="scss">
@import './sass/_global.scss';
@import url('https://fonts.googleapis.com/css?family=Knewave|Raleway:900&display=swap');

$scrolling-transition: all 100ms ease-in-out;

#sidebar {
  position: fixed;
  top: 325px;
  left: 10%;
  width: 17%;
}

#content {
  width: 60%;
  margin: auto;
}

header {
  height: 200px;
  margin-bottom: 150px;
  transition: all 100ms ease-in-out;
}

#container {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
  margin: 0 10% 0 10%;
}

.hide {
  opacity: 0;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  position: relative;
  display: block;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $font-size;
  color: #2c3e50;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#desktop-social {
  position: absolute;
  top: 35px;
  right: 40px;
  z-index: 1000;
}

.scrolling {
  #desktop-social {
    position: fixed;
    top: 0;
  }

  #xrgb {
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 1000;
    padding-top: 3px;
    filter: grayscale(100%);
    transform: scale(0.3);
    transform: translateX(-50%);
    transform-origin: top;

    svg {
      display: block;
      height: 35px;
      margin: auto;
    }
  }
}

html {
  height: 100%;
  background-color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
    right: unset;
    width: 100%;
  }

  #container {
    left: 0;
    width: 100%;
    margin: 0;
  }

  #desktop-social {
    display: none;
  }

  #home-nav {
    display: none;
  }
}

@media (min-width: $md) {
  #container {
    width: 90%;
  }
}
</style>
