const app = new Vue ({
    el: '#app',

    data: {

        listEmail: [],
    },

    created() {

        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (resp) => {

                const email = resp.data.response;

                this.listEmail.push(email);
                //console.log(email);
            });
            
        }
    },
})
console.log(app);