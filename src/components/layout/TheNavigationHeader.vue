<template>
  <header class="site-header">
    <div class="site-header-content-container">
      <div class="logo-nav-container">
        <AnimatedIcon class="xrgb-logo" />
        <nav class="nav">
          <ul class="the-navigation-header-links">
            <li class="skip-link">
              <a
                ref="skipLink"
                href="#main"
              >Skip to main content</a>
            </li>
            <li
              v-for="{name} in navigationLinks"
              :key="name"
            >
              <router-link
                :to="{name}"
              >
                {{ name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <SocialLinks
        id="desktop-social"
        :links="$options.xrgbSocialLinks"
        class="social"
      />
    </div>
  </header>
</template>

<script>
import routes from '@/routing/routes';
import AnimatedIcon from '@/components/icons/AnimatedIcon.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import xrgbSocialLinks from '@/data/links-social-media';

/**
 * The main navigations header for the site.
 */
export default {
  name: 'TheNavigationHeader',
  components: { AnimatedIcon, SocialLinks },
  props: {

    /**
     * The links for navigation; populates the nav element.
     */
    navigationLinks: { type: Array, default: () => [] },
  },
  routes,
  xrgbSocialLinks,

};
</script>

<style lang="scss" scoped>
@import "@/sass/global";

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

    ::v-deep svg {
      max-height: 1.875rem;
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
