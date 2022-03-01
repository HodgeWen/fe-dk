import { n } from "./number"

describe('数字操作', () => {
  it('精度', () => {
    expect(n(1.296).fixed(2)).toBe(1.3)
  })
})