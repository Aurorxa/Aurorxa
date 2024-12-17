/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Confetti from "./components/Confetti.vue"
import SwitchLayout from './components/SwitchLayout.vue'
import "vitepress-markdown-timeline/dist/theme/index.css"
import './style/index.css'
import 'nprogress-v2/dist/index.css'
import { inBrowser } from 'vitepress'
import NavLinks from './components/NavLinks.vue'
import { NProgress } from 'nprogress-v2/dist/index.js'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    // 注册全局组件
    app.component('NavLinks', NavLinks)
    app.component('confetti', Confetti)
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      // 手动定义 onBeforeRouteChange
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      // 在页面加载完成时停止进度条
      router.onAfterRouteChanged = () => {
        NProgress.done() // 停止进度条
      }
    }
  },
  Layout() {
    return h(SwitchLayout)
  },
}