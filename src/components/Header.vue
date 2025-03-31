<template>
  <header class="main-header sticky">
    <nav>
      <ul>
        <li><router-link :to="{ path: '/', hash: '#home' }">Home</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#projects' }">Projects</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#skills' }">Skills & Hobbies</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link></li>

      </ul>
    </nav>
  </header>
</template>

<script setup>
defineOptions({
  name: 'Header'
});
</script>