<template>
  <div>
    <div v-if="isVisible">
      <div v-for="(item, idx) in replies" :key="idx" style="backgroundColor:grey; margin: 5px;">
        작성자: {{ item.author }} <br/>
        내용: {{ item.content }} <br/> / id => {{ item.id }}
        <button @click="() => openCommentInput(item)">대댓글</button>
        <CommentItem :replies="item.replies" />
        <!-- TODO: 대댓 input창열리고 취소버튼 누르면 store의 originalCommentInfo 빈값으로 처리 -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommentItem from './commentItem.vue'

export default {
  components: {
    CommentItem
  },
  props: {
    replies: Array,
  },
  methods: {
    openCommentInput(post) {
      // store에 댓글의 id, author 기록(대댓에 표시하려고)
      const info = {
        id: post.id,
        author: post.author,
      }
      // console.log('대댓달 댓글 ', post)
      this.$store.dispatch('setOriginalCommentInfo', info)
    }
  },
  computed: {
    ...mapGetters({
    }),
    isVisible() {
      return this.replies?.length > 0;
    }
  },
  mounted() {
  }
}
</script>
