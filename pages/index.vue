<template>
  <div class="board-list">
    <div class="board-list-content" v-if="currentPageList && currentPageList.length !== 0">
      <div class="post" v-for="(post, index) in currentPageList" :key="index">
        <NuxtLink :to="`post/${post.id}`">
          <p class="title">{{ post.title }}</p>
        </NuxtLink>
        <div class="post-info">
          <div class="author"><span>{{ post.author }}</span></div>
          <div class="date"><span>{{ post.createdAt }}</span></div>
        </div>
      </div>
    </div>

    <div class="button-area">
      <NuxtLink to="/add"><span>글쓰러가기</span></NuxtLink>
    </div>
    <div> 
      <pagination @setPageList="setPageList" :pagingSetting="setPaging(this.totalCount, this.limit, this.blockSize, this.currentPage)" />
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
      limit: 6,
      blockSize: 4,
      currentPage: 1,
      currentPageList: [],
      totalCount: this.$store.state.data.length,
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getReverseData'
    }),
  },
  created() {
  },
  mounted() {
    this.setPageList(1)
  },
  methods: {
    setPageList(page) {
      // page에 해당하는 list 잘라서 보여주기
      this.currentPage = page;
      this.currentPageList = this.posts.slice((page - 1) * this.limit, (page - 1) * this.limit + this.limit);

      this.setPaging(this.totalCount, this.limit, this.blockSize, page);
    },
    setPaging(totalCount, limit, blockSize, page) {
      const totalPage = Math.ceil(totalCount/limit);
      const currentPage = page;

      const first =
        currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null 
      const end =
        totalPage !== currentPage
          ? parseInt(currentPage, 10) + parseInt(1, 10)
          : null

      const startIndex = (Math.ceil(currentPage / blockSize) - 1) * blockSize + 1
      const endIndex =
        startIndex + blockSize > totalPage ? totalPage : startIndex + blockSize - 1

      const list = []
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index)
      }
      return { first, end, list, currentPage }
    },
  }
}
</script>
