<template>
  <div v-if="project" class="p-4 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
    <p class="mb-4">{{ project.description }}</p>

    <h2 class="font-semibold">Technologies:</h2>
    <ul class="list-disc list-inside mb-4">
      <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
    </ul>

    <div v-if="project.github || project.demo" class="space-x-4">
      <a v-if="project.github" :href="project.github" class="text-blue-500 underline" target="_blank">GitHub</a>
      <a v-if="project.demo" :href="project.demo" class="text-blue-500 underline" target="_blank">Live Demo</a>
    </div>
  </div>
  <div v-else class="p-4">Project not found.</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { projects } from '../data/projects.js';

const route = useRoute();
const project = projects.find(p => p.id === route.params.id);
</script>