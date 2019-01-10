<template>

    <form class="inner" name="contact" method="POST" action="/success" netlify>
   
        <h2>Let's Talk</h2>

        <input type="text" id="input-name" placeholder="Name" name="contactName"> 
        <input type="email" id="input-email" placeholder="Email address" name="contactEmail"> 
       
        <input type="text" id="input-last-name" placeholder="Last Name" name="lastName" netlify-honeypot="bot-field">

        <select id="input-subject" placeholder="Subject" name="contactSubject">
            <option value="Question">I have a question</option>
            <option value="Meeting">I would like to schedule a meeting</option>
            <option value="Pricing">I would like to see your pricing sheet</option> 
        </select>         
        
        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>

        <input type="hidden" name="form-name" value="contact" />      
        <div data-netlify-recaptcha="true"></div>

        <button class="background-red padded" id="input-submit" type="submit">Get in Touch</button>
   
    </form>

</template>

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