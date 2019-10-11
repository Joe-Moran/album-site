// TODO: animate through list of images if mobile and tapping
<template>
  <div class="hello">
    {{ mouseY}}
    <div v-for="(image, index) in images" :key="index">
      <MeImage v-show="index == section" :image-source="image" />
    </div>
  </div>
</template>

<script>
import MeImage from "./MeImage";
const imageCount = 17;

export default {
  name: "HelloWorld",
  components: {
    MeImage
  },
  data() {
    return {
      win: window,
      doc: document,
      docElem: document.documentElement,
      body: document.getElementsByTagName("body")[0],
      mouseY: 0,
      images: [
        "album-art-0.png",
        "album-art-1.png",
        "album-art-2.png",
        "album-art-3.png",
        "album-art-4.png",
        "album-art-5.png",
        "album-art-6.png",
        "album-art-7.png",
        "album-art-8.png",
        "album-art-9.png",
        "album-art-10.png",
        "album-art-11.png",
        "album-art-12.png",
        "album-art-13.png",
        "album-art-14.png",
        "album-art-15.png",
        "album-art-16.png"
      ]
    };
  },
  computed: {
    x: function() {
      return (
        this.win.innerWidth || this.docElem.clientWidth || this.body.clientWidth
      );
    },
    y: function() {
      return (
        this.win.innerHeight ||
        this.docElem.clientHeight ||
        this.body.clientHeight
      );
    },
    sectionHeight: function() {
      return this.y / imageCount;
    },
    section: function() {
      return Math.floor(this.mouseY / this.sectionHeight);
    }
  },
  methods: {
    mouseIsMoving(e) {
      this.mouseY = e.pageY;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
