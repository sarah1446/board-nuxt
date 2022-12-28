<template>
  <div> 
    <button v-if="pagingSetting.first !== null" @click="pagingSetting.first !== null ? onClickPaging(pagingSetting.first) : ''"> &lt; </button>
    <ul>
      <li :key="page" @click="onClickPaging(page)" v-for="page in pagingSetting.list"> 
        {{ page }}
      </li>
    </ul>
    <button v-if="pagingSetting.end !== null" @click="pagingSetting.end !== null ? onClickPaging(pagingSetting.end) : ''"> &gt; </button>
  </div>
</template>

<script>
export default {
  props: ["pagingSetting"],
  data() {
    return {
      
    }
  },
  methods: {
    onClickPaging(page) {
      this.$emit('setPageList', page)
    }
  }
}
</script>
