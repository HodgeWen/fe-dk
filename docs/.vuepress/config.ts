import { defineUserConfig, DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'fe-dk',
  description: '前端开发工具包',

  bundler: '@vuepress/vite',

  base: '/fe-dk/',

  plugins: [['@vuepress/plugin-search', {}]],

  themeConfig: {
    docsDir: 'docs',
    repo: 'https://github.com/wenhongjie/fe-dk',

    search: true,

    algolia: {},

    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页',

    navbar: [
      {
        text: '实验室',
        children: [
          {
            text: '数据结构',
            link: '/lab/data-structure/'
          },
          {
            text: '算法',
            link: '/lab/algorithm/'
          },
          {
            text: '设计模式',
            link: '/lab/pattern/'
          },
          {
            text: '其他',
            link: '/lab/others/'
          }
        ]
      },
      {
        text: '工具',
        link: '/utils/'
      }
    ],

    sidebar: {
      '/lab/data-structure/': [
        {
          text: '数据结构',
          children: [
            '/lab/data-structure/list.md'
          ]
        }
      ],
      '/utils/': [
        {
          text: '工具',
          activeMatch: '/utils/cache.html',
          children: [
            '/utils/cache.md',
            '/utils/data-type.md',
            '/utils/data.md',
            '/utils/HTTP.md',
            '/utils/path.md',
            '/utils/date.md',
            '/utils/crypto.md',
            '/utils/hash.md',
            '/utils/db.md',
            '/utils/codec.md'
          ]
        }
      ]
    }
  }
})
