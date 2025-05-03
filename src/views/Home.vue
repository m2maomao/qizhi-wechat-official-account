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
      <router-link to="/intro" class="nav-card">
        <div class="card-icon">
          <Icon name="shop-o" size="24" />
        </div>
        <h2 class="card-title">园所介绍</h2>
        <p class="card-desc">了解我们的教育理念和特色课程</p>
        <div class="card-arrow">
          <Icon name="arrow" />
        </div>
      </router-link>
      
      <router-link to="/honor" class="nav-card">
        <div class="card-icon">
          <Icon name="medal-o" size="24" />
        </div>
        <h2 class="card-title">荣誉展示</h2>
        <p class="card-desc">查看我们获得的荣誉和认证</p>
        <div class="card-arrow">
          <Icon name="arrow" />
        </div>
      </router-link>
      
      <router-link to="/register" class="nav-card">
        <div class="card-icon">
          <Icon name="edit" size="24" />
        </div>
        <h2 class="card-title">预约报名</h2>
        <p class="card-desc">填写信息，预约参观或报名</p>
        <div class="card-arrow">
          <Icon name="arrow" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Icon } from 'vant';
</script>

<style scoped>
.home-container {
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
  background-color: #f5f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: normal;
}

.header {
  text-align: center;
  padding: 1.5rem 1rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f5f7fa);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  margin-bottom: 1.2rem;
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
}

.logo-icon {
  color: #4fc08d;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 0.95rem;
  color: #666;
  letter-spacing: 0.5px;
}

.nav-cards {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1.2rem;
  margin-bottom: 1rem;
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  border: 1px solid rgba(0,0,0,0.03);
  overflow: hidden;
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
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  color: #4fc08d;
  margin-bottom: 0.8rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-desc {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
  line-height: 1.4;
}

.card-arrow {
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  transition: transform 0.3s ease;
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
