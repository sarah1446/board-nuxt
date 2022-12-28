<template>
  <div>
    {{ updatedPost.author }}
    <input v-model="updatedPost.title" type="text">
    <textarea id="" v-model="updatedPost.content" name="" cols="30" rows="10" ></textarea>
    <button @click="updatePost">저장</button>
    <button @click="cancelUpdate">취소</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      updatedPost:{},
    }
  },
  fetch(){
    this.updatedPost = {...this.post}
  },
  computed: {
    ...mapGetters({
      posts: 'getData',
      post: 'getPostDetail'
    }),
  },
  methods: {
    routeToIndex() {
      this.$router.push('/')
    },
    updatePost() {
      this.$store.dispatch('updatePost', { idx: this.$route.params.id, content: this.updatedPost })
      this.routeToIndex();
    },
    cancelUpdate(){
      this.routeToIndex()  
    }
  },
}
</script>
