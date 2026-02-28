# Userscript 项目规范

本规范用于指导后续 AI 工具生成符合规范的 Userscript 脚本。

## 文件命名规范

- **脚本文件**: 使用 `{功能描述}.user.js` 格式，如 `yuque-export.user.js`
- **README 文件**: 每个脚本文件夹下必须包含 `README.md`

## 脚本元数据规范

脚本头部必须包含以下元数据：

```javascript
// ==UserScript==
// @name         脚本名称（中文）
// @namespace    http://tampermonkey.net/
// @version      x.x.x
// @description  脚本功能描述
// @author       作者名
// @match        https://*.example.com/*
// @require      https://cdn.example.com/library.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==
```

## README 结构规范

### 根目录 README.md

```markdown
# 项目名称

项目简要描述。

## 脚本列表

| 文件夹 | 说明 |
|--------|------|
| [文件夹名](./文件夹名/) | 脚本功能描述 |

## 快速开始

1. 安装 Tampermonkey
2. 打开脚本文件
3. 复制内容到 Tampermonkey
4. 激活使用
```

### 脚本文件夹 README.md

```markdown
# 脚本名称

脚本详细功能描述。

## 功能特性

- 功能点 1
- 功能点 2

## 使用方法

1. 步骤一
2. 步骤二

## 依赖库

- [库名](链接) - 用途

## 版本历史

- **x.x.x**: 版本描述
```

## 提交信息规范

使用 Conventional Commits 格式：

```
<type>: <description>

[optional body]
```

类型 (type):
- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档
- `refactor`: 重构
- `chore`: 其他
