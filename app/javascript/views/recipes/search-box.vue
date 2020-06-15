<template>
  <article id='recipes-search-box'>
    <input :value='value' ref='searchInput' @keyup.enter='onClick'>
    <button @click='onClick'>
      Buscar
    </button>
  </article>
</template>

<script>
  export default {
    props: {
      value: String
    },
    methods: {
      onClick(_evt) {
        this.$emit('change', this.$refs.searchInput.value);
      }
    },
  }
</script>

<style lang='scss' scoped>
</style>
