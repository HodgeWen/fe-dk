import { getDataType, isArray, isDate, isFunction, isObj } from ".."
import { objMap } from "./object"

/**
 * 返回一个值的空状态
 * @param val 任意值
 */
 export function isEmpty(val: any) {
  const type = getDataType(val)

  switch (type) {
    case 'array':
      return val.length === 0
    case 'object':
      for (const _ in val) {
        return false
      }
      return true
  }
  return !!val
}

/**
 * 获取链式值
 * @param o 目标对象
 * @param prop 属性
 * @param targetProp 目标属性
 */
export function getChainValue(o: any, prop: string, targetProp?: string) {
  let ret = o
  if (targetProp) {
    ret = o[targetProp]
  }

  prop &&
    prop.split('.').some((p) => {
      if (p === '$last' && Array.isArray(ret)) {
        ret = ret[ret.length - 1]
      } else {
        ret = ret[p]
      }

      if (!ret) {
        return true
      }
    })
  return ret
}

/**
 * 是否为给定值中的一种
 * @param value 一个值
 * @param values 所有可能的值
 */
export function oneOf<K extends string | number>(value: K, values: K[]) {
  return values.includes(value)
}

/**
 * 得到一个值的深拷贝版本
 * @param target 值
 */
export function deepCopy<T extends any>(this: any, target: T): T {
  if (isArray(target)) {
    return (target as any).map(deepCopy)
  }
  if (isObj(target)) {
    return objMap(target, deepCopy)
  }
  if (isFunction(target)) {
    return new Function('return '+target.toString()).call(this)
  }
  if (isDate(target)) {
    return new Date(target.valueOf()) as any
  }
  return target
}
