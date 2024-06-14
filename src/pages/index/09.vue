<template>
  <div
    class="relative w120 h50 rounded-10 bg-transparent lh-50 border border-solid text-center m10 hover:bg-yellow hover:cursor-pointer"
  >
    Pay
    <div class="points">
      <span
        class="point"
        v-for="(point, index) in points"
        :key="index"
        :style="{
          left: point.left,
          backgroundColor: point.color,
          animationDelay: `${index * 0.5}s`,
        }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const points = ref<any>([]);

onMounted(() => {
  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const randomBottom = () => {
    return Math.floor(Math.random() * 115) + 'px';
  };

  for (let i = 0; i < 7; i++) {
    points.value.push({
      left: randomBottom(),
      color: randomColor(),
    });
  }
});
</script>

<style scoped lang="less">
.points {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .point {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    bottom: -4px;
    animation: move linear 2s infinite;
    z-index: -1;
  }
}
@keyframes move {
  to {
    bottom: 100%;
  }
}
</style>
