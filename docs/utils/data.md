# 数据操作

## 快速使用
```ts
import { omit } from 'fe-dk'
const data = omit({ id: 1, name: '张三', age: 20 }, ['id'])
// data: { name: '张三', age: 20 }
```

## 通用操作
提供了一些各个数据类型公用的方法

### isEmpty
判断一个值是否为空值, 其中**0**和**false**会被视作空值. 通常判断对象或者数组尤其是对象使用此方法.

```ts
isEmpty({})
// return true

isEmpty({ name: '张三' })
// return false

isEmpty([])
// return true

isEmpty(0)
// return false

isEmpty(1)
// return true

isEmpty(false)
// return false

isEmpty(true)
// return true
```

### getChangeValue
通过一个字符串属性链来获取一个嵌套的对象的值

```ts
getChangeValue({ person: { name: '张三' } }, 'person.name')
// return 张三
```

### oneOf
判断是否为给定值中的一种

```ts
oneOf(1, [1, 2])
// return true

oneOf(1, [2, 3])
// return false
```

### deepCopy
深拷贝, 此函数能够深拷贝数组, 对象, 函数, 日期这四种常用的引用类型

```ts
const person = { name: '张三', school: { name: '清华大学' } }
const result = deepCopy(person)

console.log(person === result)
// log false

console.log(person.name === result.name)
// log true

console.log(person.school === result.school)
// log false
```

### merge
合并对象或者数组

> 待施工

## array操作

提供常用的数组操作

### last
直接获取数组最后一个元素

```ts
last([1, 2, 3])
// return 3
```

## object操作
提供常用的对象操作

### omit
丢弃对象的某些属性, 并根据剩余属性生成一个新的对象

```ts
omit({ name: '张三', age: 20, id: 1 }, ['id'])
// return { name: '张三', age: 20 }
```

### pick
选取对象的某些属性, 并根选取的属性生成一个新的对象

```ts
pick({ name: '张三', age: 20, id: 1 }, ['id'])
// return { id: 1 }
```

### objMap
对象的映射

```ts
objMap({ a: 1, b: 2 }, (v) => v * 2)
// return { a: 2, b: 4 }
```

### objEach
对象的遍历

```ts
objEach({ a: 1, b: 2 }, (v, k) => console.log(`${k}: ${v}`))
// log a: 1
// log b: 2
```