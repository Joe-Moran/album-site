import homeSections from '@/views/Home/home-sections'

const Home = () => import('@/views/Home/Home.vue')
const Sidebar = () => import('@/components/Sidebar.vue')
const Drawer = () => import('@/components/Drawer.vue')

/**
 * The home page route.
 */
const home = {
  path: '/',
  name: 'home"',
  components: {
    default: Home,
    sidebar: Sidebar,
    drawer: Drawer,
  },
  props: {
    sidebar: {
      links: homeSections,
    },
    drawer: {
      links: homeSections,
    },
  },
}

export default [home]
