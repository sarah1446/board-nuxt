<template>
  <div>
    <input v-model="content" type="text" name="" id="">
    <button @click="saveComment">댓글 저장</button>
    <div v-if="targetCommentId" style="border: 1px solid black;">
      "{{ this.commentAuthor }}"님에게 댓글달기
      <button @click="cancelRecomment">대댓글 취소</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    parentCommentId:{
      type: Number,
    }
  },
  data() {
    return {
      content: "",
      postId: this.$route.params.id,
      targetCommentId: null,
    }
  },
  watch: {
    originalCommentInfo: {
      handler: function (val, oldVal) {
        this.targetCommentId = val.id
        this.commentAuthor = val.author
      },
      deep: true
    },
  },
  computed: {
    ...mapGetters({
      posts: 'getData',
      originalCommentInfo: 'getOriginalCommentInfo'
    }),
  },
  mounted() {
  },
  methods: {
    saveComment() {
      const nowTime = new Date();
      const commentInfo = {
        id: nowTime.getTime(),
        author: 'sarah',
        content: this.content,
        created: nowTime,
        replies: []
      }
     
      this.$store.dispatch('addComment', {
        parentCommentId:this.parentCommentId,
        postId: this.$route.params.id,
        comment: commentInfo,
        targetCommentId: this.originalCommentInfo.id ?? null,
      })
    },
    cancelRecomment() {
      // 대댓글 취소, store값 변경
      this.$store.dispatch('resetOriginalCommentInfo')
    }
  }
}
</script>
