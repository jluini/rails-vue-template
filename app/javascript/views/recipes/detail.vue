<template>
  <div id='recipe-detail'>
    <h2 v-if='!currentRecipe'>…</h2>
    <div v-if='currentRecipe'>
      <header>
        <h2>
          <router-link to='/'>
            ‹
          </router-link>
          {{currentRecipe.name}}
          <small>
            ({{currentRecipe.rating.toFixed(2)}})
          </small>
        </h2>
      </header>

      <article>
        Ingredientes para {{currentRecipe.people_served}} personas:
        <ul>
          <li v-for='ingredient in currentRecipe.ingredients' :key='`ingredient#${ingredient.id}`'>
            {{ingredient.name}}: {{ingredient.amount}} {{ingredient.unit}}
          </li>
        </ul>
      </article>

      <article>
        Pasos:
        <ol>
          <li v-for='step in currentRecipe.steps' :key='`ingredient#${step.id}`'>
            {{step.description}}
          </li>
        </ol>
      </article>

      <div class='recipe-rating'>
        <a href='#' @click='rate(1)'>★</a>
        <a href='#' @click='rate(2)'>★</a>
        <a href='#' @click='rate(3)'>★</a>
        <a href='#' @click='rate(4)'>★</a>
        <a href='#' @click='rate(5)'>★</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      id: String,
    },
    data: () => {
      return {
        people: 1,
      }
    },
    computed: {
      ...mapState(['currentRecipe'])
    },
    mounted() {
      this.fetch();
    },
    methods: {
      fetch() {
        this.$store.dispatch('fetchRecipe', this.id);
      },
      async rate(stars) {
        let res = await fetch(
          `/recipes/${this.id}/ratings`,
          {
            body: JSON.stringify({ stars }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
          }
        );

        if (res.ok) {
          this.fetch();
        } else {
          alert('no se pudo guardar la valoración');
        }
      },
    },
  }
</script>
<style lang='scss' scoped>
  .recipe-rating {
    color: var(--color-indigo-dark);
    font-size: 150%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    a {
      color: var(--color-indigo-dark);
      text-decoration: none;
    }
  }
</style>
