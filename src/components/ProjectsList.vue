<template>
  <section class="projects">
    <h2 class="home-intro flex flex-col items-center text-center mt-16"> My theses, dissertations and projects</h2>
    <div class="projects-container">
      <article v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <router-link :to="`/projects/${project.id}`" class="underline link-accent">          View Project
        </router-link>
      </article>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js';
</script>
