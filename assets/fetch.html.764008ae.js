import{_ as s,u as r,o,c as n,a as e,t,d as c,e as d}from"./app.88eb8db7.js";const h={computed:{frontmatter(){return r().value}}},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),p={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fetch (URL) --user --password --timeout --headers --raw</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>URL</code>: the URL to fetch the contents from</li><li><code>--user {any}</code>: the username when authenticating</li><li><code>--password {any}</code>: the password when authenticating</li><li><code>--timeout {int}</code>: timeout period in seconds</li><li><code>--headers {any}</code>: custom headers you want to add</li><li><code>--raw</code>: fetch contents as text rather than a table</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Performs HTTP GET operation.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fetch content from url.com</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch url.com
</code></pre></div><p>Fetch content from url.com, with username and password</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch -u myuser -p mypass url.com
</code></pre></div><p>Fetch content from url.com, with custom header</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch -H <span class="token punctuation">[</span>my-header-key my-header-value<span class="token punctuation">]</span> url.com
</code></pre></div>`,13);function f(g,_,x,v,w,a){return o(),n("div",null,[e("h1",i,[l,u,e("code",null,t(a.frontmatter.title),1)]),e("div",p,t(a.frontmatter.usage),1),m])}var y=s(h,[["render",f],["__file","fetch.html.vue"]]);export{y as default};
