<template>
  <h3 class="projects__heading">Projects</h3>
  <Project :projects="projects" />
</template>

<script>
import Project from './Project.vue'
export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          title: "Datoms",
          link: "https://datoms.io/",
          role: "Full stack developer",
          tags: ["Internship"],
          filename: "Datoms.png",
          tags: ["internship"],
          stack: ["vue.png", "nodejs.png", "materialize-logo.png", "javascript.png", "chart-js.png", "MongoDB.png"],
          description: "Developed Inverter Dashboard using Vue and Express. Created Authentication system for the dashboard. Collaborated with another developers explaining all the features of the product for better development of the app. Developed an admin panel for resolving user queries."
        },
        {
          title: "Acorn Globus",
          link: "https://www.acornglobus.com/",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "Acorn-Globus.png",
          stack: ["html.png", "css.png", "javascript.png"],
          description: "Developed the complete frontend, keeping in line with the design to meet the desired output. Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies."
        },
        {
          title: "Healthy Life",
          link: "https://livehealthy.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "healthylife.png",
          stack: ["html.png", "css.png"],
          description: "Developed a beautiful webpage for health and wellness. This project gave me confidence and refined my skills. Build it from scratch based on a design template."
        },
        {
          title: "Datoms Weather Dashboard",
          link: "https://datoms-weather.netlify.app/",
          role: "Full stack developer",
          tags: ["internship", "project"],
          filename: "Datoms-Weather.png",
          stack: ["nodejs.png", "vue.png", "materialize-logo.png"],
          description: "Developed weather dashboard to check the temperature forecast for the coming week. Also to display the current weather condition."
        },
        {
          title: "Chat application",
          link: "https://chit-and-chat.herokuapp.com/",
          role: "Full stack developer",
          tags: ["Project"],
          filename: "Chat-app.png",
          stack: ["nodejs.png", "javascript.png"],
          description: "A quick chat application with chat rooms where one can join and start texting. Used socket package to implement the functionalities"
        },
        {
          title: "Dojo Blog",
          link: "https://dojoblogs.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "Dojo-Blogs.png",
          stack: ["vue.png", "firebase.png", "javascript.png", "css.png"],
          description: "Developed a blogs page to create read and delete blogs. Blogs can also be filtered via tags." 
        },
        {
          title: "Mausam Samachar",
          link: "https://mausam-samachar.herokuapp.com/",
          role: "Full stack developer",
          tags: ["project"],
          filename: "mausam-samachar.png",
          stack: ["nodejs.png", "javascript.png"],
          description: "Used geolocation and weather api's to develop the weather app. User can enter any location, and get the current weather for the location in one click."
        },
        {
          title: "Project manager",
          link: "https://projectsplanner.netlify.app/",
          role: "Frontend developer",
          tags: ["project"],
          filename: "project-manager.png",
          stack: ["vue.png","firebase.png"],
          description: "Developed a project manager app. User can add, edit and delete projects. Also, can easily filter between completed and incompleted projects."
        },
        {
          title: "Hey todo",
          link: "https://heytodo.netlify.app/",
          role: "Frontend developer",
          tags: ["project"],
          filename: "hey-todo.png",
          stack: ["html.png", "css.png", "javascript.png"],
          description: "Developed a simple todo list with localStorage functionality to save your todos locally on your browser."
        },
        {
          title: "Weather App",
          role: "Frontend developer",
          tags: ["project"],
          filename: "Weather-Project.png",
          stack: ["html.png", "javascript.png"],
          description: "A simple weather application with local storage support to remember the last weather search."
        }
      ]
    }
  }
}
</script>

<style>
  .projects__heading {
    font-family: 'Roboto Slab', serif;
    width: 85%;
    max-width: 1400px;
    text-align: left;
    margin: 10px auto;
    margin-bottom: -35px;
  }

  @media only screen and (max-width: 1400px) {
    .projects__heading {
      width: 94%
    }
  }

  @media only screen and (max-width: 1200px) {
    .projects__heading {
      width: 95%
    }
  }

  @media only screen and (max-width: 992px) {
    .projects__heading {
      width: 90%;
    }
  }

  @media only screen and (max-width: 768px){
    .projects__heading {
      width: 90%;
    }
  }

  @media only screen and (max-width: 576px) {
    .projects__heading {
      width: 95%;
      margin-bottom: -20px;
    }
  } 
</style>