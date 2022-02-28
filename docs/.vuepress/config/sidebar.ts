const sidebar = {
  '/lab/data-structure/': [
    // {
    //   text: '数据结构',
    //   children: [
        '/lab/data-structure/README.md',
        '/lab/data-structure/array.md',
        '/lab/data-structure/queue.md',
        '/lab/data-structure/stack.md',
        '/lab/data-structure/list.md',
        '/lab/data-structure/tree.md',
        '/lab/data-structure/heap.md',
        '/lab/data-structure/hash.md',
        '/lab/data-structure/graph.md',
    //   ]
    // }
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
        '/utils/codec.md',
        '/utils/image.md'
      ]
    }
  ],
  '/learn/db/': [
    '/learn/db/README.md',
    '/learn/db/mysql.md',
    '/learn/db/mongodb.md',
    '/learn/db/redis.md',
    '/learn/db/sqlite.md'
  ],
  '/learn/term/': [
    '/learn/term/README.md',
    '/learn/term/basic.md'
  ]
}

export default sidebar