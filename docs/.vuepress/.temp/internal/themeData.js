export const themeData = {
  "docsDir": "docs",
  "notFound": [
    "这里什么都没有",
    "我们怎么到这来了？",
    "这是一个 404 页面",
    "看起来我们进入了错误的链接"
  ],
  "backToHome": "返回首页",
  "navbar": [
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "工具",
      "link": "/utils/"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "指南",
        "children": [
          "/guide/README.md"
        ]
      }
    ],
    "/utils/": [
      {
        "text": "工具",
        "activeMatch": "/utils/cache.html",
        "children": [
          "/utils/cache.md",
          "/utils/data-type.md",
          "/utils/data.md",
          "/utils/HTTP.md",
          "/utils/path.md",
          "/utils/calc.md",
          "/utils/date.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
