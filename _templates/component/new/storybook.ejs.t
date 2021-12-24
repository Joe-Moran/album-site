---
to: "src/components/<%= path %>/<%= name %>.stories.js"
---

import <%= name %> from '@/components/<%= path %>/<%= name %>.vue';

/**
 * Setup
 */
export default {
  title: '<%= h.storyPathFormat(path, name)%>',
  id: '<%= h.changeCase.paramCase(name) %>',
  component: <%= name %>,
  subcomponents: { },
  argTypes: {}
};

/**
 * Template
 */
const Template = (args, { argTypes }) => ({
  components: { <%= name %> },
  props: Object.keys(argTypes),
  template: '<<%= h.changeCase.paramCase(name)%> v-bind="$props"></<%= h.changeCase.paramCase(name)%>>',
});

/**
 * Stories
 */
export const <%= h.changeCase.lowerCaseFirst(name)%> = Template.bind({});
<%= h.changeCase.lowerCaseFirst(name)%>.args = {};
