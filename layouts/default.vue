<template>
  <div>
    <topheaderpanel></topheaderpanel>
    <v-row>
      <v-col cols="1" />
        <v-col cols="10">
          {{ title }}
          <slot />
        </v-col>
      <v-col cols="1" />
    </v-row>
  </div>
</template>
<script setup>
const title = 'test View'

</script>