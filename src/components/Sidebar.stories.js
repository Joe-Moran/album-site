import Sidebar from './Sidebar.vue';
import siteSections from '../routing/routes';

const links = Object.values(siteSections);

export default {
  title: 'Sidebar',
  component: Sidebar,
  args: { links, currentSelection: '' },
};

export const Default = {};

export const WithSelectedSection = {
  args: { currentSelection: links[1].path },
};
