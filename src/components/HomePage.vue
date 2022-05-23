<template>

    <section>
        <div class="wrapper">
            <div class="welcome">
                <h2>Welcome by </h2><h1>what<span class="beerFoam">B</span>eer</h1>
            </div>
            <hr />
            <div class="slogan">
                <p>The only helper to find the perfect beer <span class="bold">you</span> need!</p>
            </div>
        </div>
    </section>

    <section>
        <div class="randomBeers">
            <RandomBeers />
        </div>
    </section>

    <section>
        <div class="beerRecommender_wrapper">
            <div class="beerRecommender_imgWrapper">
                <div class="imgWrapper_header">
                    <h2>Find out <span 
                                class="imgWrapper_header-bold"
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="false">what
                                <span class="beerFoam">B</span>eer</span> suits your dish or ingredient</h2>
                </div>
                <div class="imgWrapper">
                    <img src="../assets/images/food_img.jpeg">
                </div>
            </div>

            <div class="beerRecommender">
                <div class="beerRecommender_header">
                    <h2>Search here for the perfect beer..</h2>
                </div>

                <div class="beerRecommender_searchBar">
                    <input 
                        type="text"
                        placeholder="Type in ingredient or dish..."
                        class="beerRecommender_searchBar-search"
                        v-model="searchTerm"
                        @keypress.enter="getRecommendedBeers">
                    
                    <button 
                        class="beerRecommender_searchBar-searchBtn"
                        v-if="searchTerm != ''"
                        @click="getRecommendedBeers">
                        <img src="../assets/images/search.png">
                    </button>
                    
                    <button 
                        class="beerRecommender_searchBar-cancelBtn"
                        v-if="recommendedBeers.length > 0"
                        @click="deleteRecommendedBeers">
                        <img src="../assets/images/unchecked.png">
                    </button>
                </div>

                <div 
                class="beerRecommender_errorMessage"
                v-if="recommendedBeers.length === 0 && loading === true">
                    <img src="../assets/images/error.png">
                    <p>Fill in correct search term</p>
                </div>

                <div
                    class="beerRecommender_recommendedBeer"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                    v-for="beer of recommendedBeers"
                    :key="beer.id">
                    <img v-if="beer.image_url != null" :src="beer.image_url" class="beerRecommender_recommendedBeer_img-url">
                    <img v-else src="../assets/images/beer.png" class="beerRecommender_recommendedBeer_img-beer">
                    <div class="beerRecommender_recommendedBeer-description">
                        <div class="beerRecommender_recommendedBeer-description-header">                    
                            <h3>{{beer.name}}</h3>
                            <p>Alc.% {{beer.abv}}</p>
                        </div>
                        <p v-if="beer.tagline">{{beer.tagline}}</p>
                        <p v-html="getRecommendedFood(beer)"></p>
                    </div>
                    <RouterLink 
                        to="/beer-details" 
                        class="beerRecommender_recommendedBeer-description-learnMore"
                        @click="getDetailsBeer(beer.id)">
                        <p>Learn more</p>
                        <img src="../assets/images/right-arrow-roundImg.png">
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
import RandomBeers from "./RandomBeers.vue"

