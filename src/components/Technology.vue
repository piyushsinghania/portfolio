<template>
  <div class="tech">
    <img :src="require(`../assets/${tech}`)" alt="">
  </div>
</template>

<script>
export default {
  props: ["tech"]

}
</script>

<style>
.tech {
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 5px 8px;
}
.tech img {
  width: 40px;
}
</style>