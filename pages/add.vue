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

  methods: {
    savePost() {  
      const newDate = new Date(); // TODO: 오리지널값도 넘겨서 가지고 있기
      const month = newDate.getMonth();
      const date = newDate.getDate();

      const postInfo =  {
        id: newDate.getTime(),
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
