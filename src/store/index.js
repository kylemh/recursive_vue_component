import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    states: null,
  },
  actions: {
    fetchData: ({ commit }) => {
      api.get('states').then(states => commit('mutateStates', states));
    },
  },
  mutations: {
    mutateStates: (state, states) => {
      state.states = states;
    }
  },
  strict: false,
});

export default store;
