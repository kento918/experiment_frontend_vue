<template>
  <div class="admin-menu">
    <header>
      <h1>管理メニュー</h1>
    </header>
    <nav>
      <ul>
        <li>
          <button @click="$router.push('/admin/contents')">
            記事を投稿する
          </button>
        </li>
        <!-- プロフィール変更機能は今後実装 -->
        <!-- <li>
          <button @click="goToProfile">
            プロフィールを変更
          </button>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<script setup>
// 管理メニュー用のロジックはここに記載
</script>

<style scoped>
.admin-menu {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

header h1 {
  color: #333;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  margin: 1rem 0;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369c70;
}
</style>
