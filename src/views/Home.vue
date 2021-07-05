<template>
  <div>
    <ContentContainer
      :scroll-position="scrollPosition"
      name="latest"
      :display-name="false"
      @visible="contentVisible"
    >
      <Latest />
    </ContentContainer>
    <ContentContainer
      name="singles"
      :scroll-position="scrollPosition"
      @visible="contentVisible"
    >
      <Releases :releases="singles" />
    </ContentContainer>
    <ContentContainer
      name="albums"
      :scroll-position="scrollPosition"
      @visible="contentVisible"
    >
      <Releases :releases="albums" />
    </ContentContainer>
    <ContentContainer
      name="about"
      :scroll-position="scrollPosition"
      @visible="contentVisible"
    >
      <About />
    </ContentContainer>
  </div>
</template>

<script>
import ContentContainer from '@/components/reusable/ContentContainer/Content.vue'
import view from '@/mixins/view'
import releasesData from '@/releases-data.js'
import About from '../components/About'
import Releases from '../components/Releases'
import Latest from '../components/Latest'

/**
 * The home page view.
 */
export default {
  name: 'Home',
  components: {
    ContentContainer,
    Releases,
    About,
    Latest,
  },
  mixins: [view],
  data() {
    return {
      albums: releasesData.albums,
      singles: releasesData.singles,
    }
  },
}
</script>

<style></style>
