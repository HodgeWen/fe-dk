import { HTTPCodeNumber } from './shared'

export type HTTPMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head'

export interface HTTPResponse<Data = any> {
  code: HTTPCodeNumber
  data: Data
  message: string | string[]
}

export interface RequestOptions {
  url: string
  baseUrl?: string
  method?: HTTPMethod
  headers?: Record<string, string>
  timeout?: number
  params?: string | Record<string, any> // 和api叠加
  data?: any
  /** 是否携带cookie */
  withCredentials?: boolean
  /** 请求过程 */
  onProgress?: null | ((e: ProgressEvent<XMLHttpRequestEventTarget>) => void)
}

// /**  */
// export interface Config {
//   url: string
//   headers: Record<string, string>
//   params: Record<string, string | number>
//   data: any
//   responseType: XMLHttpRequestResponseType
//   method: HTTPMethod
//   timeout: number
//   withCredentials: boolean
// }

export type HTTPBeforeHandler = (
  /** 请求的配置 */
  conf: Required<RequestOptions>,
  /** 请求实例 */
  xhr: XMLHttpRequest
) => Required<RequestOptions> | Promise<Required<RequestOptions>>


export interface HttpOptions {
  baseUrl?: string
  before?: HTTPBeforeHandler
  timeout?: number
  headers?: Record<string, string>
}

export type AliasRequestOptions = Omit<RequestOptions, 'url' | 'method' | 'data'>