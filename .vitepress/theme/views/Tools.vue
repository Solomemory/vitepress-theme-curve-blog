<!-- 友情链接 -->
<template>
  <div class="link">
    <!-- 顶图 -->
    <Banner type="page" title="效率工具" desc="与各位博主无限进步">
      <template v-slot:header-slot>
        <Button label="随机访问" @click="randomJump"></Button>
      </template>
    </Banner>
    <!-- 工具数据 -->
    <LinkList :listData="toolsData" :useFriendsLink="true" />
  </div>
</template>

<script setup>
import toolsData from "@/assets/toolsData.mjs";
import Button from "@/components/Button.vue";

// 全部友链
const allLinkData = computed(() => {
  return toolsData.flatMap((item) => item.typeList);
});

// 随机跳转
const randomJump = () => {
  try {
    const friendList = allLinkData.value;
    const randomList = friendList[Math.floor(Math.random() * friendList.length)];
    $message.warning(
      `您即将前往 ${randomList?.name}，请注意链接是否安全`,
      {
        close: true,
        duration: 2000,
      },
      () => {
        if (randomList?.url) window.open(randomList.url, "_blank");
      },
    );
  } catch (error) {
    console.error("友链随机访问时出错：", error);
    $message.error("友链随机访问时出错，请重试");
  }
};
</script>

<style lang="scss" scoped>
.link {
  margin-bottom: 4rem;
  .banner-page {
    // min-height: 440px;
    min-height: auto;
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      margin-bottom: auto;
      .menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        padding: 12px 18px;
        border-radius: 8px;
        background-color: var(--main-card-second-background);
        border: 1px solid var(--main-card-border);
        box-shadow: 0 8px 16px -4px var(--main-border-shadow);
        transition: all 0.3s;
        cursor: pointer;
        .iconfont {
          font-size: 18px;
          margin-right: 8px;
          transition: color 0.3s;
        }
        &.random {
          color: var(--main-color);
          .iconfont {
            color: var(--main-color);
          }
        }
        &:last-child {
          margin-left: 20px;
        }
        &:hover {
          color: #fff;
          background-color: var(--main-color);
          box-shadow: 0 8px 16px -4px var(--main-color-bg);
          .iconfont {
            color: #fff;
          }
        }
      }
    }
    .link-group {
      position: absolute;
      left: 0;
      top: 140px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: hidden;
      .link-group-item {
        display: flex;
        flex-direction: column;
        .link-logo {
          margin-right: 1.2rem;
          .link-logo-img {
            width: 120px;
            height: 120px;
            min-width: 120px;
            border-radius: 50%;
            overflow: hidden;
          }
          &:nth-of-type(2n) {
            margin-top: 1.2rem;
            transform: translate(-60px);
          }
        }
      }
    }
    @media (max-width: 800px) {
      min-height: auto;
      .menu,
      .link-group {
        display: none;
      }
    }
  }
}
</style>
