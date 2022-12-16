<template>
  <div>
    제목: {{ post.title }} <br/>
    작성자: {{ post.author }} <br/>
    작성일: {{ post.createdAt }} <br/>
    내용: {{ post.content }} <br/>
    <button @click="onClickModifyButton">수정</button>
    <button @click="onClickDeleteButton">삭제</button>
    
    <div>
      <ul>
        <li v-for="(comment, index) in comments" :key="index" style="border: 1px solid black">
          작성자: {{ comment.author }} <br/> / id => {{ comment.id}}
          내용: {{ comment.content }} <br/>
          <button @click="openCommentInput(comment)">대댓글</button>
          <CommentItem :replies="comment.replies" />
        </li>
      </ul>
    </div>

    <div>
      <CommentInput />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommentInput from '../../components/commentInput.vue';
import CommentItem from '../../components/commentItem.vue';
import data from '../../data2';

export default {
  components: {
    CommentInput,
    CommentItem
  },
  data() {
    return {
      postId: this.$route.params.id,
      content: '',
      comments: data[0].comments
    }
  },
  computed: {
    ...mapGetters({
      post: 'getPostDetail'
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
      this.$router.push({name: 'index'})
    },
    openCommentInput(post) {

      const info = {
        id: post.id,
        author: post.author
      }

      this.$store.dispatch('setOriginalCommentInfo', info)
    }
  }
}
</script>
