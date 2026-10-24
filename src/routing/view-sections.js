import { defineAsyncComponent } from 'vue'

import viewSectionInterface from './view-section-interface'

/**
 * The latest news and fun cool things.
 */
const latest = viewSectionInterface.buildViewSection(
  'latest',
  'Latest',
  defineAsyncComponent(() => import('@/components/LatestSection.vue'))
)

/**
 * The albums I have written!
 */
const music = viewSectionInterface.buildViewSection(
  'music',
  'Music',
  defineAsyncComponent(() => import('@/components/ReleaseList.vue'))
)

/**
 * The section where I tell people how much of a loser I am.
 */
const about = viewSectionInterface.buildViewSection(
  'about',
  'About',
  defineAsyncComponent(() => import('@/components/AboutSection.vue'))
)

/**
 * The links to share regarding the view content.
 */
const links = viewSectionInterface.buildViewSection('links', 'Links')

export { latest, music, about, links }
