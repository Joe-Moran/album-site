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
import homeSections from '@/data/home/home-section'
import releases from '@/data/release'

const sectionProps = {
  music: { releases: releases.albums },
}
</script>
