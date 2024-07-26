const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: "Letters from an Astrophysicist", author: "Neil deGrasse Tyson", img: "./assets/img1.jpg", isFav: true },
                { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", img: "./assets/img2.jpg", isFav: false },
                { title: "12 Rules for Life", author: "Jordan B. Peterson", img: "./assets/img3.jpg", isFav: true }
            ]
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
    },

    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav);
        }
    }
})

app.mount("#app")