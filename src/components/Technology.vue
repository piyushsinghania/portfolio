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

@media only screen and (max-width: 768px) {
  .tech {
    height: 45px;
  }
  .tech img {
    width: 35px;
  }
}

@media only screen and (max-width: 576px) {
  .tech {
    height: 42px;
  }
  .tech img {
    width: 32px;
  }
}
</style>