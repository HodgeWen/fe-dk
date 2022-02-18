class Num {


  constructor(n: number) {}

  format() {}
}

interface N {
  (n: number): number
}
/**
 * 包裹一个数字以方便
 * @param n 数字
 */
export const n = <N>function n(n: number) {
  return n
}

