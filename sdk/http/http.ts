import { getResponse, getSendData, getUrl, HttpResponse } from './helper'

import { isFormData, isUndef } from '../utils/data-type'

import {
  RequestOptions,
  HttpOptions,
  HTTPBeforeHandler,
  AliasRequestOptions,
  XHRProps
} from './type'

export default class Http {
  private _config = {
    headers: {} as Record<string, string>,
    baseUrl: '',
    timeout: 0,
    withCredentials: false
  }

  private before: null | HTTPBeforeHandler = null

  constructor(options: HttpOptions) {
    const { before, timeout, baseUrl, headers } = options
    if (before) {
      this.before = before
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
  }

  private xhrSet: Set<XMLHttpRequest> = new Set()

  private setXHRHandlers(
    xhr: XMLHttpRequest,
    resolve: (value: any) => void,
    reject: (value: any) => void
  ) {
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      resolve(getResponse(xhr))
    }
    xhr.onabort = () => {

    }
    xhr.onerror = (err) => {
      reject(err)
    }
    xhr.onload = () => {}
    xhr.onloadend = () => {}
    xhr.onloadstart = () => {}
    xhr.onprogress = () => {}
    xhr.upload.onprogress = () => {}
    xhr.ontimeout = (err) => {
      reject({
        code: 408,
        message: '请求超时'
      })
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
   * @param options 请求选项
   */
  request<T = any>(options: RequestOptions) {
    return new Promise<HttpResponse<T>>(async (resolve, reject) => {
      const xhr = new XMLHttpRequest()
      this.xhrSet.add(xhr)

      let config = this.mergeOptions(options)
      if (this.before) {
        config = await this.before(config, xhr)
      }
      /** 如果是FormData让浏览器决定其Content-Type */
      if (isFormData(config.data)) {
        delete config.headers['Content-Type']
      }

      this.setXHRHandlers(xhr, resolve, reject)
      this.setXHRProps(xhr, config)

      const { method, url, params, headers, data } = config

      xhr.open(method, getUrl(url, params, method), true)

      // 发送请求头
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key])
      }

      xhr.send(getSendData(data, method))
    })
  }

  /**
   * 用于获取资源
   * @param url 请求地址
   * @param options 请求选项
   */
  get<T = any>(url: string, options?: AliasRequestOptions) {
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
  post<T = any>(url: string, data?: any, options?: AliasRequestOptions) {
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
  head<T>(url: string, options?: AliasRequestOptions) {
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
  put<T>(url: string, data?: any, options?: AliasRequestOptions) {
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
  delete<T>(url: string, options?: AliasRequestOptions) {
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
  patch<T>(url: string, data?: any, options?: AliasRequestOptions) {
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
  private mergeOptions(options: RequestOptions) {
    const { _config } = this

    return {
      url: (options.baseUrl || _config.baseUrl) + options.url,
      method: options.method || 'GET',
      baseUrl: options.baseUrl || _config.baseUrl,
      data: options.data,
      headers: {
        ..._config.headers,
        ...options.headers
      },
      withCredentials: options.withCredentials ?? _config.withCredentials,
      params: options.params ?? '',
      timeout: options.timeout ?? _config.timeout,
      onProgress: options.onProgress ?? null,
      responseType: options.responseType
    }
  }
}
