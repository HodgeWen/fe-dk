import { isDate } from 'sdk/utils/data-type'

export class Dater {
  constructor(date: number | string | Date) {
    if (isDate(date)) {
    }
  }

  format(formatter: string) {
    return ''
  }

  add() {}
}

interface DateUtil {
  (date: number | string | Date): Dater
  add(args: Date): void
  minus(args: Date): void
}

export let date = ((date: number | string | Date) => {
  return new Dater(date)
}) as DateUtil

date.add = function (args) {

}

date.minus = function (args) {}
