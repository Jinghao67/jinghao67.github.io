# 网站内容维护指南

这个网站现在按学术个人主页组织：

- `about`: 首页就是 about 摘要，完整 about 页面在 `src/content/pages/about.md`。
- `blog`: 文章放在 `src/content/posts/`，公开路径是 `/blog/`。
- `publications`: 论文和项目数据放在 `src/data/publications.ts`。
- `Ctrl+K`: 全站命令面板，自动包含 about、blog、publications、文章和 publication 条目。
- 黑白主题：右上角按钮切换，访客选择会保存在浏览器里。

## 1. 写一篇新文章

在 `src/content/posts/` 里创建一个 Markdown 文件，例如：

```txt
src/content/posts/my-trip.md
```

最小模板：

```md
---
title: "我的文章标题"
pubDatetime: 2026-06-08T16:00:00+08:00
featured: false
draft: false
tags:
  - 随笔
description: "一句话说明这篇文章写什么。"
---

这里写正文。
```

常用字段：

- `title`: 文章标题。
- `pubDatetime`: 发布时间，建议用 `YYYY-MM-DDTHH:mm:ss+08:00`。
- `featured`: 是否显示在首页精选区。
- `draft`: 是否草稿。设为 `true` 就不会发布。
- `tags`: 标签列表。
- `description`: 文章摘要，会出现在列表、搜索和 SEO 信息里。
- `ogImage`: 分享到社交平台时使用的封面图，可选。

## 2. 上传照片和文件

最简单的方式是把公开文件放进：

```txt
public/uploads/
```

例如：

```txt
public/uploads/tokyo-2026.jpg
public/uploads/notes.pdf
```

文章里这样引用图片：

```md
![东京街头](/uploads/tokyo-2026.jpg)
```

文章里这样引用文件：

```md
[下载笔记 PDF](/uploads/notes.pdf)
```

如果某张图片只属于某一篇文章，也可以把文章和图片放在同一个文件夹：

```txt
src/content/posts/tokyo-trip/index.md
src/content/posts/tokyo-trip/street.jpg
```

然后在 `index.md` 里写：

```md
![东京街头](./street.jpg)
```

## 3. 更新 publications

编辑：

```txt
src/data/publications.ts
```

每条 publication 大概长这样：

```ts
{
  title: "Your Research Project Title",
  authors: "Jinghao, Collaborator A, Collaborator B",
  venue: "arXiv preprint",
  year: 2026,
  summary: "One concise sentence about the central idea.",
  image: "/uploads/publication-placeholder.svg",
  selected: true,
  links: [
    { label: "PDF", href: "https://example.com/paper.pdf" },
    { label: "Code", href: "https://github.com/YOUR_NAME/project" },
  ],
}
```

`selected: true` 的条目会出现在首页的 selected publications；所有条目都会出现在 `/publications/`。

## 4. 本地预览

在项目根目录运行：

```bash
corepack pnpm dev
```

打开：

```txt
http://localhost:4321
```

## 5. 发布到 GitHub Pages

推荐用 GitHub Pages：稳定、免费，适合个人博客。

1. 在 GitHub 创建一个空仓库，推荐仓库名用 `YOUR_NAME.github.io`。
   例如你的 GitHub 用户名是 `jinghao`，仓库名就用 `jinghao.github.io`。
2. 在本地项目根目录运行：

```bash
git add .
git commit -m "Set up personal blog"
git remote add origin https://github.com/YOUR_NAME/YOUR_NAME.github.io.git
git push -u origin main
```

3. 打开 GitHub 仓库页面，进入 `Settings` -> `Pages`。
4. 在 `Build and deployment` 里，把 `Source` 选成 `GitHub Actions`。
5. 回到仓库的 `Actions` 页面，确认 `Deploy to GitHub Pages` workflow 运行成功。
6. 第一次部署成功后，网站会先出现在 GitHub Pages 默认地址：

```txt
https://YOUR_NAME.github.io/
```

不建议一开始用 `personal-blog` 这类普通仓库名，因为默认地址会变成 `https://YOUR_NAME.github.io/personal-blog/`，需要额外配置 `base`。你后面要挂域名，用 `YOUR_NAME.github.io` 最省事。

以后每次新增文章、照片或修改内容，提交并推送到 GitHub，GitHub Pages 会自动重新部署。

## 6. 绑定自己的域名

当前主域名已经设为：

```txt
www.jinghao67.top
```

在 GitHub 和腾讯云里按这几步做：

1. 在 GitHub 仓库进入 `Settings` -> `Pages`。
2. 在 `Custom domain` 填：

```txt
www.jinghao67.top
```

3. 点 `Save`。
4. 在腾讯云 DNS 解析里添加 `www` 的 CNAME 记录：

```txt
主机记录: www
记录类型: CNAME
线路类型: 默认
记录值: YOUR_NAME.github.io
TTL: 默认
```

把 `YOUR_NAME` 换成你的 GitHub 用户名。比如你的 GitHub 用户名是 `jinghao`，记录值就是 `jinghao.github.io`。

5. 如果后面还想让裸域名 `jinghao67.top` 也能访问，需要根域名 A 记录。GitHub 官方推荐 4 条 A 记录，但腾讯云免费 DNS 套餐可能会把它们当作负载均衡并拦截。可以先只加 1 条作为临时方案：

```txt
主机记录: @
记录类型: A
线路类型: 默认
记录值: 185.199.108.153
TTL: 默认
```

6. 等 DNS 生效后，回到 GitHub Pages，勾选 `Enforce HTTPS`。GitHub 官方说明 DNS 传播可能需要最多 24 小时。
