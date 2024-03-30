<template>
  <div v-for="project in projects" :key="project.title">
    <div class="project">
      <div class="details">
        <h3 class="project__title">
          {{ project.title }}
        </h3>
        <h5 class="project__role">{{ project.role }}</h5>
        <p class="project__description">
          <span v-html="project.description"></span>
        </p>
        <div class="tag__cloud">
          <div class="tags" v-for="tag in project.tags" :key="tag">
            #{{ tag }}
          </div>
        </div>
        <div class="tech__stack">
          <Technology v-for="tech in project.stack" :key="tech" :tech="tech" />
        </div>
        <a v-if="project.link" :href="project.link" target="_blank">
          <button class="project__link">Know More</button>
        </a>
      </div>
      <div class="picture">
        <img :src="require(`../assets/${project.filename}`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Technology from "./Technology.vue";
export default {
  components: { Technology },
  props: ["projects"],
};
</script>

<style>
.project {
  /* border: 2px solid grey; */
  margin: 40px auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: white;
  border-radius: 6px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
}

.details {
  /* border: 2px solid red; */
  width: 55%;
  text-align: left;
}

.project__title {
  font-family: "Poppins", serif;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2px;
  color: #303030;
}

.link__icon {
  color: #777;
  margin: 0px 10px;
  cursor: pointer;
  font-size: 16px;
}

.project__role {
  text-transform: uppercase;
  color: #777;
  margin: 0;
  font-weight: 300;
}

.project__description {
  color: #444;
}

.tag__cloud {
  display: flex;
  color: #767f7e;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.tags {
  /* color: grey; */
  text-decoration: none;
  margin: 0px 2px;
}

.tech__stack {
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  margin: 5px 0px;
}

.project__link {
  font-size: 14px;
  font-weight: 700;
  padding: 10px 16px;
  margin-bottom: 15px;
  border: 0;
  border-radius: 4px;
  background: #7c68eece;
  color: white;
  cursor: pointer;
}

.project__link:hover {
  background: #7c68ee;
}

.picture {
  /* border: 2px solid black; */
  margin: 10px 0px;
  width: 40%;
}

.picture img {
  width: 450px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #ddd;
}

@media only screen and (max-width: 1400px) {
  .project {
    width: 94%;
  }
}

@media only screen and (max-width: 1200px) {
  .project {
    width: 95%;
  }
  .details {
    width: 52%;
  }
  .project__description {
    font-size: 18px;
  }
  .picture {
    width: 43%;
  }
  .picture img {
    width: 400px;
  }
}

@media only screen and (max-width: 992px) {
  .project {
    width: 90%;
  }
  .details {
    width: 95%;
  }
  .picture {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .project {
    width: 90%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 35px;
  }

  .details {
    width: 95%;
    margin: 0px auto;
  }

  .project__description {
    font-size: 18px;
  }

  .tech__stack {
    height: 55px;
  }

  .picture {
    display: none;
    width: 95%;
  }

  .picture img {
    width: 560px;
  }

  .tech__stack {
    height: 55px;
  }
}
@media only screen and (max-width: 576px) {
  .project {
    width: 95%;
    margin: 25px auto;
    padding: 10px;
    box-sizing: border-box;
  }

  .project__title {
    margin-top: 10px;
  }

  .project__role {
    font-size: 16px;
  }

  .project__description {
    font-size: 14px;
  }

  .tags {
    font-size: 16px;
  }

  .tech__stack {
    height: 50px;
  }
}
</style>
