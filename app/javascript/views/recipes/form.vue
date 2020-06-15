<template>
  <div id='recipes-form'>
    <header>
      <h2>
        <router-link to='/'>
          ‹
        </router-link>
        Crear Receta
      </h2>
    </header>

    <article>
      <form>
        <label for='recipe-name'>
          Nombre
        </label>
        <input v-model='name' type='text'>

        <label for='recipe-people-served'>
          Porciones
        </label>
        <input v-model='peopleServed' type='number'>

        <label for='recipe-ingredients'>
          Ingredientes
        </label>
        <ul v-if='hasIngredients'>
          <li v-for='ingredient in ingredients' :key='`ingredient-${ingredient.name}`'>
            {{ingredient.name}}: {{ingredient.amount}} {{ingredient.unit}}
          </li>
        </ul>
        <div class='fourths'>
          <input v-model='currentIngredientName' type='text' placeholder='Nombre'>
          <input v-model='currentIngredientAmount' type='number' placeholder='Cantidad'>
          <select v-model='currentIngredientUnit'>
            <option v-for='unit in preferredUnits' :key='`unit-${unit}`' :value='unit'>
              {{unit}}
            </option>
          </select>
          <button @click='addIngredient'>+</button>
        </div>

        <label for='recipe-steps'>
          Pasos de Preparación
        </label>
        <ul v-if='hasSteps'>
          <li v-for='step in steps' :key='`step-${step.description}`'>
            {{step.description}}
          </li>
        </ul>
        <div class='halves'>
          <input v-model='currentStepDescription' type='text' placeholder='Descripción'>
          <button @click='addStep'>+</button>
        </div>
      </form>
    </article>

    <article class='error' v-if='error'>
      Hay un error de validación y no se ha podido grabar.
    </article>
    <button @click='save'>Guardar</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
    },
    data: () => {
      return {
        error: false,
        name: '',
        peopleServed: 1,
        currentIngredientName: '',
        currentIngredientAmount: 1,
        currentIngredientUnit: '',
        ingredients: [],
        currentStepDescription: '',
        steps: [],
        systems: {
          imperial: ['lbs', 'gallon', 'sq. inches'],
          metric: ['kg', 'g', 'l', 'cc'],
        },
        currentSystem: 'metric',
      }
    },
    mounted() {
      this.clear();
    },
    computed: {
      hasIngredients() {
        return this.ingredients.length > 0;
      },
      hasSteps() {
        return this.steps.length > 0;
      },
      preferredUnits() {
        return this.systems[this.currentSystem];
      }
    },
    methods: {
      addIngredient(evt) {
        this.ingredients.push({
          name: this.currentIngredientName,
          amount: this.currentIngredientAmount,
          unit: this.currentIngredientUnit
        });

        this.clearCurrentIngredient();
      },
      addStep(evt) {
        this.steps.push({
          description: this.currentStepDescription,
        });

        this.clearCurrentStep();
      },
      async save() {
        let body = {
          recipe: {
            name: this.name,
            people_served: this.peopleServed,
            ingredients: this.ingredients,
            steps: this.steps,
          }
        }

        let res = await fetch(
          '/recipes.json',
          {
            body: JSON.stringify(body),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
          }
        );
        
        if (res.ok) {
          this.clear();
          this.$router.push('/');
        } else {
          this.error = true;
        }
      },
      clear() {
        this.name = ''
        this.peopleServed = 1
        this.ingredients = []
        this.steps = []

        this.clearCurrentIngredient();
        this.clearCurrentStep();
      },
      clearCurrentIngredient() {
        this.currentIngredientName = ''
        this.currentIngredientAmount = 1
        this.currentIngredientUnit = ''
      },
      clearCurrentStep() {
        this.currentStepDescription = ''
      },
    },
  }
</script>

<style lang='scss' scoped>
  form {
    display: flex;
    flex-direction: column;

    &> label {
      color: var(--color-ink-light);
      font-size: 75%;
      margin-bottom: 0.2em;
    }

    &> input, div {
      margin-bottom: 1.5em;

      &:last-child {
        margin-bottom: 0.5em;
      }
    }

    .fourths {
      display: grid;
      grid-gap: 0.5em;
      grid-template-columns: auto 4em 3em 2em;

      button {
        width: 100%;
      }
    }

    .halves {
      display: grid;
      grid-gap: 0.5em;
      grid-template-columns: auto 2em;

      button {
        width: 100%;
      }
    }
  }
</style>
