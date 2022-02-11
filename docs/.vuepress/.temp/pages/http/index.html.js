export const data = {
  "key": "v-14b3094e",
  "path": "/http/",
  "title": "测试",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "测试",
    "lang": "zh-CN"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1640773047000,
    "contributors": [
      {
        "name": "whj",
        "email": "emailwen@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "http/index.md"
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
