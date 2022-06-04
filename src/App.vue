<template>
  <div id="app">
    <TheNavigationHeader
      class="header"
      :navigation-links="$options.routes"
    />

    <main id="main">
      <transition name="fade">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import TheNavigationHeader from '@/components/layout/TheNavigationHeader.vue';
import routes from '@/routing/routes';

export default {
  name: 'App',
  components: { TheNavigationHeader },
  routes: Object.values(routes),
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
