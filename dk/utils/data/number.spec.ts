import { n } from "./number"

describe('number', () => {
  it('format(money)', () => {
    expect(n(1234.5678).format('money', 2)).toBe('1,234.57')
  })
  it('format(cn-money)', () => {
    expect(n(1234.5678).format('cn-money')).toBe('壹仟贰佰叁拾肆元伍角陆分柒毫捌厘')
  })
})