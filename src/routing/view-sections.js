import ViewSectionFactory from './ViewSectionFactory'

const factory = ViewSectionFactory()

/**
 * The latest news and fun cool things.
 */
const latest = factory.buildViewSection('latest', 'Latest', () =>
  import('@/components/Latest.vue')
)

/**
 * The albums I have written!
 */
const music = factory.buildViewSection('music', 'Music', () =>
  import('@/components/Releases.vue')
)

/**
 * Extras and other fun things.
 */
const etcetera = factory.buildViewSection('etcetera', 'Etcetera', () =>
  import('@/views/Etcetera.vue')
)

/**
 * The section where I tell people how much of a loser I am.
 */
const about = factory.buildViewSection('about', 'About', () =>
  import('@/components/About.vue')
)

/**
 * The links to share regarding the view content.
 */
const links = factory.buildViewSection('links', 'Links')

export { latest, music, etcetera, about, links }
