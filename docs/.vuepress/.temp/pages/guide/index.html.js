export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "指南",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "指南"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么时候将工具添加到此处?",
      "slug": "什么时候将工具添加到此处",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "guide/README.md"
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
