<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

type Category = '全部' | '基础' | '语言' | '方向'

interface NavItem {
  title: string
  category: Exclude<Category, '全部'>
  icon: string
  description: string
  tags: string[]
  link: string
  accent: string
}

const categories: Category[] = ['全部', '基础', '语言', '方向']
const activeCategory = ref<Category>('全部')
const query = ref('')
const currentPage = ref(0)
const pageSize = ref(6)

const items: NavItem[] = [
  { title: '计算机科学', category: '基础', icon: 'ph:cpu-fill', description: '从二进制、指令与程序出发，建立完整的计算机科学知识框架。', tags: ['原理', '算法'], link: 'https://cs.weiweixu.cn/', accent: '#167453' },
  { title: '计组 6 件套', category: '基础', icon: 'ph:stack-fill', description: '串联 C 语言、计算机组成、数据结构、操作系统、网络与设计模式。', tags: ['体系结构', '网络'], link: 'https://coa6.weiweixu.cn/', accent: '#2563eb' },
  { title: 'C / C++', category: '语言', icon: 'devicon:cplusplus', description: '面向系统与高性能场景，掌握语言基础、内存模型和工程实践。', tags: ['系统', '性能'], link: 'https://cpp.weiweixu.cn/', accent: '#4f65b5' },
  { title: 'Java', category: '语言', icon: 'logos:java', description: '从语言特性到 JVM 与企业级开发，构建稳定的后端知识体系。', tags: ['JVM', '后端'], link: 'https://java.weiweixu.cn/', accent: '#d97706' },
  { title: 'Go', category: '语言', icon: 'logos:go', description: '聚焦简洁、高效与并发，服务云计算和分布式系统开发。', tags: ['并发', '云服务'], link: 'https://go.weiweixu.cn/', accent: '#0891b2' },
  { title: 'Python', category: '语言', icon: 'logos:python', description: '覆盖语言基础、自动化、数据处理与人工智能应用。', tags: ['自动化', 'AI'], link: 'https://python.weiweixu.cn/', accent: '#ca8a04' },
  { title: 'Rust', category: '语言', icon: 'simple-icons:rust', description: '以所有权和类型系统为核心，探索安全可靠的系统编程。', tags: ['安全', '系统'], link: 'https://rust.weiweixu.cn/', accent: '#c2410c' },
  { title: '前端开发', category: '方向', icon: 'logos:html-5', description: '围绕 HTML、CSS 和 JavaScript 构建现代 Web 用户体验。', tags: ['Web', '交互'], link: 'https://web.weiweixu.cn/', accent: '#e34f26' },
  { title: '大数据', category: '方向', icon: 'logos:hadoop', description: '学习海量数据的存储、计算与分析，理解数据工程核心链路。', tags: ['Hadoop', '计算'], link: 'https://bd.weiweixu.cn/', accent: '#eab308' },
  { title: '云原生', category: '方向', icon: 'logos:kubernetes', description: '使用容器、编排与 DevOps 方法构建可扩展的现代系统。', tags: ['Kubernetes', 'DevOps'], link: 'https://linux.weiweixu.cn/', accent: '#326ce5' },
  { title: '嵌入式开发', category: '方向', icon: 'logos:raspberry-pi', description: '覆盖硬件接口、驱动、RTOS 与嵌入式应用开发。', tags: ['硬件', 'RTOS'], link: 'https://emb.weiweixu.cn/', accent: '#c51a4a' },
  { title: '软件测试', category: '方向', icon: 'ph:check-circle-fill', description: '从测试策略到自动化与质量闭环，保障产品稳定交付。', tags: ['质量', '自动化'], link: 'https://qa.weiweixu.cn/', accent: '#7c3aed' },
]

const visibleItems = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return items.filter((item) => {
    const matchesCategory = activeCategory.value === '全部' || item.category === activeCategory.value
    const searchable = [item.title, item.description, ...item.tags].join(' ').toLowerCase()
    return matchesCategory && (!keyword || searchable.includes(keyword))
  })
})

const pageCount = computed(() => Math.max(1, Math.ceil(visibleItems.value.length / pageSize.value)))
const pageItems = computed(() => {
  const start = currentPage.value * pageSize.value
  return visibleItems.value.slice(start, start + pageSize.value)
})

