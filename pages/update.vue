<template>
  <div class="update-page">
    <input v-model="updatedPost.title" type="text" class="title">
    <textarea id="" v-model="updatedPost.content" name="" cols="30" rows="10" class="content"></textarea>
    <ul class="btn-box">
      <li><button @click="cancelUpdate">취소</button></li>
      <li><button @click="updatePost">저장</button></li>
    </ul>
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
