<template>
  <div class="honor-container">
    <div class="honor-header">
      <h2 class="page-title">荣誉展示</h2>
      <div class="title-decoration">
        <span class="line"></span>
        <span class="dot"></span>
        <span class="line"></span>
      </div>
    </div>
    
    <div class="honor-content">
      <div class="honor-description">
        <p>启稚幼儿园凭借优质的教育理念和卓越的教学成果，荣获"市级示范幼儿园"称号，这是对我们多年来坚持高品质教育的肯定与认可。</p>
      </div>
      
      <div class="honor-image-wrapper">
        <div class="honor-image-container">
          <img src="/honor/honor-1.jpg" alt="市级示范幼儿园" class="honor-image" />
          <div class="image-caption">市级示范幼儿园荣誉证书</div>
        </div>
      </div>
      
      <div class="honor-footer">
        <p class="footer-text">我们将继续秉承"以爱为本、用心教育"的理念，为孩子们提供更优质的教育环境。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需任何数据或逻辑
</script>

<style scoped>
.honor-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  color: #333;
  line-height: 1.6;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.honor-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #409EFF;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px;
}

.line {
  height: 1px;
  width: 40px;
  background-color: #409EFF;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #409EFF;
  margin: 0 8px;
}

.honor-content {
  padding: 10px 0;
}

.honor-description {
  text-align: center;
  margin-bottom: 25px;
  font-size: 16px;
  color: #666;
  padding: 0 15px;
  line-height: 1.8;
}

.honor-image-wrapper {
  margin: 30px 0;
}

.honor-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.honor-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.honor-image:hover {
  transform: scale(1.02);
}

.image-caption {
  margin-top: 15px;
  font-size: 14px;
  color: #888;
  text-align: center;
}

.honor-footer {
  margin-top: 30px;
  text-align: center;
  padding: 20px 0;
  border-top: 1px dashed #eaeaea;
}

.footer-text {
  font-size: 15px;
  color: #409EFF;
  font-style: italic;
}

@media (max-width: 768px) {
  .honor-container {
    padding: 15px;
  }
  
  .page-title {
    font-size: 22px;
  }
  
  .honor-description {
    font-size: 15px;
  }
}
</style>
