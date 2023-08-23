<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';
const title = useTitle('05');
const route = useRoute();
console.log('----');

console.log(route.fullPath);
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
<style scoped></style>
