import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ReleaseLinks from './views/ReleaseLinks.vue'
import releaseData from "./releases-data";

const symbolPattern = /[^\w]/g;

let routesObject = {
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/release',
      name: 'release links',
      component: ReleaseLinks
    }
  ]
}

Vue.use(Router)

function routify(title) {
  return title.replace(symbolPattern, "-").toLowerCase();
}

function releaseRouteBuilder(releases) {
  releases.forEach(release => {
    routesObject.routes.push({
      path: '/release/' + routify(release.title),
      component: ReleaseLinks,
      props: {
        release: release
      }
    })
  })
}

releaseRouteBuilder(releaseData.albums);

export default new Router(routesObject)