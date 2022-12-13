<template>
  <div>
    제목: {{ post.post.title }} <br/>
    작성자: {{ post.post.author }} <br/>
    작성일: {{ post.post.createdAt }} <br/>
    내용: {{ post.post.content }} <br/>
    <button @click="onClickModifyButton">수정</button>
    <button @click="onClickDeleteButton">삭제</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      post: 'getPostDetail'
    })
  },
  created() {
    this.$store.dispatch('getPostDetail', this.$route.params.id)
  },
  mounted() { 
  },
  methods: {
    onClickModifyButton() {
      this.$router.push({
        name: 'update',
        // 넘겨줘야 수정페이지에서 id값 나옴
        params: {
          id: this.$route.params.id, 
        }
      });
    },
    onClickDeleteButton() {
      this.$store.dispatch('deletePost', this.$route.params.id);
      this.$router.push({name: 'index'})
    }
  }
}
</script>
