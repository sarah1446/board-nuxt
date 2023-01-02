<template>
  <div class="detail-view">
    <div class="content-container">
      <div class="title">
        <p>
          {{ post && post.title }} <br/>
        </p>
      </div>
      <ul class="info">
        <li class="date">{{ post && post.createdAt }}</li>
        <li class="author">{{ post && post.author }}</li>
      </ul>
      <div class="content">
        {{ post && post.content }}
      </div>
      <div class="options">
        <button @click="onClickModifyButton">수정</button>
        <button @click="onClickDeleteButton">삭제</button>
      </div>
    </div>
    <div class="comment-container">
      <ul>
        <li v-for="(comment, index) in post.comments" :key="index" @click=setParentCommentId(comment)>
          {{ comment.author }} <br/>
          {{ comment.content }} <br/>
          <button @click="openCommentGuide(comment)">대댓글</button>
          <CommentItem v-if="comment.replies.length" :replies="comment.replies" />
        </li>
      </ul>
    </div>

    <div class="comment-input-area">
      <CommentInput :parentCommentId="parentCommentId" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommentInput from '../../components/commentInput.vue';
import CommentItem from '../../components/commentItem.vue';

export default {
  components: {
    CommentInput,
    CommentItem
  },
  data() {
    return {
      postId: this.$route.params.id,
      content: '',
      // comments: null, 
      // TODO: 뷰에서 리스트로 갔다가 다시 같은 글 누르면 댓글 안나옴 
      // mapGetters의 post.comments로 접근함
 
      parentCommentId:0
    }
  },
  computed: {
    ...mapGetters({
      post: 'getPostDetail',
    })
  },
  created() {
    this.$store.dispatch('getPostDetail', this.postId)
  },
  mounted() { 
  },
  methods: {
    onClickModifyButton() {
      this.$router.push({
        name: 'update',
        // 넘겨줘야 수정페이지에서 id값 나옴
        params: {
          id: this.postId, 
        }
      });
    },
    onClickDeleteButton() {
      this.$store.dispatch('deletePost', this.postId);
      this.$router.push({ name: 'index' })
    },
    openCommentGuide(post) {
      const info = {
        id: post.id,
        author: post.author
      }

      this.$store.dispatch('setOriginalCommentInfo', info)
    },

    setParentCommentId(item){
      this.parentCommentId = item.id
    }
  }
}
</script>
