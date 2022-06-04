import{_ as t,u as n,o as r,c as o,a,t as s,d as c,e as p}from"./app.88eb8db7.js";const l={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},b=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str kebab-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text to kebab-case by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to kebab-case</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;NuShell&#39;</span> <span class="token operator">|</span> str kebab-case
</code></pre></div><p>convert a string to kebab-case</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;thisIsTheFirstCase&#39;</span> <span class="token operator">|</span> str kebab-case
</code></pre></div><p>convert a string to kebab-case</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;THIS_IS_THE_SECOND_CASE&#39;</span> <span class="token operator">|</span> str kebab-case
</code></pre></div><p>convert a column from a table to kebab-case</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nuTest, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str kebab-case lang
</code></pre></div>`,13);function g(k,_,m,v,f,e){return r(),o("div",null,[a("h1",i,[d,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),b])}var S=t(l,[["render",g],["__file","str_kebab-case.html.vue"]]);export{S as default};
