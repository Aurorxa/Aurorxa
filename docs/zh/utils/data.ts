import type { NavData } from '../../.vitepress/theme/utils/type'

export const NAV_DATA: NavData[] = [
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
  },
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
    ]
  },
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
  {
    title: '消息中间件',
    items: [
      {
        icon: `/middleware/message/rabbitmq/logo.svg`,
        title: 'RabbitMQ',
        badge: {
          text: 'RabbitMQ',
          type: 'tip',
        },
        desc: '基于 Erlang 语言开发，支持多种协议，性能优异，延迟低，适用于对并发和实时性要求较高的场景。',
        link: 'https://rabbitmq.weiweixu.cn/'
      },
      {
        icon: `/middleware/message/kafka/logo.svg`,
        title: 'Kafka',
        badge: {
          text: 'Kafka',
          type: 'tip',
        },
        desc: '高吞吐量的分布式发布订阅消息系统，适用于日志收集和大数据处理等场景。',
        link: 'https://kafka.weiweixu.cn/'
      },
      {
        icon: `/middleware/message/zeromq/logo.svg`,
        title: 'ZeroMQ',
        badge: {
          text: 'ZeroMQ',
          type: 'tip',
        },
        desc: '高性能消息库，提供多种通信模式，适用于需要高吞吐量和低延迟的场景。',
        link: 'https://zeromq.weiweixu.cn/'
      },
      {
        icon: `/middleware/message/rocketmq/logo.svg`,
        title: 'RocketMQ',
        badge: {
          text: 'RocketMQ',
          type: 'tip',
        },
        desc: '阿里巴巴开源的分布式消息中间件，支持高可靠性和高可用性，适用于金融、电商等领域。',
        link: 'https://rocketmq.weiweixu.cn/'
      },
      {
        icon: `/middleware/message/pulsar/logo.svg`,
        title: 'Pulsar',
        badge: {
          text: 'Pulsar',
          type: 'tip',
        },
        desc: 'Apache 基金会的分布式消息系统，支持多租户和持久化存储，适用于云原生应用。',
        link: 'https://pulsar.weiweixu.cn/'
      },
      {
        icon: `/middleware/message/nsq/logo.png`,
        title: 'NSQ',
        badge: {
          text: 'NSQ',
          type: 'tip',
        },
        desc: '实时分布式消息平台，设计简单，易于部署和运维，适用于实时消息处理。',
        link: 'https://nsq.weiweixu.cn/'
      },
      {
        icon: `/middleware/message/emqx/logo.svg`,
        title: 'EMQX',
        badge: {
          text: 'EMQX',
          type: 'tip',
        },
        desc: '高性能、开源的分布式 MQTT 消息中间件，支持多种协议，广泛应用于物联网、车联网和实时消息系统。',
        link: 'https://emqx.weiweixu.cn/'
      },
    ]
  },
  {
    title: 'Elastic Stack 全家桶',
    items: [
      {
        icon: `/esk/es/logo.svg`,
        title: 'ElasticSearch',
        badge: {
          text: 'ElasticSearch',
          type: 'tip',
        },
        desc: 'Elasticsearch 是分布式搜索和分析引擎，支持全文检索、实时分析，常用于日志管理和数据查询。',
        link: 'https://es.weiweixu.cn/'
      },
      {
        icon: `/esk/logstash/logo.svg`,
        title: 'Logstash',
        badge: {
          text: 'Logstash',
          type: 'tip',
        },
        desc: '',
        link: 'https://logstash.weiweixu.cn/'
      },
      {
        icon: `/esk/es/logo.svg`,
        title: 'Kibana',
        badge: {
          text: 'Kibana',
          type: 'tip',
        },
        desc: '',
        link: 'https://kibana.weiweixu.cn/'
      },
      {
        icon: `/esk/es/logo.svg`,
        title: 'Beats',
        badge: {
          text: 'Beats',
          type: 'tip',
        },
        desc: 'Elasticsearch 是分布式搜索和分析引擎，支持全文检索、实时分析，常用于日志管理和数据查询。',
        link: 'https://beats.weiweixu.cn/'
      }
    ]
  },
]