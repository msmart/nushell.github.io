import{_ as e,u as r,o as n,c as o,a,t as s,d as i,e as p}from"./app.88eb8db7.js";const c={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),g={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str starts-with (pattern) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match</li><li><code>...rest</code>: optionally matches prefix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if string starts with &#39;my&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str starts-with <span class="token string">&#39;my&#39;</span>
</code></pre></div><p>Checks if string starts with &#39;my&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Cargo.toml&#39;</span> <span class="token operator">|</span> str starts-with <span class="token string">&#39;Car&#39;</span>
</code></pre></div><p>Checks if string starts with &#39;my&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Cargo.toml&#39;</span> <span class="token operator">|</span> str starts-with <span class="token string">&#39;.toml&#39;</span>
</code></pre></div>`,11);function u(_,f,k,x,b,t){return n(),o("div",null,[a("h1",l,[h,d,a("code",null,s(t.frontmatter.title),1)]),a("div",g,s(t.frontmatter.usage),1),m])}var w=e(c,[["render",u],["__file","str_starts-with.html.vue"]]);export{w as default};
