<template>
    <div>
        <iconmenu></iconmenu>
        <navigation></navigation>
     
        <nuxt />        

        <div class="site-footer background-black flex-box centered padded">
            <a href="https://nuxtjs.org/">Powered by Nuxt</a>
        </div>
        
        <olark />

    </div>


</template>

<script>
import Iconmenu from "../components/iconmenu";
import Navigation from "../components/navigation";

import Olark from "../components/olark";

export default {
  components: {
    Iconmenu,
    Navigation,
    Olark
  },
  head: {
    title: "Whaling City Web"
  }
};
</script>

