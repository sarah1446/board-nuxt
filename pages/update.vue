<template>
  <div>
    {{ notice.author }}
    <input v-model="notice.title" type="text">
    <textarea id="" v-model="notice.content" name="" cols="30" rows="10" ></textarea>
    <button @click="updatePost">저장</button>
    <button @click="cancelUpdate">취소</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      notice:{},
    }
  },
  fetch(){
    this.getPostDetail();
  },
  computed: {
    ...mapGetters({
      posts: 'getData',
      post: 'getPostDetail'
    }),
  },
  methods: {
    getPostDetail() {
      this.notice = {...this.post.post};
    },
    routeToIndex() {
      this.$router.push('/')
    },
    updatePost() {
      this.$store.dispatch('updatePost', [this.$route.params.id, this.notice])
      this.routeToIndex();
    },
    cancelUpdate(){
      this.routeToIndex()  
    }
  },
}
</script>
