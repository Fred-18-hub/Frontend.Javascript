const app = Vue.createApp({
    data() {
        return {
            title: "Letters from an Astrophysicist",
            author: "Neil deGrasse Tyson",
            year: 2019,
            sales: 1000
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = "Astrophysics for People in a Hurry"

            this.title = title
        }
    }
})

app.mount("#app")