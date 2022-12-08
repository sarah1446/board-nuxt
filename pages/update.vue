<template>
  <div>
    {{ post.author }}
    <input type="text" :value="post.title" >
    <!-- v-model, value..... -->
    <textarea name="" id="" cols="30" rows="10" :value="post.content"></textarea>
    <button @click="updatePost">저장</button>
    <button @click="cancelUpdate">취소</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  methods: {
    routeToIndex() {
      this.$router.push('/')
    },
    updatePost() {
      this.$store.dispatch('updatePost', this.$route.params.id, {})
      this.routeToIndex();
    },
    cancelUpdate(){
      this.routeToIndex()  
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getData',
      post: 'getPostDetail'
    })
  },
}
</script>
