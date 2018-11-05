<template>

    <div class="top-nav background-blue">
        <span class="small" v-on:click="closeMessage" >This site uses Google Analytics to track page views. You can visit the <a href="https://policies.google.com/privacy?hl=en&gl=zz">Google Analytics privay policy here</a>.</span>
        <ul>
            <li><a href="tel:0000000"><img src="~/assets/phone.svg" scale="0"></a></li>
            <li><nuxt-link to="/contact/"><img src="~/assets/message-circle.svg" scale="0"></nuxt-link></li>
        </ul>
    </div>

</template>

<script>
export default {
  data: function() {
    return {};
  },

  methods: {
    closeMessage: function(event) {
      event.target.remove();
    }
  },

  props: []
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