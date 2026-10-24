<template>
  <article>
    <h2>{{ title }}</h2>
    <div class="narrative-text">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: 'NarrativeArticle',
  props: { title: { type: String, required: true } },
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Fjalla+One|Oxygen&display=swap';

.narrative-text {
  padding: 10px;
  font-family: Oxygen, sans-serif;
  color: #8f1203;
  text-indent: 27px;
}

h2 {
  font-family: 'Fjalla One', sans-serif;
  color: #8f1203;
  text-transform: uppercase;

  /* background: #020915; */
  border-bottom: solid;

  /* margin-bottom: -2px; */
}

.narrative-text * {
  padding: 0;
  margin: 0;
}

article {
  position: absolute;
  top: 30px;
  right: 40px;
  width: 321px;
  padding: 15px;
  text-align: left;
  border: 3px solid #fff;
  border-radius: 1px;
}
</style>
