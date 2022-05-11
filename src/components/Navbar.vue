<template>

  <nav class="navBar">
    <RouterLink to="/" class="navItem">Home</RouterLink>
    <RouterLink to="/about" class="navItem">About</RouterLink>
    <RouterLink to="/beers" class="navItem">Beers</RouterLink>
  </nav>
  
</template>
<script setup>
</script>
<style scoped>
  @import "@/assets/base.css";

  .navBar {
    display: flex;
    gap: 1rem;
  }

    .navItem {
      color: var(--vt-c-text-light-1);
      text-decoration: none;
      font-weight: bold;
    }

</style>