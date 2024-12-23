<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
const widgetContainer = ref<HTMLElement | null>(null);
onMounted(() => {
  // 检查是否已有加载的 script，避免重复加载
  if (!document.getElementById("LA-DATA-WIDGET")) {
    const script = document.createElement("script");
    script.id = "LA-DATA-WIDGET";
    script.crossOrigin = "anonymous";
    script.charset = "UTF-8";
    script.src = "https://v6-widget.51.la/v6/3Ki1BsybBJG95owJ/quote.js?theme=0&f=12";
    document.body.appendChild(script);

    // 插入脚本到组件的容器
    if (widgetContainer.value) {
      widgetContainer.value?.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  }
});

onUnmounted(() => {
  // 清理动态加载的内容
  const script = document.getElementById("LA-DATA-WIDGET");
  if (script) script.remove();
  // 清除生成的 DOM
  if (widgetContainer.value) {
    widgetContainer.value.innerHTML = "";
  }
});
</script>

<template>
  <div id="la-widget-container" ref="widgetContainer">xxx</div>
</template>

<style>
/* 添加容器样式 */
#la-widget-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1024px) {
  /* 针对桌面设备 */
  .la-widget {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 195%;
  }
}

@media (max-width: 1023px) {
  /* 针对平板和手机设备 */
  .la-widget {
    display: none;
  }
}
</style>
