<template>
  <div class="environment-container">
    <h2 class="page-title">园所环境</h2>
    
    <div class="environment-description">
      <p>
        启稚幼儿园拥有宽敞明亮的教室、丰富多彩的活动区域和安全舒适的户外游乐场地，
        为孩子们提供了一个理想的学习和成长环境。
      </p>
    </div>
    
    <div class="gallery">
      <div class="gallery-section">
        <h3>室内环境</h3>
        <div class="image-grid">
          <div class="gallery-item" v-for="(image, index) in indoorImages" :key="'indoor-'+index">
            <img :src="image.src" :alt="image.alt" />
            <div class="image-caption">{{ image.caption }}</div>
          </div>
        </div>
      </div>
      
      <div class="gallery-section">
        <h3>户外环境</h3>
        <div class="image-grid">
          <div class="gallery-item" v-for="(image, index) in outdoorImages" :key="'outdoor-'+index">
            <img :src="image.src" :alt="image.alt" />
            <div class="image-caption">{{ image.caption }}</div>
          </div>
        </div>
      </div>
      
      <div class="gallery-section">
        <h3>活动区域</h3>
        <div class="image-grid">
          <div class="gallery-item" v-for="(image, index) in activityImages" :key="'activity-'+index">
            <img :src="image.src" :alt="image.alt" />
            <div class="image-caption">{{ image.caption }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const indoorImages = ref([
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '教室环境',
    caption: '宽敞明亮的教室'
  },
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '阅读角',
    caption: '图书阅读角'
  },
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '多功能厅',
    caption: '多功能活动厅'
  }
]);

const outdoorImages = ref([
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '操场',
    caption: '宽阔的户外操场'
  },
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '游乐设施',
    caption: '丰富的户外游乐设施'
  },
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '种植园',
    caption: '儿童种植园地'
  }
]);

const activityImages = ref([
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '音乐教室',
    caption: '音乐活动室'
  },
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '美术教室',
    caption: '美术创作室'
  },
  {
    src: 'https://via.placeholder.com/400x300',
    alt: '科学探索区',
    caption: '科学探索区'
  }
]);
</script>

<style scoped>
.environment-container {
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

.environment-description {
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-section {
  margin-bottom: 3rem;
}

.gallery-section h3 {
  color: #409EFF;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #EBEEF5;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.image-caption {
  padding: 1rem;
  text-align: center;
  background-color: white;
  color: #606266;
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
