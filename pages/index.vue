<template>
  <div>
    <h1>Hello Nuxters! 👋</h1>
    <p>
      This page is rendered on the <strong>{{ rendering }}</strong>
    </p>
    <p v-if="rendering === 'server'">
      First load or hard refresh is done on server side.
    </p>
    <p v-if="rendering === 'client'">Navigation is done on client side.</p>
    <ul>
      <li>Refresh the page for server side rendering.</li>
      <li>Click the links to see client side rendering.</li>
    </ul>

    <NuxtLink to="/add">글쓰러가기</NuxtLink>
  </div>
</template>
<script>
import data from '../data';
console.log(data)

export default {
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  },

  mounted() {
    console.log('state ', this.$store.state.data);
  },
}
</script>
