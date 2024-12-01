---
layout: doc
layoutClass: nav-layout
sidebar: false
prev: false
next: false
---
<style src="../../docs/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '../en/utils/data.ts'
</script>


# My navigation

<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>