function updatePageSize() {
  pageSize.value = window.innerWidth <= 560 ? 3 : window.innerWidth <= 820 ? 4 : 6
  currentPage.value = Math.min(currentPage.value, pageCount.value - 1)
}

function goToPage(page: number) {
  currentPage.value = (page + pageCount.value) % pageCount.value
}

let wheelLocked = false
let wheelTimer: ReturnType<typeof setTimeout> | undefined

function handleWheel(event: WheelEvent) {
  if (pageCount.value <= 1 || Math.abs(event.deltaY) < 8) return
  event.preventDefault()
  if (wheelLocked) return

  wheelLocked = true
  goToPage(currentPage.value + (event.deltaY > 0 ? 1 : -1))
  wheelTimer = setTimeout(() => {
    wheelLocked = false
  }, 450)
}

watch([query, activeCategory], () => {
  currentPage.value = 0
})

onMounted(() => {
  updatePageSize()
  window.addEventListener('resize', updatePageSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePageSize)
  if (wheelTimer) clearTimeout(wheelTimer)
})
</script>

<template>
  <main class="home-nav">
    <header class="home-header">
      <div class="home-header__copy">
        <p class="home-eyebrow">AURORXA KNOWLEDGE INDEX</p>
        <h1>技术知识导航</h1>
        <p>从基础原理到工程实践，快速进入每一个专题。</p>
      </div>
      <div class="home-count" aria-label="专题数量">
        <strong>{{ items.length }}</strong><span>个专题</span>
      </div>
    </header>

    <section class="home-toolbar" aria-label="筛选导航">
      <label class="home-search">
        <Icon icon="ph:magnifying-glass" aria-hidden="true" />
        <input v-model="query" type="search" placeholder="搜索专题、技术或方向" />
        <button v-if="query" type="button" title="清空搜索" @click="query = ''"><Icon icon="ph:x" aria-hidden="true" /></button>
      </label>
      <div class="home-tabs" role="tablist" aria-label="专题分类">
        <button v-for="category in categories" :key="category" type="button" role="tab" :aria-selected="activeCategory === category" :class="{ active: activeCategory === category }" @click="activeCategory = category">{{ category }}</button>
      </div>
    </section>

    <section class="home-results" aria-live="polite" @wheel="handleWheel">
      <div class="home-section-title">
        <h2>{{ activeCategory === '全部' ? '全部专题' : `${activeCategory}专题` }}</h2><span>{{ visibleItems.length }} 项</span>
      </div>
      <template v-if="visibleItems.length">
        <Transition name="page" mode="out-in">
          <div :key="`${activeCategory}-${query}-${currentPage}`" class="home-grid">
            <a v-for="item in pageItems" :key="item.title" class="home-card" :href="item.link" :style="{ '--card-accent': item.accent }">
              <div class="home-card__icon"><Icon :icon="item.icon" /></div>
              <div class="home-card__body">
                <div class="home-card__heading"><h3>{{ item.title }}</h3><Icon icon="ph:arrow-up-right" aria-hidden="true" /></div>
                <p>{{ item.description }}</p>
                <div class="home-card__tags"><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div>
              </div>
            </a>
          </div>
        </Transition>
      </template>
      <div v-else class="home-empty">
        <Icon icon="ph:magnifying-glass" /><p>没有找到匹配的专题</p><button type="button" @click="query = ''; activeCategory = '全部'">清除筛选</button>
      </div>
      <nav v-if="visibleItems.length && pageCount > 1" class="home-pagination" aria-label="专题分页">
        <button type="button" title="上一页" aria-label="上一页" @click="goToPage(currentPage - 1)"><Icon icon="ph:arrow-left" /></button>
        <div class="home-pagination__dots">
          <button v-for="page in pageCount" :key="page" type="button" :class="{ active: currentPage === page - 1 }" :aria-label="`第 ${page} 页`" :aria-current="currentPage === page - 1 ? 'page' : undefined" @click="goToPage(page - 1)" />
        </div>
        <span>{{ currentPage + 1 }} / {{ pageCount }}</span>
        <button type="button" title="下一页" aria-label="下一页" @click="goToPage(currentPage + 1)"><Icon icon="ph:arrow-right" /></button>
      </nav>
    </section>
  </main>
</template>

