<template>
  <header class="main-header sticky">
    <nav>
      <button @click="toggleMenu" class="hamburger flex items-center space-x-2">
        <span class="text-base">Menu</span>
        <span class="text-4xl">☰</span>
        </button>
      <ul :class="{ open: isOpen }">
        <li><router-link :to="{ path: '/', hash: '#home' }" @click="closeMenu">Home</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#projects' }" @click="closeMenu">Projects</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#skills' }" @click="closeMenu">Skills & Hobbies</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#contact' }" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

defineOptions({
  name: 'Header'
});
</script>

<style scoped>
@media (max-width: 640px) {
  .main-header {
    flex-direction: column;
    align-items: center;
  }

  .hamburger {
    margin: 0 auto;
  }

  .main-header nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-header nav ul.open {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>