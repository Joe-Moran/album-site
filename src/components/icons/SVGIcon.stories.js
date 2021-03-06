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
  Primary.args = {icon: "arrow-right-red-primary"}

  export const CustomSize = Template.bind({});
  CustomSize.args = {...Primary.args, height: 32, width: 32}

  export const CustomColor = Template.bind({});
  CustomColor.args = {icon: "arrow-right", color: "blue"}