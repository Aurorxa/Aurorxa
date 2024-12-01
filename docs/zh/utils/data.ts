import type { NavData } from '../../.vitepress/theme/utils/type'

export const NAV_DATA: NavData[] = [
  {
    title: '计算机基础',
    items: [
      {
        icon: `/coa6/logo.svg`,
        title: '计组6件套',
        badge: {
          text: '计算机基础',
          type: 'tip',
        },
        desc: 'C 语言、计算机组成原理、数据结构和算法、操作系统、计算机网络、设计模式',
        link: 'https://coa6.weiweixu.cn/'
      },
    ]
  },
  {
    title: '编程语言',
    items: [
      {
        icon: `/c/logo.svg`,
        title: 'C/C++',
        badge: {
          text: 'C/C++',
          type: 'tip',
        },
        desc: 'C 是一种高效的通用编程语言，适合底层开发；C++ 是 C 的扩展，支持面向对象编程，适用于复杂系统和高性能应用。',
        link: 'https://c.weiweixu.cn/'
      },
      {
        icon: '/java/logo.svg',
        title: 'Java',
        badge: {
          text: 'Java',
          type: 'tip',
        },
        desc: 'Java 是一种跨平台、面向对象的编程语言，具有高安全性和稳定性，广泛应用于企业级开发、移动应用和网络服务。',
        link: 'https://java.weiweixu.cn/'
      },
      {
        icon: '/big-data/logo.svg',
        title: '大数据',
        badge: {
          text: 'Hadoop、Flink、Spark',
          type: 'tip',
        },
        desc: '处理和分析海量、多样、高速增长的数据集,以提取有价值的信息，常用于决策支持和预测分析。',
        link: 'https://big-data.weiweixu.cn/'
      },
      {
        icon: '/web-design/logo.svg',
        title: '前端',
        badge: {
          text: 'HTML、CSS、JavaScript',
          type: 'tip',
        },
        desc: '构建网页或应用用户界面的过程，涉及HTML、CSS和JavaScript等技术，重点在于设计和优化用户体验。',
        link: 'https://web-design.weiweixu.cn/'
      },
      {
        icon: '/linux/logo.svg',
        title: '云原生',
        badge: {
          text: 'Linux',
          type: 'tip',
        },
        desc: 'Linux 是一种开源、高稳定性的操作系统，广泛用于服务器、桌面和嵌入式设备，核心是 Linux 内核。',
        link: 'https://java.weiweixu.cn/'
      },
      {
        icon: '/go/logo.svg',
        title: 'Go',
        badge: {
          text: 'Go',
          type: 'tip',
        },
        desc: 'Go（Golang）是一种开源、静态类型的编程语言，注重简洁、高效和并发性能，广泛用于云计算和分布式系统开发。',
        link: 'https://go.weiweixu.cn/'
      },
      {
        icon: '/python/logo.svg',
        title: 'Python',
        badge: {
          text: 'Python',
          type: 'tip',
        },
        desc: 'Python 是一种简洁易用的高级编程语言，支持多种编程范式，广泛应用于数据分析、人工智能、Web开发和自动化等领域。',
        link: 'https://python.weiweixu.cn/'
      },
      {
        icon: '/db/logo.svg',
        title: '数据库',
        badge: {
          text: '数据库',
          type: 'tip',
        },
        desc: '数据库是用于存储、管理和检索数据的系统，可分为关系型（如 MySQL、PostgreSQL）和非关系型（如 MongoDB、Redis），广泛用于应用开发和数据处理。',
        link: 'https://db.weiweixu.cn/'
      },
    ]
  }
]