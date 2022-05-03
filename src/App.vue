<template>
  <div id="app">
    <div class="logo-and-links-container">
      <AnimatedIcon class="xrgb-logo" />
      <SocialLinks
        id="desktop-social"
        :links="socialLinks"
        class="social"
      />
    </div>

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
import AnimatedIcon from './components/icons/AnimatedIcon.vue';
import SocialLinks from './components/SocialLinks.vue';
import xrgbSocialLinks from './data/links-social-media';
import siteSections from './routing/routes';
import homeSections from '@/data/home/home-section';

export default {
  name: 'App',
  components: {
    AnimatedIcon,
    SocialLinks,
  },
  homeSections,
  data() {
    return {
      showHidden: false,
      isDrawerOpen: false,
      socialLinks: xrgbSocialLinks,
      sections: siteSections.default,
      isScrolling: false,
      scrollPosition: 0,
      visibleContent: null,
    };
  },
  computed: {},
  methods: {
    clickHandler() {
      this.showHidden = !this.showHidden;
    },
    newContentHandler(newContent) {
      this.visibleContent = newContent || null;
    },
    scrollListener() {
      if (window.scrollY > 38) {
        this.isScrolling = true;
      } else {
        this.isScrolling = false;
      }

      this.scrollPosition = window.scrollY;
    },
  },

};
</script>

<style lang="scss">
@import './sass/_global.scss';

$scrolling-transition: all 100ms ease-in-out;

#content {
  width: 60%;
  margin: auto;
}

.logo-and-links-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;
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

p {
  max-width: 74ch;
}

#app {
  position: relative;
  display: block;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: $font-size;
  line-heeight: 1.3rem;
  color: #2c3e50;
  background: $black-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  height: 100%;
  background-color: $black-primary;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.xrgb-logo {
  padding: 5.625rem 0 1rem;
  max-width: 31.25rem;
}

@media (max-width: $sm) {
  section {
    margin-bottom: 65px;
  }
}

@media (max-width: $md) {
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

  #home-nav {
    display: none;
  }
}
</style>
