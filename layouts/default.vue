<template>
  <div>
    <iconmenu></iconmenu>
    <navigation></navigation>

    <nuxt/>

    <subfooter></subfooter>

    <div class="site-footer background-black flex-box centered padded">
      <a href="https://nuxtjs.org/">Powered by Nuxt</a>
    </div>
  </div>
</template>

<script>
import Iconmenu from "../components/iconmenu";
import Navigation from "../components/navigation";
import Subfooter from "../components/subfooter";

export default {
  components: {
    Iconmenu,
    Navigation,

    Subfooter
  },
  head: {
    title: "Whaling City Web"
  }
};
</script>

