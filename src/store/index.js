import { createStore } from 'vuex';
import axios from 'axios';


export default createStore ({
    /**
     * This webApp makes use of an store for easy acces to all required details.
     * listedBeers: to get all beers from PunkApi
     * recommendedBeers: all beers that are good with with a certain beer
     * detailedBeer: the beer a user wants to get more details of
     * error: error message when beer is not found
     */
state: {
    listedBeers: [],
    recommendedBeers: [],
    detailedBeer: null,
    randomBeers: [],
    error: '',
    // beerSuggestions: []
},
getters: {
    listedBeers:        state => state.listedBeers,
    recommendedBeers:   state => state.recommendedBeers,
    detailedBeer:       state => state.detailedBeer,
    randomBeers:        state => state.randomBeers,
    error:              state => state.error
},
mutations: {
    FETCHBEERS(state, payload) {
        state.listedBeers = payload;
        console.log('beers', state.listedBeers);
    },
    FETCHRECOMMENDATIONS(state, payload) {
        state.recommendedBeers = payload;
    },
    DELETERECOMMENDATIONS(state) {
        if (state.recommendedBeers != null) {
            state.recommendedBeers = [];
        }
    },
    FETCHRANDOMBEERS(state, payload, i) {
        if (state.randomBeers.length > 2) {
            state.randomBeers = [];    
        }
        state.randomBeers.push(payload);
    },
    FETCHBEERDETAILS(state, payload) {
        state.detailedBeer = payload[0];
    },
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
    fetchBeerDetails({commit}, payload) {
        axios
            .get(`https://api.punkapi.com/v2/beers/${payload}`)
            .then(result =>{
                commit('FETCHBEERDETAILS', result.data)
            });
    },
    fetchBeersPagination({commit}, payload) {
        axios
            .get(`https://api.punkapi.com/v2/beers?page=${payload}`)
            .then(result =>{
                commit('FETCHBEERS', result.data)
            });
    }
}
})