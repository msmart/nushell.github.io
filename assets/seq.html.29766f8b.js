import{_ as s,o as a,c as e,e as n}from"./app.88eb8db7.js";const t={},l=n(`<p>Print sequences of numbers.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token punctuation">..</span>.args <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><ul><li>seq date - print sequences of dates</li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: sequence values</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-s, --separator <code>&lt;string&gt;</code>: separator character (defaults to \\n)</li><li>-t, --terminator <code>&lt;string&gt;</code>: terminator character (defaults to \\n)</li><li>-w, --widths: equalize widths of all numbers by padding with zeros</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><ul><li>sequence 1 to 10 with newline separator</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span>
</code></pre></div><ul><li>sequence 1.0 to 2.0 by 0.1s with newline separator</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1.0</span> <span class="token number">0.1</span> <span class="token number">2.0</span>
</code></pre></div><ul><li>sequence 1 to 10 with pipe separator</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> -s <span class="token string">&#39;|&#39;</span> <span class="token number">1</span> <span class="token number">10</span>
</code></pre></div><ul><li>sequence 1 to 10 with pipe separator padded with 0</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> -s <span class="token string">&#39;|&#39;</span> -w <span class="token number">1</span> <span class="token number">10</span>
</code></pre></div><ul><li>sequence 1 to 10 with pipe separator padded by 2s</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> -s <span class="token string">&#39; | &#39;</span> -w <span class="token number">1</span> <span class="token number">2</span> <span class="token number">10</span>
</code></pre></div>`,20),p=[l];function r(o,c){return a(),e("div",null,p)}var u=s(t,[["render",r],["__file","seq.html.vue"]]);export{u as default};
