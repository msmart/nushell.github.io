import{_ as n,u as t,o as r,c as o,a,t as e,d as p,e as c}from"./app.88eb8db7.js";const i={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr is-in (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: right series</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if elements from a series are contained in right series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">3</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr is-in <span class="token variable">$other</span>
</code></pre></div>`,7);function k(f,_,b,g,x,s){return r(),o("div",null,[a("h1",l,[d,u,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),m])}var B=n(i,[["render",k],["__file","dfr_is-in.html.vue"]]);export{B as default};
