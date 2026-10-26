<template>
  <div class="home">
    <!-- TODO: aria-labeledby=side nav link text -->
    <ContentContainer
      v-for="section in homeSections"
      :key="section.path"
      :title="section.label"
    >
      <component
        :is="section.component"
        v-bind="sectionProps[section.path]"
      />
    </ContentContainer>
  </div>
</template>

<script setup>
import ContentContainer from '@/components/ContentContainer/ContentContainer.vue'
import { getAbout, getLatest, getReleases } from '@/content'
import homeSections from '@/routing/home-sections'

const sectionProps = {
  latest: getLatest(),
  music: { releases: getReleases().filter((release) => release.type === 'album') },
  about: getAbout(),
}
</script>
