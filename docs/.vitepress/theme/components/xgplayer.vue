<template>
  <div id="player-container">
    <div id="mse"></div>
  </div>
</template>

<script setup lang="ts">
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
import { onMounted, onUnmounted, computed } from "vue";

interface PropsType {
  url: string;
  poster: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  url: "",
  poster: "",
});

const baseURL = import.meta.env.BASE_URL || "";

// 计算完整的视频 URL 和封面 URL
const videoUrl = computed(() => (baseURL === "/" ? props.url : `${baseURL}${props.url}`));
const videoPoster = computed(() =>
  baseURL === "/" ? props.poster : `${baseURL}${props.poster}`
);

onMounted(() => {
  // 初始化播放器
  new Player({
    id: "mse", // 占位符容器 ID
    fluid: true, // 流式布局
    autoplay: false, // 不自动播放
    controls: true, // 显示控制栏
    url: videoUrl.value, // 视频 URL
    poster: videoPoster.value, // 视频封面
    lang: "zh", // 设置语言为中文
    volume: 0.5, // 默认音量
    download: true, // 启用下载按钮
    keyShortcut: true, // 启用快捷键
  });
});
</script>

<style scoped>
/* 播放器父容器 */
#player-container {
  position: relative;
  width: 100%; /* 占据父容器宽度 */
  padding-top: 56.25%; /* 16:9 高宽比 */
  height: 0;
}

/* 播放器容器 */
#mse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 自动适应父容器宽度 */
  height: 100%; /* 自动适应父容器高度 */
}
</style>
