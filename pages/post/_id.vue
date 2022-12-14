<template>
  <div>
    제목: {{ post.title }} <br/>
    작성자: {{ post.author }} <br/>
    작성일: {{ post.createdAt }} <br/>
    내용: {{ post.content }} <br/>
    <button @click="onClickModifyButton">수정</button>
    <button @click="onClickDeleteButton">삭제</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      postId: this.$route.params.id,
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
    }
  }
}
</script>
