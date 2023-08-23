<template>
  <div class="w-[100vw] h-[100vh] f-c-c fs-24">
    <div class="swiper w500 h300 border-blue border-solid relative">
      <div
        class="swiper-item w-[100%] h-[100%] absolute top-0 left-0"
        ref="swiperRefs"
        v-for="(item, index) in images"
        :key="index"
        :style="{
          zIndex: zIndex[index],
          maskImage: `url(${maskImg})`,
          maskSize: '1000px 100%',
          '-webkit-mask-position': `${currentActive == index ? position : 0}px`,
          maskRepeat: 'no-repeat',
          transition,
        }"
      >
        <img :src="item" class="w-[100%] h-[100%]" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import png1 from '../../assets/demo01/1.jpg';
import png2 from '../../assets/demo01/2.png';
import png3 from '../../assets/demo01/3.jpg';
import png4 from '../../assets/demo01/4.jpg';
import png5 from '../../assets/demo01/5.png';
import maskImg from '../../assets/demo01/mask4.jpg';

useTitle('01');

const zIndex = ref([5, 4, 3, 2, 1]);
const images = ref([png1, png2, png3, png4, png5]);
const swiperRefs = ref<HTMLDivElement[]>();
const currentActive = ref(0);
let position = ref(0);
let transition = ref('all 1s');

setInterval(() => {
  transition.value = 'all 1s';
  position.value = -1000;
  setTimeout(() => {
    zIndex.value.unshift(zIndex.value.pop() as number);
    position.value = 0;
    transition.value = 'none';
    currentActive.value = (currentActive.value + 1) % 5;
  }, 1000);
}, 3000);
</script>

<style scoped lang="less">
.swiper {
  &-item {
  }
}
</style>
