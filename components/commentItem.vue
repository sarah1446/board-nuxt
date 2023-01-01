<template>
  <div class="comment-item">
    <div v-if="isVisible">
      <div v-for="(item, idx) in replies" :key="idx" class="comment">
        <span>{{ item.author }}</span> <br/>
        <p>{{ item.content }}</p>
        <button @click="() => openCommentInput(item)">대댓글</button>
        <CommentItem :replies="item.replies" />
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
