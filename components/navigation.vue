<template>
    <div class="site-header background-black">
        <h1><nuxt-link to="/">Whaling City Web</nuxt-link></h1>
        <nav class="menu">
            <ul class="roboto-slab">
                <li><nuxt-link to="/about">Mission</nuxt-link></li>
                <li><nuxt-link to="/work">Work</nuxt-link></li>
                <li><nuxt-link to="/contact" href="#">Contact Us</nuxt-link></li>
            </ul>
        </nav>
    </div>

</template>

<style scoped>
    nav ul {
        margin: 0;
    }

    nav ul li{
        display: inline-block;
        padding: 1em;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
    }

</style>