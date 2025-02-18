<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Backtotop />
    </template>
    <template #layout-bottom>
      <DataPanel />
    </template>
    <template #doc-top>
      <NolebaseHighlightTargetedHeading />
    </template>
     <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
     <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>
    <template #home-features-after>
      <Confetti />
      <HomeUnderline />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import Backtotop from "./BackTop.vue";
import DataPanel from "./DataPanel.vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide, computed } from "vue";
import MouseClick from "./MouseClick.vue";
import MouseFollower from "./MouseFollower.vue";
import Confetti from "./Confetti.vue";
import HomeUnderline from "./HomeUnderline.vue";
// 获取 frontmatter 数据
const { frontmatter, isDark } = useData();
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

// 启用动画切换的逻辑
const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
