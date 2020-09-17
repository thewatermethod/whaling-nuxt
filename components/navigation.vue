<template>
  <div class="site-header background-black flex-box centered">
    <h1 class="padded z2">
      <nuxt-link class="z2" to="/">Whaling City Web Design</nuxt-link>
    </h1>
  </div>
</template>

<script>
export default {
  methods: {},

  mounted() {},
};
</script>

<style scoped>
div.site-header {
  justify-content: space-between;
  padding: 0 1em;
}

h1 {
  font-size: 1.25em;
  padding: 1em 0;
}

h1 a {
  text-decoration: none;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 2em;
    padding: 0;
  }
}
</style>