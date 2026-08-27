/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import HomeNavigation from './components/HomeNavigation.vue'
import './style/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('home-navigation', HomeNavigation)
  },
}
