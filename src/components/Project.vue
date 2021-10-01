<template>
  <div v-for="project in projects" :key="project.id">
    <div class="project">
      <div class="details">
        <h3 class="project__title"> {{project.title}} </h3>
        <h5 class="project__role"> {{project.role}} </h5>
        <p> {{project.description}} </p>
        <div class="tag__cloud">
          <div class="tags" v-for="tag in project.tags" :key="tag">
            #{{tag}}
          </div>
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
    margin: 40px auto;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: white;
    border-radius: 2px;
    box-shadow: 0px 0px 2px 1px rgba(204,204,204,0.5);
    -webkit-box-shadow: 0px 0px 2px 1px rgba(204,204,204,0.5);
    -moz-box-shadow: 0px 0px 2px 1px rgba(204,204,204,0.5);
  } 

  .details {
    /* border: 2px solid red; */
    width: 55%;
    text-align: left;
  }

  .project__title {
    font-family: 'Roboto Slab', serif;
    font-weight: bolder;
    letter-spacing: 1px;
    margin-bottom: 2px;
  }

  .project__role {
    text-transform: uppercase;
    color: #777;
    margin: 0;
  }

  .tag__cloud {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }

  .tags {
    color: grey;
    text-decoration: none;
    margin: 0px 2px;
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

  @media screen {

  }
</style>