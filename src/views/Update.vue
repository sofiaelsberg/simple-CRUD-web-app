<template>
  <div class="update">
    <h1>Update</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Indsæt tekst her"
        required
      />

      <input
        type="text"
        v-model="post.image"
        placeholder="Indsæt billede her"
      />

      <button type="button" v-on:click="updatePost(post.id)">
        Update Post
      </button>
    </form>
  </div>
</template>

<script>
 import { postRef } from '../firebase-db'
 export default {
     name: "Update",
     props: {
         post: Object,
     },
    
     methods: {
     updatePost () {
console.log(this.post);

         postRef.doc(this.post.id).set({
             description: this.post.description,
             image: this.post.image
         });
         this.$router.push("/")
     }
 }
 };
 
</script>

<style>
</style>
