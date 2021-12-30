import { getHeaders, getResponse, getSendData, getUrl } from './helper'
import { RequestOptions, HttpOptions, HTTPBeforeHandler, AliasRequestOptions } from './type'

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

  private static abortHandler = (e: ProgressEvent<XMLHttpRequestEventTarget>) => {}

  async request(options: RequestOptions) {
    const xhr = new XMLHttpRequest()
    this.xhrSet.add(xhr)

    let config = this.mergeOptions(options)
    if (this.before) {
      config = await this.before(config, xhr)
    }

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        resolve(getResponse(xhr))
      }
      xhr.onabort = () => {
        console.log(xhr)
      }
      xhr.onerror = () => {}
      xhr.onload = () => {}
      xhr.onloadend = () => {}
      xhr.onloadstart = () => {}
      xhr.onprogress = () => {}
      xhr.upload.onprogress = () => {}
      xhr.ontimeout = () => {}

      const { method, url, params, headers, data } = config

      xhr.open(method, getUrl(url, params, method), true)

      getHeaders(headers, data)
      // POST请求,PUT请求, PATCH请求携带data时需指定headers(默认会根据data数据的类型来自动获取)
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key])
      }

      xhr.responseType = 'json'

      xhr.timeout = 20000
      xhr.withCredentials = options.withCredentials ?? false

      xhr.send(getSendData(config.data, config.method || 'get'))
    })
  }

  get(url: string, options?: AliasRequestOptions) {
    return this.request({
      method: 'get',
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
  post(url: string, data?: any, options?: AliasRequestOptions) {
    return this.request({
      url,
      method: 'post',
      data,
      ...options
    })
  }

  /**
   * 请求资源的头部信息, 一个使用场景在于获取一个资源的Content-Length再决定是否下载
   * @param url 请求地址
   * @param options 请求选项
   */
  head(url: string, options?: AliasRequestOptions) {
    return this.request({
      url,
      ...options,
      method: 'head'
    })
  }

  /**
   * 用于对资源进行覆盖更新
   * @param url 请求url
   * @param data 请求主体
   * @param options 请求选项
   */
  put(url: string, data?: any, options?: AliasRequestOptions) {
    return this.request({
      url,
      data,
      method: 'put',
      ...options
    })
  }

  /**
   * 用于对资源进行删除
   * @param url 请求url
   * @param options 请求选项
   */
  delete(url: string, options?: AliasRequestOptions) {
    return this.request({
      url,
      method: 'delete',
      ...options
    })
  }

  /**
   * 用于对资源进行部分修改
   * @param url 请求url
   * @param data 携带的请求数据
   * @param options 请求选项
   */
  patch(url: string, data?: any, options?: AliasRequestOptions) {
    return this.request({
      url,
      method: 'patch',
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
      method: options.method || 'get',
      baseUrl: options.baseUrl || _config.baseUrl,
      data: options.data,
      headers: {
        ..._config.headers,
        ...options.headers
      },
      withCredentials: options.withCredentials ?? _config.withCredentials,
      params: options.params ?? '',
      timeout: options.timeout ?? _config.timeout,
      onProgress: options.onProgress ?? null
    }
  }
}
