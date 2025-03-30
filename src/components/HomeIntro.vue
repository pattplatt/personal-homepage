<template>
  <section  v-if="Object.keys(homeIntro).length" class="home-intro flex flex-col text-left mt-16 w-full max-w-6xl mx-auto px-4">
    <img :src="homeIntro.imageSrc"
      class="w-[300px] block mx-auto transition-transform hover:scale-105 filter grayscale hover:grayscale-0 transition duration-500" />
    <h1>{{ homeIntro.greeting }}</h1>
    <p class="text-base mt-4">
      {{ homeIntro.description }}
    </p>
    <p class="text-sm mt-2 text-gray-600" v-html="homeIntro.detailedDescription">
    </p>
  </section>
  <section v-else>
    Loading...
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const homeIntro = ref({});

onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_PERSONAL_DATA_URL || '/personal_data.json');
    const data = await res.json();
    homeIntro.value = data.homeIntro;

  } catch (err) {
    console.error('Failed to load personal data:', err);
  }
});

defineOptions({
  name: 'HomeIntro'
});
</script>