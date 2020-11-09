import SVGIcon from "./SVGIcon.vue";
import SvgSprite from "./SvgSprite.vue";

export default {
    title: 'Components/Icons/SVGIcon'
}



const Template = (args, { argTypes }) => ({
    components: { SVGIcon, SvgSprite },
    props: Object.keys(argTypes),
    template: '<SVGIcon :icon="icon" :height="height" :width="width"/>',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {icon: "arrow-right"}

  export const CustomSize = Template.bind({});
  CustomSize.args = {icon: "arrow-right", height: 32, width: 32}