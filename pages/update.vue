<template>
  <div>
    {{ notice.author }}
    <input type="text" v-model="notice.title" >
    <textarea name="" id="" cols="30" rows="10" v-model="notice.content"></textarea>
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
  methods: {
    getPostDetail() {
      Object.assign( this.notice, this.$store.getters.getPostDetail )
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
  computed: {
    ...mapGetters({
      posts: 'getData',
      post: 'getPostDetail'
    }),
  },
  mounted(){
   
  }
}
</script>
