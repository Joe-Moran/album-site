<template>
  <div id="album-art">
    <div
      v-for="(image, index) in images"
      :key="index"
    >
      <MeImage
        v-show="
          (!isMobile && index === section) ||
            (isMobile && index === gyroSection)
        "
        :image-source="image"
      />
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import MeImage from './MeImage.vue';
import imageCollection from './image-collection';

export default {
  name: 'HelloWorld',
  components: {
    MeImage,
  },
  data() {
    return {
      win: window,
      doc: document,
      docElem: document.documentElement,
      body: document.getElementsByTagName('body')[0],
      mouseY: 0,
      gyroY: null,
      mod: 0,
      isMobile,
      images: imageCollection.images,
    };
  },
  computed: {
    screenDividerCount() {
      return this.images.length - 1;
    },
    x() {
      return (
        this.win.innerWidth || this.docElem.clientWidth || this.body.clientWidth
      );
    },
    y() {
      return (
        this.win.innerHeight
        || this.docElem.clientHeight
        || this.body.clientHeight
      );
    },
    sectionHeight() {
      return this.y / this.screenDividerCount;
    },
    section() {
      return Math.floor(this.mouseY / this.sectionHeight);
    },
    gyroSection() {
      const calc = Math.abs(
        ((this.gyroY - this.mod ** 2) * 100)
          / 90
          / this.screenDividerCount,
      );

      return calc > this.screenDividerCount
        ? this.screenDividerCount
        : Math.floor(calc);
    },
  },
  methods: {
    mouseIsMoving(e) {
      this.mouseY = e.pageY;
    },
    handleOrientation(event) {
      if (this.gyroY == null) {
        this.mod = event.beta;
      }
      this.gyroY = event.beta;
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.mouseIsMoving);
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#album-art {
  z-index: 4;
  transition: top 1s ease-in;
}
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
