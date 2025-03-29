<template>
  <section class="home-intro flex flex-col text-left mt-16 w-full max-w-6xl mx-auto px-4">
    <img :src="homeIntro.imageSrc"
      class="w-[300px] block mx-auto transition-transform hover:scale-105 filter grayscale hover:grayscale-0 transition duration-500" />
    <h1>{{ homeIntro.greeting }}</h1>
    <p class="text-base mt-4">
      {{ homeIntro.description }}
    </p>
    <p class="text-sm mt-2 text-gray-600" v-html="homeIntro.detailedDescription">
    </p>
  </section>
</template>

<script setup>
import { homeIntro } from '../data/personal_data.js';

defineOptions({
  name: 'HomeIntro'
});
</script>