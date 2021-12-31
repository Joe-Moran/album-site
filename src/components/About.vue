<template>
  <div class="about">
    <div class="image-container">
      <img
        id="me"
        :src="require('../assets/me.png')"
      >
    </div>
    <p>
      xRGB is a MI-based multi-instrumentalist. Refraction is his debut album,
      and the result of years of adequate agonizing. 11 sonic journal entries
      without the crutch of vocals. A restless mixtape from a bedroom humanoid
      aching to get on a stage. Yes…HUMAN. More playing. Less spacebar. More
      strumming. Less laptop.
    </p>
  </div>
</template>

<script>
export default { name: 'About' };
</script>

<style scoped lang="scss">
@import '../sass/_global.scss';

.about {
  display: flex;
  flex-wrap: wrap;
}

#me {
  width: 100%;
}

.image-container {
  flex: 3 0 21.875rem;
}

p {
  color: white;
  flex: 1 0 40ch;
  padding: 0 1rem;
  margin: 0;
}
</style>
