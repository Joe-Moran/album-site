

import About from "./About.vue";

export default {
    title: 'Sections/About',
    excludeStories: /.*Data$/
}



const Template = (args, { argTypes }) => ({
    components: { About },
    props: Object.keys(argTypes),
    template: '<About />',
  });
  
  export const Primary = Template.bind({});
 

