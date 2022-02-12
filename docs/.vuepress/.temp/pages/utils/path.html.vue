<template><h1 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h1>
<p>路径通常用于路由, url之类的拼接, 解析</p>
<h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fe-sdk'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">)</span>
<span class="token comment">// return '/a/b/c'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2>
<h3 id="path-join" tabindex="-1"><a class="header-anchor" href="#path-join" aria-hidden="true">#</a> path.join</h3>
<p>join方法用于拼接各个路径片段, 拼接成一个以 '/' 开头的路径字符串.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fe-sdk'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">)</span>
<span class="token comment">// return '/a/b/c'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/a'</span><span class="token punctuation">,</span> <span class="token string">'/b'</span><span class="token punctuation">,</span> <span class="token string">'/c'</span><span class="token punctuation">)</span>
<span class="token comment">// return '/a/b/c'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'/c'</span><span class="token punctuation">)</span>
<span class="token comment">// return '/a/b/c'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
