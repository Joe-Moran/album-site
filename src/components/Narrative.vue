<template>
  <article>
    <h2>{{ title }}</h2>
    <div class="narrative-text">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Narrative',
  props: { title: { type: String, required: true } },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Oxygen&display=swap');

.narrative-text {
  font-family: Oxygen;
  color: white;
}

h2 {
  font-family: Fjalla One;
  color: #8f1203;
  text-transform: uppercase;

  /* background: #020915; */
  border-bottom: solid;

  /* margin-bottom: -2px; */
}

.narrative-text {
  padding: 10px;
  color: #8f1203;
  text-indent: 27px;
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
  border: 3px solid white;
  border-radius: 1px;
}
</style>
