<template>
  <div>
    <iconmenu></iconmenu>
    <navigation></navigation>

    <nuxt />

    <div class="site-footer background-black flex-box centered padded">
      <a href="https://nuxtjs.org/">Powered by Nuxt</a>
    </div>
  </div>
</template>

<script>
import Iconmenu from "../components/iconmenu";
import Navigation from "../components/navigation";

export default {
  components: {
    Iconmenu,
    Navigation,
  },
  head: {
    title: "Whaling City Web",
  },
};
</script>

