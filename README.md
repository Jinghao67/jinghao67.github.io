# Jinghao

这是一个基于 AstroPaper 的个人主页和博客。首页采用学术个人主页风格，包含 about、blog、publications、Ctrl+K 命令面板和明暗主题切换。

## 常用命令

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm build
```

本地预览默认地址是 `http://localhost:4321`。

## 写新文章

在 `src/content/posts/` 下新建一个 `.md` 文件，例如：

```txt
src/content/posts/my-new-post.md
```

文章开头需要 frontmatter：

```md
---
title: "文章标题"
pubDatetime: 2026-06-08T16:00:00+08:00
featured: false
draft: false
tags:
  - 随笔
description: "一句话摘要，会显示在文章列表和搜索结果里。"
---

正文从这里开始。
```

更详细的写作和上传说明见 `BLOG_GUIDE.md`。

## 论文和项目

Publications 数据在：

```txt
src/data/publications.ts
```

修改这个文件后，首页 selected publications 和 `/publications/` 页面会自动更新。

## 发布

项目已经配置 GitHub Pages 自动部署。推送到 GitHub 后，在仓库 `Settings` -> `Pages` 里选择 `GitHub Actions` 作为发布源即可。

推荐把 GitHub 仓库命名为 `YOUR_NAME.github.io`，这样默认地址就是根路径，后续绑定自定义域名也最简单。

当前自定义域名配置为：

```txt
https://www.jinghao67.top/
```
