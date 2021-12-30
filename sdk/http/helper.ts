import { HTTPCodeNumber } from './shared'
import { HTTPMethod, HTTPResponse } from './type'

export function getResponse(xhr: XMLHttpRequest): HTTPResponse {
  const { status, responseType, responseText, response } = xhr

  const data =
    !responseType || responseType === 'text' || responseType === 'json' ? responseText : response

  return {
    code: status as HTTPCodeNumber,
    data,
    message: ''
  }
}

/** 获取请求地址 */
export function getUrl(
  api: string,
  params: Record<string, string | number> | string,
  method: HTTPMethod = 'get'
) {
  if (method !== 'get') return api
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
  if (method === 'head') return null
  if (method === 'get') {
    if (Object.prototype.toString.call(data) !== '[object Object]') return null
    return Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .join('&')
  }

  return data
}

let contentTypeRegExp = /^content-type$/i

export function getHeaders(headers: Record<string, string>, data: any) {

  if (headers['Content-Type']) {}
}