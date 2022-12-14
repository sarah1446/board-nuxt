<template>
  <div>
    <!-- 작성자: {{ replies.author }} <br/>
    {{ replies.content }} -->
    <!-- <button @click="saveComment">대댓글</button> -->
    <div v-if="isVisible">
      <div v-for="(item, idx) in replies" :key="idx">
        내용: {{ item.content }}
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
  },
  computed: {
    ...mapGetters({
    }),
    isVisible() {
      return this.replies?.length > 0;
    }
  },
  mounted() {
    console.log('mounted ', this.replies)
  }
}
</script>
