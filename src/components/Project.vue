<template>
  <div v-for="project in projects" :key="project.id">
    <div class="project">
      <div class="details">
        <h3 class="project__title"> {{project.title}} </h3>
        <h5 class="project__role"> {{project.role}} </h5>
        <p> {{project.description}} </p>
        <div class="tags" v-for="tag in project.tags" :key="tag">
          #{{tag}}
        </div>
        <div class="tech__stack">
          <Technology v-for="tech in project.stack" :key="tech" :tech="tech" />
        </div>
      </div>
      <div class="picture">
        <img :src="require(`../assets/${project.filename}`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Technology from './Technology.vue'
export default {
  components: { Technology },
  props: ["projects"]
}
</script>

<style>
  .project {
    /* border: 2px solid grey; */
    margin: 50px auto;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: white;
    font-family: 'Poppins', sans-serif;
  } 

  .details {
    /* border: 2px solid red; */
    width: 55%;
    text-align: left;
  }

  .project__title {
    font-weight: bolder;
    margin-bottom: 2px;
  }

  .project__role {
    text-transform: uppercase;
    color: #777;
    margin: 0;
  }

  .tags {
    color: grey;
    text-decoration: none;
  }

  .tech__stack {
    /* border: 2px solid yellow; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 60px;
  }

  .picture {
    /* border: 2px solid black; */
    width: 40%;
  }

  .picture img {
    width: 450px;
    border-radius: 10px;
    box-sizing: border-box;
  }
</style>