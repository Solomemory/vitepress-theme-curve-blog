---
title: Vue组件二次封装-终极版
tags: [Vue]
categories: [技术分享]
date: 2025-06-16
description:
articleGPT:
references:
  - title: Vue组件二次封装-终极版
    url: https://v.douyin.com/_95d12O6GPM/
---

## 完整代码

```vue
<template>
  <component :is="h(ElInput, { ...$attrs, ...props, ref: changeRef }, $slots)"></component>
</template>
<script setup lang="ts">
import { ElInput, type InputProps } from "element-plus";
import { getCurrentInstance, h } from "vue";

const props = defineProps<Partial<InputProps>>();
const vm = getCurrentInstance();

function changeRef(inputInstance) {
  vm.exposeProxy = vm.exposed = inputInstance || {};
}
</script>
```
