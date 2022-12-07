<template>
  <div>
    {{ post.title }}
    {{ post.author }}
    {{ post.createdAt }}
    {{ post.content }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {}
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
  }
}
</script>
