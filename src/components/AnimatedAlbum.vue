<template>
  <div id="album-art">
    <div v-for="(image, index) in images" :key="index">
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
import MeImage from './MeImage'
import { isMobile } from 'mobile-device-detect'
import { imageCollection } from './image-collection'

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
      isMobile: isMobile,
      images: imageCollection.images,
    }
  },
  computed: {
    screenDividerCount: function () {
      return this.images.length - 1
    },
    x: function () {
      return (
        this.win.innerWidth || this.docElem.clientWidth || this.body.clientWidth
      )
    },
    y: function () {
      return (
        this.win.innerHeight ||
        this.docElem.clientHeight ||
        this.body.clientHeight
      )
    },
    sectionHeight: function () {
      return this.y / this.screenDividerCount
    },
    section: function () {
      return Math.floor(this.mouseY / this.sectionHeight)
    },
    gyroSection: function () {
      const calc = Math.abs(
        (Math.pow(this.gyroY - this.mod, 2) * 100) /
          90 /
          this.screenDividerCount
      )

      return calc > this.screenDividerCount
        ? this.screenDividerCount
        : Math.floor(calc)
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.mouseIsMoving)
    window.addEventListener('deviceorientation', this.handleOrientation, true)
  },
  methods: {
    mouseIsMoving(e) {
      this.mouseY = e.pageY
    },
    handleOrientation: function (event) {
      if (this.gyroY == null) {
        this.mod = event.beta
      }
      this.gyroY = event.beta
    },
  },
}
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
