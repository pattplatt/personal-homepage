<template>
  <h2 class="home-intro flex flex-col items-center text-center mt-10">Skills & Hobbies</h2>

  <section class="skills">
    <h3>Technical Skills</h3>
    <div v-for="(skills, category) in skills_hobbies.technicalSkills" :key="category">
      <h4>{{ category }}</h4>
      <ul>
        <li v-for="skill in skills" :key="skill" class="text-white">
          {{ skill }}
        </li>
      </ul>
    </div>
  </section>

  <section class="hobbies">
    <h3>Hobbies</h3>
    <ul>
      <li v-for="hobby in skills_hobbies.hobbies" :key="hobby" class="text-white">
        {{ hobby }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skills_hobbies = ref({});

onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_SKILLS_HOBBIES_URL || '/skills_hobbies.json');
    skills_hobbies.value = await res.json();
  } catch (err) {
    console.error('Failed to load personal data:', err);
  }
});
</script>
