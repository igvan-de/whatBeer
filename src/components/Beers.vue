<template>
    <section class="listedBeers_wrapper">
      <div class="listedBeers_wrapper-beers"
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
      <div class="listedBeers_wrapper-pagination">
        <button
          v-if="pageNumber > 1"
          @click="paginationPrevious">
          previous
        </button>
        <button
          v-if="pageNumber < 13"
          @click="paginationNext">
          next
        </button>
      </div>
    </section>
</template>
<script>
export default({
  data: () => ({
    pageNumber: 1,
  }),
  methods: {
    /**
     * Three methods needed:
     * 1. to go to details of a beer
     * 2. pagination next 25 beers
     * 3. pagination first 25 beers
     */
    paginationNext() {
      if (this.pageNumber < 13) {
        this.pageNumber++;
      }
      this.$store.dispatch("fetchBeersPagination", this.pageNumber);
    },
    paginationPrevious() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
      }
      this.$store.dispatch("fetchBeersPagination", this.pageNumber);
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

.listedBeers_wrapper-beers {
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

  .listedBeers_wrapper-pagination {
    display: flex;
    justify-content: center;
  }

@media (max-width: 1024px) {

}
</style>
