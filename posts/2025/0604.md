---
title: 检查npm的依赖包是否有新的版本
tags: [ npm ]
categories: [ 技术分享 ]
date: 2025-06-04
description: 详细讲解使用npm-check-updates工具检查并更新npm依赖包版本的方法，包含安装指南和常用命令示例。
articleGPT: 这篇文章介绍了如何使用 npm-check-updates 工具检查和更新 npm 依赖包版本。
references:
  - title: npm-check-updates
    url: https://www.npmjs.com/package/npm-check-updates
---

## 安装

```bash
# 安装依赖
npm  i -g npm-check-updates
```

## 使用

```bash
# 查看相关命令
ncu --help
# 检查当前项目中有没有哪些依赖包可更新
ncu
# 更新package.json
ncu -u 
# 如果有更新的包，删除node_modules重新安装依赖
npm install
```