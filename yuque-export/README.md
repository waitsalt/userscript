# 语雀文档导出 (Yuque Export)

将语雀文档导出为包含 Markdown 内容和图片的 ZIP 压缩包。

## 功能特性

- **Markdown 导出**: 将文档转换为 Markdown 格式
- **图片处理**: 自动提取并打包文档中的图片
- **视频支持**: 尝试导出视频内容（部分情况可获取视频地址）
- **代码块**: 保留代码块的格式和内容
- **画板/脑图**: 尝试导出画板和脑图的预览图

## 使用方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 在 Tampermonkey 中添加新脚本
3. 将 `yuque-export.user.js` 的内容复制粘贴到编辑器中
4. 保存脚本
5. 访问任意语雀文档页面
6. 点击页面右上角的「👇MD」按钮导出

## 导出结果

导出后会得到一个 ZIP 文件，包含：
- `README.md` - 文档的 Markdown 源文件
- `images/` - 文档中使用的图片文件夹

## 依赖库

脚本通过 `@require` 加载以下库：
- [turndown@7.1.2](https://unpkg.com/turndown@7.1.2/dist/turndown.js) - HTML 转 Markdown
- [jszip@3.10.1](https://unpkg.com/jszip@3.10.1/dist/jszip.min.js) - ZIP 文件生成
- [FileSaver.js@2.0.5](https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js) - 文件下载

## 版本历史

- **2.2.1**: 当前版本
- 基于 W871054028 的代码修改
