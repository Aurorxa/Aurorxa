import { NavData } from '../../.vitepress/theme/utils/navType'

export const middleware: NavData[] = [
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
]
