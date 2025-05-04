<template>
  <div class="honor-container">
    <div class="honor-header animate-entry fade-down">
      <h2 class="page-title">荣誉展示</h2>
      <div class="title-decoration">
        <span class="line"></span>
        <span class="dot"></span>
        <span class="line"></span>
      </div>
    </div>
    
    <div class="honor-content">
      <div class="honor-description animate-entry fade-up" style="--delay: 0.2s">
        <p>启稚幼儿园凭借优质的教育理念和卓越的教学成果，荣获"市级示范幼儿园"称号，这是对我们多年来坚持高品质教育的肯定与认可。</p>
      </div>
      
      <div class="honor-image-wrapper animate-scroll scale-in" style="--delay: 0.3s">
        <div class="honor-image-container">
          <div class="honor-badge">市级示范幼儿园</div>
          <img src="/honor/honor-1.jpg" alt="市级示范幼儿园" class="honor-image" />
          <div class="image-caption">市级示范幼儿园荣誉证书</div>
        </div>
      </div>
      
      <div class="honor-footer animate-scroll fade-up" style="--delay: 0.4s">
        <p class="footer-text">我们将继续秉承"以爱为本、用心教育"的理念，为孩子们提供更优质的教育环境。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  // 页面加载时的初始动画
  const animateElements = document.querySelectorAll('.animate-entry');
  animateElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * index);
  });

  // 为滚动元素添加交叉观察器
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 对于已经显示的元素，可以停止观察
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  const scrollElements = document.querySelectorAll('.animate-scroll');
  scrollElements.forEach(el => {
    observer.observe(el);
  });
});
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
  overflow: hidden;
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
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #409EFF, transparent);
  animation: shimmer 3s infinite linear;
  background-size: 200% 100%;
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
  animation: pulse 2s infinite;
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
  position: relative;
  perspective: 1000px;
}

.honor-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.honor-image-container:hover {
  transform: rotateY(5deg);
}

.honor-badge {
  position: absolute;
  top: -15px;
  right: 20px;
  background: linear-gradient(135deg, #409EFF, #2c8af8);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
  z-index: 2;
  transform: translateZ(20px);
  transition: all 0.4s ease;
}

.honor-image-container:hover .honor-badge {
  transform: translateZ(30px) translateY(-5px);
  box-shadow: 0 8px 20px rgba(64, 158, 255, 0.4);
}

.honor-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateZ(0);
}

.honor-image-container:hover .honor-image {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transform: translateZ(10px);
}

.image-caption {
  margin-top: 15px;
  font-size: 14px;
  color: #888;
  text-align: center;
  transform: translateZ(5px);
  transition: transform 0.4s ease;
}

.honor-image-container:hover .image-caption {
  transform: translateZ(15px);
  color: #409EFF;
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
  position: relative;
  display: inline-block;
}

.footer-text::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #409EFF;
  transition: width 0.6s ease;
}

.honor-footer:hover .footer-text::after {
  width: 100%;
}

/* 动画类 */
.animate-entry, .animate-scroll {
  opacity: 0;
  transform-origin: center;
  transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
              transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  will-change: opacity, transform;
  transition-delay: var(--delay, 0s);
}

.animate-entry.visible, .animate-scroll.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1) rotate(0deg) !important;
}

.fade-up {
  transform: translate3d(0, 40px, 0);
}

.fade-down {
  transform: translate3d(0, -40px, 0);
}

.scale-in {
  transform: scale(0.8);
}

/* 动画关键帧 */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
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
  
  .honor-badge {
    right: 10px;
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
