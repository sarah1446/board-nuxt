<template>
  <div>
    <input type="text" v-model="title">
    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
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

  beforeDestroy() {
    console.log('state ', this.$store.state.data);
  },

  methods: {
    savePost() {  
      const newDate = new Date();
      const month = newDate.getMonth();
      const date = newDate.getDate();

      const postInfo =  {
        id: new Date().getTime(),
        title: this.title,
        content: this.content,
        author: 'sarah',
        createdAt: `${month + 1}월 ${date}일`,
        updatedAt: null,
      }

      this.$store.commit('setAddPost', postInfo)
    }
  }
}
</script>
