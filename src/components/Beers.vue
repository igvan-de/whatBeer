<template>
    <section class="listedBeers_wrapper">
      <div class="listedBeers_wrapper-beerlist"
      v-for="beer in listedBeers"
      :key="beer.id">
        <div class="listedBeers_wrapper-beers">
          <div class="listedBeers_wrapper-beerImg">
            <img v-if="beer.image_url != null" :src="beer.image_url" class="real_img-beer">
            <img v-else src="../assets/images/beer.png" class="default_img-beer">
          </div>
          <div class="listedBeers_wrapper-aboutBeer">
            <h3>{{beer.name}}</h3>
            <p>{{beer.tagline}}</p>
            <RouterLink 
            to="/beer-details" 
            class="listedBeers_wrapper-aboutBeer-learnMore"
            @click="getDetailsBeer(beer.id)">
              <p>Learn more</p>
              <img src="../assets/images/right-arrow-roundImg.png">
          </RouterLink>
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
    },
    getDetailsBeer(id) {
      this.$store.dispatch('fetchBeerDetails', id);
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
  background-position-x: right;
  background-position-y: center;
  margin-bottom: 0.2rem;
}

  .listedBeers_wrapper-beers {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5rem;
    gap: 2rem;
    margin-left: 5rem;
    border-block-start: 2px solid orange;
    background-color: rgba(255, 166, 0, 0.123);
    border-radius: 2rem 0 0 2rem;
  }

    .listedBeers_wrapper-aboutBeer {
      display: inherit;
      flex-direction: column;
      color: black;
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

      .real_img-beer {
        width: 5rem;
        height: 15rem;
      }

      .default_img-beer {
        width: 9rem;
        height: 11rem;
      }

    .listedBeers_wrapper-aboutBeer-learnMore {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: black;
      margin-top: 2rem;
    }

      .listedBeers_wrapper-aboutBeer-learnMore img {
        width: 1.4rem;
        height: 1.4rem;
      }

      .listedBeers_wrapper-aboutBeer-learnMore p {
        font-size: 1rem;
      }

      .listedBeers_wrapper-aboutBeer-learnMore:hover {
        transform: scale(110%);
        font-weight: 900;
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
