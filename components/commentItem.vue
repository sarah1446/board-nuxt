<template>
  <div>
    작성자: {{ this.author }} <br/>
    {{ this.content }}
    <button @click="saveComment">대댓글</button>
    <!-- <div v-show="isVisible">
      <CommentItem />
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import CommentItem from './commentItem.vue'

export default {
  // components: {
  //   CommentItem
  // },
  props: {
    content: String,
    author: String,
    // replies: Object,
  },
  data() {
    return {
      // isVisible: this.replies.length
    }
  },
  method: {
    saveComment() {
      // 
      console.log('댓글 저장!!')
    }  
  },
  computed: {
    ...mapGetters({
      posts: 'getData'
    })
  },
}
</script>
