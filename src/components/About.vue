<template>
  <section class="about-container">
      <div class="about-container-block">
        <h2 class="about-container-block_header">About</h2>
        <p class="about-container-block_short-description">
          On this webpage you can find all you need to know about Brewdog & Punk beers.<br>
          You can even search for the perfect food for your steak or burger!
        </p>
      </div>
    <img src="../assets/images/info.png" class="about-container_image">
  </section>

  <section class="punkApi-container">
    <img src="../assets/images/settings.png" class="punkApi-container_image">
    <div class="punkApi-container-block">
      <h2 class="punkApi-container-block_header">PunkApi</h2>
      <p class="punkApi-container-block_description"> To receive all the required data for this page.<br> 
          Brewdog and Punk have created an free <a href="https://punkapi.com/documentation/v2" class="punkApi-container-block_description-link">API</a> everyone can use.
      </p>      
    </div>
  </section>

</template>
<script>
export default({
  data: () => ({
    }),
  methods: {
    },
  computed: {
      
    }
});
</script>
<style scoped>
@import '../assets/base.css';

.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: end;
  gap: 3rem;
  margin-top: 7rem;
}

  .about-container-block {
    display: flex;
    flex-direction: column;
  }

  .about-container-block_header {
    font-weight: bolder;
    font-size: 4rem;
  }

  .about-container-block_short-description {
    font-size: 1.2rem;
  }

.about-container_image {
  width: 15rem;
}

.punkApi-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 5rem;
}

  .punkApi-container_image {
    width: 15rem;
  }

  .punkApi-container-block {
    display: flex;
    flex-direction: column;
  }

    .punkApi-container-block_header {
      font-weight: bolder;
      font-size: 3rem;
    }

    .punkApi-container-block_description {
      font-size: 1.2rem;
    }

    .punkApi-container-block_description-link {
      font-weight: bolder;
      color: orange;
      text-decoration: none;
    }


@media (max-width: 1024px) {

}
</style>