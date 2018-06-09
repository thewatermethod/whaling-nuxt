<template>

    <div class="form inner">
   
        <h2>Let's Talk</h2>

        <input type="text" id="input-name" placeholder="Name" name="contactName"> 
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

    export default {

        data: function() {
            return {
  
            }
        },

        methods: {

            gatherData: function(){

                return { 
                    'name' : document.querySelector('#input-name').value, 
                    'returnEmail': document.querySelector('#input-email').value,
                    'selection': document.querySelector('#input-subject').value,
                    'message': document.querySelector('#input-message').value,
                };

            },

            sendAjax: function( data ){
                var url ='https://whalincityweb.azurewebsites.net/api/HttpTriggerJS1?code=A3T5F0vkqQsV9P5MPbPFynewIy96eBg9cD1Zr81fMYW2k8LYDxaHwA==&name=Matt';
             
                fetch( url, {
                    method: 'post',
                    body: data,
                    mode: 'no-cors'
                }).then( response => console.log(response) );
                
                
                /*.then( response=> response.json() )
                .then( theJson => console.log(theJson) );*/

            },

            triggerAjax: function(){

                var data = this.gatherData();
                this.sendAjax(data);

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
        cursor: pointer;
        display: block;
        margin: 1em auto;
        outline: 0;        
        width: 50%;
    }

    button:hover {
        background: #e53935;
    }


</style>