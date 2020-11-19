<template>
  <div class="container-create">
    <div class="create">
      <h2>Add Items</h2>
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
          required
        />

        <button type="button" v-on:click="createPost">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
 import { postRef } from '../firebase-db'
 export default {
     name: 'Create',
     data () {
         return {
            post: {
             description: '',
             image: ''
         }
     }
     },
     methods: {
     createPost () {
         postRef.add(this.post)
         this.$router.push('/')
     }
 }
 };
 
</script>

<style>
</style>