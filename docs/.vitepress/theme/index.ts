/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Confetti from "./components/Confetti.vue"
import SwitchLayout from './components/SwitchLayout.vue'
import "vitepress-markdown-timeline/dist/theme/index.css"
import './style/index.css'
import NavLinks from './components/NavLinks.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('NavLinks', NavLinks)
    app.component('confetti', Confetti)
  },
  Layout() {
    return h(SwitchLayout)
  },
}