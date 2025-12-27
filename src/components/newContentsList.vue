<template>
   <section>
      <div>
         <div class="max-w-6xl mx-auto">
            <h2>最新のブログ</h2>
            <div class="blog-grid">
               <div
                  class="bg-white p-4 border border-gray-200 rounded-lg"
                  v-for="(post, index) in latestPosts"
                  :key="index"
               >
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.excerpt }}</p>
                  <a href="#" @click.prevent="goToBlog(post.slug)"
                     >続きを読む</a
                  >
               </div>
            </div>
         </div>
         <div @click="goIDtest('this_is_new_test')">id test</div>
      </div>
   </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const latestPosts = ref([]);

async function fetchLatestPosts() {
   const response = await fetch("http://localhost:30022/api/v1/posts");
   console.log("this is new message");
   console.log(response);
   latestPosts.value = await response.json();
}

fetchLatestPosts();
</script>
