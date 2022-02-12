import { HTTPCodeNumber } from './shared'

let errMsgsMap: Record<number, any> = {
  408: '请求超时',
  500: '服务器错误'
}

function parseResponseHeaders(headStr: string) {
  return headStr
    .trim()
    .split(/[\r\n]+/)
    .reduce((acc, cur) => {
      let [key, value] = cur.split(': ')
      acc[key] = value
      return acc
    }, {} as Record<string, any>)
}

export class HttpResponse<T = any> {
  code!: HTTPCodeNumber

  data!: T

  message = ''

  headers: Record<string, any> = {}

  constructor(code: HTTPCodeNumber, data: any, message: string, headers?: Record<string, any>) {
    this.code = code
    this.data = data?.data || data
    this.message = message
    this.headers = headers || {}
  }

  /** 是否为某个状态码 */
  is(code: HTTPCodeNumber) {
    return this.code === code
  }

  getHeaders() {
    return this.headers
  }
}

interface ResponseConf {
  code: HTTPCodeNumber
  data: any
  message: string
  headers?: Record<string, any>
}

export function getResponse(conf: ResponseConf): HttpResponse
export function getResponse(xhr: XMLHttpRequest): HttpResponse
export function getResponse(xhr: XMLHttpRequest | ResponseConf) {
  if (xhr instanceof XMLHttpRequest) {
    const { status, responseType, statusText } = xhr

    let data = !responseType || responseType === 'text' ? xhr.responseText : xhr.response

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (e) {}
    }

    let code = data.code || (status as HTTPCodeNumber)

    let message = data.message || errMsgsMap[code] || statusText

    let headers = parseResponseHeaders(xhr.getAllResponseHeaders())

    return new HttpResponse(code, data, message, headers)
  }
  const { code, data, message, headers } = xhr
  return new HttpResponse(code, data, message, headers)
}

/** 获取请求地址 */
export function getUrl(api: string, params: Record<string, string | number> | string) {
  let paramString =
    typeof params === 'string'
      ? params
      : Object.keys(params)
          .map(key => `${key}=${params[key]}`)
          .join('&')

  if (!paramString) return api

  if (api.includes('?') && !api.endsWith('?')) {
    return api + '&' + paramString
  }
  return api + '?' + paramString
}
