<template>

  <section id="header">
    <Header />
  </section>

  <div v-if="$route.path === '/'">

    <section id="home">
      <HomeIntro />
    </section>

    <section id="projects">
      <ProjectsList />
    </section>

    <section id="skills">
      <SkillsHobbies />
    </section>

    <section id="contact" class="flex flex-col justify-center items-center py-10 pb-30 space-y-8">
      <Contact />
    </section>

    <section id="footer">
      <Footer />
    </section>
  </div>

  <div v-else>
    <!-- Router view for dynamic pages like /projects/:id -->
    <div class="min-h-screen bg-gray-100">
      <router-view />
    </div>
  </div>

</template>

<script setup>
import HomeIntro from './components/HomeIntro.vue';
import ProjectsList from './components/ProjectsList.vue';
import SkillsHobbies from './components/SkillsHobbies.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Contact from './components/ContactPage.vue';

defineOptions({
  name: 'App'
});
</script>