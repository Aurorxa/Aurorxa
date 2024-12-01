/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from "./components/ArticleMetadata.vue"
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick, h } from 'vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute, inBrowser } from 'vitepress'
import Confetti from "./components/Confetti.vue"
import SwitchLayout from './components/SwitchLayout.vue'
import HomeUnderline from "./components/HomeUnderline.vue"
import "vitepress-markdown-timeline/dist/theme/index.css"
import './style/index.css'
import xgplayer from "./components/xgplayer.vue"
import NavLinks from './components/NavLinks.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('xgplayer', xgplayer)
    app.component('NavLinks', NavLinks)
  },
  Layout() {
    return h(SwitchLayout)
  },
}