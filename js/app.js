const app = new Vue ({
    el: '#app',

    data: {

        listEmail: [],
    },

    created() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            console.log(response);
        });

    },
})
console.log(app);