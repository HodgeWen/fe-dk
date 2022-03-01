import { n } from "./number"

describe('数字操作', () => {
  it('精度', () => {
    expect(n(1.296).fixed(2)).toBe(1.3)
  })
  it('format(money)', () => {
    expect(n(1234.5678).format('money')).toBe('1,234.5678')
  })
  it('format(cn-money)', () => {
    expect(n(1234.5678).format('cn-money')).toBe('壹仟贰佰叁拾肆元伍角陆分柒毫捌厘')
  })
})