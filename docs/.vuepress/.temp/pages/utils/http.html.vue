<template><h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1>
<p>在过去, 要请求后端的接口需要借助很多第三方库, 比如jquery的ajax, axios, 他们最大的缺点就是体积过大, 并且不是那么易用. 其中axios在现代框架中被广泛使用, 但是其同时实现了服务端的api, 因此为了体积和易用性开发出这一个用于与后端进行交互的api</p>
<h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'http'</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseUrl<span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span> <span class="token comment">// 表示所有的接口以 /api 作为前缀</span>
  timeout<span class="token operator">:</span> <span class="token number">18000</span> <span class="token comment">// 表示如果请求超过18000就抛出超时错误</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2>
<h3 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> Http.request</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">'/user/1'</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">'GET'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">,</span> res<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// GET http://xxx.xxx.xxx/api/user/1</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="快捷写法" tabindex="-1"><a class="header-anchor" href="#快捷写法" aria-hidden="true">#</a> 快捷写法</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// GET  http://xxx.xxx.xxx/api/user?id=1</span>

http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'admin'</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// POST  http://xxx.xxx.xxx/api/user?type=admin  payload: { type: 'admin' }</span>

http<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com/user/1'</span><span class="token punctuation">)</span>
<span class="token comment">// PUT http://www.baidu.com/user/1</span>

http<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/user/1'</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE http://xxx.xxx.xxx/api/user/1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
