<template>
  <div id="app">

    <section id="header">
      <Header />
    </section>

    <template v-if="$route.path === '/'">
      <!-- Section 1: Home Intro -->
      <section id="home">
        <HomeIntro />
      </section>

      <!-- Section 2: Projects List -->
      <section id="projects">
        <ProjectsList />
      </section>

      <!-- Section 3: Skills & Hobbies -->
      <section id="skills">
        <SkillsHobbies />
      </section>

      <section id="footer">
        <Footer />
      </section>

    </template>

    <template v-else>
      <!-- Router view for dynamic pages like /projects/:id -->
      <router-view />
    </template>
  </div>
</template>

<script setup>
import HomeIntro from './components/HomeIntro.vue';
import ProjectsList from './components/ProjectsList.vue';
import SkillsHobbies from './components/SkillsHobbies.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


defineOptions({
  name: 'App'
});
</script>