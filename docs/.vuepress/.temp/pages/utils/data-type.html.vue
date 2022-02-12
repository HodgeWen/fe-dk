<template><h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1>
<p>提供常用的类型判断函数, 和原生实现相比, 它更加统一的api让代码可以更加容易维护, 并且无需为恶心的'=='和'==='付出心智负担. 如果项目使用typescript开发, 他能够起到类型保护的作用.</p>
<h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fe-sdk'</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">></span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">'failed'</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2>
<h3 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> isString</h3>
<p>是否是字符串</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> isNumber</h3>
<p>是否是数字</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isarray" tabindex="-1"><a class="header-anchor" href="#isarray" aria-hidden="true">#</a> isArray</h3>
<p>是否是数组</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isundef" tabindex="-1"><a class="header-anchor" href="#isundef" aria-hidden="true">#</a> isUndef</h3>
<p>是否是undefined</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isUndef</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isdate" tabindex="-1"><a class="header-anchor" href="#isdate" aria-hidden="true">#</a> isDate</h3>
<p>是否是日期</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isnull" tabindex="-1"><a class="header-anchor" href="#isnull" aria-hidden="true">#</a> isNull</h3>
<p>是否是null</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isNull</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction" aria-hidden="true">#</a> isFunction</h3>
<p>是否是函数</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isobj" tabindex="-1"><a class="header-anchor" href="#isobj" aria-hidden="true">#</a> isObj</h3>
<p>是否是对象</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isObj</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isObj</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isbol" tabindex="-1"><a class="header-anchor" href="#isbol" aria-hidden="true">#</a> isBol</h3>
<p>是否是布尔值</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isBol</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isBol</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="ispromise" tabindex="-1"><a class="header-anchor" href="#ispromise" aria-hidden="true">#</a> isPromise</h3>
<p>是否是Promise</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isPromise</span><span class="token punctuation">(</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isPromise</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isblob" tabindex="-1"><a class="header-anchor" href="#isblob" aria-hidden="true">#</a> isBlob</h3>
<p>是否是blob对象
Blob表示一个二进制大对象(Binary Large Object). 通常可以用来做文件的分片(File类继承了Blob, 因此更多的时候会使用File来做分片上传, 断点续传).</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isBlob</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isBlob</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="issymbol" tabindex="-1"><a class="header-anchor" href="#issymbol" aria-hidden="true">#</a> isSymbol</h3>
<p>是否是symbol</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isfile" tabindex="-1"><a class="header-anchor" href="#isfile" aria-hidden="true">#</a> isFile</h3>
<p>是否是文件</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'文件.txt'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isFile</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isarraybuffer" tabindex="-1"><a class="header-anchor" href="#isarraybuffer" aria-hidden="true">#</a> isArrayBuffer</h3>
<p>是否是二进制缓冲区缓冲
ArrayBuffer数据表示缓冲区即一段内存. 可以通过TypedArray视图和DataView视图来进行操作.</p>
<p>视图的概念指的是对同一片内存的数据用不同叫角度去看而得出的数据结构.</p>
<blockquote>
<p>计算机概念中一个内存能够存储8位二进制数也就是一个字节的数据. 假设有一段长度为4的连续内存(可以存储4字节数据), 并且每个内存里存的都是1111111, 那么我们把片内存展现成什么数据这就是<strong>视图</strong>. 如果以Uint8Array(无符号, 也就是最高位不用来表示正负数)视图来表示这段内存, 他展现出来的数据就是[255, 255, 255, 255]; 如果以Int8Array视图来表示, 那么它展现出来的数据就是[-127, -127, -127, -127]; 如果以Uint32Array视图来表示, 那么它展现出来的数据就是[4294967295]</p>
</blockquote>
<p>TypedArray指的是以下构造函数的总称:</p>
<ul>
<li>Int8Array</li>
<li>Uint8Array</li>
<li>Uint8ClampedArray</li>
<li>Int16Array</li>
<li>Uint16Array</li>
<li>Int32Array</li>
<li>Uint32Array</li>
<li>Float32Array</li>
<li>Float64Array</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isArrayBuffer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isArrayBuffer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isint16array" tabindex="-1"><a class="header-anchor" href="#isint16array" aria-hidden="true">#</a> isInt16Array</h3>
<p>是否是Int16Array</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isInt16Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Int16Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isInt16Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isint32array" tabindex="-1"><a class="header-anchor" href="#isint32array" aria-hidden="true">#</a> isInt32Array</h3>
<p>是否是Int32Array</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isInt32Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Int32Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isInt32Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isint8array" tabindex="-1"><a class="header-anchor" href="#isint8array" aria-hidden="true">#</a> isInt8Array</h3>
<p>是否是Int8Array</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isInt8Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Int8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isInt8Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isuint16array" tabindex="-1"><a class="header-anchor" href="#isuint16array" aria-hidden="true">#</a> isUint16Array</h3>
<p>是否是Uint16Array</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isUint16Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint16Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isUint16Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isuint32array" tabindex="-1"><a class="header-anchor" href="#isuint32array" aria-hidden="true">#</a> isUint32Array</h3>
<p>是否是Uint32Array</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isUint32Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint32Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isUint32Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="isuint8array" tabindex="-1"><a class="header-anchor" href="#isuint8array" aria-hidden="true">#</a> isUint8Array</h3>
<p>是否是Uint8Array</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">isUint8Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isUint8Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
