<template>
    <section class="skills-hobbies">
      <h2>Skills & Hobbies</h2>
      <div class="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li v-for="skill in technicalSkills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
      <div class="hobbies">
        <h3>Hobbies</h3>
        <ul>
          <li v-for="hobby in myHobbies" :key="hobby">{{ hobby }}</li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SkillsHobbies',
    data() {
      return {
        technicalSkills: [
          'JavaScript',
          'Vue.js',
          'Node.js',
          'HTML/CSS',
          'Git/GitHub',
        ],
        myHobbies: [
          'Reading Sci-Fi novels',
          'Playing guitar',
          'Photography',
          'Hiking',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills-hobbies {
    padding: 2rem;
  }
  
  .skills, .hobbies {
    margin-bottom: 2rem;
  }
  
  ul {
    list-style: disc;
    margin-left: 1.5rem;
  }
  </style>