<template>
  <div class="home">
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '../components/Projects.vue';

export default {
  name: 'Home',
  components: {
    Projects,
  },
};
</script>

<style>
body {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to right, #edeafbe7, #776ee086);
}

h1,
h2,
h3 {
  color: #767f7e;
}
p {
  color: #828b8a;
}
</style>
