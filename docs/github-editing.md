# 直接在 GitHub 更新个人主页

源码仓库：<https://github.com/Sunxkissed/Sunxkissed.github.io>

网站地址：<https://sunxkissed.github.io>

## 日常更新

1. 在 GitHub 中打开下表对应的文件，点击铅笔图标 **Edit this file**。
2. 修改内容，点击 **Commit changes**，提交到 `main`。如果先建分支，则在合并到 `main` 后发布。
3. 打开仓库的 **Actions**，等待 **Deploy PRISM to GitHub Pages** 的 `build` 和 `deploy` 都显示绿色。
4. 刷新网站。若仍看到旧页面，可强制刷新或用无痕窗口检查。

不需要在本地运行命令，也不需要再上传 `out/`。GitHub 会安装依赖、构建网站并发布生成的静态文件。拉取请求只验证构建，不更新线上网站。

| 要修改的内容 | 英文 / 默认内容 | 中文内容 |
| --- | --- | --- |
| 姓名、单位、联系方式、导航、更新时间 | `content/config.toml` | `content_zh/config.toml` |
| 个人简介 | `content/bio.md` | `content_zh/bio.md` |
| News / 最新动态 | `content/news.toml` | `content_zh/news.toml` |
| 论文列表 | `content/publications.bib` | 共用默认论文文件 |
| 论文页选项 | `content/publications.toml` | `content_zh/publications.toml` |
| 首页板块与论文列表 | `content/about.toml` | `content_zh/about.toml` |
| 奖项 | `content/awards.toml` | `content_zh/awards.toml` |
| 学术服务 | `content/services.toml` | `content_zh/services.toml` |
| 简历 | `content/cv.md` | `content_zh/cv.md` |
| 头像 | `public/bio.jpg` | 共用 |
| 论文配图 | `public/papers/` | 共用 |

中文目录有同名文件时会优先读取中文版本，因此中英文内容需要分别更新。页面底部的更新时间来自对应 `config.toml` 中的 `site.last_updated`，需要手动修改。

上传图片或 PDF 时，在 GitHub 的 `public/` 对应目录中选择 **Add file → Upload files**。例如 `public/papers/example.png` 的网页地址为 `/papers/example.png`。BibTeX 的论文配图字段只填写文件名，例如 `preview = {example.png}`，程序会自动补上 `/papers/`。

TOML 的字符串要保留引号；新增 News、奖项等条目时，可以复制现有条目的格式。首页的 Selected Publications 通过 `about.toml` 的 `filter = "selected"` 展示 BibTeX 中标记 `selected = {true}` 的论文，View All 打开完整论文列表。中英文 `about.toml` 的 `order` 数组可以按 BibTeX 条目 ID 指定置顶顺序；未列出的论文继续按年份从新到旧排列，可选的 `limit` 控制展示数量。

作者字段中，在自己的姓名后加 `#` 标注共同一作，加 `*` 标注通讯作者，例如 `Xu, Fan#` 或 `Xu, Fan*`。这些标记会在中英文页面显示对应署名说明，导出 BibTeX 时会移除。

奖项、学术服务和简历目前暂时隐藏，原内容文件仍保留。如需恢复展示，在中英文 `config.toml` 的 `navigation` 中重新添加对应页面即可。

## 首次启用（只需一次）

1. 将完整源码放入此仓库，而不是仅上传 `out/`。
2. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
3. 将源码和 `.github/workflows/deploy.yml` 提交到 `main` 后会自动部署；也可以在 **Actions → Deploy PRISM to GitHub Pages → Run workflow** 手动触发。

工作流使用 Node.js 22 和 `npm ci`，只把 `out/` 发布到网站；源码留在仓库供编辑。

## 更新失败时

在 **Actions** 中打开红色的运行记录，查看失败步骤的日志。修复后重新提交即可。构建失败时不会执行发布，网站会继续使用上一次成功发布的版本。

若提示 Pages 未启用或发布来源不正确，检查 **Settings → Pages → Source** 是否为 **GitHub Actions**。

## 可选：本地预览

仍可使用 Node.js 22，在源码目录运行：

```bash
npm ci
npm run dev
```

日常通过 GitHub 网页更新时可以跳过这一步。
