<template>
  <h2 class="items-center text-center mt-10">Skills & Hobbies</h2>

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
    <br> <br>
    <h3>Check out my personal music project here:</h3> 

  <div v-if="skills_hobbies.music" class="flex items-center justify-center mt-5">
    <iframe :src="skills_hobbies.music" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
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
