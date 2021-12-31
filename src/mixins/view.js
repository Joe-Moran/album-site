export default {
  props: {
    scrollPosition: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      visibleContent: null,
    };
  },
  methods: {
    contentVisible(contentName) {
      this.visibleContent = contentName;
      this.$emit('newContent', contentName);
    },
  },
};
