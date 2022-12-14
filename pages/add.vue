<template>
  <div>
    <input v-model="title" type="text">
    <textarea id="" v-model="content" name="" cols="30" rows="10"></textarea>
    <button @click="savePost">저장</button>
    <NuxtLink to="/">리스트로 가기</NuxtLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      createdAt: null
    }
  },

  methods: {
    savePost() {  
      const newDate = new Date();

      const postInfo =  {
        id: newDate.getTime(),
        title: this.title,
        content: this.content,
        author: 'sarah',
        createdAt: newDate,
        updatedAt: null,
        comments: []
      }

      this.$store.dispatch('addPost', postInfo);
      this.$router.push('/')
    }
  }
}
</script>
