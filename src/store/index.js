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
    randomBeers: [],
    error: '',
    // beerSuggestions: []
},
getters: {
    listedBeers:        state => state.listedBeers,
    recommendedBeers:   state => state.recommendedBeers,
    selectedBeer:       state => state.selectedBeer,
    randomBeers:        state => state.randomBeers,
    error:              state => state.error
},
mutations: {
    FETCHBEERS(state, payload) {
        state.listedBeers = payload;
        console.log(state.listedBeers);
    },
    FETCHRECOMMENDATIONS(state, payload) {
        state.recommendedBeers = payload;
        console.log('recom', state.recommendedBeers);
    },
    DELETERECOMMENDATIONS(state) {
        if (state.recommendedBeers != null) {
            console.log('before delete', state.recommendedBeers);
            state.recommendedBeers = [];
            console.log('after delete', state.recommendedBeers);
        }
    },
    FETCHRANDOMBEERS(state, payload) {
        if (state.randomBeers.length > 2) {
            state.randomBeers = [];    
        }
        state.randomBeers.push(payload);
        console.log('randomBeers', state.randomBeers);
    },
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
        axios
        .get(`https://api.punkapi.com/v2/beers?food=${payload}`)
        .then(result =>{
            commit('FETCHRECOMMENDATIONS', result.data)
        });
    },
    deleteRecommendations({commit}) {
        commit('DELETERECOMMENDATIONS');
    },
    fetchRandomBeers({commit}) {
        for (let i = 0; i < 3; i++) {
            axios
            .get(`https://api.punkapi.com/v2/beers/random`)
            .then(result =>{
                commit('FETCHRANDOMBEERS', result.data)
            });
        }
    },
    fetchBeedDetails({commit}, payload) {

    },

}
})