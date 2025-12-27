<template>
  <div class="container">
    <h1>記事投稿ページ</h1>
    <p>ここに記事投稿用のフォームや編集画面が配置されます。</p>
    <router-link to="/admin/menu" class="back-button">メニューに戻る</router-link>
  </div>
</template>

<script setup>
// テスト用に空のスクリプトセクション
</script>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.back-button {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.back-button:hover {
  background-color: #369c6e;
}
</style>
