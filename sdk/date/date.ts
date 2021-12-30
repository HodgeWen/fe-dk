import { isDate } from "sdk/utils/data-type"


export class Dater {



  constructor(date: number | string | Date) {
    if (isDate(date)) {

    }
  }

  format(formatter: string) {
    return  ''
  }
}

export function date(date: number | string | Date) {
  return new Dater(date)
}
