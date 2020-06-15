<template>
  <article id='recipes-list'>
    <ul>
      <li v-for='recipe in recipes' :key='`recipe#${recipe.id}`'>
        <router-link :to='`/recipes/${recipe.id}`'>
          {{recipe.name}}
        </router-link>
        <small>
          ({{recipe.rating.toFixed(2)}})
        </small>
      </li>
    </ul>
  </article>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['recipes'])
    },
  }
</script>

<style lang='scss' scoped>
</style>
