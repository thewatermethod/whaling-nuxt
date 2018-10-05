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
import Iconmenu from "../components/Iconmenu";
import Navigation from "../components/Navigation";
import Subfooter from "../components/Subfooter";

export default {
  components: {
    Iconmenu,
    Navigation,
    Subfooter
  }
};
</script>

