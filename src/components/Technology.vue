<template>
  <div class="tech">
    <img :src="require(`../assets/${tech}`)" alt="" />
  </div>
</template>

<script>
export default {
  props: ["tech"],
};
</script>

<style>
.tech {
  /* border: 2px solid black; */
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 10px;
}
.tech img {
  width: 35px;
}

@media only screen and (max-width: 768px) {
  .tech {
    height: 45px;
  }
  .tech img {
    width: 30px;
  }
}

@media only screen and (max-width: 576px) {
  .tech {
    height: 42px;
  }
}
</style>
