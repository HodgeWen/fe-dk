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

### equal
判断两个值的结构是否"相等".

通常用来判断对象和数组是否在结构上相等, 也可使用第三个参数通过比较相同属性来确定相等.

比如从服务器过来的对象总是和你程序的对象不相等, 而我们可以通过约定的结构或者属性标识来确定其是否相等, 在与后端对接时, 该方法或许会很有用.
```ts
let a = { name: '张三' }
let b = { name: '张三' }
equal(a, b)
// return true

let c = { name: '张三', id: '1' }
let d = { name: '张三', id: '1', age: 20 }

equal(c, d)
// false

equal(c, d, 'id')
// true, 尽管结构不一样, 但id一样, 因此是相等的

```

::: danger
你不能够用它来判断两个值是否相等!


:::

:::: code-group
::: code-group-item 错误用法
```ts
if (equal(1, 3)) {
  console.log('相等')
}
```
:::

::: code-group-item 正确用法
```ts
let a = { name: '张三' }
let b = { name: '张三' }

if (equal(a, b)) {
  console.log('或许是同一个人')
}
```
:::
::::



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
合并对象.
合并的策略是会比较每个相同属性的类型, 类型不一致直接覆盖最后被合并进来的对象, 类型一致时, 如果是直接类型直接覆盖, 如果是对象或数组则直接递归合并.

::: tip
合并生成的内容是深度拷贝的, 因此它不会改变原生合并的对象.

这意味着如果merge只传入一个参数时, 是和 [deepCopy](#deepcopy) 等效的.
:::


```ts
merge({ name: '张三' }, { name: '李四', age: 20 })
//  return { name: '李四', age: 20 }
```

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

## 数字操作
数字操作通常用来恢复精度, 转化不同的使用方式(比如货币, 使用货币时会被转化为字符串, 并用分隔符分割千分位)

### format
```ts
import { n } from 'fe-dk'

n(1234.5678).format('money', 2)
//return 1,234.57

n(1234.5678).format('cn-money')
//return 壹仟贰佰叁拾肆元伍角陆分柒毫捌厘
```

## 静态资源

### requireImg
引入本地静态图片
```ts
requireImg('ship')
//return http://localhost:2001/src/assets/ship.jpg

requireImg('ship.png', '/test', 'png')
//return http://localhost:2001/test/ship.png

requireImg(['ship', 'train'])
//return ['http://localhost:2001/src/assets/ship.jpg','http://localhost:2001/src/assets/train.jpg']
```