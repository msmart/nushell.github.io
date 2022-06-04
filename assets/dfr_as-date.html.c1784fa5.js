import{_ as s,u as r,o as n,c as o,a as e,t,d,e as c}from"./app.88eb8db7.js";const i={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr as-date (format) --not-exact</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format</code>: formatting date string</li><li><code>--not-exact</code>: the format string may be contained in the date (e.g. foo-2021-01-01-bar could match 2021-01-01)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Format example:
        &quot;%Y-%m-%d&quot;    =&gt; 2021-12-31
        &quot;%d-%m-%Y&quot;    =&gt; 31-12-2021
        &quot;%Y%m%d&quot;      =&gt; 2021319 (2021-03-19)
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts string to date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-12-30&quot;</span> <span class="token string">&quot;2021-12-31&quot;</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr as-datetime <span class="token string">&quot;%Y-%m-%d&quot;</span>
</code></pre></div>`,9);function f(g,_,x,q,k,a){return n(),o("div",null,[e("h1",l,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var b=s(i,[["render",f],["__file","dfr_as-date.html.vue"]]);export{b as default};
