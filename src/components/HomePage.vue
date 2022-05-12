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
        <!-- call items to display about this page -->
    </section>

    <section>
        <div class="imgWrapper">
            <div class="imgWrapper_header">
                <h2>Find out <span class="imgWrapper_header-bold">what<span class="beerFoam">B</span>eer</span> suits your dish or ingredient</h2>
            </div>
            <img src="../assets/images/food_img.jpeg">
        </div>
    </section>


    <section>
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
                v-for="beer of recommendedBeers"
                :key="beer.id">
                {{beer.name}}
            </div>

        </div>
    </section>

    <!-- <button 
        class="beerRecommender_searchBar-searchBtn"
        @click="getRandomBeers">
        <img src="../assets/images/search.png">
    </button> -->


</template>
<script>
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
    }
  },
  computed: {
    recommendedBeers() {
        return this.$store.getters.recommendedBeers;
    }
  }
});
</script>
<style scoped>
    @import '../assets/base.css';

    .wrapper {
        display: flex;
        flex-direction: column;
        top: 5rem;
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

    .beerRecommender {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
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
        }

            .beerRecommender_searchBar-search {
                display: flex;
                width: 40rem;
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

    .imgWrapper {
        display: flex;
        position: relative;
        height: 50rem;
        width: auto;
        margin-top: 20rem;
        z-index: 1;
        align-items: center;
        justify-content: center;
    }

        .imgWrapper img {
            height: 45rem;
            width: 100%;
        }

        .imgWrapper_header {
            display: flex;
            color: white;
            position: absolute;
            flex-direction: row;
            font-size: 6rem;
            font-weight: bold;
            text-align: center;
            z-index: 2;
        }

        .imgWrapper_header-bold {
            font-size: 12rem;
            font-weight: bold;
        }
    
</style>