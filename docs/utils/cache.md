# 缓存

缓存工具库是对浏览器api: sessionStorage, localStorage的封装, 使其更加易用简单.

## 快速使用

```ts
import { WebCache } from 'fe-dk'

// 获取对键的类型提示
type SessionKeys = 'TOKEN' | 'USER'

type LocalKeys = 'THEME'

const session = WebCache.create<SessionKeys>('session')
const local = WebCache.create<LocalKeys>('local')

session.set('TOKEN', 'token')
```

## 设置过期时间

业务中通常会有使用token进行授权的方式, 这时候token需要保存到前端, 以前的做法是在浏览器cookie中保存这些参数, 但是cookie有一个最大的缺点, 那就是存储长度限制, 但cookie也有其有点, 那就是可以通过过期时间来消除cookie. 因此在storage缓存中引入了过期时间的参数.

```ts
// 这里的3600是以秒为单位, 表示3600秒之后这条数据过期
local.set('TOKEN', 'my token', 3600)
```

## 批量获取
当有需要是可以通过批量操作使代码看起来更加简洁

```ts
session.get(['TOKEN', 'USER'])
```

## 获取时给一个默认值

```ts
session.get('TOKEN', 'TOKEN')
```

## 移除

```ts
// 移除单个
session.remove('TOKEN')

// 移除多个
session.remove(['TOKEN', 'USER'])

// 清空
session.remove()
```

## 添加事件

有时候你可能需要在设置缓存的时候执行一些操作, 可以使用on方法来添加事件

```ts
// 添加一个叫做log的事件
session.on('log', (key, value, temp) => {
  console.log(new Date().toLocaleString(), `设置了${key}为${value}`)
})

// 移除事件
session.off('log')
```