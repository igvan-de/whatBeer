<template>
    <section class="listedBeers_wrapper">
      <div class="listedBeers_wrapper-beerlist"
      v-for="beer in listedBeers"
      :key="beer.id">
        <div class="listedBeers_wrapper-beers">
          <div class="listedBeers_wrapper-aboutBeer">
            <h3>{{beer.name}}</h3>
            <p>{{beer.tagline}}</p>
          </div>
          <div class="listedBeers_wrapper-beerImg">
            <img :src="beer.image_url">
          </div>
        </div>
      </div>
      <div class="listedBeers_wrapper-pagination">
        <a href="javascript:void(0)"
          v-if="pageNumber > 1"
          @click="paginationPrevious"
          class="listedBeers_wrapper-pagination-button">
          <img src="../assets/images/left-arrow-previous.png">
          previous
        </a>
        <a href="javascript:void(0)"
          v-if="pageNumber < 13"
          @click="paginationNext"
          class="listedBeers_wrapper-pagination-button">
          next
          <img src="../assets/images/right-arrow-next.png">
        </a>
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

.listedBeers_wrapper-beerlist {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/images/food_img_ipa.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 65rem;
  background-position: 0rem;
  margin-bottom: 0.2rem;
}

  .listedBeers_wrapper-beers {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 5rem;
    margin-right: 10rem;
    background-color: var(--vt-c-black-mute-transparant);
    border-radius: 0 2rem 2rem 0;
    
  }

    .listedBeers_wrapper-aboutBeer {
      display: inherit;
      flex-direction: column;
      color: white;
      min-width: 20rem;
      padding: 2rem;
    }

    .listedBeers_wrapper-aboutBeer h3 {
      font-family: 'Koulen';
      font-size: 3rem;
      font-weight: bolder;
    }

    .listedBeers_wrapper-aboutBeer p {
      font-size: 1.5rem;
      font-weight: bolder;
    }

    .listedBeers_wrapper-beerImg {
      display: flex;
      justify-content: flex-end;
    }

    .listedBeers_wrapper-beerImg img {
      width: 5rem;
      height: 15rem;
    }

    .listedBeers_wrapper-pagination {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 5rem;
    }

      .listedBeers_wrapper-pagination a {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.5rem;
        color: black;
        font-weight: bold;
        font-size: 1rem;
      }

      .listedBeers_wrapper-pagination img {
        width: 2rem;
      }

      .listedBeers_wrapper-pagination-button:hover {
        transform: scale(110%);
      }

@media (max-width: 1024px) {

}
</style>
