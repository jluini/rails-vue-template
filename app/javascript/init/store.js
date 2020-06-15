import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    query: '',
    currentRecipe: null,
    preferredUnits: null,
  },
  getters: {
  },
  mutations: {
    changePrederredUnits(state, units) {
      state.preferredUnits = units;
    },
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setCurrentRecipe(state, recipe) {
      state.currentRecipe = recipe;
    },
    setPreferredUnits(state, units) {
      state.preferredUnits = units;
    },
    setQuery(state, query) {
      state.query = query;
    },
  },
  actions: {
    async fetchRecipes(state, query) {
      let url = '/recipes.json';

      if (query !== '') {
        url += '?q=' + query;
      }

      let json = await fetch(url);
      let data = await json.json();

      return state.commit('setRecipes', data.data);
    },
    async fetchRecipe(state, id) {
      // let url = `/recipes/${id}.json`;

      // let json = await fetch(url);
      // let data = await json.json();

      // return state.commit('setCurrentRecipe', data.data);
      let data = {
        "data": {
          "id": "1",
          "name": "Alta Torta222",
          "people_served": 3,
          "rating": 2.5416666666666665,
          "ingredients": [{
            "id": "18",
            "name": "Harina",
            "amount": 200,
            "unit": "g"
          }, {
            "id": "19",
            "name": "Dulce de Leche",
            "amount": 500,
            "unit": "g"
          }, {
            "id": "20",
            "name": "Fernet",
            "amount": 50,
            "unit": "cc"
          }],
          "steps": [{
            "id": "21",
            "description": "Mezclar Harina con algo"
          }, {
            "id": "22",
            "description": "Verter Fernet en la mezcla"
          }, {
            "id": "23",
            "description": "Esparcir en un envase"
          }, {
            "id": "24",
            "description": "Hornear 20 minutos"
          }, {
            "id": "25",
            "description": "Esparcir el Dulce de Leche por encima"
          }, {
            "id": "26",
            "description": "Divina"
          }]
        }
      };
      return state.commit('setCurrentRecipe', data.data);
    }
  }
});
