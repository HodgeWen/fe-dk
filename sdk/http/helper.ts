import { isObj } from '../utils/data-type'
import { HTTPCodeNumber } from './shared'
import { HTTPMethod } from './type'

export class HttpResponse<T> {
  code!: HTTPCodeNumber

  data!: T

  message = ''

  constructor(xhr: XMLHttpRequest) {
    const { status, responseType, responseText, response } = xhr
    this.code = status as HTTPCodeNumber
    this.data =
      !responseType || responseType === 'text' || responseType === 'json' ? responseText : response
    this.message = ''
  }

  is(code: HTTPCodeNumber) {
    return this.code === code
  }
}

export function getResponse<T>(xhr: XMLHttpRequest) {
  return new HttpResponse<T>(xhr)
}

/** 获取请求地址 */
export function getUrl(
  api: string,
  params: Record<string, string | number> | string,
  method: HTTPMethod
) {
  if (method !== 'GET') return api
  let paramString =
    typeof params === 'string' ? params : Object.keys(params).map(key => `${key}=${params[key]}`)
  if (api.includes('?') && !api.endsWith('?')) {
    return api + '&' + paramString
  }
  return api + '?' + paramString
}

export function getSendData(
  data: Document | XMLHttpRequestBodyInit | null | undefined,
  method: HTTPMethod
) {
  if (!data) return null
  if (method === 'HEAD') return null
  if (method === 'GET') {
    if (isObj(data))
      return Object.keys(data)
        .map(key => `${key}=${(data as any)[key]}`)
        .join('&')
  }

  return data
}
