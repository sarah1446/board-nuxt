<template>
  <div class="add-page">
    <input v-model="title" type="text" class="title" placeholder="제목을 입력해주세요.">
    <textarea id="" v-model="content" name="" cols="30" rows="10" class="content"></textarea>
    <ul class="btn-box">
      <li><NuxtLink to="/">취소</NuxtLink></li>
      <li><button @click="savePost" class="save-btn">저장</button></li>
    </ul>
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
