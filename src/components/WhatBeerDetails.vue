<template>
    <div v-if="beer" class="detailedBeer">
        <h3>{{beer.name}}</h3>
        <p>{{beer.tagline}}</p>
        <div class="detailedBeer_wrapper">
            <div class="detailedBeer_wrapper_left">
                <div class="detailedBeer_wrapper_left-beer">
                    <div class="detailedBeer_wrapper-item-img">
                        <img :src="beer.image_url">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <p>{{beer.description}}</p>
                        <p>{{beer.brewers_tips}}</p>
                        <p>{{beer.first_brewed}}</p>
                    </div>
                </div>
                <div class="detailedBeer_wrapper_left-method">
                    <div class="detailedBeer_wrapper-item-img">
                        <img src="../assets/images/hot-temperature.png">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <p>Boil volume: {{beer.boil_volume.value}} {{beer.boil_volume.unit}}</p>
                        <p>Fermentation: {{beer.method.fermentation.temp.value}} {{beer.method.fermentation.temp.unit}}</p>
                        <div v-for="mash of beer.method.mash_temp" :key="mash">
                            <p>Mash temperature(s): {{mash.temp.value}} {{mash.temp.unit}}</p>
                        </div>
                        <p v-if="beer.method.twist">Twist: {{beer.method.twist}}</p>
                    </div>
                </div>
                <div class="detailedBeer_wrapper_left-foodPairing">
                    <div class="detailedBeer_wrapper-item-img">
                        <img src="../assets/images/cutlery.png">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <h2>Food pairing</h2>
                        <div v-for="food of beer.food_pairing"
                        :key="food">
                            <li>{{food}}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detailedBeer_wrapper_right">
                <div class="detailedBeer_wrapper_right-ingredientsColumn">
                    <div class="detailedBeer_wrapper_right-ingredientsRow">
                        <div class="detailedBeer_wrapper-item-img">
                            <img src="../assets/images/hop.png">
                        </div>
                        <div class="detailedBeer_wrapper-item-content">
                        </div>
                    </div>
                    <hr>
                    <div class="detailedBeer_wrapper_right-ingredientsRow">
                        <div class="detailedBeer_wrapper-item-img">
                            <img src="../assets/images/malt.png">
                        </div>
                        <div class="detailedBeer_wrapper-item-content">
                        </div>
                    </div>
                    <hr>
                    <div class="detailedBeer_wrapper_right-ingredientsRow">
                        <div class="detailedBeer_wrapper-item-img">
                            <img src="../assets/images/wheat.png">
                        </div>
                        <div class="detailedBeer_wrapper-item-content">
                        </div>
                    </div>
                </div>
                <div class="detailedBeer_wrapper_right-extraInfo">
                    <div class="detailedBeer_wrapper-item-img">
                        <img src="../assets/images/barrel.png">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default({
    data: () => {
        return {};
    },
    methods: {
    },
    computed: {
        beer() {
            console.log(this.$store.getters.detailedBeer);
            return this.$store.getters.detailedBeer;
        }
    }
})
</script>
<style scoped>

    .detailedBeer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem;
    }

        .detailedBeer_wrapper {
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            gap: 2rem;
            width: 100%;
        }

            .detailedBeer-wrapper_left {
                flex-direction: column;
                width: 50%;
            }

            .detailedBeer-wrapper_right {
                flex-direction: column;
                width: 50%;
            }

</style>
