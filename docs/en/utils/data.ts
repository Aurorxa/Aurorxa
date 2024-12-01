import type { NavData } from '../../.vitepress/theme/utils/type'

export const NAV_DATA: NavData[] = [
  {
    title: 'document',
    items: [
      {
        icon: `https://docs.touchair.cn/uppc/logo.svg`,
        title: 'UPPC document',
        badge: {
          text: 'UPPC',
          type: 'info',
        },
        desc: 'High-Precision Positioning',
        link: 'https://docs.touchair.cn/uppc/'
      },
      {
        icon: 'https://docs.touchair.cn/tag/logo.svg',
        title: 'Tag document',
        badge: {
          text: 'Tag',
          type: 'tip',
        },
        desc: 'This stunt is about to be lost',
        link: 'https://docs.touchair.cn/tag/'
      },
    ]
  }
]