import { NavData } from '../../.vitepress/theme/utils/navType'

export const computerBasic: NavData[] = [
  {
    title: '计算机基础',
    items: [
      {
        icon: `/cs/logo.svg`,
        title: '计算机科学',
        badge: {
          text: '计算机科学',
          type: 'tip',
        },
        desc: '计算机的发展史、二进制、指令和程序、数据结构与算法、人工智能、计算机视觉、自然语言处理等。',
        link: 'https://cs.weiweixu.cn/'
      },
      {
        icon: `/coa6/logo.svg`,
        title: '计组6件套',
        badge: {
          text: '计组6件套',
          type: 'tip',
        },
        desc: 'C 语言、计算机组成原理、数据结构和算法、操作系统、计算机网络、设计模式。',
        link: 'https://coa6.weiweixu.cn/'
      },
    ]
  }
]
