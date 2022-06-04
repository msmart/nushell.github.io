import{_ as t,u as r,o as n,c as o,a as e,t as s,d,e as c}from"./app.88eb8db7.js";const l={computed:{frontmatter(){return r().value}}},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),u={style:{"white-space":"pre-wrap"}},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db order-by ...select --ascending --nulls_first</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...select</code>: Select expression(s) on the table</li><li><code>--ascending</code>: Order by ascending values</li><li><code>--nulls_first</code>: Show nulls first in order</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>orders query by a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db from table_a
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db order-by a
    <span class="token operator">|</span> db describe
</code></pre></div>`,7);function b(m,f,g,x,y,a){return n(),o("div",null,[e("h1",i,[p,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),_])}var v=t(l,[["render",b],["__file","db_order-by.html.vue"]]);export{v as default};
