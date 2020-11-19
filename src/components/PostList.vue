<template>
  <div>
    <h2>Shopping List</h2>
    <div class="container">
      <article v-for="post in posts" :key="post.id">
        <img :src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
        <router-link
          style="text-decoration: none"
          :to="{ name: 'Update', params: { post: post } }"
        >
          <button id="pink" type="button">Update</button>
        </router-link>
        <button type="button" v-on:click="deletePost(post.id)">Delete</button>
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

  methods: {
      deletePost(id){
          postRef.doc(id).delete();
      }
  },
  firestore: {
    posts: postRef
  },
};

</script>

<style>
</style>