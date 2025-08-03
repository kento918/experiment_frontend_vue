<template>
  <div class="container">
    <!-- ドラッグ可能な要素群 -->
    <div class="draggable-area">
      <div 
        v-for="(item, index) in items" 
        :key="item.id"
        class="draggable-item"
        draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragend="handleDragEnd"
      >
        {{ item.text }}
      </div>
    </div>

    <!-- ドロップターゲット -->
    <div class="target-area">
      <img :src=image alt="背景画像">
      <div 
        class="placement-area"
        @dragover.prevent="handleDragOver"
        @drop.prevent="handleDrop"
        
      >
        <div 
          v-for="(item, index) in placedItems" 
          :key="item.id"
          class="placed-item"
          :style="{ left: `${item.position.x}px`, top: `${item.position.y}px` }"
          @click="deleteItem(index)"
        >
          <SampleItem :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import image from '@/assets/image/sample.png'
import SampleItem from './sampleItem.vue'

const items = ref([
  { id: 1, text: 'アイテム1' },
  { id: 2, text: 'アイテム2' },
  { id: 3, text: 'アイテム3' }
])
const placedItems = ref([])
const draggedItem = ref(null)

const handleDragStart = (e, item) => {
  draggedItem.value = item
  e.dataTransfer.setData('text/plain', item.id)
  console.log(e)
  
  // ドラッグ中の見た目
  e.target.style.opacity = '0.5'
}

const handleDragEnd = (e) => {
  e.target.style.opacity = '1'
  draggedItem.value = null
}

const handleDragOver = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}

const handleDrop = (e) => {
  const itemId = parseInt(e.dataTransfer.getData('text/plain'))
  const item = items.value.find(item => item.id === itemId)
  
  if (!item) return
  
  // ドロップ位置の計算
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  // アイテムの配置
  placedItems.value.push({
    ...item,
    position: { x, y }
  })
  
  // 元のリストから削除
  // items.value = items.value.filter(i => i.id !== itemId)
}
const deleteItem = (index) => {
  placedItems.value.splice(index, 1)
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.draggable-area {
  min-height: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  background: #f5f5f5;
}

.target-area {
  position: relative;
  width: 100%;
  height: 100%;
}

.placement-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.draggable-item {
  padding: 10px;
  margin: 5px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: move;
  user-select: none;
}

.placed-item {
  position: absolute;
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: move;
  z-index: 1000;
}

/* ドラッグ中のスタイル */
[draggable] {
  transition: opacity 0.2s ease;
}
</style>