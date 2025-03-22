<template>
    <section class="skills-hobbies">
      <h2>Skills & Hobbies</h2>
      <div class="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li v-for="skill in skills_hobbies[0].technicalSkills" :key="skill" class="!text-white"> {{ skill }}
          </li>
        </ul>
      </div>
      <div class="hobbies">
        <h3>Hobbies</h3>
        <ul>
          <li v-for="hobby in skills_hobbies[0].myHobbies" :key="hobby" class="!text-white">
        {{ hobby }}
      </li>
        </ul>
      </div>
    </section>
  </template>

  <script setup>
    import { skills_hobbies } from '../data/skills_hobbies.js';
  </script>

