<template>
  <div class="stream-links" :class="{ overlay: overlay }">
    <div v-if="showFeature" id="feature">
      <slot />
    </div>
    <ul>
      <li v-for="link in linksToDisplay" :key="link.link">
        <a :href="link.link" target="_blank" :aria-label="link.title">
          <StreamLink :id="title" :icon="link.icon" :title="link.title" />
        </a>
      </li>
      <li v-if="releasePath">
        <router-link :to="releasePath" append>
          <StreamLink icon="plus.png" title="More Info" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import StreamLink from './StreamLink'
export default {
  name: 'StreamLinks',
  components: {
    StreamLink,
  },
  props: {
    links: { type: Array, required: true },
    overlay: { type: Boolean, required: true },
    showFeature: { type: Boolean, default: false },
    releasePath: { type: String, required: true },
    reduce: { type: Boolean, default: false },
  },
  computed: {
    linksToDisplay() {
      return this.links && this.links.length > 3 && this.reduce
        ? this.links.slice(0, 3)
        : this.links
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/_global.scss';
a {
  text-decoration: none;
}

#feature div {
  width: 102%;
  height: 400px;
  margin-bottom: 30px;
  border: 4px solid #d1d1d1;
  border-radius: 5px;
  box-shadow: #c5c5c5 -10px 10px 0;
}
.stream-links {
  position: relative;
  padding: 20px;
  padding-top: 60px;
  background: transparent;
  opacity: 0;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);

  &:not(.overlay) {
    padding-top: 30px;
    background: #d1d1d1;
    box-shadow: -10px 10px 0 $red-primary;
    opacity: 1;
  }

  //   &:after {
  //     content: " ";
  //     border-top: 20px solid #d1d1d1;

  //     border-left: 20px solid transparent;
  //     border-right: 20px solid transparent;
  //     height: 0;
  //     width: 0;
  //     position: absolute;
  //     top: 100%;
  //     left: 50%;
  //     transform: translateX(-50%);
  //   }
}
ul {
  padding: 0;
}

li {
  margin-bottom: 20px;
  list-style: none;
}

button {
  position: absolute;
  top: 7px;
  right: -11px;
  width: 36px;
  height: 36px;
  font-family: Arial;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  box-shadow: -5px 4px 0 #0000000f;
  transition: all 250ms ease-in-out;
  &:hover {
    color: $red-primary;
    cursor: pointer;
    background: 1px solid $red-primary;
    background: lightgray;
  }
}
</style>
