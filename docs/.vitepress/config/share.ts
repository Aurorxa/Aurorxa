import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"
import { La51Plugin } from 'vitepress-plugin-51la'

import { loadEnv } from 'vite'
const mode = process.env.NODE_ENV || 'development'
const { VITE_BASE_URL } = loadEnv(mode, process.cwd())

console.log('Mode:', process.env.NODE_ENV)
console.log('VITE_BASE_URL:', VITE_BASE_URL)

export const sharedConfig = defineConfig({
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', // 语言
  title: "文档中心", // 站点名称
  titleTemplate: "Hi，终于等到你", // 网页标题
  description: "许大仙", // 站点描述
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `${VITE_BASE_URL || '/'}logo.svg` }],
    // 网站 favicon.ico 图标
    ['link', { rel: "icon", href: `${VITE_BASE_URL || '/'}logo.svg`, type: "image/svg+xml" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "许大仙、Java、C、C++、大数据、前端、云原生、Go、Python" }],
  ],
  sitemap: {
    hostname: `https://www.weiweixu.cn${VITE_BASE_URL}`,
    lastmodDateOnly: true,
    transformItems: (items) => {
      items.push({
        url: `${VITE_BASE_URL}`,
        changefreq: 'daily',
        priority: 0.8
      })
      return items
    }
  },
  appearance: true, // 主题模式，默认浅色且开启切换
  base: VITE_BASE_URL,
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [
      La51Plugin({
        id: '3Ki1BsybBJG95owJ',
        ck: '3Ki1BsybBJG95owJ',
        apply: 'all'
      })
    ],
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-inline-link-preview'
      ],
    },
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/vitepress-plugin-inline-link-preview/client',
      ],
    },
    server: {
      port: 18089
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler" // or 'modern'
        }
      }
    },
  },
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    // 组件插入h1标题下
    config: (md) => {
      // 创建 markdown-it 插件
      md.use((md) => {
        const defaultRender = md.render
        md.render = function (...args) {
          const [content, env] = args
          const isHomePage = env.path === '/' || env.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          defaultContent = defaultContent.replace(/NOTE/g, '提醒')
            .replace(/TIP/g, '建议')
            .replace(/IMPORTANT/g, '重要')
            .replace(/WARNING/g, '警告')
            .replace(/CAUTION/g, '注意')
          // 返回渲染的内容
          return defaultContent
        }
      })
      md.use(timeline)
    }
  },
  themeConfig: { // 主题设置
    logo: '/logo.svg',  // 左上角logo
    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       zh: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换'
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  }
})
