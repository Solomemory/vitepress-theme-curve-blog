<template>
  <div class="tools-page">
    <Banner type="page" title="效率工具" desc="none">
      <template #header-slot>
        <Button label="随机访问" @click="randomJump" />
      </template>
    </Banner>

    <section class="search-panel s-card">
      <div class="search-copy">
        <p class="eyebrow">Efficiency Tools</p>
        <h2 class="title">搜索你想用的工具</h2>
        <p class="desc">
          普通搜索会直接筛选当前工具库，AI 搜索先保留入口，后续可接入 n8n 工作流。
        </p>
      </div>

      <div class="search-main">
        <div class="search-mode">
          <button
            v-for="item in searchModeList"
            :key="item.value"
            :class="['mode-item', { active: searchMode === item.value }]"
            type="button"
            @click="changeSearchMode(item.value)"
          >
            <span class="mode-name">{{ item.label }}</span>
            <span class="mode-tip">{{ item.tip }}</span>
          </button>
        </div>

        <label class="search-box">
          <i class="iconfont icon-search"></i>
          <input
            v-model.trim="searchKeyword"
            :placeholder="searchPlaceholder"
            type="search"
            @keydown.enter="handleSearchAction"
          />
          <button
            v-if="searchKeyword"
            class="clear-btn"
            type="button"
            aria-label="清空搜索"
            @click="clearSearch"
          >
            清空
          </button>
        </label>

        <div class="search-actions">
          <Button :label="searchActionLabel" @click="handleSearchAction" />
          <span class="result-tip">{{ resultTip }}</span>
        </div>
      </div>
    </section>

    <section v-if="searchMode === 'normal'" class="result-section">
      <LinkList
        v-if="filteredToolsData.length"
        :listData="filteredToolsData"
        :useFriendsLink="true"
      />
      <div v-else class="empty-block s-card">
        <span class="empty-title">没有找到相关工具</span>
        <span class="empty-desc">试试更短的关键词，或换个工具名称、分类名搜索。</span>
      </div>
    </section>

    <section v-else class="ai-panel s-card">
      <div class="ai-card">
        <p class="ai-label">AI Search Preview</p>
        <h3>AI 搜索入口已预留</h3>
        <p>
          当前先展示交互骨架，后续你只需要把这里的 `handleAiSearch` 接到 n8n
          webhook 或代理接口即可。
        </p>
      </div>

      <div class="ai-grid">
        <div class="ai-item">
          <span class="item-name">当前关键词</span>
          <strong>{{ searchKeyword || "未输入" }}</strong>
        </div>
        <div class="ai-item">
          <span class="item-name">建议接入方式</span>
          <strong>n8n Webhook / API</strong>
        </div>
        <div class="ai-item">
          <span class="item-name">预期能力</span>
          <strong>语义搜索、推荐、总结</strong>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import toolsData from "@/assets/toolsData.mjs";
import Button from "@/components/Button.vue";

const searchModeList = [
  {
    value: "normal",
    label: "普通搜索",
    tip: "本地工具筛选",
  },
  {
    value: "ai",
    label: "AI 搜索",
    tip: "预留 n8n 接口",
  },
];

const searchMode = ref("normal");
const searchKeyword = ref("");

const allLinkData = computed(() => toolsData.flatMap((item) => item.typeList));

const normalizedKeyword = computed(() => searchKeyword.value.trim().toLowerCase());

const filteredToolsData = computed(() => {
  if (!normalizedKeyword.value) return toolsData;

  return toolsData
    .map((group) => {
      const keyword = normalizedKeyword.value;
      const matchedList = group.typeList.filter((tool) => {
        const searchSource = [group.typeName, group.typeDesc, tool.name, tool.desc, tool.url]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchSource.includes(keyword);
      });

      return {
        ...group,
        typeList: matchedList,
      };
    })
    .filter((group) => group.typeList.length);
});

const filteredCount = computed(() =>
  filteredToolsData.value.reduce((sum, group) => sum + group.typeList.length, 0),
);

const searchPlaceholder = computed(() =>
  searchMode.value === "normal"
    ? "搜索工具名称、描述、分类或网址"
    : "输入你的需求，例如：帮我找一个在线原型工具",
);

const searchActionLabel = computed(() => (searchMode.value === "normal" ? "立即筛选" : "开始 AI 搜索"));

const resultTip = computed(() => {
  if (searchMode.value === "ai") {
    return "AI 搜索暂未接入，当前为预留状态";
  }

  if (!normalizedKeyword.value) {
    return `共收录 ${allLinkData.value.length} 个工具`;
  }

  return `找到 ${filteredCount.value} 个相关工具`;
});

const syncSearchStateToUrl = () => {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);

  if (searchMode.value === "normal") {
    url.searchParams.delete("mode");
  } else {
    url.searchParams.set("mode", searchMode.value);
  }

  if (normalizedKeyword.value) {
    url.searchParams.set("keyword", searchKeyword.value.trim());
  } else {
    url.searchParams.delete("keyword");
  }

  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
};

const initSearchStateFromUrl = () => {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  const keyword = params.get("keyword");

  if (searchModeList.some((item) => item.value === mode)) {
    searchMode.value = mode;
  }

  if (keyword) {
    searchKeyword.value = keyword;
  }
};

const changeSearchMode = (mode) => {
  searchMode.value = mode;
};

const clearSearch = () => {
  searchKeyword.value = "";
};

