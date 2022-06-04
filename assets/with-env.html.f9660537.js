import{_ as a,o as s,c as n,e}from"./app.88eb8db7.js";const t={},o=e(`<h1 id="with-env" tabindex="-1"><a class="header-anchor" href="#with-env" aria-hidden="true">#</a> with-env</h1><p>Runs a block with an environment variable set.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token operator">&lt;</span>variable<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;variable&gt;</code> the environment variable to temporarily set</li><li><code>&lt;block&gt;</code> the block to run once the variable is set</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set the MYENV environment variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">[</span>MYENV <span class="token string">&quot;my env value&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env.MYENV <span class="token punctuation">}</span>
</code></pre></div><p>Set by primitive value list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">[</span>X Y W Z<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env.X <span class="token variable">$nu</span>.env.W <span class="token punctuation">}</span>
</code></pre></div><p>Set by single row table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">[</span><span class="token punctuation">[</span>X W<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Y Z<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env.X <span class="token variable">$nu</span>.env.W <span class="token punctuation">}</span>
</code></pre></div><p>Set by row(e.g. <code>open x.json</code> or <code>from json</code>)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;{&quot;X&quot;:&quot;Y&quot;,&quot;W&quot;:&quot;Z&quot;}&#39;</span><span class="token operator">|</span>from json<span class="token operator">|</span>with-env <span class="token variable">$it</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env.X <span class="token variable">$nu</span>.env.W <span class="token punctuation">}</span>
</code></pre></div>`,17),p=[o];function l(c,i){return s(),n("div",null,p)}var u=a(t,[["render",l],["__file","with-env.html.vue"]]);export{u as default};
