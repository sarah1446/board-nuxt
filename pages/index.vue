<template>
  <div>
    <table style="margin:0 auto">
      <thead>
        <tr>
          <th>idx</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in posts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <NuxtLink :to="`post/${item.post.id}`">{{ item.post.title }}</NuxtLink>
          </td>
          <td>{{ item.post.author }}</td>
          <td>{{ item.post.createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <div> 
      <NuxtLink to="/add">글쓰러가기</NuxtLink>
    </div>
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
      posts: 'getData'
    })
  },
}
</script>