<style scoped>
.home-nav { display: flex; min-height: calc(100vh - var(--vp-nav-height)); max-width: 1184px; margin: 0 auto; padding: 34px 32px 24px; flex-direction: column; }
.home-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; padding: 12px 4px 28px; }
.home-eyebrow { margin: 0 0 8px; color: var(--vp-c-brand-1); font-size: 13px; font-weight: 600; letter-spacing: 0; }
.home-header h1 { margin: 0; color: #1d1d1f; font-size: 48px; font-weight: 650; line-height: 1.08; letter-spacing: 0; }
.dark .home-header h1 { color: #f5f5f7; }
.home-header__copy > p:last-child { margin: 12px 0 0; color: #6e6e73; font-size: 17px; font-weight: 400; }
.dark .home-header__copy > p:last-child { color: #a1a1a6; }
.home-count { display: grid; min-width: 98px; border-left: 1px solid rgba(0, 0, 0, .12); padding-left: 28px; }
.dark .home-count { border-left-color: rgba(255, 255, 255, .16); }
.home-count strong { color: #1d1d1f; font-size: 34px; font-weight: 600; line-height: 1; }
.dark .home-count strong { color: #f5f5f7; }
.home-count span { margin-top: 7px; color: #86868b; font-size: 12px; }
.home-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 16px; border: 1px solid rgba(0, 0, 0, .06); border-radius: 8px; padding: 10px; background: rgba(255, 255, 255, .72); box-shadow: 0 4px 18px rgba(0, 0, 0, .04); backdrop-filter: saturate(180%) blur(20px); }
.dark .home-toolbar { border-color: rgba(255, 255, 255, .08); background: rgba(35, 35, 37, .72); }
.home-search { display: flex; align-items: center; width: min(100%, 390px); height: 42px; padding: 0 12px; border: 1px solid transparent; border-radius: 8px; background: rgba(118, 118, 128, .1); color: var(--vp-c-text-3); transition: border-color .2s, box-shadow .2s; }
.home-search:focus-within { border-color: var(--vp-c-brand-1); box-shadow: 0 0 0 3px var(--vp-c-brand-soft); }
.home-search > svg { flex: 0 0 auto; font-size: 19px; }
.home-search input { width: 100%; border: 0; outline: 0; padding: 0 10px; background: transparent; color: var(--vp-c-text-1); font: inherit; font-size: 14px; }
.home-search button { display: grid; place-items: center; width: 26px; height: 26px; border: 0; padding: 0; background: transparent; color: var(--vp-c-text-3); cursor: pointer; }
.home-tabs { display: flex; gap: 2px; padding: 3px; border: 0; border-radius: 8px; background: rgba(118, 118, 128, .12); }
.home-tabs button { min-width: 62px; height: 34px; border: 0; border-radius: 6px; background: transparent; color: var(--vp-c-text-2); font: inherit; font-size: 13px; cursor: pointer; }
.home-tabs button.active { background: #fff; color: #1d1d1f; box-shadow: 0 1px 4px rgba(0,0,0,.14); font-weight: 600; }
.dark .home-tabs button.active { background: #515154; color: #fff; }
.home-results { display: flex; flex-direction: column; border: 1px solid rgba(0, 0, 0, .06); border-radius: 8px; padding: 16px; background: rgba(255, 255, 255, .56); box-shadow: 0 12px 36px rgba(0, 0, 0, .06); backdrop-filter: saturate(180%) blur(20px); }
.dark .home-results { border-color: rgba(255, 255, 255, .08); background: rgba(30, 30, 32, .62); }
.home-section-title { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; }
.home-section-title h2 { margin: 0; border: 0; padding: 0; color: var(--vp-c-text-1); font-size: 20px; letter-spacing: 0; }
.home-section-title span { color: var(--vp-c-text-3); font-size: 13px; }
.home-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: repeat(2, 160px); gap: 12px; }
.home-card { position: relative; display: flex; min-width: 0; gap: 14px; overflow: hidden; border: 1px solid rgba(0, 0, 0, .07); border-radius: 8px; padding: 16px; background: rgba(255, 255, 255, .88); color: inherit; text-decoration: none !important; box-shadow: 0 2px 10px rgba(0, 0, 0, .035); transition: border-color .25s, box-shadow .25s, transform .25s; }
.dark .home-card { border-color: rgba(255, 255, 255, .09); background: rgba(44, 44, 46, .88); }
.home-card:hover { border-color: rgba(0, 113, 227, .28); box-shadow: 0 10px 28px rgba(0,0,0,.1); transform: translateY(-3px); }
.home-card__icon { display: grid; flex: 0 0 44px; place-items: center; width: 44px; height: 44px; overflow: hidden; border-radius: 8px; background: color-mix(in srgb, var(--card-accent) 10%, #fff); color: var(--card-accent); }
.home-card__icon :deep(svg) { display: block; width: 28px !important; height: 28px !important; max-width: 28px; max-height: 28px; }
.home-card__body { display: flex; min-width: 0; flex: 1; flex-direction: column; }
.home-card__heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.home-card h3 { margin: 2px 0 0; color: var(--vp-c-text-1); font-size: 16px; line-height: 1.4; letter-spacing: 0; }
.home-card__heading > svg { flex: 0 0 auto; color: var(--vp-c-text-3); font-size: 17px; }
.home-card p { display: -webkit-box; overflow: hidden; margin: 8px 0 10px; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
.home-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }
.home-card__body .home-card__tags { margin-top: auto; }
.home-card__tags span { color: #86868b; font-size: 11px; font-weight: 500; }
.home-card__tags span + span::before { content: '·'; margin-right: 6px; color: var(--vp-c-divider); }
.home-empty { display: grid; min-height: 332px; place-items: center; align-content: center; border: 1px dashed var(--vp-c-divider); border-radius: 8px; color: var(--vp-c-text-3); }
.home-empty > svg { font-size: 28px; }
.home-empty p { margin: 10px 0 14px; }
.home-empty button { border: 0; background: transparent; color: var(--vp-c-brand-1); cursor: pointer; font: inherit; }
.home-pagination { display: flex; align-items: center; justify-content: center; gap: 12px; min-height: 38px; margin: 10px -16px -16px; border-top: 1px solid rgba(0, 0, 0, .06); padding: 7px 16px; background: rgba(255, 255, 255, .66); }
.dark .home-pagination { border-top-color: rgba(255, 255, 255, .08); background: rgba(35, 35, 37, .72); }
.home-pagination > button { display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid var(--vp-c-divider); border-radius: 50%; background: var(--vp-c-bg); color: var(--vp-c-text-2); cursor: pointer; transition: border-color .2s, color .2s; }
.home-pagination > button:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.home-pagination > span { min-width: 34px; color: var(--vp-c-text-3); font-size: 12px; text-align: center; }
.home-pagination__dots { display: flex; align-items: center; gap: 7px; }
.home-pagination__dots button { width: 7px; height: 7px; border: 0; border-radius: 50%; padding: 0; background: var(--vp-c-divider); cursor: pointer; transition: width .2s, border-radius .2s, background .2s; }
.home-pagination__dots button.active { width: 20px; border-radius: 4px; background: var(--vp-c-brand-1); }
.page-enter-active, .page-leave-active { transition: opacity .18s ease, transform .18s ease; }
.page-enter-from { opacity: 0; transform: translateX(12px); }
.page-leave-to { opacity: 0; transform: translateX(-12px); }
@media (max-width: 820px) { .home-nav { padding-top: 24px; } .home-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(2, 154px); } .home-toolbar { align-items: stretch; flex-direction: column; gap: 12px; } .home-search { width: 100%; } .home-tabs { align-self: flex-start; } }
@media (max-width: 560px) { .home-nav { min-height: auto; padding: 18px 14px 32px; } .home-header { align-items: flex-start; flex-direction: row; gap: 16px; padding: 8px 4px 22px; } .home-eyebrow { margin-bottom: 8px; font-size: 10px; } .home-header h1 { font-size: 31px; } .home-header__copy > p:last-child { font-size: 13px; } .home-count { min-width: 58px; padding-left: 14px; } .home-count strong { font-size: 24px; } .home-toolbar { align-items: stretch; margin-bottom: 12px; padding: 8px; } .home-tabs { width: 100%; } .home-tabs button { flex: 1; min-width: 0; } .home-results { padding: 12px; } .home-grid { grid-template-columns: 1fr; grid-template-rows: repeat(3, 134px); } .home-card { padding: 13px; } .home-section-title h2 { font-size: 18px; } .home-pagination { margin: 10px -12px -12px; } }
</style>
