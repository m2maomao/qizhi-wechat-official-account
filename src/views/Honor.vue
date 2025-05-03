<template>
  <div class="honor-container">
    <h2 class="page-title">荣誉展示</h2>
    
    <div class="honor-image-container">
      <img src="/honor/honor-1.jpg" alt="市级示范幼儿园" class="honor-image" />
    </div>
  </div>
</template>

<script setup>
// 无需任何数据或逻辑
</script>

<style scoped>
.honor-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #409EFF;
  position: relative;
}

.page-title:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #409EFF;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.honor-image-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.honor-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
