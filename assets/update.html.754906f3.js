import{_ as n,u as t,o as p,c as o,a,t as e,d as c,e as l}from"./app.88eb8db7.js";const r={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},m=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; update (field) (replacement value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update</li><li><code>replacement value</code>: the new value to give the cell(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update a column value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> update name <span class="token string">&#39;Nushell&#39;</span>
</code></pre></div><p>Use in block form for more involved updating logic</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>count fruit<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> update count <span class="token punctuation">{</span><span class="token operator">|</span>f<span class="token operator">|</span> <span class="token variable">$f</span>.count + <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div>`,9);function k(g,f,_,b,v,s){return p(),o("div",null,[a("h1",i,[u,d,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),m])}var N=n(r,[["render",k],["__file","update.html.vue"]]);export{N as default};
