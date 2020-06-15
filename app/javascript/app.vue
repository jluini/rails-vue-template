<template>
  <router-view class='recipes-container'></router-view>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
  body {
    // taken from Shopify's Polaris
    --color-sky-lightest: #F9FAFB;
    --color-sky-light: #F4F6F8;
    --color-sky: #DFE3E8;
    --color-sky-dark: #C4CDD5;
    --color-ink-lightest: #919EAB;
    --color-ink-lighter: #637381;
    --color-ink-light: #454F5B;
    --color-ink: #212B36;
    --color-indigo-lighter: #F4F5FA;
    --color-indigo-light: #B3BCF5;
    --color-indigo: #5C6AC4;
    --color-indigo-dark: #202E78;
    --color-indigo-darker: #000639;
    --color-red-lighter: #FBEAE5;
    --color-red-light: #FEAD9A;
    --color-red: #DE3618;
    --color-red-dark: #BF0711;
    --color-red-darker: #330101;

    margin: 0;
    background-color: var(--color-sky);
  }

  .recipes-container {
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    color: var(--color-ink);
    margin: 1em auto;
    max-width: 25em;
    padding-bottom: 1em;

    article {
      background-color: var(--color-indigo-lighter);
      border: 1px solid var(--color-indigo-light);
      border-radius: 5px;
      margin: 1em;
      padding: 0.5em;

      &.error {
        background-color: var(--color-red-lighter);
        border: 1px solid var(--color-red-light);
        font-size: 9pt;
      }

      a {
        color: var(--color-indigo-darker);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        display: unset;
      }
    }

    button {
      background-color: var(--color-indigo);
      border: none;
      border-radius: 3px;
      color: var(--color-indigo-lighter);
      display: block;
      font-size: 75%;
      margin-left: auto;
      margin-right: auto;
      padding: 0.3em 0.5em;
      text-transform: uppercase;
    }

    header {
      background-color: var(--color-indigo-dark);
      color: var(--color-indigo-lighter);
      padding: 1em;

      a {
        text-decoration: none;
        color: var(--color-indigo-light);
      }

      h2 {
        margin: 0;
      }

      small {
        color: var(--color-indigo-light);
      }
    }
  }

  small {
    color: var(--color-ink-light);
    font-size: 70%;
  }
</style>
