<template>
  <div>
    <input v-model="content" type="text" name="" id="">
    <button @click="saveComment">댓글 저장</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      content: "",
      postId: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getData'
    })
  },
  methods: {
    saveComment() {
      console.log(this.content)
      // this.$store.dispatch('')
      // const selectedPostId = this.posts.findIndex(post => post.id === Number(this.postId));
      // console.log(this.posts[selectedPostId])
      // console.log(post)


      // this.$store.dispatch('setPostComment', {comment: this.content, id: this.postId});
    }
  }
}
</script>
