<template>
  <div v-for="project in projects" :key="project.id">
    <div class="project">
      <div class="details">
        <h3> {{project.title}} </h3>
        <h6> {{project.role}} </h6>
        <p> "Hey there" </p>
        <div v-for="tech in project.stack" :key="tech">
          <img :src="require(`../assets/${project.tech}`)" alt="">
        </div>
      </div>
      <div class="picture">
        <img :src="require(`../assets/${project.filename}`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"]
}
</script>

<style>
  .project {
    border: 2px solid grey;
    margin: 40px auto;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  } 
  .details {
    border: 2px solid red;
    width: 55%;
  }
  .picture {
    border: 2px solid black;
    width: 40%;
  }
  .picture img {
    width: 450px;
  }
</style>