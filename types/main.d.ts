declare type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
interface RequestOptions {
    url: string;
    baseUrl?: string;
    method?: HTTPMethod;
    headers?: Record<string, string>;
    timeout?: number;
    params?: string | Record<string, any>;
    data?: any;
    responseType?: XMLHttpRequestResponseType;
    /** 是否携带cookie */
    withCredentials?: boolean;
    /** 请求过程 */
    onProgress?: null | ((e: ProgressEvent<XMLHttpRequestEventTarget>) => void);
}
declare type HTTPBeforeHandler = (
/** 请求的配置 */
conf: RequestOptions, 
/** 请求实例 */
xhr: XMLHttpRequest) => Required<RequestOptions> | Promise<Required<RequestOptions>>;
interface HttpOptions {
    baseUrl?: string;
    before?: HTTPBeforeHandler;
    timeout?: number;
    headers?: Record<string, string>;
}
declare type AliasRequestOptions = Omit<RequestOptions, 'url' | 'method' | 'data'>;

declare class Http {
    private _config;
    private before;
    constructor(options: HttpOptions);
    private xhrSet;
    private setXHRHandlers;
    private setXHRProps;
    /**
     * 标准请求方法
     * @param options 请求选项
     */
    request(options: RequestOptions): Promise<unknown>;
    /**
     * 用于获取资源
     * @param url 请求地址
     * @param options 请求选项
     */
    get(url: string, options?: AliasRequestOptions): Promise<unknown>;
    /**
     * 用于请求并在服务器新增资源
     * @param url 请求地址
     * @param data 请求主体
     * @param options 请求选项
     */
    post(url: string, data?: any, options?: AliasRequestOptions): Promise<unknown>;
    /**
     * 请求资源的头部信息, 一个使用场景在于获取一个资源的Content-Length再决定是否下载
     * @param url 请求地址
     * @param options 请求选项
     */
    head(url: string, options?: AliasRequestOptions): Promise<unknown>;
    /**
     * 用于对资源进行覆盖更新
     * @param url 请求url
     * @param data 请求主体
     * @param options 请求选项
     */
    put(url: string, data?: any, options?: AliasRequestOptions): Promise<unknown>;
    /**
     * 用于对资源进行删除
     * @param url 请求url
     * @param options 请求选项
     */
    delete(url: string, options?: AliasRequestOptions): Promise<unknown>;
    /**
     * 用于对资源进行部分修改
     * @param url 请求url
     * @param data 携带的请求数据
     * @param options 请求选项
     */
    patch(url: string, data?: any, options?: AliasRequestOptions): Promise<unknown>;
    /**
     * 终止请求
     * 一旦调用此方法当前所有的正在请求的实例都会被终止
     */
    abort(): void;
    /**
     * 融合请求参数和默认参数
     * @param options 请求参数
     */
    private mergeOptions;
}

export { Http };
