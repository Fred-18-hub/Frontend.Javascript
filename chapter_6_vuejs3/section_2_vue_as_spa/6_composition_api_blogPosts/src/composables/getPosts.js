import { ref } from "vue"

const getPosts = () => {
    let posts = ref([])
    let error = ref(null)

    const load = async () => {
        try {
            const data = await fetch("http://localhost:3000/blogPosts")

            if (!data.ok) {
                throw Error("no data available")
            }
            posts.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }
}

export default getPosts