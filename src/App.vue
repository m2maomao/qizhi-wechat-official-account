<template>
  <div class="app-container">
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// 移除了默认重定向到介绍页的逻辑
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f7fa;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

:root {
  --van-primary-color: #409EFF;
}



.main-content {
  flex: 1;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: #409EFF;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}


</style>
