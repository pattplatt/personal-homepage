<template>
  <section v-if="project" class="p-8 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>

    <div v-if="project.github || project.demo || project.download" class="flex space-x-4 mb-4">

      <div v-if="project.github" class="space-y-2">
        <div v-for="(url, label) in project.github" :key="label" class="flex items-center space-x-1">
          <!-- Display the key as a label -->
          <span>{{ label }}</span>

          <!-- Use the value as the link in openLink -->
          <div class="relative group cursor-pointer" @click="openLink(url)">
            <font-awesome-icon :icon="['fab', 'github']" class="text-2xl icon-color" />
            <div
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ url }}
            </div>
          </div>
        </div>
      </div>
        <a v-if="project.demo" :href="project.demo"
          class="px-4 py-2 bg-[var(--accent-color)] !text-white rounded hover:bg-[var(--primary-color)] transition-colors"
          target="_blank">Live Demo</a>

        <div v-if="project.download" class="flex items-center space-x-1">
          <span>Download:</span>
          <div class="relative group cursor-pointer" @click="downloadFile(project.download)">
            <font-awesome-icon :icon="['fas', 'download']" class="text-2xl icon-color" />
            <div
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Download
            </div>
          </div>
        </div>
      </div>

      <p class="leading-relaxed">{{ project.description }}</p>

      <div class="mb-4">
        <h2 class="text-2xl mb-2">Technologies Used</h2>
        <ol class="list-decimal list-inside">
          <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
        </ol>
      </div>

      <div v-if="project.purpose" class="mb-4">
        <h2 class="text-2xl mb-2">Purpose</h2>
        <p class="leading-relaxed">{{ project.purpose }}</p>
      </div>

      <div v-if="project.challenges" class="mb-4">
        <h2 class="text-2xl mb-2">Challenges &amp; Solutions</h2>
        <ol class="list-decimal list-inside">
          <li v-for="(challenge, index) in project.challenges" :key="index">
            {{ challenge }}
          </li>
        </ol>
      </div>

      <div v-if="project.achievements" class="mb-4">
        <h2 class="text-2xl mb-2">Achievements</h2>
        <ol class="list-decimal list-inside">
          <li v-for="(achievement, index) in project.achievements" :key="index">
            {{ achievement }}
          </li>
        </ol>
      </div>
  </section>
  <section v-else class="p-8 max-w-4xl mx-auto rounded-lg shadow-md">Project not found.</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const project = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_PROJECTS_URL || '/projects.json');
    const allProjects = await res.json();

    // Find the project whose ID matches the route param
    const foundProject = allProjects.find(p => p.id === route.params.id);
    project.value = foundProject || null;
  } catch (err) {
    console.error('Failed to load personal data:', err);
  }
});

function openLink(url) {
  window.open(url, '_blank');
}

function downloadFile(url) {
  const link = document.createElement('a');
  link.href = url;
  link.download = '';
  link.click();
}
</script>