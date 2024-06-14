<template>
  <div relative border="1px solid" w100 h100 mt20 ml20>
    <div
      v-for="(item, index) of points"
      :style="{ top: item.x, left: item.y }"
      border="1px solid"
      absolute
      w10
      h10
      text-5
    >
      {{ index }}
    </div>
  </div>
  {{ time }}
</template>

<script setup>
const points = ref(null);

const p = [];
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    p.push({
      x: i * 10 + 'px',
      y: j * 10 + 'px',
    });
  }
}

let time = ref(0);

function clock() {
  time.value += 0.5;
  requestAnimationFrame(clock);
}
clock();
points.value = p;

watch(time, (newV, oldV) => {
  console.log(newV, oldV);
  // function updatePosition() {

  // }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      points.value[i * 10 + j].x = Math.sin(time.value) * 100 + 10 * i + 'px';
      points.value[i * 10 + j].y = Math.sin(time.value) * 100 + 10 * j + 'px';
    }
  }
});
</script>

<style scoped></style>
