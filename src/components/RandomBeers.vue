<template>
    <div
        v-for="beers in randomBeers"
        :key="beers.id">
        <div
            class="randomBeer"
            v-for="beer in beers"
            :key="beer.id">
            <div class="randomBeer_img slide-in-top">
                <img :src="beer.image_url">
                <!-- create check for when image_url is empty and set default -->
            </div>
            <div class="randomBeer_details">
                <h3 class="randomBeer_details-name">{{ beer.name }}</h3>
                <p class="randomBeer_details-brewersTip">{{ beer.brewers_tips }}</p>
                <p class="randomBeer_details-alc">Alc% {{ beer.abv }}</p>
                <RouterLink to="/whatbeer-details">
                    Learn more
                </RouterLink>
            </div>
        </div>
    </div>

</template>
<script>
export default({
  data: () => ({
    return: {}
  }),
  methods: () => {},
  computed: {
    randomBeers() {
        console.log(this.$store.getters.randomBeers)
        return this.$store.getters.randomBeers;
    }
  },
  mounted() {
    this.$store.dispatch("fetchRandomBeers");
  }
});
</script>
<style scoped>

    .randomBeer {
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 3rem;
        width: 20rem;
        min-height: 20rem;
        background-color: var(--vt-c-white-soft);
        border: 1px solid var(--vt-c-white-mute);
        border-radius: 0.5rem;
    }

        .randomBeer_img {
            position: absolute;
            z-index: 2;
            top: -7rem;
        }

            .randomBeer_img img {
                height: 16rem;
            }

        .randomBeer_details {
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 2rem;
            margin-top: 3rem;
            gap: 1rem;
            text-align: center;
        }

            .randomBeer_details-name {
                font-family: Koulen;
                font-size: 2rem;
                font-weight: 900;
                text-align: center;
            }

        .randomBeer_details-alc {
            font-weight: 600;
        }

</style>
