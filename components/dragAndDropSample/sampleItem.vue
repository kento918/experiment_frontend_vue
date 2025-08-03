<template>
  <div>
      <v-img :src="image"/>
      {{ name }}
  </div>
</template>
<script setup>
import image1 from '@/assets/image/1.png'
import image2 from '@/assets/image/2.png'
import image3 from '@/assets/image/3.png'
const props = defineProps({
   item: Object
})

const name = props.item.text
const image = (props.item.id === 1 ? image1 : props.item.id === 2 ? image2 : image3)
</script>
<style scoped>
</style>