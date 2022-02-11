# 数据类型
提供常用的类型判断函数, 和原生实现相比, 它更加统一的api让代码可以更加容易维护, 并且无需为恶心的'=='和'==='付出心智负担. 如果项目使用typescript开发, 他能够起到类型保护的作用.

## 快速使用

```ts
import { isArray } from 'fe-sdk'


let result = Math.random() * 10 > 5 ? [1, 2, 3] : 'failed'

if (isArray(result)) {
  result.forEach(item => console.log(item))
} else {
  console.log(result)
}
```

## api

### isString 是否是字符串
```ts
isString('hello')
// return true

isString(0)
// return false
```

### isNumber 是否是数字
```ts
isNumber(0)
// return true

isNumber('')
// return false
```

### isArray 是否是数组
```ts
isArray([0, 1, 2])
// return true

isArray({})
// return false
```

### isUndef 是否是undefined
```ts
isUndef(undefined)
// return true

isString(1)
// return false
```

### isDate 是否是日期
```ts
isDate(new Date())
// return true

isDate(0)
// return false
```

### isNull 是否是null
```ts
isNull(null)
// return true

isNull(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```

```ts
isString('hello')
// return true

isString(0)
// return false
```
