<template>
  <NuxtLayout>
    <v-btn @click="search = 1">Load Menu</v-btn>
    <v-btn @click="search = 2">Load Drag and Drop Sample</v-btn>

    <component :is="comp" :key="search" />
  </NuxtLayout>
</template>

<script setup>
const search = ref(1);

const comp = computed(() => {
  if (search.value === 1) {
    return defineAsyncComponent(() => import("@/components/menu/menu.vue"));
  }
  if (search.value === 2) {
    return defineAsyncComponent(
      () => import("@/components/dragAndDropSample/dragAndDropSample.vue"),
    );
  }
  return null;
});
</script>
