import Vue from 'vue';
import Router from 'vue-router';
import RecipesListing from '../views/recipes/listing.vue'
import RecipeDetail from '../views/recipes/detail.vue'
import RecipeForm from '../views/recipes/form.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes-index',
      component: RecipesListing,
    }, {
      path: '/recipes/new',
      name: 'recipes-new',
      component: RecipeForm,
    }, {
      path: '/recipes/:id',
      name: 'recipes-show',
      component: RecipeDetail,
      props: true,
    }
  ]
});
