<template>
    <div v-if="beer" class="detailedBeer">
        <div class="detailedBeer_wrapper">
            <div class="detailedBeer_wrapper_left">
                <div class="detailedBeer-header">
                    <h2>{{beer.name}}</h2>
                    <p>{{beer.tagline}}</p>
                </div>
                <div class="detailedBeer_wrapper_left-beer">
                    <div class="detailedBeer_wrapper-item-img-beer">
                        <img v-if="beer.image_url != null" :src="beer.image_url" class="real_img-beer">
                        <img v-else src="../assets/images/beer.png" class="default_img-beer">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <h2 class="content-header">Description</h2>
                        <p>{{beer.description}}</p>
                        <hr class="detailedBeer_wrapper-item-content-line">
                        <p><span class="detailedBeer_wrapper-item-content-line-subject">Some tips of the brewers themselves:</span> {{beer.brewers_tips}}</p>
                        <hr class="detailedBeer_wrapper-item-content-line">
                        <p><span class="detailedBeer_wrapper-item-content-line-subject">First brewed in:</span> {{beer.first_brewed}}</p>
                    </div>
                </div>
                <div class="detailedBeer_wrapper_left-method">
                    <div class="detailedBeer_wrapper-item-img">
                        <img src="../assets/images/hot-temperature.png">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <h2 class="content-header">Brew Method</h2>
                        <p><span class="detailedBeer_wrapper-item-content-line-subject">Boil volume:</span> {{beer.boil_volume.value}} {{beer.boil_volume.unit}}</p>
                        <p><span class="detailedBeer_wrapper-item-content-line-subject">Fermentation:</span> {{beer.method.fermentation.temp.value}} {{beer.method.fermentation.temp.unit}}</p>
                        <div v-for="mash of beer.method.mash_temp" :key="mash">
                            <p><span class="detailedBeer_wrapper-item-content-line-subject">Mash temperature(s):</span> {{mash.temp.value}} {{mash.temp.unit}}</p>
                        </div>
                        <p v-if="beer.method.twist"><span class="detailedBeer_wrapper-item-content-line-subject">Twist:</span> {{beer.method.twist}}</p>
                    </div>
                </div>
                <div class="detailedBeer_wrapper_left-foodPairing">
                    <div class="detailedBeer_wrapper-item-img">
                        <img src="../assets/images/cutlery.png">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <h2 class="content-header">Food Pairing</h2>
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
                        <div class="detailedBeer_wrapper-item-contentRows">
                            <h2 class="content-header">Ingredients</h2>
                            <div 
                            v-for="hop of beer.ingredients.hops"
                            :key="hop"
                            class="detailedBeer_wrapper-item-content">
                                <ul><span class="detailedBeer_wrapper-item-content-line-subject">Name:</span> {{hop.name}}</ul>
                                <ul><span class="detailedBeer_wrapper-item-content-line-subject">Attribute:</span> {{hop.attribute}}</ul>
                                <ul><span class="detailedBeer_wrapper-item-content-line-subject">When to add:</span> {{hop.add}}</ul>
                                <ul><span class="detailedBeer_wrapper-item-content-line-subject">Amount:</span> {{hop.amount.value}} {{hop.amount.unit}}</ul>
                                <hr class="detailedBeer_wrapper-item-content-line">
                                <!-- display only first 3 and if there a re more, add see more option -->
                            </div>
                        </div>
                    </div>
                    <hr class="detailedBeer_wrapper_right-ingredientsRow-line" />
                    <div class="detailedBeer_wrapper_right-ingredientsRow">
                        <div class="detailedBeer_wrapper-item-img">
                            <img src="../assets/images/malt.png">
                        </div>
                        <div class="detailedBeer_wrapper-item-contentRows">
                            <div 
                            v-for="malt of beer.ingredients.malt"
                            :key="malt"
                            class="detailedBeer_wrapper-item-content">
                                <ul><span class="detailedBeer_wrapper-item-content-line-subject">Name:</span> {{malt.name}}</ul>
                                <ul><span class="detailedBeer_wrapper-item-content-line-subject">Amount:</span> {{malt.amount.value}} {{malt.amount.unit}}</ul>
                                <hr class="detailedBeer_wrapper-item-content-line">
                            </div>
                        </div>
                    </div>
                    <hr class="detailedBeer_wrapper_right-ingredientsRow-line">
                    <div class="detailedBeer_wrapper_right-ingredientsRow">
                        <div class="detailedBeer_wrapper-item-img">
                            <img src="../assets/images/wheat.png">
                        </div>
                        <div class="detailedBeer_wrapper-item-content">
                            <p><span class="detailedBeer_wrapper-item-content-line-subject">Name:</span> {{beer.ingredients.yeast}}</p>
                        </div>
                    </div>
                </div>
                <div class="detailedBeer_wrapper_right-extraInfo">
                    <div class="detailedBeer_wrapper-item-img">
                        <img src="../assets/images/barrel.png">
                    </div>
                    <div class="detailedBeer_wrapper-item-content">
                        <h2 class="content-header">Extra Information</h2>
                        <ul><span class="detailedBeer_wrapper-item-content-line-subject">ABV:</span> {{beer.abv}}</ul>
                        <ul><span class="detailedBeer_wrapper-item-content-line-subject">Attenuation level:</span> {{beer.attenuation_level}}</ul>
                        <ul><span class="detailedBeer_wrapper-item-content-line-subject">PH:</span> {{beer.ph}}</ul>
                        <ul><span class="detailedBeer_wrapper-item-content-line-subject">SRM:</span> {{beer.srm}}</ul>
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
        padding: 5rem;
    }

        .detailedBeer_wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

            .content-header {
                font-family: 'Shadow Into Light';
                font-size: 3rem;
            }

            .detailedBeer-wrapper_left {
                flex-direction: column;
            }

                .detailedBeer-header {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 3rem;
                    line-height: 4rem;
                    max-width: 40rem;
                }

                    .detailedBeer-header h2 {
                        font-family: 'Koulen';
                        font-size: 6rem;
                    }

                    .detailedBeer-header p {
                        font-size: 2rem;
                    }

                .detailedBeer_wrapper-item-img {
                    display: flex;
                    left: -3rem;
                }
                
                    .detailedBeer_wrapper-item-img img {
                        width: 8rem;
                        height: 8rem;
                    }

                .detailedBeer_wrapper-item-content {
                    display: flex;
                    flex-direction: column;
                }

                    .detailedBeer_wrapper-item-content-line {
                        border: 1px solid var(--vt-c-text-dark-2);
                        margin: 1rem;
                    }

                    .detailedBeer_wrapper-item-content-line-subject {
                        font-size: 1rem;
                        font-weight: bold;
                    }

                .detailedBeer_wrapper_left-beer {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: var(--vt-c-white-mute);
                    border-radius: 1rem;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    max-width: 40rem;
                }

                    .detailedBeer_wrapper-item-img-beer {
                        display: flex;
                        left: -3rem;
                    }

                        .real_img-beer {
                            width: 5rem;
                            height: 18rem;
                        }

                        .default_img-beer {
                            width: 10rem;
                            height: 12rem;
                        }

                .detailedBeer_wrapper_left-method {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: var(--vt-c-white-mute);
                    border-radius: 1rem;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    max-width: 40rem;
                }


                .detailedBeer_wrapper_left-foodPairing {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: var(--vt-c-white-mute);
                    border-radius: 1rem;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    max-width: 40rem;
                }

            .detailedBeer-wrapper_right {
                display: flex;
                flex-direction: column;
                padding: 2rem;
                max-width: 30rem;
            }

                .detailedBeer_wrapper_right-ingredientsColumn {
                    align-items: center;
                    background: var(--vt-c-white-mute);
                    border-radius: 1rem;
                    padding-top: 0.2rem;
                    padding-bottom: 0.2rem;
                    margin-bottom: 2rem;
                }

                    .detailedBeer_wrapper_right-ingredientsRow {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin: 2rem;
                    }

                        .detailedBeer_wrapper-item-contentRows {
                            display: flex;
                            flex-flow: column;
                        }

                            .detailedBeer_wrapper-item-content {
                                display: flex;
                                flex-direction: column;
                            }

                    .detailedBeer_wrapper_right-ingredientsRow-line {
                        border: 1px solid var(--vt-c-text-dark-3);
                    }

                .detailedBeer_wrapper_right-extraInfo {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: var(--vt-c-white-mute);
                    border-radius: 1rem;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    max-width: 30rem;
                }


</style>
