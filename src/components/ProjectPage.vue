<template>
  <section v-if="project" class="p-8 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-4 text-blue-800">{{ project.title }}</h1>
    <p class="mb-6 text-gray-600 leading-relaxed">{{ project.description }}</p>

    <h2 class="text-2xl font-semibold text-gray-700 mb-2">Technologies Used</h2>
    <ul class="list-disc list-inside mb-6 text-gray-600">
      <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
    </ul>

    <div v-if="project.github || project.demo" class="flex space-x-4">
      <a v-if="project.github" :href="project.github" class="px-4 py-2 bg-[var(--accent-color)] !text-white rounded hover:bg-blue-700 transition-colors" target="_blank">GitHub</a>
      <a v-if="project.demo" :href="project.demo" class="px-4 py-2 bg-[var(--secondary-color)] !text-white rounded hover:bg-[var(--primary-color)] transition-colors" target="_blank">Live Demo</a>
    </div>
  </section>
  <section v-else class="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md">Project not found.</section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { projects } from '../data/projects.js';

const route = useRoute();
const project = projects.find(p => p.id === route.params.id);
</script>