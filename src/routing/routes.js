const TheHomeView = () => import('@/views/TheHomeView.vue');
const TheSoundpacksView = () => import('@/views/TheSoundpacksView.vue');

/**
 * The home page route.
 */
const home = {
  path: '',
  name: 'home',
  component: TheHomeView,
};

/**
 * The soundpacks view route.
 */
const soundpacks = {
  path: '/soundpacks',
  name: 'soundpacks',
  component: TheSoundpacksView,
};

/**
 * All the routes — all of 'em!
 */
export default { home, soundpacks };
