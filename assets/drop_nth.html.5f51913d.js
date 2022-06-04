import{_ as e,u as t,o,c as r,a,t as n,d as p,e as c}from"./app.88eb8db7.js";const l={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(),h={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop nth (row number or row range) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row number or row range</code>: the number of the row to drop or a range to drop consecutive rows</li><li><code>...rest</code>: the number of the row to drop</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Drop the first, second, and third row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>sam,sarah,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
</code></pre></div><p>Drop the first, second, and third row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
</code></pre></div><p>Drop rows 0 2 4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">2</span> <span class="token number">4</span>
</code></pre></div><p>Drop rows 2 0 4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">2</span> <span class="token number">0</span> <span class="token number">4</span>
</code></pre></div><p>Drop range rows from second to fourth</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>first second third fourth fifth<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre></div>`,15);function m(b,g,f,_,v,s){return o(),r("div",null,[a("h1",d,[u,i,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),k])}var w=e(l,[["render",m],["__file","drop_nth.html.vue"]]);export{w as default};
