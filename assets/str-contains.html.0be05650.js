import{_ as a,o as s,c as e,e as n}from"./app.88eb8db7.js";const t={},r=n(`<p>Checks if string contains pattern</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str contains <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;pattern&gt;</code> the pattern to find</li><li>...args: optionally check if string contains pattern by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-i, --insensitive: search is case insensitive</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if string contains pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Check if string contains pattern case insensitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains -i <span class="token string">&#39;.RB&#39;</span>
</code></pre></div>`,12),i=[r];function c(o,p){return s(),e("div",null,i)}var h=a(t,[["render",c],["__file","str-contains.html.vue"]]);export{h as default};
