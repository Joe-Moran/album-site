---
to: "src/<%= path %>/<%= name %>.stories.js"
---

import <%= name %> from '@/<%= path %>/<%= name %>.vue';

export default {
  title: '<%= h.storyPathFormat(path, name)%>',
  id: '<%= h.changeCase.paramCase(name) %>',
  component: <%= name %>,
};

export const <%= h.changeCase.lowerCaseFirst(name)%> = {
  args: {},
};
