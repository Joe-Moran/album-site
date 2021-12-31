import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

const routesObject = {
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return { x: 0, y: 0 };
  },
};

Vue.use(Router);

export default new Router(routesObject);