const handleAiSearch = () => {
  $message.info("AI 搜索入口已预留，后续接入 n8n 后即可启用", {
    close: true,
    duration: 2200,
  });
};

const handleSearchAction = () => {
  if (searchMode.value === "ai") {
    handleAiSearch();
    return;
  }

  if (!normalizedKeyword.value) {
    $message.info(`当前共收录 ${allLinkData.value.length} 个工具`, {
      close: true,
      duration: 1800,
    });
    return;
  }

  if (!filteredCount.value) {
    $message.warning("没有匹配到工具，试试别的关键词", {
      close: true,
      duration: 1800,
    });
    return;
  }

  $message.success(`已筛选出 ${filteredCount.value} 个相关工具`, {
    close: true,
    duration: 1600,
  });
};

const randomJump = () => {
  try {
    const friendList = allLinkData.value;
    const randomList = friendList[Math.floor(Math.random() * friendList.length)];
    $message.warning(`您即将前往 ${randomList?.name}，请注意链接是否安全`, {
      close: true,
      duration: 2000,
    }, () => {
      if (randomList?.url) window.open(randomList.url, "_blank");
    });
  } catch (error) {
    console.error("友链随机访问时出错：", error);
    $message.error("友链随机访问时出错，请重试");
  }
};

onMounted(() => {
  initSearchStateFromUrl();
});

watch([searchMode, normalizedKeyword], () => {
  syncSearchStateToUrl();
});
</script>

<style lang="scss" scoped>
.tools-page {
  margin-bottom: 4rem;

  .banner-page {
    min-height: auto;
  }

  .search-panel {
    display: grid;
    grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.3fr);
    gap: 24px;
    margin-top: 2rem;
    padding: 28px;
    border: 1px solid var(--main-card-border);
    background:
      radial-gradient(circle at top left, var(--main-color-bg), transparent 36%),
      linear-gradient(135deg, var(--main-card-background), var(--main-card-second-background));

    .search-copy {
      .eyebrow {
        margin: 0 0 10px;
        font-size: 0.82rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: var(--main-color);
      }

      .title {
        margin: 0;
        border: 0;
        font-size: 2rem;
      }

      .desc {
        margin: 14px 0 0;
        line-height: 1.8;
        color: var(--main-font-second-color);
      }
    }

    .search-main {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .search-mode {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .mode-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      padding: 16px 18px;
      border: 1px solid var(--main-card-border);
      border-radius: 18px;
      background: color-mix(in srgb, var(--main-card-second-background), transparent 8%);
      transition:
        transform 0.3s,
        border-color 0.3s,
        box-shadow 0.3s,
        background-color 0.3s;
      cursor: pointer;

      .mode-name {
        font-size: 1.05rem;
        font-weight: 700;
      }

      .mode-tip {
        color: var(--main-font-second-color);
      }

      &.active {
        border-color: var(--main-color);
        background: color-mix(in srgb, var(--main-color-bg), var(--main-card-background) 58%);
        box-shadow: 0 12px 32px -22px var(--main-color);
        transform: translateY(-2px);
      }
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 62px;
      padding: 0 18px;
      border: 1px solid var(--main-card-border);
      border-radius: 18px;
      background-color: var(--main-card-background);

      .iconfont {
        font-size: 1.1rem;
        color: var(--main-color);
      }

      input {
        flex: 1;
        width: 100%;
        border: 0;
        background: transparent;
        font-size: 1rem;
        color: var(--main-font-color);
        outline: none;

        &::-webkit-search-cancel-button {
          display: none;
        }
      }

      .clear-btn {
        border: 0;
        padding: 8px 12px;
        border-radius: 999px;
        background-color: var(--main-card-second-background);
        color: var(--main-font-second-color);
        transition:
          color 0.3s,
          background-color 0.3s;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: var(--main-color);
        }
      }
    }

    .search-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;

      .result-tip {
        color: var(--main-font-second-color);
      }
    }
  }

  .result-section {
    margin-top: 0.6rem;
  }

  .empty-block,
  .ai-panel {
    margin-top: 2rem;
    padding: 28px;
    border: 1px solid var(--main-card-border);
  }

  .empty-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .empty-title {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .empty-desc {
      color: var(--main-font-second-color);
    }
  }

  .ai-panel {
    background:
      linear-gradient(135deg, color-mix(in srgb, var(--main-color-bg), transparent 35%), transparent),
      var(--main-card-background);

    .ai-card {
      max-width: 680px;

      .ai-label {
        margin: 0 0 10px;
        color: var(--main-color);
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      h3 {
        margin: 0;
        font-size: 1.7rem;
      }

      p {
        margin: 14px 0 0;
        line-height: 1.8;
        color: var(--main-font-second-color);
      }
    }

    .ai-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
      margin-top: 22px;
    }

    .ai-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 20px;
      border-radius: 18px;
      border: 1px solid var(--main-card-border);
      background-color: color-mix(in srgb, var(--main-card-second-background), transparent 8%);

      .item-name {
        color: var(--main-font-second-color);
      }

      strong {
        font-size: 1.08rem;
        line-height: 1.6;
      }
    }
  }

  @media (max-width: 992px) {
    .search-panel {
      grid-template-columns: 1fr;
    }

    .ai-panel .ai-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .search-panel {
      padding: 20px;

      .search-mode {
        grid-template-columns: 1fr;
      }

      .search-actions {
        align-items: flex-start;
      }
    }

    .empty-block,
    .ai-panel {
      padding: 20px;
    }
  }
}
</style>
