<template>
  <header class="site-header">
    <div class="site-header-content-container">
      <div class="logo-nav-container">
        <AnimatedIcon class="xrgb-logo" />
        <nav class="nav">
          <ul class="the-navigation-header-links">
            <li class="skip-link">
              <a href="#main">Skip to main content</a>
            </li>
            <li
              v-for="{ name } in navigationLinks"
              :key="name"
            >
              <router-link :to="{ name }">
                {{ name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <SocialLinks
        id="desktop-social"
        :links="socialLinks"
        class="social"
      />
    </div>
  </header>
</template>

<script setup>
import SocialLinks from '@/components/SocialLinks.vue'
import AnimatedIcon from '@/components/icons/AnimatedIcon.vue'

defineProps({
  /** Routes to show as links in the nav element. */
  navigationLinks: { type: Array, default: () => [] },
  socialLinks: { type: Array, default: () => [] },
})
</script>

<style lang="scss" scoped>
@use '@/sass/global' as *;

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: $gray-primary;

  .site-header-content-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    padding: 1rem;
  }

  .logo-nav-container {
    display: flex;
  }

  .xrgb-logo {
    display: flex;

    :deep(svg) {
      width: auto;
      height: 1.875rem;
    }

    @media (width < 30rem) {
      display: none;
    }
  }
}

.the-navigation-header-links {
  display: flex;
  align-items: center;
  padding-bottom: 0;

  a {
    font-family: $font-family-heading;
    font-size: 1.375rem;
    font-weight: bold;
    color: $gray-tertiary;
    text-decoration: transparent;
    transition: all 250ms ease-in-out;

    &:hover,
    &:focus,
    &.router-link-exact-active {
      color: $red-tertiary;
      text-decoration: underline;
    }
  }

  .skip-link {
    position: absolute;
    top: 0;
    opacity: 0;

    :focus {
      opacity: 1;
    }

    a {
      font-size: 1rem;
      font-weight: normal;
    }
  }

  li {
    padding: 0.25rem 0.5rem;
    list-style: none;

    &::before {
      content: none;
    }
  }
}
</style>
