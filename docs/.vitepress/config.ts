import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'fe-sdk',
  description: '前端开发工具, 前后端分离',

  themeConfig: {
    repo: 'wenhongjie/fe-sdk',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页面',
    lastUpdated: '最后更新于',

    nav: [
      { text: '工具库', link: '/http/index', activeMatch: '^/$|^/http/' },
    ],

    sidebar: {
      '/doc/': [
        {
          text: 'http',
          link: '/doc/http'
        }
      ]
    }
  },

  vite: {
    server: {
      port: 5566
    }
  }
})
