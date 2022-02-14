import { date } from "./date"


describe('日期测试', () => {
  let today = new Date()
  let y = today.getFullYear()
  let m = today.getMonth() + 1
  let d = today.getDate()

  it('以默认的匹配器进行日期格式化', () => {
    let ymd = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
    let ymd2 = `${y}/${m < 10 ? '0' + m : m}/${d < 10 ? '0' + d : d}`

    expect(date().format()).toBe(ymd)
    expect(date().format('yyyy/MM/dd')).toBe(ymd2)
    expect(date('2020-01-01').format('yyyy/MM/dd')).toBe('2020/01/01')
    expect(date('2020-01-01').format('yyyy-M-d hh:m:ss')).toBe('2020-1-1 08:0:00')
  })

  it('计算相对此刻日期', () => {
    expect(date('2022-02-14').calc(10, 'days').format()).toBe('2022-02-24')
    expect(date('2022-02-14').calc(-10, 'days').format()).toBe('2022-02-04')
    expect(date('2022-02-14').calc(10, 'months').format()).toBe('2022-12-14')
    expect(date('2022-02-14').calc(10, 'weeks').format()).toBe('2022-04-25')
    expect(date('2022-02-14').calc(10, 'years').format()).toBe('2032-02-14')
  })

  it('设置匹配器', () => {
    date.setMatcher('w+', (date: Date, len: number) => {
      if (len === 1) {
        return date.getDay() + ''
      } else {
        return '0' + date.getDay()
      }
    })
    expect(date('2022-02-14').format('w')).toBe('1')
    expect(date('2022-02-14').format('ww')).toBe('01')

  })
})