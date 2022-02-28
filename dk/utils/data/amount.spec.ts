import { chineseAmount } from './amount'

describe('金额测试', () => {
  const amount = 1234.5678

  it('金额转中文大写', () => {
    expect(chineseAmount(amount)).toBe('壹仟贰佰叁拾肆元伍角陆分柒毫捌厘')
  })
})