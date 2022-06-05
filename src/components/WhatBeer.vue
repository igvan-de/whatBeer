<template>
    <section>
      <div class="listedBeers"
      v-for="beer in listedBeers"
      :key="beer.id">
        <div class="aboutBeer">
          <h3>{{beer.name}}</h3>
          <p>{{beer.tagline}}</p>
        </div>
        <div class="beerImg">
          <img :src="beer.image_url">
        </div>
      </div>
      <button
        @click="pageNumber += 1, pagination">
        next
      </button>
    </section>
</template>
<script>
export default({
  data: () => ({
    pageNumber: 0,
  }),
  methods: {
    /**
     * Three methods needed:
     * 1. to go to details of a beer
     * 2. pagination next 25 beers
     * 3. pagination first 25 beers
     */
    pagination() {
      this.$store.dispatch("fetchBeersPagination", pageNumber);
    }
  },
  computed: {
    listedBeers() {
      return this.$store.getters.listedBeers;
    }
  },
  mounted() {
      this.$store.dispatch("fetchBeers");
  }
});
</script>
<style scoped>
@import '../assets/base.css';

.listedBeers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

  .aboutBeer {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    padding: 2rem;
  }

  .aboutBeer h3 {
    font-family: 'Koulen';
    font-size: 1.5rem;
  }

  .beerImg {
    display: flex;
    justify-content: flex-end;
  }

  .beerImg img {
    width: 5rem;
    height: 15rem;
  }

@media (max-width: 1024px) {

}
</style>
