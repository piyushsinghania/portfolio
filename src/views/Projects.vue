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
          stack: ["vue.png", "nodejs.png", "materialize-logo.png", "javascript.png", "chart-js.png"],
          description: "As an intern at Datoms, Bhubaneswar, India, my work was to learn new software tech stacks and then implement them in an efficient manner under the guidance of Datoms team. Here I worked together with colleagues from both the hardware and software field and we were directed to build up working dashboards, which in turn displayed the data to the users for there machine."
        },
        {
          id: 2,
          title: "Acorn Globus",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "Acorn-Globus.png",
          stack: ["html.png", "css.png", "javascript.png"]
        },
        {
          id: 3,
          title: "Healthy Life",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "healthylife.png",
          stack: ["html.png", "css.png"]
        },
        {
          id: 4,
          title: "Dojo Blog",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "Dojo-Blogs.png",
          stack: ["vue.png", "firebase.png", "javascript.png", "css.png"]
        },
        {
          id: 5,
          title: "Mausam Samachar",
          role: "Full stack developer",
          tags: ["project"],
          filename: "mausam-samachar.png",
          stack: ["nodejs.png", "javascript.png"]
        },
        {
          id: 5,
          title: "Project manager",
          role: "Frontend developer",
          tags: ["project"],
          filename: "project-manager.png",
          stack: ["vue.png","firebase.png"]
        }
      ]
    }
  }
}
</script>

<style>

</style>