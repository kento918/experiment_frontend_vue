<template>
   <creaateContentsList />
   <profile />
   <btn @click="createUser()"></btn>
</template>

<script setup>
const createUser = () => {
   const name: string = "kento"
   const password: string = "1111"

   const res = await fetch()
   console.log(res)

}
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

const goIDtest = (test) => {
   const router = useRouter();
   router.push(`/contents/${test}`);
};

const latestPosts = computed(() => blogPosts.value.slice(0, 3));

const router = useRouter();

function goToBlog(slug) {
   router.push({ name: "BlogDetail", params: { slug } });
}
</script>

<style scoped></style>
