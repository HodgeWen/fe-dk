export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "actions": [
      {
        "text": "浏览工具",
        "link": "/utils/"
      }
    ],
    "features": [
      {
        "title": "统一",
        "details": "为团队而生, 统一管理你的代码库"
      },
      {
        "title": "文档",
        "details": "新人融入无所适从, 上手慢, 这里提供了工具库的完备文档!"
      },
      {
        "title": "高效",
        "details": "所有的工具使用模块导出, 可以完全利用构建工具的tree-shaking机制"
      }
    ],
    "footer": "MIT Licensed"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
