<template>
  <div class="top-nav background-blue">
    <ul>
      <li>
        <a href="tel:0000000">
          <img src="~/assets/phone.svg" scale="0" />
        </a>
      </li>
      <li>
        <nuxt-link to="/contact/">
          <img src="~/assets/message-circle.svg" scale="0" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showCookieWarning: false,
    };
  },

  methods: {
    closeMessage: function (event) {
      document.cookie = "whalingcityweb=cookie";
      event.target.parentNode.remove();
    },
  },

  mounted() {
    if (
      !document.cookie
        .split(";")
        .filter((item) => item.includes("whalingcityweb=")).length
    ) {
      this.showCookieWarning = true;
    }
  },

  props: [],
};
</script>

<style scoped>
span {
  background: #666;
  cursor: pointer;
  float: left;
  padding: 0.5em;
  text-align: center;
  width: 100%;
}
small {
  font-weight: bold;
}
ul {
  display: flex;
  justify-content: flex-end;
  margin: 0 1em;
  padding: 0.5em;
}

ul li {
  padding: 0 0.5em;
}
</style>