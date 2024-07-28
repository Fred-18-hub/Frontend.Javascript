<template>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>Loading...</div>
</template>

<script>
import getPost from '@/composables/getPost';

export default {
    props: ["id"],
    setup(props) {
        const { post, error, load } = getPost(props.id)
        load()

        return { post, error }
    }
}
</script>

<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
        text-align: justify;
    }
    .pre {
        white-space: pre-wrap;
    }
</style>