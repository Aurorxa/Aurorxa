import { NavData } from '../../.vitepress/theme/utils/navType'

export const elasticStack: NavData[] = [
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
        desc: '数据收集、处理和转发工具，将数据从不同来源传输到 Elasticsearch。',
        link: 'https://logstash.weiweixu.cn/'
      },
      {
        icon: `/esk/kibana/logo.svg`,
        title: 'Kibana',
        badge: {
          text: 'Kibana',
          type: 'tip',
        },
        desc: '数据可视化工具，用于展示和分析 Elasticsearch 中的数据。',
        link: 'https://kibana.weiweixu.cn/'
      },
      {
        icon: `/esk/beats/logo.svg`,
        title: 'Beats',
        badge: {
          text: 'Beats',
          type: 'tip',
        },
        desc: '轻量级数据采集工具，用于从各类设备收集数据并发送到 Logstash 或 Elasticsearch 。',
        link: 'https://beats.weiweixu.cn/'
      }
    ]
  },
]
