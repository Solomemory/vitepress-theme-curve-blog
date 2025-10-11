<template>
  <MyButton @click="handleClick"></MyButton>
</template>

<script setup>
import MyButton from "./MyButton.vue";
const handleClick = () => {
  setTimeout(() => {
    console.log("click");
  }, 100);
};
</script>

<style lang="scss" scoped></style>
