import { createRouter, createWebHistory } from 'vue-router';
import HomeIntro from './components/HomeIntro.vue';
import ProjectsList from './components/ProjectsList.vue';
import SkillsHobbies from './components/SkillsHobbies.vue';
import ProjectPage from './components/ProjectPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeIntro,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsList,
  },
  {
    path: '/skills-hobbies',
    name: 'SkillsHobbies',
    component: SkillsHobbies,
  },
  { path: '/projects/:id', component: ProjectPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;