<template>
  <div class="home">
    <!-- TODO: aria-labeledby=side nav link text -->
    <ContentContainer
      v-for="section in $options.homeSection"
      :key="section.path"
      :scroll-position="scrollPosition"
      :title="section.label"
      @visible="contentVisible"
    >
      <component :is="section.component" />
    </ContentContainer>
  </div>
</template>

<script>
import ContentContainer from '@/components/ContentContainer/ContentContainer.vue'
import homeSection from '@/data/home/home-section'
import release from '@/data/release'
import view from '@/mixins/view'

/**
 * The home page view.
 */
export default {
  name: 'TheHomeView',
  components: {
    ContentContainer,
  },
  mixins: [view],
  /**
   * $options.homeSection
   */
  homeSection,
  data() {
    return {
      albums: release.albums,
      singles: release.singles,
    }
  },
}
</script>
