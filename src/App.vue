<template>
  <div id="app">
    <TheNavigationHeader class="header" />

    <main id="main">
      <transition name="fade">
        <router-view
          :scroll-position="scrollPosition"
          @newContent="newContentHandler"
        />
      </transition>
    </main>
  </div>
</template>

<script>
import siteSections from './routing/routes';
import homeSections from '@/data/home/home-section';
import TheNavigationHeader from '@/components/layout/TheNavigationHeader.vue';

export default {
  name: 'App',
  components: {
    TheNavigationHeader,
  },
  homeSections,
  data() {
    return {
      showHidden: false,
      isDrawerOpen: false,
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
@import "./sass/_global.scss";

$scrolling-transition: all 100ms ease-in-out;

#app {
  display: grid;
  grid-template-rows: 4rem auto;
  grid-template-columns: 1fr;
  background: $black-primary;
}

main {
  justify-self: center;
  max-width: 40.75rem;
  padding: 2rem 1.625rem 4rem;
  overflow-y: auto;
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

html {
  height: 100%;
  background-color: $black-primary;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to,
.fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
