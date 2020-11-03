import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ReleaseView from './views/ReleaseView.vue'
import releaseData from "./releases-data";
import HomeNav from "./components/HomeNav";
import Sidebar from "./components/Sidebar"
import Drawer from "./components/Drawer"
import siteSections from "./site-sections";

let releaseSiteLinks = siteSections.release;
let defaultSiteLinks = siteSections.default;

let routesObject = {
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: Home,
      sidebar: Sidebar,
      drawer: Drawer
    },
    props: {
      sidebar: {
        links: defaultSiteLinks
      },
      drawer: {
        links: defaultSiteLinks
      }
    }
  }],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 };
    }
  }
}

Vue.use(Router)

function buildReleaseRoute(releases) {
  releases.forEach(release => {
    routesObject.routes.push({
      path: '/release' + release.path,
      components: {
        default: ReleaseView,
        sidebar: Sidebar,
        homenav: HomeNav,
        drawer: Drawer
      },
      props: {
        default: {
          release: release
        },
        sidebar: {
          links: releaseSiteLinks
        },
        drawer: {
          links: [...releaseSiteLinks,{path: "/", label: "Home"}]
        }
      }

    })
  })
}

buildReleaseRoute(releaseData.albums);

export default new Router(routesObject)