type FormatType = 'money' | 'cn-money'

class Num {
  private v!: number

  private static numberFmt = new Intl.NumberFormat('zh-Hans-CN', {
    maximumFractionDigits: 2
  })

  constructor(n: number) {
    this.v = n
  }

  /**
   * 将数字格式化
   * @param type 格式化类型
   */
  format(type: FormatType) {
    const { v } = this
  }

  /**
   * 指定数字最大保留几位小数点
   * @param n 位数
   */
  fixed(n: number) {
    const { v } = this
    return +v.toFixed(n)
  }
}

interface N {
  (n: number): Num
}

/**
 * 包裹一个数字以方便
 * @param n 数字
 */
export const n = <N>function n(n: number) {
  return new Num(n)
}
