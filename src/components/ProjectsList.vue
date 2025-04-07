<template>
  <section class="projects">
    <h2 class="home-intro flex flex-col items-center text-center mt-10">
      My theses, dissertations and projects
    </h2>
    <ul class="projects-container">
      <li v-for="project in displayedProjects" :key="project.id" class="project-item">
        <h3>{{ project.title }}</h3>
        <p>{{ project.short_description }}</p>
        <router-link :to="`/projects/${project.id}`" class="underline link-accent">
          View Project
        </router-link>
      </li>
    </ul>
    <!-- Toggle button shown only if there are more than 5 projects and on mobile -->
    <button 
      v-if="isMobile && projects.length > 5" 
      @click="toggleExpanded" 
      class="mt-4 underline link-accent text-center mx-auto block">
      {{ expanded ? 'Show less projects' : 'Show more projects' }}
    </button>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const projects = ref([]);
const expanded = ref(false);

// Check if on mobile based on a simple window width check.
// (You may want to make this reactive for dynamic resizing.)
const isMobile = window.innerWidth <= 640;

// Compute which projects to display based on mobile view and expanded state.
const displayedProjects = computed(() => {
  if (isMobile && projects.value.length > 5 && !expanded.value) {
    return projects.value.slice(0, 5);
  }
  return projects.value;
});

function toggleExpanded() {
  expanded.value = !expanded.value;
}

onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_PROJECTS_URL || '/projects.json');
    const data = await res.json();
    projects.value = data;
  } catch (err) {
    console.error('Failed to load projects:', err);
  }
});
</script>