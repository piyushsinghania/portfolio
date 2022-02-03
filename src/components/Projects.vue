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
          title: "Frappe Books",
          link: "https://frappebooks.com/",
          role: "Full stack developer",
          tags: ["Opensource"],
          filename: "Frappe-Books.png",
          stack: ["vue.png", "electron.png", "javascript.png", "nodejs.png", "tailwind.png"],
          description: "Open source contribution on Frappe Books. <Br /> A free Desktop book-keeping software for small-businesses and freelancers."
        },
        {
          title: "Datoms",
          link: "https://datoms.io/",
          role: "Full stack developer",
          tags: ["Internship"],
          filename: "Datoms.png",
          stack: ["vue.png", "nodejs.png", "materialize-logo.png", "javascript.png", "chart-js.png", "MongoDB.png"],
          description: "Developed Inverter Dashboard using Vue and Express. <Br /> Created Authentication system for the dashboard. <Br /> Collaborated with another developers explaining all the features of the product for better development of the app. Developed an admin panel for resolving user queries."
        },
        {
          title: "Acorn Globus",
          link: "https://www.acornglobus.com/",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "acorn-globus.png",
          stack: ["html.png", "css.png", "javascript.png", "vue.png"],
          description: "Developed the complete frontend, keeping in line with the design to meet the desired output. Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies."
        },
        {
          title: "Healthy Life",
          link: "https://livehealthy.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "healthylife.png",
          stack: ["html.png", "css.png"],
          description: "Developed a beautiful webpage for health and wellness. <Br /> This project gave me confidence and refined my skills. Build it from scratch based on a design template."
        },
        {
          title: "Cooking Blog",
          link: "https://cooking-blog.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "cooking-blog.png",
          stack: ["react.svg", "javascript.png", "firebase.png", "css.png"],
          description: "Cook some tasty food with this cooking blog. <Br /> Developed this recipe blog site to read and write recipes. <Br /> Used firebase/firestore as backend database."
        },
        {
          title: "Memory Game",
          link: "https://flipinout.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "magic-memory.png",
          stack: ["react.svg", "javascript.png", "css.png"],
          description: "Sharpen up your memories once again with this evergreen memory game. <Br /> Developed this interactive and simple game using React-js"
        },
        {
          title: "Datoms Weather Dashboard",
          link: "https://datoms-weather.netlify.app/",
          role: "Full stack developer",
          tags: ["internship", "project"],
          filename: "Datoms-Weather.png",
          stack: ["nodejs.png", "vue.png", "materialize-logo.png"],
          description: "Developed weather dashboard to check the temperature forecast for the coming week. <Br /> Also to display the current weather condition."
        },
        {
          title: "Chat application",
          link: "https://chit-and-chat.herokuapp.com/",
          role: "Full stack developer",
          tags: ["Project"],
          filename: "Chat-app.png",
          stack: ["nodejs.png", "javascript.png"],
          description: "A quick chat application with chat rooms where one can join and start texting. <Br /> Used socket package to implement the functionalities"
        },
        {
          title: "Dojo Blog",
          link: "https://dojoblogs.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "Dojo-Blogs.png",
          stack: ["vue.png", "firebase.png", "javascript.png", "css.png"],
          description: "Developed a blogs page to create read and delete blogs. <Br /> Blogs can also be filtered via tags."
        },
        {
          title: "Mausam Samachar",
          link: "https://mausam-samachar.herokuapp.com/",
          role: "Full stack developer",
          tags: ["project"],
          filename: "mausam-samachar.png",
          stack: ["nodejs.png", "javascript.png"],
          description: "Used geolocation and weather api's to develop the weather app. <Br /> User can enter any location, and get the current weather for the location in one click."
        },
        {
          title: "Project manager",
          link: "https://projectsplanner.netlify.app/",
          role: "Frontend developer",
          tags: ["project"],
          filename: "project-manager.png",
          stack: ["vue.png","firebase.png"],
          description: "Developed a project manager app. User can add, edit and delete projects. <Br /> Also, can easily filter between completed and incompleted projects."
        },
        {
          title: "Hey todo",
          link: "https://heytodo.netlify.app/",
          role: "Frontend developer",
          tags: ["project"],
          filename: "hey-todo.png",
          stack: ["html.png", "css.png", "javascript.png"],
          description: "Developed a simple todo list. <Br /> Also comes with localStorage functionality to save your todos locally on your browser."
        },
        {
          title: "Weather App",
          role: "Frontend developer",
          tags: ["project"],
          filename: "Weather-Project.png",
          stack: ["html.png", "javascript.png"],
          description: "A simple weather application with support of local storage to remember the last search location."
        }
      ]
    }
  }
}
</script>

<style>
  .projects__heading {
    font-family: 'Poppins', serif;
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