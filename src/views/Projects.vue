<template>
  <Project :projects="projects" />
</template>

<script>
import Project from '../components/Project.vue'
export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Datoms Inverter Dashboard",
          role: "Full stack developer",
          tags: ["Internship"],
          filename: "Datoms.png",
          tags: ["internship"],
          stack: ["vue.png", "nodejs.png", "materialize-logo.png", "javascript.png", "chart-js.png", "MongoDB.png"],
          description: "Developed Inverter Dashboard using Vue and Express. Created Authentication system for the dashboard. Collaborated with another developers explaining all the features of the product for better development of the app. Developed an admin panel for resolving user queries."
        },
        {
          id: 2,
          title: "Acorn Globus",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "Acorn-Globus.png",
          stack: ["html.png", "css.png", "javascript.png"],
          description: "Developed the complete frontend, keeping in line with the design to meet the desired output. Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies."
        },
        {
          id: 3,
          title: "Healthy Life",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "healthylife.png",
          stack: ["html.png", "css.png"],
          description: "Developed a beautiful webpage for health and wellness. This project gave me confidence and refined my skills."
        },
        {
          id: 4,
          title: "Dojo Blog",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "Dojo-Blogs.png",
          stack: ["vue.png", "firebase.png", "javascript.png", "css.png"],
          description: "Developed a blogs page to create read and delete blogs. Blogs can also be filtered via tags."
        },
        {
          id: 5,
          title: "Mausam Samachar",
          role: "Full stack developer",
          tags: ["project"],
          filename: "mausam-samachar.png",
          stack: ["nodejs.png", "javascript.png"],
          description: "Used geolocation and weather api's to develop the weather app. User can enter any location, and get the current weather for the location in one click."
        },
        {
          id: 5,
          title: "Project manager",
          role: "Frontend developer",
          tags: ["project"],
          filename: "project-manager.png",
          stack: ["vue.png","firebase.png"],
          description: "Developed a project manager app. User can add, edit and delete projects. Also, can easily filter between completed and incompleted projects."
        }
      ]
    }
  }
}
</script>

<style>

</style>