<template>
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script setup>
const items = [
    { label: 'Home', link: '/' },
  { label: 'About', link: '/about' }
]


</script>

<style scoped></style>
