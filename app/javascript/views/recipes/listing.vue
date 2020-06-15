<template>
  <div id='recipes-listing'>
    <header>
      <h2>Recetas</h2>
    </header>

    <recipes-search-box :value='query' @change='onChange' />
    <recipes-list />

    <button @click='newRecipe'>Agregar</button>
  </div>
</template>

<script>
  export default {
    props: {
      host: {
        type: String,
        default: ''
      }
    },
    data: () => {
      return {
        recipes: [],
        query: '',
      }
    },
    computed: {
    },
    mounted() {
      this.refresh();
      this.$store.commit('setQuery', this.query);
    },
    methods: {
      refresh() {
        this.$store.dispatch('fetchRecipes', this.query);
      },
      onChange(evt) {
        this.query = evt;
        this.refresh();
      },
      newRecipe() {
        this.$router.push('/recipes/new');
      },
    },
  }
</script>

<style lang='scss' scoped>
  header {
    .pull-right {
      float: right;
    }

    .active {
      background-color: var(--color-indigo-lighter);
      color: var(--color-indigo-dark);
    }

    a {
      border-radius: 50px;
      display: inline-block;
      margin-left: 0.5em;
      min-width: 1em;
      min-height: 1em;
      padding: 0.25em;
      text-align: center;
    }
  }
</style>
