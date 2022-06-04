import{_ as a,o as s,c as n,e}from"./app.88eb8db7.js";const t={},p=e(`<p>Aggregate a list table to a single value using an accumulator block.</p><p>Block must be (A, A) -&gt; A unless --fold is selected, in which case it may be A, B -&gt; A.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> reduce <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;block&gt;</code> reducing function</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-f, --fold <code>&lt;any&gt;</code>: reduce with initial value</li><li>-n, --numbered: returned a numbered item ($it.index and $it.item)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Simple summation (equivalent to math sum)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span>
</code></pre></div><p>Summation from starting value using fold</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token operator">|</span> reduce -f <span class="token punctuation">(</span>-1<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span>
</code></pre></div><p>Folding with rows</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>table<span class="token operator">&gt;</span> <span class="token operator">|</span> reduce -f <span class="token number">1.6</span> <span class="token punctuation">{</span> <span class="token variable">$acc</span> * <span class="token punctuation">(</span>echo <span class="token variable">$it</span>.a <span class="token operator">|</span> str to-int<span class="token punctuation">)</span> + <span class="token punctuation">(</span>echo <span class="token variable">$it</span>.b <span class="token operator">|</span> str to-int<span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre></div><p>Numbered reduce to find index of longest word</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> one longest three bar <span class="token operator">|</span> reduce -n <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$it</span>.item <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token variable">$acc</span>.item <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token punctuation">{</span>echo <span class="token variable">$it</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>echo <span class="token variable">$acc</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">|</span> get index
</code></pre></div>`,17),o=[p];function c(l,r){return s(),n("div",null,o)}var u=a(t,[["render",c],["__file","reduce.html.vue"]]);export{u as default};
