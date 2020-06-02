<template>
  <article>
    <h2>{{title}}</h2>
    <div class="narrative-text">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "Narrative",
  props: { title: String }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Oxygen&display=swap");

.narrative-text {
  font-family: Oxygen;
  color: white;
}

h2 {
  text-transform: uppercase;
  color: #8f1203;
  /* background: #020915; */
  border-bottom: solid;
  font-family: Fjalla One;
  /* margin-bottom: -2px; */
}

.narrative-text {
  text-indent: 27px;
  color: #8f1203;
  padding: 10px;
}

.narrative-text * {
  margin: 0;
  padding: 0;
}

article {
  width: 321px;
  padding: 15px;
  position: absolute;
  top: 30px;
  right: 40px;
  border: 3px solid white;
  text-align: left;
  border-radius: 1px;
}
</style>