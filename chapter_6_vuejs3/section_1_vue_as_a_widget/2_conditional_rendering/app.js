const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
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
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app")