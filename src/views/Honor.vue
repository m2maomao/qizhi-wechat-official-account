<template>
  <div class="honor-container">
    <h2 class="page-title">荣誉展示</h2>
    
    <div class="honor-grid">
      <div class="honor-card" v-for="(honor, index) in honors" :key="index">
        <div class="honor-image">
          <img :src="honor.image" :alt="honor.title" />
        </div>
        <div class="honor-info">
          <h3>{{ honor.title }}</h3>
          <p class="honor-date">{{ honor.date }}</p>
          <p class="honor-description">{{ honor.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const honors = ref([
  {
    title: '市级示范幼儿园',
    date: '2022年',
    description: '被评为市级示范幼儿园，表彰我园在教育教学、环境创设等方面的突出成就。',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: '优秀教育机构',
    date: '2021年',
    description: '获得区教育局颁发的"优秀教育机构"称号，肯定了我园的教育质量和管理水平。',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: '家长满意度五星园所',
    date: '2020年',
    description: '在家长满意度调查中获得五星评价，体现了家长对我园教育服务的高度认可。',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: '安全管理示范单位',
    date: '2019年',
    description: '被评为"安全管理示范单位"，表彰我园在安全管理方面的严格措施和出色表现。',
    image: 'https://via.placeholder.com/300x200'
  }
]);
</script>

<style scoped>
.honor-container {
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

.honor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.honor-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
}

.honor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.honor-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.honor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.honor-card:hover .honor-image img {
  transform: scale(1.05);
}

.honor-info {
  padding: 1.5rem;
}

.honor-info h3 {
  margin: 0 0 0.5rem;
  color: #409EFF;
}

.honor-date {
  color: #909399;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.honor-description {
  line-height: 1.6;
  color: #606266;
}

@media (max-width: 768px) {
  .honor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
