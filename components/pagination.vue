<template>
  <div class="pagination"> 
    <div class="">
      <button v-if="pagingSetting.first !== null" @click="pagingSetting.first !== null ? onClickPaging(pagingSetting.first) : ''"> &lt; </button>
      <ul>
        <li :key="page" @click="onClickPaging(page)" v-for="page in pagingSetting.list"> 
          <span :class="[pagingSetting.currentPage === page ? 'bg-amber-100' : null]" >{{ page }}</span>
        </li>
      </ul>
      <button v-if="pagingSetting.end !== null" @click="pagingSetting.end !== null ? onClickPaging(pagingSetting.end) : ''"> &gt; </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pagingSetting"],
  methods: {
    onClickPaging(page) {
      this.$emit('setPageList', page)
    }
  }
}
</script>
