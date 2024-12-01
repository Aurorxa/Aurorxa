import type { NavData } from '../../.vitepress/theme/utils/type'

export const NAV_DATA: NavData[] = [
  {
    title: '编程语言',
    items: [
      {
        icon: `/c/logo.svg`,
        title: 'C/C++',
        badge: {
          text: 'C/C++',
          type: 'info',
        },
        desc: '适合底层系统开发',
        link: 'https://c.weiweixu.cn/'
      },
      {
        icon: '/java/logo.svg',
        title: 'Java',
        badge: {
          text: 'Java',
          type: 'tip',
        },
        desc: '适合企业级应用开发',
        link: 'https://java.weiweixu.cn/'
      },
    ]
  }
]