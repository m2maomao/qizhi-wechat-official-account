<template>
  <div class="home-container">
    <div class="header">
      <div class="logo-placeholder">
        <Icon name="shop" size="36" class="logo-icon" />
      </div>
      <h1 class="title">启稚幼儿园</h1>
      <p class="subtitle">蒙台梭利双语教育 · 培养未来世界公民</p>
    </div>
    
    <div class="nav-cards">
      <router-link to="/intro" class="nav-card" data-index="0">
        <div class="card-icon">
          <Icon name="shop-o" size="24" />
        </div>
        <h2 class="card-title">园所介绍</h2>
        <p class="card-desc">了解我们的教育理念和特色课程</p>
        <div class="card-arrow">
          <Icon name="arrow" />
        </div>
        <div class="card-bg-effect"></div>
      </router-link>
      
      <router-link to="/honor" class="nav-card" data-index="1">
        <div class="card-icon">
          <Icon name="medal-o" size="24" />
        </div>
        <h2 class="card-title">荣誉展示</h2>
        <p class="card-desc">查看我们获得的荣誉和认证</p>
        <div class="card-arrow">
          <Icon name="arrow" />
        </div>
        <div class="card-bg-effect"></div>
      </router-link>
      
      <router-link to="/register" class="nav-card" data-index="2">
        <div class="card-icon">
          <Icon name="edit" size="24" />
        </div>
        <h2 class="card-title">预约报名</h2>
        <p class="card-desc">填写信息，预约参观或报名</p>
        <div class="card-arrow">
          <Icon name="arrow" />
        </div>
        <div class="card-bg-effect"></div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Icon } from 'vant';
import { onMounted } from 'vue';

onMounted(() => {
  // 为标题添加打字机效果
  const title = document.querySelector('.title');
  const subtitle = document.querySelector('.subtitle');
  
  if (title && subtitle) {
    title.style.opacity = '1';
    subtitle.style.opacity = '1';
  }
  
  // 为卡片添加交错动画
  const cards = document.querySelectorAll('.nav-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, 300 + (index * 150));
  });
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(79, 192, 141, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(79, 192, 141, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(79, 192, 141, 0);
  }
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.home-container {
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
  background-color: #f5f7fa;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f9f4 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  overflow: hidden;
}

.header {
  text-align: center;
  padding: 1.5rem 1rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f5f7fa);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  margin-bottom: 1.2rem;
  position: relative;
}

.header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(79, 192, 141, 0.5), transparent);
  animation: shimmer 3s infinite linear;
  background-size: 200% 100%;
}

.logo-placeholder {
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8f5e9, #f0f9f4);
  border-radius: 50%;
  box-shadow: 0 6px 16px rgba(79, 192, 141, 0.15);
  animation: pulse 2s infinite, float 6s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

.logo-placeholder::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4fc08d, #42b983, #3eaf7c, #4fc08d);
  background-size: 400% 400%;
  z-index: -1;
  filter: blur(10px);
  opacity: 0.7;
  animation: gradientBG 15s ease infinite;
}

.logo-icon {
  color: #4fc08d;
  animation: scaleIn 0.5s ease-out forwards;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
  position: relative;
}

.subtitle {
  font-size: 0.95rem;
  color: #666;
  letter-spacing: 0.5px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

.nav-cards {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1.2rem;
  margin-bottom: 1rem;
  perspective: 1000px;
}

.nav-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.2rem 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  border: 1px solid rgba(0,0,0,0.03);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px) rotateX(10deg);
  transform-origin: top center;
}

.nav-card.show {
  opacity: 1;
  transform: translateY(0) rotateX(0);
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: #4fc08d;
  opacity: 0.8;
}

.nav-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.card-bg-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(79, 192, 141, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

.nav-card:hover .card-bg-effect {
  opacity: 1;
}

.card-icon {
  color: #4fc08d;
  margin-bottom: 0.8rem;
  transition: transform 0.5s ease;
}

.nav-card:hover .card-icon {
  transform: scale(1.2);
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
  transition: color 0.3s ease;
}

.nav-card:hover .card-title {
  color: #4fc08d;
}

.card-desc {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.card-arrow {
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-card:hover .card-arrow {
  transform: translate(5px, -50%);
  color: #4fc08d;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .home-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .header {
    padding: 2rem 1rem 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .nav-cards {
    flex-direction: row;
    padding: 0;
  }
  
  .nav-card {
    flex: 1;
  }
  
  .nav-card[data-index="0"] {
    transform: translateY(30px) rotate(-5deg);
  }
  
  .nav-card[data-index="1"] {
    transform: translateY(30px);
  }
  
  .nav-card[data-index="2"] {
    transform: translateY(30px) rotate(5deg);
  }
  
  .nav-card.show {
    transform: translateY(0) rotate(0);
  }
}

/* 针对较小屏幕的额外优化 */
@media (max-height: 700px) {
  .header {
    padding: 1rem 1rem 1.5rem;
    margin-bottom: 1rem;
  }
  
  .logo-placeholder {
    width: 60px;
    height: 60px;
    margin-bottom: 0.8rem;
  }
  
  .title {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }
  
  .subtitle {
    font-size: 0.85rem;
  }
  
  .nav-card {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }
  
  .card-desc {
    font-size: 0.85rem;
  }
}
</style>
