const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "Letters from an Astrophysicist",
            author: "Neil deGrasse Tyson",
            year: 2019,
            sales: 1000,
            x: 0,
            y: 0
        }
    },
    methods: {
        handleEvent(e, data) {    // Event object is by automatically passed by Vue when no arguments are passed during function call
            console.log(e, e.type);

            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount("#app")