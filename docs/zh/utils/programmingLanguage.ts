import { NavData } from '../../.vitepress/theme/utils/navType'

export const programmingLanguage: NavData[] = [
  {
    title: '编程语言',
    items: [
      {
        icon: `/PL/c/logo.svg`,
        title: 'C/C++',
        badge: {
          text: 'C/C++',
          type: 'tip',
        },
        desc: 'C 是一种高效的通用编程语言，适合底层开发；C++ 是 C 的扩展，支持面向对象编程，适用于复杂系统和高性能应用。',
        link: 'https://c.weiweixu.cn/'
      },
      {
        icon: '/PL/java/logo.svg',
        title: 'Java',
        badge: {
          text: 'Java',
          type: 'tip',
        },
        desc: 'Java 是一种跨平台、面向对象的编程语言，具有高安全性和稳定性，广泛应用于企业级开发、移动应用和网络服务。',
        link: 'https://java.weiweixu.cn/'
      },
      {
        icon: '/PL/big-data/logo.svg',
        title: '大数据',
        badge: {
          text: 'Hadoop、Flink、Spark',
          type: 'tip',
        },
        desc: '处理和分析海量、多样、高速增长的数据集，以提取有价值的信息，常用于决策支持和预测分析。',
        link: 'https://big-data.weiweixu.cn/'
      },
      {
        icon: '/PL/web-design/logo.svg',
        title: '前端',
        badge: {
          text: 'HTML、CSS、JavaScript',
          type: 'tip',
        },
        desc: '构建网页或应用用户界面，涉及 HTML 、CSS 和 JavaScript 等技术，重点在于设计和优化用户体验。',
        link: 'https://web-design.weiweixu.cn/'
      },
      {
        icon: '/PL/linux/logo.svg',
        title: '云原生',
        badge: {
          text: 'Linux',
          type: 'tip',
        },
        desc: '云原生是一种基于云计算的架构理念，通过容器、微服务、DevOps 和动态编排技术构建可扩展、高效和弹性的应用系统。',
        link: 'https://linux.weiweixu.cn/'
      },
      {
        icon: '/PL/go/logo.svg',
        title: 'Go',
        badge: {
          text: 'Go',
          type: 'tip',
        },
        desc: 'Go（Golang）是一种开源、静态类型的编程语言，注重简洁、高效和并发性能，广泛用于云计算和分布式系统开发。',
        link: 'https://go.weiweixu.cn/'
      },
      {
        icon: '/PL/python/logo.svg',
        title: 'Python',
        badge: {
          text: 'Python',
          type: 'tip',
        },
        desc: 'Python 是一种简洁易用的高级编程语言，支持多种编程范式，广泛应用于人工智能、 Web 开发和自动化等领域。',
        link: 'https://python.weiweixu.cn/'
      },
      {
        icon: '/PL/rust/logo.svg',
        title: 'Rust',
        badge: {
          text: 'Rust',
          type: 'tip',
        },
        desc: 'Rust 是一门注重安全性和性能的系统编程语言，通过独特的所有权机制实现内存安全，适用于高性能和并发应用开发。',
        link: 'https://rust.weiweixu.cn/'
      },
      {
        icon: '/PL/emb/logo.svg',
        title: '嵌入式',
        badge: {
          text: '嵌入式',
          type: 'tip',
        },
        desc: 'Rust 是一门注重安全性和性能的系统编程语言，通过独特的所有权机制实现内存安全，适用于高性能和并发应用开发。',
        link: 'https://emb.weiweixu.cn/'
      },
    ]
  },
]
