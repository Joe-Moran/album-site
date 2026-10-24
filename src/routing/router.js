import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export default createRouter({
  history: createWebHashHistory(),
  routes: Object.values(routes),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    }
    return { top: 0 };
  },
});
