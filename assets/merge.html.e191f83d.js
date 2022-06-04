import{_ as n,u as t,o,c as r,a,t as s,d as p,e as c}from"./app.88eb8db7.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; merge (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run and merge into the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Merge an index column into the input table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> wrap name <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap index <span class="token punctuation">}</span>
</code></pre></div><p>Merge two records</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token punctuation">{</span>c: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div>`,9);function k(g,_,b,f,x,e){return o(),r("div",null,[a("h1",i,[u,d,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var w=n(l,[["render",k],["__file","merge.html.vue"]]);export{w as default};
