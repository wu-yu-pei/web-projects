<template>
  <div class="root" :class="[isDark ? 'dark' : '']">
    <div class="page2 full f-c-c flex-col gap-40 dark:bg-black bg-white">
      <div
        :class="[
          isDark
            ? 'i-material-symbols-clear-day-rounded'
            : 'i-material-symbols-mode-night',
          'block-30',
          'dark:color-white',
        ]"
        @click="check"
      ></div>
      <div class="flex gap-40 w-[50%] flex-wrap">
        <div
          v-for="i in 12"
          class="item f-c-c block-100 border-solid bg-pink dark:bg-pink-700 dark:color-white rounded-5px"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';
useTitle('02');
const isDark = ref(false);

function check(ev: any) {
  const x = ev.clientX;
  const y = ev.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  const transition = (document as any).startViewTransition(async () => {
    const html: HTMLElement = document.getElementsByTagName('html')[0];

    isDark.value = !isDark.value;

    html.classList.toggle('dark');
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    const _clipPath = isDark.value ? [...clipPath].reverse() : clipPath;
    console.log(isDark.value, _clipPath);
    document.documentElement.animate(
      {
        clipPath: _clipPath,
      },
      {
        duration: 500,
        easing: 'ease-out',
        pseudoElement: isDark.value
          ? '::view-transition-old(a1)'
          : '::view-transition-new(a1)',
      }
    );
  });
}
</script>

<style lang="less">
.page2 {
  view-transition-name: a1;
}

::view-transition-old(a1),
::view-transition-new(a1) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(a1) {
  z-index: 1;
}
::view-transition-new(a1) {
  z-index: 999;
}

.dark::view-transition-old(a1) {
  z-index: 999;
}
.dark::view-transition-new(a1) {
  z-index: 1;
}
</style>
