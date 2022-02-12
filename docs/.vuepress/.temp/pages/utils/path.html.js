export const data = {
  "key": "v-10ae9846",
  "path": "/utils/path.html",
  "title": "路径",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "快速使用",
      "slug": "快速使用",
      "children": []
    },
    {
      "level": 2,
      "title": "api",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "path.join",
          "slug": "path-join",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "utils/path.md"
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
