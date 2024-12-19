import { NavData } from '../../.vitepress/theme/utils/navType'
import { computerBasic } from './computerBasic'
import { programmingLanguage } from './programmingLanguage'
import { database } from './database'
import { middleware } from './middleware'
import { elasticStack } from './elasticStack'

export const NAV_DATA: NavData[] = [
  ...computerBasic,
  ...programmingLanguage,
  ...database,
  ...middleware,
  ...elasticStack,
]
