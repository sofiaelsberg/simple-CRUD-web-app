<template>
  <div>
    <h2>Posts</h2>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img :src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  firestore: {
    posts: postRef,
  },
};
</script>

<style>
</style>