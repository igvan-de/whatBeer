import { createStore } from 'vuex';
import axios from 'axios';


export default createStore ({
    /**
     * This webApp makes use of an store for easy acces to all required details.
     * listedBeers: to get all beers from PunkApi
     * recommendedBeers: all beers that are good with with a certain beer
     * selectedBeer: the beer a user wants to get more details of
     * error: error message when beer is not found
     */
state: {
    listedBeers: [],
    recommendedBeers: [],
    selectedBeer: null,
    error: ''
    // beerSuggestions: []
},
getters: {
    listedBeers:        state => state.listedBeers,
    recommendedBeers:   state => state.recommendedBeers,
    selectedBeer:       state => state.selectedBeer,
    error:              state => state.error
},
mutations: {
    FETCHBEERS(state, payload){
        state.listedBeers = payload;
        console.log(state.listedBeers);
    },
    FETCHRECOMMENDATIONS(state, payload){},
    FETCHBEERDETAILS(state, payload){},
    CLOSEDETAILS(state, payload){}
},
actions: {
    fetchBeers({commit}) {
        axios
            .get(`https://api.punkapi.com/v2/beers`)
            .then(result =>{
                commit('FETCHBEERS', result.data)
            });
    },
    fetchRecommendations({commit}, payload) {

    },
    fetchBeedDetails({commit}, payload) {

    }
}
})