import {  isFormData, isObj, isUndef, path } from '..'
import { getResponse, getUrl, HttpResponse } from './helper'

import {
  RequestConfig,
  HttpOptions,
  HTTPBeforeHandler,
  AliasRequestConfig,
  XHRProps,
  HTTPAfterHandler
} from './type'

export default class Http {
  private _config = {
    headers: {} as Record<string, string>,
    baseUrl: '',
    timeout: 0,
    withCredentials: false
  }

  private before: null | HTTPBeforeHandler = null
  private after: null | HTTPAfterHandler = null

  constructor(options: HttpOptions) {
    const { before, after, timeout, baseUrl, headers, withCredentials } = options
    if (before) {
      this.before = before
    }
    if (after) {
      this.after = after
    }

    const { _config } = this

    if (baseUrl) {
      _config.baseUrl = baseUrl
    }

    if (timeout) {
      _config.timeout = timeout
    }

    if (headers) {
      _config.headers = headers
    }

    if (!isUndef(withCredentials)) {
      _config.withCredentials = withCredentials
    }
  }

  private xhrSet: Set<XMLHttpRequest> = new Set()

  private setXHRHandlers(
    xhr: XMLHttpRequest | null,
    resolve: (value: any) => void,
    reject: (value: any) => void
  ) {
    if (!xhr) return

    // 响应状态
    let responseMethod = 'resolve' as 'resolve' | 'reject'
    let doReject = () => {
      responseMethod = 'reject'
    }

    let onloadend = () => {
      if (!xhr) return

      let response = getResponse(xhr)

      if (this.after) {
        response = this.after(response, doReject) || response
      }

      if ((response.code >= 400 && response.code <= 600) || responseMethod === 'reject') {
        reject(response)
      } else {
        resolve(response)
      }

      xhr = null
    }

    if (xhr.onloadend !== undefined) {
      xhr.onloadend = onloadend
    } else {
      xhr.onreadystatechange = () => {
        if (!xhr) return

        if (xhr.readyState !== XMLHttpRequest.DONE) return
        // onreadystatechange处理器在err和timeout处理器之前触发, 所以得在setTimeout中执行
        setTimeout(onloadend)
      }
    }

    xhr.onabort = () => {
      if (!xhr) return

      reject(
        getResponse({
          code: 400,
          data: null,
          message: '请求被客户端终止'
        })
      )

      xhr = null
    }
    xhr.onerror = err => {
      if (!xhr) return

      reject(getResponse(xhr))

      xhr = null
    }
    xhr.onload = () => {}

    // 上传下载进度事件
    xhr.onprogress = e => {}
    xhr.upload.onprogress = e => {}

    xhr.ontimeout = err => {
      if (!xhr) return

      reject(
        getResponse({
          code: 408,
          data: null,
          message: '请求超时'
        })
      )

      xhr = null
    }
  }

  private setXHRProps(xhr: XMLHttpRequest, config: XHRProps) {
    const { responseType, timeout, withCredentials } = config
    if (!isUndef(responseType)) {
      xhr.responseType = responseType
    }
    xhr.timeout = timeout
    xhr.withCredentials = withCredentials
  }

  /**
   * 标准请求方法
   * @param config 请求选项
   */
  request<T = any>(requestConf: RequestConfig) {
    return new Promise<HttpResponse<T>>(async (resolve, reject) => {
      const xhr = new XMLHttpRequest()
      this.xhrSet.add(xhr)

      let config = this.mergeConfig(requestConf)
      if (this.before) {
        config = await this.before(config as Required<RequestConfig>, xhr)
      }

      this.setXHRProps(xhr, config)
      this.setXHRHandlers(xhr, resolve, reject)

      const { method, url, params, headers, data, baseUrl } = config

      xhr.open(method, url.startsWith('http') ? url : getUrl(path.join(baseUrl, url), params), true)

      // 发送请求头
      for (const key in headers) {
        if (data === undefined) {
          key.toLowerCase() === 'content-type' && delete headers[key]
        } else {
          xhr.setRequestHeader(key, headers[key])
        }
      }
      xhr.send(data)
    })
  }

  /**
   * 用于获取资源
   * @param url 请求地址
   * @param options 请求选项
   */
  get<T = any>(url: string, options?: AliasRequestConfig) {
    return this.request<T>({
      method: 'GET',
      url,
      ...options
    })
  }

  /**
   * 用于请求并在服务器新增资源
   * @param url 请求地址
   * @param data 请求主体
   * @param options 请求选项
   */
  post<T = any>(url: string, data?: any, options?: AliasRequestConfig) {
    return this.request<T>({
      url,
      method: 'POST',
      data,
      ...options
    })
  }

  /**
   * 请求资源的头部信息, 一个使用场景在于获取一个资源的Content-Length再决定是否下载
   * @param url 请求地址
   * @param options 请求选项
   */
  head<T>(url: string, options?: AliasRequestConfig) {
    return this.request<T>({
      url,
      ...options,
      method: 'HEAD'
    })
  }

  /**
   * 用于对资源进行覆盖更新
   * @param url 请求url
   * @param data 请求主体
   * @param options 请求选项
   */
  put<T>(url: string, data?: any, options?: AliasRequestConfig) {
    return this.request<T>({
      url,
      data,
      method: 'PUT',
      ...options
    })
  }

  /**
   * 用于对资源进行删除
   * @param url 请求url
   * @param options 请求选项
   */
  delete<T>(url: string, options?: AliasRequestConfig) {
    return this.request<T>({
      url,
      method: 'DELETE',
      ...options
    })
  }

  /**
   * 用于对资源进行部分修改
   * @param url 请求url
   * @param data 携带的请求数据
   * @param options 请求选项
   */
  patch<T>(url: string, data?: any, options?: AliasRequestConfig) {
    return this.request<T>({
      url,
      method: 'PATCH',
      data,
      ...options
    })
  }

  /**
   * 终止请求
   * 一旦调用此方法当前所有的正在请求的实例都会被终止
   */
  abort() {
    this.xhrSet.forEach(xhr => xhr.abort())
    this.xhrSet.clear()
  }

  /**
   * 融合请求参数和默认参数
   * @param options 请求参数
   */
  private mergeConfig(options: RequestConfig) {
    const { _config } = this

    // 合并请求头
    let headers = {
      ..._config.headers,
      ...options.headers
    }

    let data = options.data

    // 如果是FormData让浏览器决定其Content-Type
    if (isFormData(data)) {
      delete headers['Content-Type']
    }
    if (ArrayBuffer.isView(data)) {
      data = data.buffer
    } else if (isObj(data)) {
      data = JSON.stringify(data)
      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json;charset=utf-8'
      }
    } else if (data instanceof URLSearchParams) {
      data = data.toString()
      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json;charset=utf-8'
      }
    }

    return {
      url: options.url,
      method: options.method || 'GET',
      baseUrl: options.baseUrl || _config.baseUrl,
      data,
      headers,
      withCredentials: options.withCredentials ?? _config.withCredentials,
      params: options.params ?? '',
      timeout: options.timeout ?? _config.timeout,
      onProgress: options.onProgress ?? null,
      responseType: options.responseType ?? undefined
    }
  }

  /**
   * 获取默认参数配置
   */
  getDefaultConfig() {
    return this._config
  }
}
