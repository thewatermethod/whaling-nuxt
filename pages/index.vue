<template>

    <main class="flex-box centered">
        
        <div class="background-black flex-box column">
            <h2>Invested in your success.</h2>
            <nuxt-link to="/contact" class="background-red roboto-slab" >Contact Us Today</nuxt-link>
        </div>


    </main>

</template>

<style scoped>
    main {
        background: url('~/assets/purchase.jpg');        
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 80vh;
    }

    main div {
        font-size: 1.5em;
        padding: 2em;        
    }

    main div h2{
        color: white;
        margin: 0 0 1em 0;
    }

    main div a {
        color: white;
        display: block;    
        padding: 1em;    
        text-align: center;
        text-decoration: none;
    }

    main div a:hover {
        background-color: #e53935;
    }


</style>