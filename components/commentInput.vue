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
      postId: this.$route.params.id,
      originalCommentInfo: this.$store.state.originalCommentInfo, // ? created와 중복
    }
  },
  watch: {
    originalCommentInfo: function(value, oldValue) {
      // console.log(value, oldValue)
      console.log('now data ', value)
      console.log('대댓글 클릭할때마다 호출 !!watch!')
      // this.originalCommentInfo = this.$store.state.originalCommentInfo
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getData'
    }),
  },
  created() {
    // ??
    this.originalCommentInfo = this.$store.state.originalCommentInfo;
    console.log('testing ', this.originalCommentInfo)
  },
  methods: {
    saveComment() {
      const nowTime = new Date();
      const comment = {
        id: nowTime.getTime(),
        author: 'sarah',
        content: this.content,
        created: nowTime,
        relies: []
      }
      console.log('comment result ', comment);
      this.$store.dispatch('addComment', {
        comment,
        commentId: null,
      })
    }
  }
}
</script>
