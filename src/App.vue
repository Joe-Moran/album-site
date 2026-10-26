<template>
  <div id="app">
    <TheNavigationHeader
      class="header"
      :navigation-links="navigationLinks"
      :social-links="socialLinks"
    />

    <main id="main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import TheNavigationHeader from './components/layout/TheNavigationHeader.vue'
import { getSocialLinks } from './content'
import routes from './routing/routes'

const navigationLinks = Object.values(routes)
const socialLinks = getSocialLinks()
</script>

<style lang="scss">
@use '@/sass/global' as *;

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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
