// import  from "./Link.vue"
import Sidebar from './Sidebar.vue';
import siteSections from '../routing/routes';

export default {
  title: 'Sidebar',
  excludeStories: /.*Data$/,
};

// export const actionsData = {
//     onClick: action('link click'),
// }

const sidebarTemplate = "<sidebar :links='linkObj'/>";
const sidebarWithSectionTemplate = "<sidebar :links='linkObj' :section='linkObj[2]'/>";

export const Default = () => ({
  components: {
    Sidebar,
  },
  template: sidebarTemplate,
  props: {
    linkObj: {
      default: () => siteSections,
    },
  },
  //   methods: actionsData,
});

export const WithSelectedSection = () => ({
  components: {
    Sidebar,
  },
  template: sidebarWithSectionTemplate,
  props: {
    linkObj: {
      default: () => siteSections,
    },
  },
  //   methods: actionsData,
});
