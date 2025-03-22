<template>
  <section class="home-intro">
    <div class="home-intro flex flex-col items-center text-center mt-16">
      <img :src="homeIntro.imageSrc" class="w-[300px] block mx-auto transition-transform hover:scale-105 filter grayscale hover:grayscale-0 transition duration-500" />
      <h1 class="!text-[var(--accent-color)]">{{ homeIntro.greeting }}</h1>
      <p>{{ homeIntro.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { homeIntro } from '../data/personal_data.js';

defineOptions({
  name: 'HomeIntro'
});
</script>