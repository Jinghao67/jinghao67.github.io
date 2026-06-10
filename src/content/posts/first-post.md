---
title: "第一篇博客"
pubDatetime: 2026-06-08T16:00:00+08:00
featured: true
draft: false
tags:
  - 随笔
  - 开始
description: "这个博客的第一篇文章，用来确认发布流程和写作格式。"
---

这是这个博客的第一篇文章。

以后你只需要在 `src/content/posts/` 里新增 Markdown 文件，就可以继续写新的博客。正文支持标题、列表、图片、代码块、表格和引用。

![示例封面](/uploads/first-post-cover.svg)

## 可以这样写小标题

文章标题来自文件顶部的 `title` 字段。正文里的标题建议从二级标题开始，也就是 `##`。

## 可以这样插入代码

```ts
const blog = "Jinghao's Blog";
console.log(`Hello, ${blog}`);
```

## 可以这样放图片

把照片放到 `public/uploads/`，然后在文章里这样引用：

```md
![照片说明](/uploads/photo.jpg)
```

也可以把某篇文章自己的图片放在同一个文件夹里，用相对路径引用。
