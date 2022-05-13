<template>
    <div
        v-for="beers in randomBeers"
        :key="beers.id">
        <div
            class="randomBeer"
            v-for="beer in beers"
            :key="beer.id">
            <div class="randomBeer_img slide-in-top">
                <img v-if="beer.image_url != null" :src="beer.image_url" class="randomBeer_img-url">
                <img v-else src="../assets/images/beer.png" class="randomBeer_img-beer">
            </div>
            <div class="randomBeer_details">
                <h3 class="randomBeer_details-name">{{ beer.name }}</h3>
                <hr />
                <p class="randomBeer_details-brewersTip">{{ beer.brewers_tips }}</p>
                <p class="randomBeer_details-alc">Alc% {{ beer.abv }}</p>
                <RouterLink to="/whatbeer-details">
                    <button class="randomBeer_details-btn">Learn more</button>
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
        min-height: 25rem;
        background-color: var(--vt-c-white-soft);
        border: 1px solid var(--vt-c-white-mute);
        border-radius: 0.5rem;
        box-shadow: 5px 5px 20px 5px var(--vt-c-black-mute-transparant);
    }
        .randomBeer_img {
            position: absolute;
            z-index: 2;
            top: -7rem;
        }

            .randomBeer_img-url{
                height: 18rem;
            }

            .randomBeer_img-beer {
                height: 16rem;
            }

        .randomBeer_details {
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 2rem;
            margin-top: 4.5rem;
            gap: 1.2rem;
            text-align: center;
        }

            .randomBeer_details-name {
                font-family: Koulen;
                font-size: 2rem;
                font-weight: 900;
                text-align: center;
                margin-bottom: -1rem;
            }

            hr {
                border: 1px solid orange;
                width: 20rem;
            }

            .randomBeer_details-alc {
                font-weight: 600;
            }

            .randomBeer_details-btn {
                border: none;
                border-radius: 0.5rem;
                background-color: orange;
                padding: 0.5rem;
                color: white;
                font-weight: 900;
            }

                .randomBeer_details-btn:hover {
                    color: orange;
                    background-color: var(--vt-c-white-mute);
                }

</style>
