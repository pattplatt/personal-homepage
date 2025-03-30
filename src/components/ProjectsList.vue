<template>
  <section class="projects">
    <h2 class="home-intro flex flex-col items-center text-center mt-10">
      My theses, dissertations and projects
    </h2>
    <ul class="projects-container">
      <li v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.title }}</h3>
        <p>{{ project.short_description }}</p>
        <router-link :to="`/projects/${project.id}`" class="underline link-accent">
          View Project
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);   // Changed name & initialized as array

onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_PROJECTS_URL || '/projects.json');
    const data = await res.json();

    // data is an array, so just assign it
    projects.value = data;
  } catch (err) {
    console.error('Failed to load projects:', err);
  }
});
</script>