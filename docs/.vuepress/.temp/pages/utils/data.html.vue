<template><h1 id="数据操作" tabindex="-1"><a class="header-anchor" href="#数据操作" aria-hidden="true">#</a> 数据操作</h1>
<h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> omit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fe-sdk'</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">omit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// data: { name: '张三', age: 20 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="通用操作" tabindex="-1"><a class="header-anchor" href="#通用操作" aria-hidden="true">#</a> 通用操作</h2>
<p>提供了一些各个数据类型公用的方法</p>
<h3 id="isempty" tabindex="-1"><a class="header-anchor" href="#isempty" aria-hidden="true">#</a> isEmpty</h3>
<p>判断一个值是否为空值, 其中<strong>0</strong>和<strong>false</strong>会被视作空值. 通常判断对象或者数组尤其是对象使用此方法.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'张三'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>

<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>

<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>

<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="getchangevalue" tabindex="-1"><a class="header-anchor" href="#getchangevalue" aria-hidden="true">#</a> getChangeValue</h3>
<p>通过一个字符串属性链来获取一个嵌套的对象的值</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">getChangeValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> person<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'张三'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'person.name'</span><span class="token punctuation">)</span>
<span class="token comment">// return 张三</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="oneof" tabindex="-1"><a class="header-anchor" href="#oneof" aria-hidden="true">#</a> oneOf</h3>
<p>判断是否为给定值中的一种</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="deepcopy" tabindex="-1"><a class="header-anchor" href="#deepcopy" aria-hidden="true">#</a> deepCopy</h3>
<p>深拷贝, 此函数能够深拷贝数组, 对象, 函数, 日期这四种常用的引用类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> school<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'清华大学'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person <span class="token operator">===</span> result<span class="token punctuation">)</span>
<span class="token comment">// log false</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name <span class="token operator">===</span> result<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// log true</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>school <span class="token operator">===</span> result<span class="token punctuation">.</span>school<span class="token punctuation">)</span>
<span class="token comment">// log false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h3>
<p>合并对象或者数组</p>
<blockquote>
<p>待施工</p>
</blockquote>
<h2 id="array操作" tabindex="-1"><a class="header-anchor" href="#array操作" aria-hidden="true">#</a> array操作</h2>
<p>提供常用的数组操作</p>
<h3 id="last" tabindex="-1"><a class="header-anchor" href="#last" aria-hidden="true">#</a> last</h3>
<p>直接获取数组最后一个元素</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="object操作" tabindex="-1"><a class="header-anchor" href="#object操作" aria-hidden="true">#</a> object操作</h2>
<p>提供常用的对象操作</p>
<h3 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> omit</h3>
<p>丢弃对象的某些属性, 并根据剩余属性生成一个新的对象</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">omit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return { name: '张三', age: 20 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> pick</h3>
<p>选取对象的某些属性, 并根选取的属性生成一个新的对象</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">pick</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return { id: 1 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="objmap" tabindex="-1"><a class="header-anchor" href="#objmap" aria-hidden="true">#</a> objMap</h3>
<p>对象的映射</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">objMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=></span> v <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// return { a: 2, b: 4 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="objeach" tabindex="-1"><a class="header-anchor" href="#objeach" aria-hidden="true">#</a> objEach</h3>
<p>对象的遍历</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">objEach</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>v<span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// log a: 1</span>
<span class="token comment">// log b: 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
