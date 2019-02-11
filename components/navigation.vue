<template>
  <div class="site-header background-black flex-box centered">
    <h1 class="padded z2">
      <nuxt-link class="z2" to="/">Whaling City Web Design</nuxt-link>
    </h1>
    <div v-on:click="toggleMenu" id="burger" class="nav-left-icon burger-menu-btn z2">
      <span></span>
    </div>
    <nav id="navMenu" class="z1">
      <ul class="column flex-box roboto-slab">
        <li v-on:click="navigate">
          <nuxt-link to="/about">Mission</nuxt-link>
        </li>
        <li v-on:click="navigate">
          <nuxt-link to="/work">Work</nuxt-link>
        </li>
        <li>
          <span v-on:click="chat">Contact Us</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    chat: function() {
      olark("api.box.expand");
    },

    navigate: function() {
      var burger = document.querySelector("#burger");
      var navMenu = document.querySelector("#navMenu");

      if (burger.classList.contains("open")) {
        burger.classList.remove("open");
      }

      if (navMenu.classList.contains("opened")) {
        navMenu.classList.remove("opened");
      }
    },

    toggleMenu: function(event) {
      document.querySelector("#burger").classList.toggle("open");
      document.querySelector("#navMenu").classList.toggle("opened");
    }
  },

  mounted() {
    
  }
};
</script>

<style scoped>
nav li span {
  cursor: pointer;
}
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

.burger-menu-btn.open {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.burger-menu-btn,
.burger-menu-btn:after,
.burger-menu-btn:before {
  height: 8px;
  width: 32px;
  background: white;
}
.burger-menu-btn:after {
  position: absolute;
  bottom: -12px;
}
.burger-menu-btn:before {
  position: absolute;
  top: -12px;
}
.burger-menu-btn:after,
.burger-menu-btn:before {
  content: "";
  left: 4px;
}
.burger-menu-btn span {
  height: 60px;
  width: 60px;
  display: block;
  position: absolute;
  top: -10px;
}
.burger-menu-btn {
  will-change: transform;
  -webkit-transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  cursor: pointer;
}

nav {
  left: -9999px;
  position: fixed;
  transition: all 0.75s;
}

nav ul {
  justify-content: center;
}

nav ul li {
  padding: 1em;
  text-align: center;
}

nav ul li a {
  color: white;
}

nav.opened {
  background: #ffa000;
  bottom: 0;
  left: 0;
  padding: 25% 10%;
  right: 0;
  top: 0;
}

nav.opened ul {
  font-size: 2em;
  height: 50vh;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 2em;
    padding: 0;
  }

  .burger-menu-btn {
    display: none;
  }

  nav {
    position: relative;
    left: auto;
  }

  nav.opened {
    padding: 10%;
  }

  nav ul {
    display: block;
  }

  nav ul li {
    display: inline-block;
    padding: 1em;
  }

  nav ul li a {
    text-decoration: none;
  }
}
</style>