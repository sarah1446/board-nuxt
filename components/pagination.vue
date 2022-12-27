<template>
  <div>
    <button> &lt; </button>
    <ul>
      <li @click="onClickPaging(page)" v-for="page in pagingSetting" :key="page"> 
        {{ page }}
      </li>
    </ul>
    <button> &gt; </button>
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
   
  },
  computed: {
  },
  created() {
  },
  mounted() {
  }
}
</script>
