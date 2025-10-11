<template>
  <el-button v-bind="omit($attrs, 'onClick')" :loading="loading" @click="handleClick"></el-button>
</template>

<script setup>
import { useAttrs } from "vue";
import { omit } from "lodash";
import { ref } from "vue";
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
