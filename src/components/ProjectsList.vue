<template>
  <section class="projects">
    <h2>My Software Projects</h2>
    <div class="projects-container">
      <article v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <router-link :to="`/projects/${project.id}`" class="text-blue-500 underline">
          View Project
        </router-link>
      </article>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js';
</script>
