<template>
  <div class="about">
    <div class="image-container">
      <picture>
        <source
          v-for="(srcset, format) in $options.mePhoto.sources"
          :key="format"
          :type="`image/${format}`"
          :srcset="srcset"
          sizes="(max-width: 60rem) 90vw, 614px"
        />
        <img
          id="me"
          loading="lazy"
          :src="$options.mePhoto.img.src"
          alt="xRGB"
        />
      </picture>
    </div>
    <p>
      xRGB is a MI-based multi-instrumentalist. Refraction is his debut album, and the result of
      years of adequate agonizing. 11 sonic journal entries without the crutch of vocals. A restless
      mixtape from a bedroom humanoid aching to get on a stage. Yes…HUMAN. More playing. Less
      spacebar. More strumming. Less laptop.
    </p>
  </div>
</template>

<script>
import mePhoto from '@/assets/me.png?w=640;1166&format=avif;webp;jpg&as=picture'

export default { name: 'AboutSection', mePhoto }
</script>

<style scoped lang="scss">
@use '@/sass/global' as *;

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
  flex: 1 0 40ch;
  padding: 0 1rem;
  margin: 0;
  color: #fff;
}
</style>
