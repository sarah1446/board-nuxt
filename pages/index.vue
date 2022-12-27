<template>
  <div>
    <NuxtLink to="/add">글쓰러가기</NuxtLink>
    <table style="margin:0 auto">
      <thead>
        <tr>
          <th>idx</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody v-if="currentPageList && currentPageList.length !== 0">
        <tr v-for="(post, index) in currentPageList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <NuxtLink :to="`post/${post.id}`">{{ post.title }}</NuxtLink>
          </td>
          <td>{{ post.author }}</td>
          <td>{{ post.createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <div> 
      <pagination @setPageList="setPageList" :pagingSetting="setPaging(this.totalCount, this.limit, this.currentPage)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '../components/pagination.vue';

export default {
  components: {
    Pagination
  },
  data() {
    return {
      limit: 3,
      blockSize: 3,
      currentPage: 1,
      currentPageList: [],
      totalData: [],
      totalCount: null,
      totalPage: null,
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getData'
    }),
  },
  created() {
  },
  mounted() {
    this.totalData = this.posts;
    this.totalCount = this.posts.length;
    this.totalPage = Math.ceil(this.posts.length / this.limit);

    // call
    this.setPageList(1)
  },
  methods: {
    setPageList(page) {
      // page에 해당하는 list 잘라서 보여주기
      this.currentPage = page;
      this.currentPageList = this.posts.slice((page - 1)*this.limit, (page - 1)*this.limit + this.limit);

      // setPaging()
      this.setPaging(this.totalCount, this.limit, page);
    },
    setPaging(totalCount, limit, page) {
      // 몇번째 block인지(5페이지는 4,5,6노출이니까 두번째 block)
      const blockNumbering = Math.ceil(page/this.blockSize);

      // 한번에 보여지는 페이지네이션 범위
      const paginationBlockRange = [];
      const blockFirstBtn = this.blockSize * (blockNumbering - 1) + 1;
      const blockLastBtn = this.blockSize * blockNumbering;
      console.log('first => ', blockFirstBtn, 'last => ', blockLastBtn)

      for(let index = blockFirstBtn; index <= blockLastBtn; index++) {
        paginationBlockRange.push(index);

      }
      // 누른값이 처음인지 마지막인지
      return paginationBlockRange;
    }
  },
  

}
</script>
