<template>
  <div>
    <div id="image-container">
      <img
        id="me"
        :src="require('../assets/me.png')"
      >
    </div>
    <p>
      Man spends months in a cave alone with his thoughts. Toiling away. Instead of gazing endlessly into fire, or scribing a would-be novel on the walls, he opts to plug in keyboards, pluck a guitar, and pushing some buttons. Self-isolation (hello 2020!) is surreal. It caters to the not-so-subtle nuances of depression and anxiety, but it’s also an invitation to purge creativity. Our cave man, in the face of solitude, decides to painstakingly craft a monolith from years of creative unrest. Out of darkness, comes an ode to a life of love, and, psychedelic experiences.
      <br>
      <br>xRGB is our lead character, and a MI-based multi-instrumentalist. Refraction is his debut album, and the result of years of adequate agonizing. 11 sonic journal entries without the crutch of vocals. We’re dealing with the tug-and-pull of a mind that won’t remain idle. Setting the tone, is an intro track full of vintage samples, skipping through channels on a dusty transistor radio. We’re then thrown into a world of hookless, wandering compositions. Boom-thwap beats akin to celery breaking. A restless mixtape from a bedroom humanoid aching to get on a stage. Yes…HUMAN. More playing. Less spacebar. More strumming. Less laptop. There’s room to breathe here. The guitars chime. The keys are vibrant. The vibes are ready to sample, but never feels safe enough to loop.
      <br>
      <br>So… where do we go from here? Warm head nods during an opening slot for Tycho?…Ratatat?…El Ten Eleven? Light vs. dark nods to 70s film soundtracks a la Goblin? Yes please. Reference points in bio achieved! In the words of the artist himself…”I hope I'm ashamed by this album in a few years compared to whatever I'll be working on then.” Now that xRGB has scratched and clawed his way into immortality via Refraction, let’s book the lad and be a part of his evolution.
    </p>
  </div>
</template>
          

<script>
export default { name: "About" };
</script>

<style scoped lang="scss">
@import "../sass/_global.scss";

#me {
  margin: auto;
  display: block;
  width: 100%;
}
#image-container {
  position: relative;

  width: 90%;
  margin: auto;
  margin-bottom: 63px;
}

#about-text {
  position: absolute;
  bottom: 15px;
  left: 9.5%;
  color: white;
  padding: 16px;
  font-family: consolas;
  background: rgba(0, 0, 0, 0.66);
}

p {
  color: white;
  font-family: consolas;
  margin: auto;

  &:before {
    content: " ";
    width: 20px;
    height: 433px;
    background: $blue-tertiary;
    display: block;
    position: absolute;
  }
}

@media (max-width: $sm) {
  p {
    width: 100%;
    font-size: 14px;
    &:before {
      display: none;
    }
  }
}

@media (max-width: $md) and (min-width: $sm) {
  p {
    width: 86%;
    &:before {
      display: none;
    }
  }
}

@media (min-width: $md) and (max-width: $lg) {
  p {
    width: 95%;
    &:before {
      left: -34px;
    }
  }
}

@media (min-width: $lg) {
  p {
    width: 70%;
    &:before {
      left: 10%;
    }
  }
}
</style>