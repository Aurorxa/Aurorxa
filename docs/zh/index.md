---
layout: doc
layoutClass: nav-layout
sidebar: false
prev: false
next: false
---
<style src="../../docs/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '../zh/utils/data.ts'
</script>


# 我的导航

<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>