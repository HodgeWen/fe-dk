class Num {
  private n
  constructor(n: unknown) {
    this.n = Number(n)
  }
  format(pattern: 'money' | 'cn-money', decimal: number = 0): string {
    return pattern === 'cn-money' ? this.cn_money(this.n) : this.money(this.n, decimal)
  }
  private money(money: any, decimal: number): string {
    if (!money) return decimal ? String((0.0).toFixed(decimal)) : '0'
    money = String(money.toFixed(decimal))
    const [intPart, decPart] = money.split('.')
    let arr: string[] = []
    const len = intPart.length - 1
    intPart
      .split('')
      .reverse()
      .forEach((item: string, index: number) => {
        arr.push(item)
        if (index && (index + 1) % 3 === 0 && index !== len) {
          arr.push(',')
        }
      })
    let res = arr.reverse().join('')
    if (decimal) res = `${res}.${decPart}`
    return res
  }
  private cn_money(money: any): string {
    const CN_NUMS = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    const CN_INT_RADICE = ['', '拾', '佰', '仟']
    const CN_INT_UNITS = ['', '万', '亿', '兆']
    const CN_DEC_UNITS = ['角', '分', '毫', '厘']
    const CN_INTERGER = '整'
    const CN_INT_LAST = '元'
    const MAX_NUM = 999999999999999.9999
    let intPart
    let decPart
    let chineseStr = ''
    if (!money) {
      return CN_NUMS[0] + CN_INT_LAST + CN_INTERGER
    } else if (money >= MAX_NUM) {
      return ''
    }
    money = String(money)
    if (money.indexOf('.') === -1) {
      ;[intPart, decPart] = [money, '']
    } else {
      ;[intPart, decPart] = money.split('.')
      decPart = decPart.substring(0, 4)
    }
    if (parseInt(intPart, 10) > 0) {
      let zeroCount = 0
      let IntLen = intPart.length
      for (let i = 0; i < IntLen; i++) {
        let n = intPart.substring(i, i + 1)
        let p = IntLen - i - 1
        let q = p / 4
        let m = p % 4
        if (n === '0') {
          zeroCount++
        } else {
          if (zeroCount > 0) {
            chineseStr += CN_NUMS[0]
          }
          zeroCount = 0
          chineseStr += CN_NUMS[parseInt(n)] + CN_INT_RADICE[m]
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += CN_INT_UNITS[q]
        }
      }
      chineseStr += CN_INT_LAST
    }
    if (decPart !== '') {
      let decLen = decPart.length
      for (let i = 0; i < decLen; i++) {
        let n = decPart.substring(i, i + 1)
        if (n !== '0') {
          chineseStr += CN_NUMS[Number(n)] + CN_DEC_UNITS[i]
        }
      }
    } else {
      chineseStr += CN_INTERGER
    }
    return chineseStr
  }
}

interface N {
  (n: unknown): {
    format: (pattern: 'money' | 'cn-money', decimal?: number) => string
  }
}
/**
 * 包裹一个数字以方便
 * @param n 数字
 */
export const n = <N>function n(n: unknown) {
  return new Num(n)
}
