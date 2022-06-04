import{_ as e,o as a,c as s,e as t}from"./app.88eb8db7.js";const n={},o=t(`<h1 id="date-list-timezone" tabindex="-1"><a class="header-anchor" href="#date-list-timezone" aria-hidden="true">#</a> date list-timezone</h1><p>List supported time zones.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> list-timezone <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List all supported time zones</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> list-timezone
</code></pre></div><p>List all supported European time zones</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> list-timezone <span class="token operator">|</span> where timezone <span class="token operator">=~</span> Europe
</code></pre></div>`,11),i=[o];function l(p,r){return a(),s("div",null,i)}var d=e(n,[["render",l],["__file","date-list-timezone.html.vue"]]);export{d as default};
