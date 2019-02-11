<template>
  <div class="inner">
    <button v-on:click="chat" class="background-red padded" id="input-submit">Get in Touch</button>
  </div>
</template>


<script>
export default {
  methods: {
    chat: function() {
      olark("api.box.expand");
    }
  }
};
</script>


<style scoped>
input[name="lastName"] {
  position: fixed;
  left: -999999999px;
}

input,
select,
textarea {
  clear: both;
  margin: 0.5em;
  padding: 0.5em;
  width: 100%;
}

button {
  border: 0;
  cursor: pointer;
  display: block;
  margin: 1em auto;
  outline: 0;
  width: 50%;
}

button:hover {
  background: #e53935;
}

#thisField {
  left: -99999px;
  position: fixed;
}
</style>