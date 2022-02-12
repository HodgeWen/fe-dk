import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"指南"},["/guide/index.html","/guide/README.md"]],
  ["v-75ed75e0","/encryptor/",{"title":"测试"},["/encryptor/index.html","/encryptor/index.md"]],
  ["v-d04fcc52","/utils/",{"title":""},["/utils/index.html","/utils/README.md"]],
  ["v-0a62ebae","/utils/cache.html",{"title":"缓存"},["/utils/cache","/utils/cache.md"]],
  ["v-7f1608a6","/utils/calc.html",{"title":"计算"},["/utils/calc","/utils/calc.md"]],
  ["v-71138113","/utils/data-type.html",{"title":"数据类型"},["/utils/data-type","/utils/data-type.md"]],
  ["v-0efcd910","/utils/data.html",{"title":"数据操作"},["/utils/data","/utils/data.md"]],
  ["v-01561418","/utils/date.html",{"title":"日期"},["/utils/date","/utils/date.md"]],
  ["v-18e2555a","/utils/http.html",{"title":"HTTP"},["/utils/http","/utils/http.md"]],
  ["v-10ae9846","/utils/path.html",{"title":"路径"},["/utils/path","/utils/path.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
