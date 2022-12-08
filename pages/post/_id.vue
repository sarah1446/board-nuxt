<template>
  <div>
    {{ post.title }}
    {{ post.author }}
    {{ post.createdAt }}
    {{ post.content }}

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
  },
  computed: {
    ...mapGetters({
      posts: 'getData',
      post: 'getPostDetail'
    })
  },
  created() {
    this.$store.dispatch('getPostDetail', this.$route.params.id)
  },
  mounted() { 
    // console.log(post); //왜 mounted인데 값이 선언이 안됐다고 나올까
  },
  
}
</script>
