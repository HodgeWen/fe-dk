/**
 * 金额转中文大写
 * @param money 要转换的金额
 */
export function chineseAmount(money: any) {
  const CN_NUMS = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const CN_INT_RADICE = ['', '拾', '佰', '仟']
  const CN_INT_UNITS = ['', '万', '亿', '兆']
  const CN_DEC_UNITS = ['角', '分', '毫', '厘']
  const CN_INTERGER = '整'
  const CN_INT_LAST = '元'
  const MAX_NUM = 999999999999999.9999
  let integerNum
  let decimalNum
  let chineseStr = ''
  money = parseFloat(money)
  if (isNaN(money) || money >= MAX_NUM) {
    return ''
  }
  if (money === 0) {
    return CN_NUMS[0] + CN_INT_LAST + CN_INTERGER
  }
  money = String(money)
  if (money.indexOf('.') === -1) {
    integerNum = money
    decimalNum = ''
  } else {
    [integerNum, decimalNum] = money.split('.')
    decimalNum = decimalNum.substring(0, 4)
  }
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0
    let IntLen = integerNum.length
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substring(i, i + 1)
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
  if (decimalNum !== '') {
    let decLen = decimalNum.length
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substring(i, i + 1)
      if (n !== '0') {
        chineseStr += CN_NUMS[Number(n)] + CN_DEC_UNITS[i]
      }
    }
  }else {
    chineseStr += CN_INTERGER
  }
  return chineseStr
}