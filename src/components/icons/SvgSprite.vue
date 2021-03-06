<template>
  <svg width="0" height="0" style="display: none" v-html="$options.svgSprite" />
</template>

<script>
import iconStore from "../../icon-store";

const icons = iconStore.icons;
export default {
  name: "SvgSprite",
  svgSprite: icons.join("\n"), // concatenate all symbols into $options.svgSprite
};
</script>