export default({
  data: () => ({
      searchTerm: "",
      loading: false
    }),
  methods: {
    getRecommendedBeers: function() {
        this.loading = true;
        this.$store.dispatch('fetchRecommendations', this.searchTerm);
    },
    deleteRecommendedBeers: function() {
        this.loading = false;
        this.searchTerm = "";
        this.$store.dispatch('deleteRecommendations');
    },
    getRandomBeers: function() {
        this.$store.dispatch('fetchRandomBeers');
    },
    getRecommendedFood: function(beer) {
        const ingredient = this.searchTerm.toLowerCase();
        for (let j = 0; j < beer.food_pairing.length; j++) {
            const lowerCaseFood =  beer.food_pairing[j].toLowerCase();
            if (lowerCaseFood.includes(ingredient)) {
                return lowerCaseFood;
            }
        }
    },
    getDetailsBeer(id) {
        this.$store.dispatch('fetchBeerDetails', id);
    }
  },
  computed: {
    recommendedBeers() {
        return this.$store.getters.recommendedBeers
      ;
    }
  },
  components: {
      RandomBeers
  }
});
</script>
<style scoped>
    @import '../assets/base.css';

    .wrapper {
        display: flex;
        flex-direction: column;
        top: 2rem;
        margin: 4rem;
        align-items: center;
    }

        .welcome {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

            .welcome h2 {
                font-size: 4rem;
            }

            .welcome h1 {
                font-size: 7rem;
                font-weight: 900;
            }

        hr {
            display: flex;
            border: 1px solid orange;
            width: 40rem;
        }

        .slogan {
            margin-top: 0.8rem;
        }

            .slogan p {
                font-size: 1.3rem;
            }
            
            .bold {
                font-family: 'Asap';
                text-transform: uppercase;
                font-weight: 600;
            }

    .randomBeers {
        display: flex;
        margin-top: 6rem;
        justify-content: space-around;
        padding: 10rem;
        gap: 2rem;
    }

    .beerRecommender_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem;
        border: 1px solid var(--vt-c-white-mute);
        background-color: rgba(0, 0, 0, 0.016);
    }

        .beerRecommender_imgWrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }

            .imgWrapper {
                display: flex;
                height: 50%;
                width: 80%;
                z-index: 1;
                align-items: center;
                justify-content: center;
            }

                .imgWrapper img {
                    display: flex;
                    height: 50%;
                    width: 100%;
                    border-radius: 10% 0;
                }

                .imgWrapper_header {
                    display: flex;
                    color: black;
                    flex-direction: row;
                    font-size: 1.5rem;
                    font-weight: bold;
                    text-align: center;
                    z-index: 2;
                }

                .imgWrapper_header-bold {
                    font-size: 4rem;
                    font-weight: bold;
                    word-spacing: -1.2rem;
                }

        .beerRecommender {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 6rem;
            gap: 1.3rem;
        }

            .beerRecommender_header {
                display: flex;
                flex-direction: row;
                font-size: 1rem;
            }

            .beerRecommender_header-bold {
                font-size: 2.5rem;
                font-weight: bold;
            }

            .beerRecommender_searchBar {
                display: flex;
                align-items: center;
                min-width: 70%;
                margin-bottom: 2rem;
            }

                .beerRecommender_searchBar-search {
                    display: flex;
                    width: 100%;
                    border: 1px solid var(--vt-c-black-mute);
                    border-radius: 5px;
                    padding: 10px;
                    justify-items: center;
                }

                .beerRecommender_searchBar-searchBtn {
                    width: 1.6rem;
                    height: 1.6rem;
                    border: none;
                    background: none;
                    margin-right: 0.3rem;
                }

                    .beerRecommender_searchBar-searchBtn img {
                        width: 1.6rem;
                        height: 1.6rem;
                    }

                .beerRecommender_searchBar-cancelBtn {
                    width: 1.6rem;
                    height: 1.6rem;
                    border: none;
                    background: none;
                }

                    .beerRecommender_searchBar-cancelBtn img {
                        width: 1.6rem;
                        height: 1.6rem;
                    }

            .beerRecommender_errorMessage {
                display: flex;
                align-items: center;
                gap: 0.2rem;
            }
                .beerRecommender_errorMessage img {
                    width: 1.3rem;
                }

                .beerRecommender_errorMessage p {
                    font-size: 1.2rem;
                    font-weight: 900;
                    color: lightcoral;
                }

            .beerRecommender_recommendedBeer {
                display: flex;
                flex-direction: row;
                align-items: center;
                border-left: 3px solid rgba(255, 166, 0, 0.63);
                padding: 1rem;
                min-width: 100%;
                gap: 4rem;
            }

                .beerRecommender_recommendedBeer_img-url {
                    height: 10rem;
                    width: 3rem;
                    margin-left: 3rem;
                }

                .beerRecommender_recommendedBeer_img-beer {
                    height: 5rem;
                    width: 5rem;
                    margin-left: 2rem;
                }

                .beerRecommender_recommendedBeer-description {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    width: 100%;
                }

                    .beerRecommender_recommendedBeer-description-header {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                        gap: 0.5rem;
                    }

                    .beerRecommender_recommendedBeer-description-header h3 {
                        font-family: Asap;
                        font-size: 1.3rem;
                        font-weight: 900;
                    }
                        
                    .beerRecommender_recommendedBeer-description-header p {
                        font-size: 0.8rem;
                        font-style: italic;
                    }

                .beerRecommender_recommendedBeer-description-learnMore {
                    display: flex;
                    width: 30%;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                    color: black;
                    margin-right: 1rem;
                }

                    .beerRecommender_recommendedBeer-description-learnMore img {
                        width: 2rem;
                        height: 2rem;
                    }

            .beerRecommender_recommendedBeer:hover {
                animation: orange-selector-fade-in-right;
                animation-duration: 1s;
                background-color: rgba(255, 166, 0, 0.63);
                border-radius: 2rem;
            }

            .beerRecommender_recommendedBeer-description-learnMore:hover {
                transform: scale(110%);
                font-weight: 900;
            }

            @keyframes orange-selector-fade-in-right {
                from {
                    transform: translateX(50px);
                }

                to {
                    transform: translateX(0px);
                }
            }

</style>
