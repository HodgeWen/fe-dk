import { HTTPCodeNumber } from './shared'

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD'

export interface RequestOptions {
  url: string
  baseUrl?: string
  method?: HTTPMethod
  headers?: Record<string, string>
  timeout?: number
  params?: string | Record<string, any> // 和api叠加
  data?: any
  responseType?: XMLHttpRequestResponseType
  /** 是否携带cookie */
  withCredentials?: boolean
  /** 请求过程 */
  onProgress?: null | ((e: ProgressEvent<XMLHttpRequestEventTarget>) => void)
}

export type HTTPBeforeHandler = (
  /** 请求的配置 */
  conf: RequestOptions,
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

export type XHRProps = {
  responseType?: XMLHttpRequestResponseType
  timeout: number
  withCredentials: boolean
}