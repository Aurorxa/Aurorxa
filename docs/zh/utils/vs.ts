import { NavData } from '../../.vitepress/theme/utils/navType'

export const computerBasics: NavData[] = [
  {
    title: '版本控制',
    items: [
      {
        icon: `/git/logo.svg`,
        title: 'git',
        badge: {
          text: 'git',
          type: 'tip',
        },
        desc: 'Git 是一个分布式版本控制系统，用于高效管理代码版本、支持多人协作开发，并能够在本地独立操作和跟踪文件变化。',
        link: 'https://git.weiweixu.cn/'
      },
    ]
  },
]
