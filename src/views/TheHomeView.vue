<template>
  <!-- TODO: aria-labeledby=side nav link text -->
  <div class="home">
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
import ContentContainer from '@/components/ContentContainer/ContentContainer.vue';
import view from '@/mixins/view';
import release from '@/data/release';
import homeSection from '@/data/home/home-section';
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
    };
  },
};
</script>
