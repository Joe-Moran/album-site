---
to: "src/components/<%= p %>/<%= name %>.stories.js"
---

import <%= name %> from '@/components/<%= p %>/<%= name %>.vue';

/**
 * Setup
 */
export default {
  title: '<%= h.storyPathFormat(p, name)%>', 
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