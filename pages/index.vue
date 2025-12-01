<template>
   <div class="h-[10rem]"></div>
   <div class="blog-top-page">
      <!-- Self Introduction Section -->
      <section class="bg-gray-100 p-6 rounded-lg mb-8">
         <div class="">
            <h1 class="text-2xl font-bold">自己紹介</h1>
            <p class="mt-4 text-gray-700">
               ブログ運営者です。技術と創造の融合を通じて、日々の学びと挑戦を共有しています。
               主にWeb開発、AI技術、およびデザイン思考について記事を公開しています。
            </p>

            <img
               alt="プロフィール画像"
               src="@/assets/image/profile.png"
               class="w-20 h-20 rounded-full mt-6 mx-auto"
            />
         </div>
      </section>
   </div>
   <!-- Latest Blogs Section -->

   <section class="">
      <div class="max-w-6xl mx-auto">
         <h2>最新のブログ</h2>
         <div class="blog-grid">
            <!-- Blog Item 1 -->

            <div
               class="bg-white p-4 border border-gray-200 rounded-lg"
               v-for="(post, index) in latestPosts"
               :key="index"
            >
               <h3>{{ post.title }}</h3>
               <p>{{ post.excerpt }}</p>
               <a href="#" @click.prevent="goToBlog(post.slug)">続きを読む</a>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const blogPosts = ref([
   {
      title: "Vue.jsのベストプラクティス",
      excerpt:
         "Vue.js開発における効率的なコーディングスタイルと構成設計について解説します。",
      slug: "vue-best-practices",
   },
   {
      title: "AI技術の現状と今後の展望",
      excerpt:
         "機械学習やディープラーニングがもたらす社会への影響と技術的進展を考察します。",
      slug: "ai-technology-trends",
   },
   {
      title: "デザイン思考入門",
      excerpt:
         "UX/UI設計におけるユーザー中心のアプローチとプロトタイピング手法について",
      slug: "design-thinking-basics",
   },
]);

const latestPosts = computed(() => blogPosts.value.slice(0, 3));

const router = useRouter();

function goToBlog(slug) {
   // ルーティング処理（vue-routerが導入されている場合）
   router.push({ name: "BlogDetail", params: { slug } });
}
</script>
