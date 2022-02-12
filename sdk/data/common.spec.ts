import { isEmpty, getChainValue, oneOf, deepCopy } from './common'

describe('通用数据操作测试', () => {
  it('isEmpty', () => {
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty({ name: '张三' })).toBeFalsy()
  })

  it('getChainValue', () => {
    expect(getChainValue({ school: { name: '清华大学' } }, 'school.name')).toBe('清华大学')
    expect(getChainValue({ school: { name: '清华大学' } }, 'school.address')).toBeUndefined()
  })

  it('oneOf', () => {
    expect(oneOf(2, [1, 3])).toBeFalsy()
    expect(oneOf(2, [1, 2, 3])).toBeTruthy()
  })

  it('deepCopy', () => {
    let origin = { school: { name: '清华大学' } }
    let result = deepCopy(origin)
    expect(result).toEqual(origin)
    expect(origin !== result && origin.school !== result.school).toBeTruthy()


  })
})
