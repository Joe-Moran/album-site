<template>
  <section id="date">
    <div
      id="date-container"
      :class="{'selected': isClicked}"
      @click="clickHandler"
    >
      <img :src="require('../assets/06 02 2020.svg')">
    </div>
  </section>
</template>

<script>
export default {
  name: "Date",
  data() {
    return {
      isClicked: false,
      date: "5 26 2020"
    };
  },
  methods: {
    clickHandler() {
      this.isClicked = !this.isClicked;
      this.$emit("click", this.isClicked);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_global.scss";

#date-container {
  position: relative;
  z-index: 2000;
  width: 400px;
  left: calc(50% - 200px);
  text-align: center;
  transition: top 1s ease-in;
}

img:first-child,
img:nth-child(2) {
  position: absolute;
  left: 0;
  width: 100%;
}

img:nth-child(2) {
  left: -7px;
  top: 7px;
  filter: blur(0.5px);
}

#date {
  margin-top: 3%;
}

@media (min-width: 0px) and (max-width: $sm) {
  #date.selected {
    top: 0 !important;
  }

  #date-container {
    width: 60%;
    left: 20%;
  }

  #date {
    margin-top: 8%;
  }
}

#arrow {
  content: " ";
  display: block;
  opacity: 0;
  border-top: 10px solid #b3abac;
  border-left: 15px transparent solid;
  border-right: 15px transparent solid;
  position: absolute;
  top: 84px;
  left: calc(50% - 15px);
  z-index: 500000;
  animation: bounce 10s ease-in-out infinite;
  transition: top 1s ease-in, opacity 5s ease-in;
}

.selected #arrow {
  opacity: 1;
}

@keyframes bounce {
  0% {
    top: 84px;
  }

  5% {
    top: 88px;
  }

  10% {
    top: 84px;
  }
}

#arrow:hover {
  cursor: pointer;
  top: 88px;
}

#date.selected {
  top: 40px;
}

h1 {
  display: inline-block;
  width: 283px;
  color: transparent;
  font-size: 56px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-top: 0;
  animation: fade 30s;

  &:hover {
    cursor: pointer;
  }
}

h1::before,
h1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h1::after {
  left: 5px !important;
  text-shadow: -1px 0 red !important;
  background: black !important;
  animation: glitch-1 2s infinite linear alternate-reverse !important;
}

h1::before {
  left: -5px !important;
  text-shadow: -1px 0 blue !important;
  background: black !important;
  animation: glitch-2 30s infinite linear alternate-reverse !important;
}

@keyframes glitch-1 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i/$steps)} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{percentage($top)} 0 #{percentage($bottom)} 0);
    }
  }
}

@keyframes glitch-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i/$steps)} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}% 0 #{$bottom}% 0);
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
</style>