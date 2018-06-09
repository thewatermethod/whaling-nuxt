<template>
    <div>
        <iconmenu></iconmenu>
        <navigation></navigation>
     
        <nuxt />        

        <subfooter></subfooter>

        <div class="site-footer background-black flex-box centered padded">
            <a href="https://nuxtjs.org/">Powered by Nuxt</a>
        </div>
        
        <olark />

    </div>


</template>

<script>
    import Iconmenu from '../components/iconmenu'
    import Navigation from '../components/navigation'
    import Subfooter from '../components/subfooter'
    import Olark from '../components/olark'

    export default {
        components: {
            Iconmenu,
            Navigation,
            Olark,
            Subfooter
        }
    }

</script>

