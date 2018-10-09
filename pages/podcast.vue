<template>

    <div class="inner">
        <img src="~/assets/podcast-header.png" alt="">
        <h1>Have an idea for a website or podcast?</h1>           
        <p>Thanks for checking Whaling City Web. We specialize in <em>fast</em>, affordable websites, including podcast integration (we've set up multiple podcast integrations with different hosting and website platforms) and we can help you today!</p>
        <h2>Fast</h2>
        <p>We use super modern technology to make our sites performant (this site gets a 100 on Google Page Speed) and accessible to everyone, regardless of hardware and ability.</p>
        <h2>Affordable</h2>
        <p>Our websites are affordable. We practice <em>component-based design</em>, so our Wordpress sites feature both resuable code that is production proven and customization that is absolutely unique and perfect for your needs.</p>
        <p>As friend of one of our podcast affiliates, you'd be able to take advantage of our special discount prices. Just fill out a contact form below to get more information.</p>        
        <h2>Maintainable</h2>
        <p>Our themes and templates feature highly customizable fields that take your content's needs into consideration. We even offer a maintenance plan if you imagine your needs evolving each and every month.</p>
        
        <form name="podcast-contact" method="POST" action="/success" netlify>
   
            <h2>Let's Talk</h2>
            
            <input type="text" id="input-name" placeholder="Name" name="contactName"> 
            <input type="email" id="input-email" placeholder="Email address" name="contactEmail" required> 
        
            <select id="input-subject" placeholder="Subject" name="contactSubject">
                <option value="Question">I have a question</option>               
                <option value="Pricing">I would like to see your pricing sheet</option> 
            </select>         

            <fieldset>
                <label for="podcast-select">Where did you hear about us?</label>
                <select id="podcast-select" placeholder="" name="podcastSelect" required>
                    <option value="Horror">The GoldenAgeHorror.com Podcast</option>
                    <option value="RPG">ActualPlay.Network</option>
                    <option value="Elsewhere">Somewhere else</option>
                </select>        
            </fieldset>
            
            <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>

            <input type="hidden" name="form-name" value="contact" />      

            <button class="background-red padded" id="input-submit" type="submit">Get in Touch</button>
   
        </form>
    
    
    </div>

</template>


<script>
export default {
  layout: "landing",
  data: function() {
    return {};
  },

  methods: {},

  props: []
};
</script>

<style scoped>
img {
  max-width: 100%;
}
fieldset {
  border: 0;
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