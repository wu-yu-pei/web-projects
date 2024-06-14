<template>
  <div
    class="w320 h320 border-1 border-solid grid grid-cols-3 grid-rows-3 items-center justify-items-center ml-10 mt-10 border-rounded-10 pa-10 gap-10"
  >
    <div :class="counter === 1 ? 'bg-blue' : ''" class="raffle-block">1</div>
    <div :class="counter === 2 ? 'bg-blue' : ''" class="raffle-block">2</div>
    <div :class="counter === 3 ? 'bg-blue' : ''" class="raffle-block">3</div>
    <div :class="counter === 8 ? 'bg-blue' : ''" class="raffle-block">8</div>
    <div
      class="color-red raffle-block hover:cursor-pointer hover:bg-yellow"
      @click="begin"
    >
      Begin
    </div>
    <div :class="counter === 4 ? 'bg-blue' : ''" class="raffle-block">4</div>
    <div :class="counter === 7 ? 'bg-blue' : ''" class="raffle-block">7</div>
    <div :class="counter === 6 ? 'bg-blue' : ''" class="raffle-block">6</div>
    <div :class="counter === 5 ? 'bg-blue' : ''" class="raffle-block">5</div>
  </div>
</template>

<script setup lang="ts">
import { useInterval } from '@vueuse/core';

const { counter, reset, pause, resume } = useInterval(200, { controls: true });

pause();

// 一轮多少次
const circle = 9;
// 需要运动的次数
const minCircleCount = 2;
// 已旋转轮次
let target = Math.floor(Math.random() * 10);
let circleCount = 0;

watch(
  () => counter.value,
  (n, o) => {
    if (n % circle === 0) {
      counter.value = 1;
      circleCount++;
    }
    if (
      circleCount * circle + counter.value ===
      circle * minCircleCount + target
    ) {
      pause();
    }
  }
);

function begin() {
  reset();
  resume();
  counter.value = 1;
  circleCount = 0;
  target = Math.floor(Math.random() * 10);
}
</script>

<style scoped></style>
