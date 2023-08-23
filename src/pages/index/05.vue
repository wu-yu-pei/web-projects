<template>
  <div class="music-three full"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

onMounted(() => {
  const containerEl = document.querySelector('.music-three')!;

  // 场景
  const scene = new THREE.Scene();

  // 相机
  const camera = new THREE.PerspectiveCamera(
    75,
    containerEl.clientWidth / containerEl.clientHeight,
    0.1,
    3000
  );
  camera.position.set(0, 0, 500);

  // 渲染器
  const renderer = new THREE.WebGLRenderer({});
  renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  document.querySelector('.music-three')!.appendChild(renderer.domElement);

  // 创建一个控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // 坐标系
  const axesHelper = new THREE.AxesHelper(containerEl.clientWidth / 5);
  scene.add(axesHelper);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = containerEl.clientWidth / containerEl.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  });
});
</script>

<style scoped lang="less"></style>
