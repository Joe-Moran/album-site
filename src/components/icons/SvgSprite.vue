<template>
  <svg
    width="0"
    height="0"
  >{{ $options.svgSprite }}</svg>
</template>

<script>
// import iconStore from '@/icon-store'

// const icons = iconStore.icons
export default {
  name: 'SvgSprite',
  svgSprite: null,
  // icons.join('\n'), // concatenate all symbols into $options.svgSprite
}
</script>
