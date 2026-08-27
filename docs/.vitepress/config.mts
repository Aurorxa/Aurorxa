import { defineConfig } from 'vitepress'

const base = process.env.VITE_BASE_URL || '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Aurorxa',
  titleTemplate: '技术知识导航',
  description: '从基础原理到工程实践的个人技术知识导航',
  base,
  cleanUrls: true,
  rewrites: {
    'zh/:rest*': ':rest*',
  },
  head: [
    ['link', { rel: 'icon', href: `${base}logo.svg`, type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#167453' }],
  ],
  sitemap: {
    hostname: `https://www.weiweixu.cn${base}`,
  },
  vite: {
    server: { port: 18089 },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Aurorxa',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aurorxa' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} 许大仙`,
    },
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '切换主题',
  },
})
