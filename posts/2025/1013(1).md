---
title: sortablejs封装组合式函数和组件
tags: [Vue3]
categories: [技术分享]
date: 2025-10-13
description:
articleGPT:
---

## CLI

:::tabs
== index.vue

```vue
<template>
  <ul ref="container" class="flex flex-col gap-2 select-none">
    <li v-for="item in list" :key="item" class="w-30 bg-amber-500 cursor-move">
      {{ item }}
    </li>
  </ul>
  <br />
  <VueSortable v-model="list" :animation="200">
    <div v-for="item in list" :key="item" class="w-30 bg-amber-500 cursor-move my-2">
      {{ item }}
    </div>
  </VueSortable>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { useSortable } from "./useSortable";
import VueSortable from "./VueSortable.vue";

const list = ref([1, 2, 3, 4, 5]);
const containerRef = useTemplateRef("container");
useSortable(containerRef, list, {
  animation: 300,
});
</script>
```

== useSortable.ts

```typescript
import Sortable from "sortablejs";
import { onMounted, onUnmounted, shallowRef, type Ref, type ShallowRef } from "vue";
export const useSortable = (
  container: Readonly<ShallowRef<HTMLElement | null>>,
  list: Ref<any[]>,
  options?: Sortable.Options,
) => {
  const instance = shallowRef<Sortable>();
  onMounted(() => {
    if (!container.value) {
      return;
    }
    instance.value = Sortable.create(container.value, {
      ...options,
      onUpdate(event) {
        options?.onUpdate?.(event);
        const { newIndex, oldIndex } = event;
        if (oldIndex !== undefined && newIndex !== undefined) {
          const oldValue = list.value[oldIndex];
          list.value.splice(oldIndex, 1);
          list.value.splice(newIndex, 0, oldValue);
        }
      },
    });
    onUnmounted(() => {
      instance.value?.destroy();
    });
  });

  return {
    instance,
  };
};
```

== VueSortable.vue

```vue
<template>
  <div ref="container">
    <slot :instance></slot>
  </div>
</template>

<script setup lang="ts">
import type { SortableOptions } from "sortablejs";
import { useAttrs, useTemplateRef } from "vue";
import { useSortable } from "./useSortable";
interface SortableProps extends /* @vue-ignore */ SortableOptions {}
withDefaults(defineProps<SortableProps>(), {});

const modelValue = defineModel<any[]>({
  default: () => [],
});

const container = useTemplateRef("container");
const instance = useSortable(container, modelValue, useAttrs());

defineExpose(instance);
</script>
```
