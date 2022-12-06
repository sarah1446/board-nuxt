<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>idx</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.createdAt }}</td>
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
  }
}
</script>
