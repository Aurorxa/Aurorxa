import { NavData } from '../../.vitepress/theme/utils/navType'

export const computerBasics: NavData[] = [
  {
    title: '数据库',
    items: [
      {
        icon: `/middleware/db/mysql/logo.svg`,
        title: 'MySQL',
        badge: {
          text: 'MySQL',
          type: 'tip',
        },
        desc: 'MySQL 是开源关系型数据库，性能高，支持SQL查询，广泛用于应用开发和数据管理。',
        link: 'https://mysql.weiweixu.cn/'
      },
      {
        icon: `/middleware/db/redis/logo.svg`,
        title: 'Redis',
        badge: {
          text: 'Redis',
          type: 'tip',
        },
        desc: 'Redis 是高性能的开源内存数据库，支持多种数据结构，常用于缓存、队列和实时数据处理。',
        link: 'https://redis.weiweixu.cn/'
      },
    ]
  },
]
