<template>
  <div>

  </div>
</template>
<script setup>
const props = defineProps({
  
   item: {
    type: Object,
    required: true
  }
})

const name = props.item.name
const image = props.item.image
</script>
<style scoped>
</style>