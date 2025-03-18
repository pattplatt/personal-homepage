<template>
  <!-- The site's header and nav -->
  <header>
    <nav>
      <ul>
        <!-- Anchor links pointing to each section’s ID -->
        <li><router-link :to="{ path: '/', hash: '#home' }">Home</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#projects' }">Projects</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#skills' }">Skills & Hobbies</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
defineOptions({
  name: 'Header   '
});
</script>