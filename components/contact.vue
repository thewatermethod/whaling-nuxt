<template>

    <div class="form inner">
   
        <h2>Let's Talk</h2>

        <input type="text" id="input-name" placeholder="Name" name="contactName" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII='); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;"> 
        <input type="email" id="input-email" placeholder="Email address" name="contactEmail"> 
        <select id="input-subject" placeholder="Subject" name="contactSubject">
            <option value="Question">I have a question</option>
            <option value="Meeting">I would like to schedule a meeting</option>
            <option value="Pricing">I would like to see your pricing sheet</option> 
        </select> 
        
        <input type="text" id="thisField" required="" name="thisField">
        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
        <input type="hidden" id="whaling_city_web_contact_us_email_nonce" name="whaling_city_web_contact_us_email_nonce" value="069081a119">
        <input type="hidden" name="_wp_http_referer" value="/cape-cod-roof-cleaners/"> 
   
        <button v-on:click="triggerAjax" class="background-red padded" id="input-submit">Get in Touch</button>
   
    </div>

</template>

<script>
    import axios from 'axios';

    export default {

        data: function() {
            return {
  
            }
        },

        methods: {

            triggerAjax: function(){
                var url ='https://whalingcitywebemail.azurewebsites.net/api/Test';
             
                fetch( url , {
                    method: 'post',
                    body: '',
                    mode: 'no-cors'
                });
            },

        },

        props: [
           
        ],

    }

</script>

<style scoped>
    input, select, textarea {
        clear: both;
        margin: .5em;        
        padding: .5em;
        width: 100%;
    }

    button {
        border: 0;
        display: block;
        margin: 1em auto;
        outline: 0;        
        width: 50%;
    }


</style>