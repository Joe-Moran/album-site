<template>
  <!-- TODO: aria-labeledby=side nav link text -->
  <div class="home">
    <ContentContainer
      v-for="section in $options.homeSections"
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
import view from '@/mixins/view'
import releasesData from '@/releases-data.js'
import homeSections from '@/views/Home/home-sections'
/**
 * The home page view.
 */
export default {
  name: 'Home',
  components: {
    ContentContainer,
  },
  mixins: [view],
  homeSections,
  data() {
    return {
      albums: releasesData.albums,
      singles: releasesData.singles,
    }
  },
}
</script>
