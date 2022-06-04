import{_ as e,u as t,o,c as p,a as s,t as n,d as r,e as c}from"./app.88eb8db7.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by ...columns --reverse --insensitive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...columns</code>: the column(s) to sort by</li><li><code>--reverse</code>: Sort in reverse order</li><li><code>--insensitive</code>: Sort string-based columns case-insensitively</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sort the list by increasing value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by
</code></pre></div><p>sort the list by decreasing value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by -r
</code></pre></div><p>sort a list of strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by
</code></pre></div><p>sort a list of strings in reverse</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by -r
</code></pre></div><p>Sort strings (case-insensitive)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by -i
</code></pre></div><p>Sort strings (reversed case-insensitive)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by -i -r
</code></pre></div><p>Sort a table by its column (reversed order)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>fruit count<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>apple <span class="token number">9</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>pear <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>orange <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by fruit -r
</code></pre></div>`,19);function g(b,m,v,_,y,a){return o(),p("div",null,[s("h1",i,[u,d,s("code",null,n(a.frontmatter.title),1)]),s("div",h,n(a.frontmatter.usage),1),k])}var x=e(l,[["render",g],["__file","sort-by.html.vue"]]);export{x as default};
