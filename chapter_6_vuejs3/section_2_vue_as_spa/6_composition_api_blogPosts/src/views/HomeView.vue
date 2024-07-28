<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <!-- <PostList v-if="showPostList" :posts="posts" /> -->
    <!-- <button @click="showPostList = !showPostList">toggle post list</button> -->

  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    // const showPostList = ref(true)
    return { posts, error, /* showPostList */ }
  }
}
</script>
