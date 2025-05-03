<template>
  <div class="intro-container">
    <h2 class="page-title">园所介绍</h2>
    <div class="content-section">
      <div class="image-placeholder">
        <img src="https://via.placeholder.com/600x400" alt="幼儿园外观" />
      </div>
      <div class="text-content">
        <h3>关于启智幼儿园</h3>
        <p>
          启智幼儿园创建于20XX年，是一所致力于为孩子提供优质教育环境的现代化幼儿园。
          我们秉承"以孩子为中心"的教育理念，注重培养孩子的创造力、想象力和社交能力。
        </p>
        <p>
          我们的教师团队由经验丰富、充满爱心的专业教育工作者组成，他们将为您的孩子提供全方位的关怀和指导。
        </p>
        <h3>我们的特色</h3>
        <ul>
          <li>小班化教学，确保每个孩子都能得到充分关注</li>
          <li>丰富多彩的课程设置，包括艺术、音乐、体育等多元化活动</li>
          <li>安全舒适的学习环境，配备现代化教学设施</li>
          <li>注重家园共育，定期举办家长开放日和亲子活动</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic goes here
</script>

<style scoped>
.intro-container {
  max-width: 1000px;
  margin: 0 auto;
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

.content-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-placeholder {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-placeholder img {
  width: 100%;
  height: auto;
  display: block;
}

.text-content {
  line-height: 1.6;
}

.text-content h3 {
  margin: 1.5rem 0 1rem;
  color: #409EFF;
}

.text-content ul {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.text-content li {
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .content-section {
    flex-direction: row;
  }
  
  .image-placeholder {
    flex: 1;
  }
  
  .text-content {
    flex: 1;
    padding-left: 2rem;
  }
}
</style>
