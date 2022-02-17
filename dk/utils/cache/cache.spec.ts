import { WebCache } from './cache'

const session = WebCache.create<'name' | 'info' | 'token'>('session')

describe('会话缓存', () => {
  it('set, get方法', () => {
    session.set('name', '张三')
    let name = session.get('name')

    session.set('info', {
      name: '李四',
      age: 24
    })
    let values = session.get(['name', 'info'])

    expect(name).toBe('张三')
    expect(values).toEqual([
      '张三',
      {
        name: '李四',
        age: 24
      }
    ])
  })

  it('测试有效期', () => {
    session.set('token', 'my-token', 1)
    setTimeout(() => {
      expect(session.get('token')).toBeNull()
    }, 2)
  })

  it('测试移除', () => {
    session.remove('name')
    expect(session.get('name')).toBeNull()

    session.remove(['info'])

    expect(session.get(['info'])).toEqual([null])
  })
})
