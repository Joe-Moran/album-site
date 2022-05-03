import homeSections from '@/data/home/home-section';

const Home = () => import('@/views/TheHomeView.vue');
const Sidebar = () => import('@/components/Sidebar.vue');
const Drawer = () => import('@/components/Drawer.vue');

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
};

export default [home];
