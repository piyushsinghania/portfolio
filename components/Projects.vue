<template>
  <header>
    <h1>Projects</h1>
  </header>

  <div v-for="project in projects" :key="project.title">
    <Project :project="project" />
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          title: "Formester",
          link: "https://formester.com/",
          role: "Full stack developer",
          tags: ["Fulltime"],
          filename: "formester-form-builder-background.png",
          stack: ["rails.png", "rspec.svg", "vue.png", "javascript.png", "Bootstrap.png"],
          description:
            "Formester is Form Solution For Your Business. <Br /> Build forms in minutes using drag and drop builder or integrate with your existing HTML form."
        },
        {
          title: "Eitoss",
          link: "https://eitoss.com/",
          role: "Full stack developer",
          tags: ["Fulltime"],
          filename: "Eitoss.png",
          stack: [
            "rails.png",
            "rspec.svg",
            "react.svg",
            "typescript.png",
            "material-ui.png",
            "graphql.png"
          ],
          description:
            "Eitoss is a communication tool for managers and frontline workers. <Br /> It builds on the concept of Kaizen and help companies build product that are driven by the people who are on the frontline."
        },
        {
          title: "Frappe Books",
          link: "https://frappebooks.com/",
          role: "Full stack developer",
          tags: ["Opensource"],
          filename: "Frappe-Books.png",
          stack: ["vue.png", "electron.png", "javascript.png", "nodejs.png", "tailwind.png"],
          description:
            "Open source contribution on Frappe Books. <Br /> A free Desktop book-keeping software for small-businesses and freelancers."
        },
        {
          title: "Pmcurve playground",
          link: "https://playground.pmcurve.com/login",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "pmcurve.png",
          stack: ["vue.png", "javascript.png", "ant-design.png"],
          description:
            "Developed an engaging SQL playground showcasing functionalities such as query results display, history tracking, and table schema visualization."
        },
        {
          title: "Datoms",
          link: "https://datoms.io/",
          role: "Full stack developer",
          tags: ["Internship"],
          filename: "Datoms.png",
          stack: [
            "vue.png",
            "nodejs.png",
            "materialize-logo.png",
            "javascript.png",
            "chart-js.png",
            "MongoDB.png"
          ],
          description:
            "Developed Inverter Dashboard using Vue and Express. <Br /> Created Authentication system for the dashboard. <Br /> Collaborated with another developers explaining all the features of the product for better development of the app. Developed an admin panel for resolving user queries."
        },
        {
          title: "Acorn Globus",
          link: "https://www.acornglobus.com/",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "acorn-globus.png",
          stack: ["html.png", "css-3.png", "javascript.png", "vue.png"],
          description:
            "Developed the complete frontend, keeping in line with the design to meet the desired output. Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies."
        },
        {
          title: "Nirman",
          link: "https://nirman.netlify.app/",
          role: "Frontend developer",
          tags: ["Freelance"],
          filename: "nirman.png",
          stack: ["html.png", "css-3.png", "Bootstrap.png"],
          description:
            "Created the website for a fest like event called Nirman, which was held at the intercollege level. Worked with members of the club to understand the requirements and addressed them consistently."
        },
        {
          title: "Healthy Life",
          link: "https://livehealthy.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "healthylife.png",
          stack: ["html.png", "css-3.png"],
          description:
            "Developed a beautiful webpage for health and wellness. <Br /> This project gave me confidence and refined my skills. Build it from scratch based on a design template."
        },
        {
          title: "Cooking Blog",
          link: "https://cooking-blog.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "cooking-blog.png",
          stack: ["react.svg", "javascript.png", "firebase.png", "css-3.png"],
          description:
            "Cook some tasty food with this cooking blog. <Br /> Developed this recipe blog site to read and write recipes. <Br /> Used firebase/firestore as backend database."
        },
        {
          title: "Memory Game",
          link: "https://flipinout.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "magic-memory.png",
          stack: ["react.svg", "javascript.png", "css-3.png"],
          description:
            "Sharpen up your memories once again with this evergreen memory game. <Br /> Developed this interactive and simple game using React-js"
        },
        {
          title: "Datoms Weather Dashboard",
          link: "https://datoms-weather.netlify.app/",
          role: "Full stack developer",
          tags: ["internship", "project"],
          filename: "Datoms-Weather.png",
          stack: ["nodejs.png", "vue.png", "materialize-logo.png"],
          description:
            "Developed weather dashboard to check the temperature forecast for the coming week. <Br /> Also to display the current weather condition."
        },
        {
          title: "Chat application",
          link: "https://chit-and-chat.herokuapp.com/",
          role: "Full stack developer",
          tags: ["Project"],
          filename: "Chat-app.png",
          stack: ["nodejs.png", "javascript.png"],
          description:
            "A quick chat application with chat rooms where one can join and start texting. <Br /> Used socket package to implement the functionalities"
        },
        {
          title: "Dojo Blog",
          link: "https://dojoblogs.netlify.app/",
          role: "Frontend developer",
          tags: ["Project"],
          filename: "Dojo-Blogs.png",
          stack: ["vue.png", "firebase.png", "javascript.png", "css-3.png"],
          description:
            "Developed a blogs page to create read and delete blogs. <Br /> Blogs can also be filtered via tags."
        },
        {
          title: "Mausam Samachar",
          link: "https://mausam-samachar.herokuapp.com/",
          role: "Full stack developer",
          tags: ["project"],
          filename: "mausam-samachar.png",
          stack: ["nodejs.png", "javascript.png"],
          description:
            "Used geolocation and weather api's to develop the weather app. <Br /> User can enter any location, and get the current weather for the location in one click."
        },
        {
          title: "Project manager",
          link: "https://projectsplanner.netlify.app/",
          role: "Frontend developer",
          tags: ["project"],
          filename: "project-manager.png",
          stack: ["vue.png", "firebase.png"],
          description:
            "Developed a project manager app. User can add, edit and delete projects. <Br /> Also, can easily filter between completed and incompleted projects."
        },
        {
          title: "Hey todo",
          link: "https://heytodo.netlify.app/",
          role: "Frontend developer",
          tags: ["project"],
          filename: "hey-todo.png",
          stack: ["html.png", "css-3.png", "javascript.png"],
          description:
            "Developed a simple todo list. <Br /> Also comes with localStorage functionality to save your todos locally on your browser."
        },
        {
          title: "Weather App",
          role: "Frontend developer",
          tags: ["project"],
          filename: "Weather-Project.png",
          stack: ["html.png", "javascript.png"],
          description:
            "A simple weather application with support of local storage to remember the last search location."
        }
      ]
    };
  }
};
</script>

<style>
header {
  margin: 20px auto 0px;
  max-width: 1200px;
}

@media only screen and (max-width: 1400px) {
  header {
    width: 94%;
  }
}

@media only screen and (max-width: 992px) {
  header {
    margin: 20px auto;
    width: 90%;
  }
  header h1 {
    font-size: 24px;
  }
}

@media only screen and (max-width: 768px) {
  header {
    width: 90%;
    margin: 10px auto;
  }
}

@media only screen and (max-width: 576px) {
  header {
    width: 95%;
  }
}
</style>
