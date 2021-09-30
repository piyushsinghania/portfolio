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
          filename: "Datoms.png"
        },
        {
          id: 2,
          title: "Acorn Globus",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "Acorn-Globus.png"
        },
        {
          id: 3,
          title: "Healthy Life",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "healthylife.png"
        },
        {
          id: 4,
          title: "Dojo Blog",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "Dojo-Blog.png"
        },
        {
          id: 5,
          title: "Mausam Samachar",
          role: "Full stack developer",
          filename: "mausam-samachar.png",
        }
      ]
    }
  }
}
</script>

<style>

</style>