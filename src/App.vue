<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/beer.png"
      width="125"
      height="125"
    /> -->

    <RouterLink to="/" class="link">
      <div class="logoText">
        <h1>w<span class="beerFoam">B</span></h1>
      </div>
    </RouterLink>

    <div class="wrapper">
      <!-- Need to delete this component and create navbar here or create navbar inside component -->
      <Navbar />
    </div>
  </header>

  <RouterView />
</template>
<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Navbar from "@/components/Navbar.vue";
</script>
<style>
  @import "@/assets/base.css";

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    height: 3.3rem;
    padding: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: var(--color-background-dark-transparant);
    margin-bottom: 2rem;
  }

    header span {
      margin-left: -4px;
    }

    header img {
      width: 2.5rem;
      height: 2.5rem;
    } 

  .link {
      color: var(--vt-c-text-light-1);
      text-decoration: none;
  }
</style>
