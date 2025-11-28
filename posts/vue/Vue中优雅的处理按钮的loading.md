---
title: Vue中优雅的处理按钮的loading
tags: [Vue]
categories: [技术分享]
date: 2025-10-10
description:
articleGPT:
references:
  - title: Vue中优雅的处理按钮的loading
    url:
---

## 完整代码

:::tabs
== MyButton.vue

```vue
<template>
  <el-button v-bind="omit($attrs, 'onClick')" :loading="loading" @click="handleClick">
    <slot></slot>
  </el-button>
</template>

<script setup>
import { omit } from "lodash-es";
import { ref, useAttrs } from "vue";
defineOptions({
  // 禁用默认的继承
  inheritAttrs: false,
});
const attrs = useAttrs();
const loading = ref(false);

const handleClick = async () => {
  loading.value = true;
  try {
    await attrs.onClick?.();
  } finally {
    loading.value = false;
  }
};
</script>
```

== index.vue

```vue
<template>
  <MyButton @click="handleClick" type="primary">获取数据</MyButton>
  <div>{{ result }}</div>
</template>

<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
const result = ref("");
const asyncData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("数据获取成功");
    }, 1000);
  });
};
const handleClick = async () => {
  result.value = await asyncData();
};
</script>
```

:::
