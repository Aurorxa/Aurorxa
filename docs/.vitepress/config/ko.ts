import { koNav } from '../navbar'
import { koSidebar } from '../sidebar'
import dayjs from 'dayjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const koConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // 테마 설정
    lastUpdatedText: '마지막 업데이트', // 마지막 업데이트 표시 텍스트
    returnToTopLabel: '맨 위로', // 모바일 메뉴 텍스트 변경
    nav: koNav,
    sidebar: koSidebar, // 사이드바
    docFooter: { // 이전/다음 페이지 이름 사용자 정의
      prev: '이전 글', next: '다음 글'
    },
    darkModeSwitchLabel: '다크/라이트 모드', // 모바일 다크/라이트 모드 텍스트 수정
    footer: { // 하단 영역
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")} xudaxian`
    },
    outline: { // 개요 표시 1-6 레벨 제목
      level: [1, 6],
      label: '목차'
    },
    // 개요 상단 제목
    outlineTitle: '현재 페이지 개요',
  }
}
