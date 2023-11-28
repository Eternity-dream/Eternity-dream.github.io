import{_ as s,o as a,c as n,R as l}from"./chunks/framework.8k-_6wIf.js";const h=JSON.parse('{"title":"树状数组","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/template/树状数组.md","filePath":"algorithm/template/树状数组.md"}'),p={name:"algorithm/template/树状数组.md"},o=l(`<h1 id="树状数组" tabindex="-1">树状数组 <a class="header-anchor" href="#树状数组" aria-label="Permalink to &quot;树状数组&quot;">​</a></h1><p>支持操作: 1.单点修改 2.区间查询</p><p>注意:普通树状数组维护的运算需要满足<strong>结合律</strong>并且可以<strong>差分</strong></p><h2 id="lowbit" tabindex="-1">Lowbit <a class="header-anchor" href="#lowbit" aria-label="Permalink to &quot;Lowbit&quot;">​</a></h2><p>用于求最低位的1,反映维护区间长度.</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lowbit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lowbit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">x</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="普通模板" tabindex="-1">普通模板 <a class="header-anchor" href="#普通模板" aria-label="Permalink to &quot;普通模板&quot;">​</a></h2><p>1.将某一个数加上x</p><p>2.求出某区间[l,r]每一个数的和</p><h3 id="单点加" tabindex="-1">单点加 <a class="header-anchor" href="#单点加" aria-label="Permalink to &quot;单点加&quot;">​</a></h3><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">pos;i</span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;">n;i</span><span style="color:#F97583;">+=</span><span style="color:#B392F0;">lowbit</span><span style="color:#E1E4E8;">(i))</span></span>
<span class="line"><span style="color:#E1E4E8;">        a[i]</span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;">x;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">x</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">pos;i</span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;">n;i</span><span style="color:#D73A49;">+=</span><span style="color:#6F42C1;">lowbit</span><span style="color:#24292E;">(i))</span></span>
<span class="line"><span style="color:#24292E;">        a[i]</span><span style="color:#D73A49;">+=</span><span style="color:#24292E;">x;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="区间查询" tabindex="-1">区间查询 <a class="header-anchor" href="#区间查询" aria-label="Permalink to &quot;区间查询&quot;">​</a></h3><p>转化为前缀问题</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getsum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">  //求[1,pos]区间和</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> sum</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">pos;i</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;i</span><span style="color:#F97583;">-=</span><span style="color:#B392F0;">lowbit</span><span style="color:#E1E4E8;">(i))</span></span>
<span class="line"><span style="color:#E1E4E8;">        sum</span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;">a[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> sum;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">l</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">  //求[l,r]区间和</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getsum</span><span style="color:#E1E4E8;">(r)</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">getsum</span><span style="color:#E1E4E8;">(l</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getsum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">  //求[1,pos]区间和</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> sum</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">pos;i</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">-=</span><span style="color:#6F42C1;">lowbit</span><span style="color:#24292E;">(i))</span></span>
<span class="line"><span style="color:#24292E;">        sum</span><span style="color:#D73A49;">+=</span><span style="color:#24292E;">a[i];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> sum;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">query</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">l</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">r</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">  //求[l,r]区间和</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getsum</span><span style="color:#24292E;">(r)</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">getsum</span><span style="color:#24292E;">(l</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,14),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
