/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  // 如果有其他环境变量，继续添加
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
