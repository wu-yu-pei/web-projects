<template>
  <div
    class="ma-auto h-500 w600 relative grid grid-rows-2 grid-cols-2 grid-justify-center grid-justify-items-center grid-content-center grid-items-center"
  >
    <div v-for="(item, index) in images" class="w250 h200 hover:scale-110 item">
      <img
        crossorigin="anonymous"
        @mouseenter="enter($event.target, index)"
        @mouseleave="clear"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColortThief from 'colorthief';

import img1 from '../../assets/demo01/1.jpg';
import img2 from '../../assets/demo01/2.png';
import img3 from '../../assets/demo01/3.jpg';
import img4 from '../../assets/demo01/5.png';

const images = ref([img1, img2, img3, img4]);

const colorthief = new ColortThief();
const html = document.documentElement;
async function enter(item: any, index: number) {
  item.setAttribute('crossOrigin', '*');
  const res = await colorthief.getPalette(item, 3);
  console.log(res);
  const color = res.map((c) => `rgb(${c[0]},${c[1]},${c[2]})`);
  html.style.backgroundColor = color[0];
}

async function clear() {
  html.style.backgroundColor = '#fff';
}
</script>

<style scoped>
.item {
  display: flex;
  transition: all linear 0.2s;
}
.item img {
  margin: auto;
  width: 100%;
  height: auto;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
}
</style>
