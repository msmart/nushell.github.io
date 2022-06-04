import{_ as n,o as s,c as a,e}from"./app.88eb8db7.js";const o={},p=e(`<p>This command filters the content of a table based on a condition passed as a parameter, which must be a boolean expression making use of any of the table columns. Other commands such as <code>ls</code> are capable of feeding <code>where</code> with their output through pipelines.</p><p>Where has two general forms:</p><ul><li><code>where &lt;column_name&gt; &lt;comparison&gt; &lt;value&gt;</code></li><li><code>where &lt;column_name&gt;</code></li></ul><h2 id="where-with-comparison" tabindex="-1"><a class="header-anchor" href="#where-with-comparison" aria-hidden="true">#</a> Where with comparison</h2><p>In the first form, <code>where</code> is passed a column name that the filter will run against. Next, is the operator used to compare this column to its value. The following operators are supported:</p><ul><li><code>&lt;</code> (less than)</li><li><code>&lt;=</code> (less than or equal)</li><li><code>&gt;</code> (greater than)</li><li><code>&gt;=</code> (greater than or equal)</li><li><code>!=</code> (not equal)</li><li><code>==</code> (equal)</li></ul><p>Strings have two additional operators:</p><ul><li><code>=~</code> (fuzzy match to allow)</li><li><code>!~</code> (fuzzy match to not allow)</li></ul><p>Dates can also be compared using the duration types. For example, <code>where accessed &gt; 2wk</code> will check the date in accessed to see if it&#39;s greater than 2 weeks ago. Durations currently allow these abbreviations:</p><ul><li><code>1sec</code> (one second)</li><li><code>1min</code> (one minute)</li><li><code>1hr</code> (one hour)</li><li><code>1day</code> (one day)</li><li><code>1wk</code> (one week)</li></ul><h2 id="boolean-check" tabindex="-1"><a class="header-anchor" href="#boolean-check" aria-hidden="true">#</a> Boolean check</h2><p>Where with the form <code>| where readonly</code> is used to check boolean values. For example, the command <code>ls --long | where readonly</code> will list only those files that are readonly.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>input-command<span class="token punctuation">]</span> <span class="token operator">|</span> where <span class="token punctuation">[</span>condition<span class="token punctuation">]</span>
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 4kb
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name       \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Cargo.lock \u2502 File \u2502 <span class="token number">113.3</span> KB \u2502 <span class="token number">53</span> mins ago
 <span class="token number">1</span> \u2502 Cargo.toml \u2502 File \u2502   <span class="token number">4.6</span> KB \u2502 <span class="token number">53</span> mins ago
 <span class="token number">2</span> \u2502 README.md  \u2502 File \u2502  <span class="token number">15.8</span> KB \u2502 <span class="token number">2</span> mins ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">0</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 pid   \u2502 name             \u2502 status  \u2502 cpu    \u2502 mem      \u2502 virtual</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">17917</span> \u2502 nu_plugin_core_p \u2502 Running \u2502 <span class="token number">4.1678</span> \u2502   <span class="token number">2.1</span> MB \u2502  <span class="token number">4.8</span> GB
 <span class="token number">1</span> \u2502 <span class="token number">14717</span> \u2502 Discord Helper <span class="token punctuation">(</span> \u2502 Running \u2502 <span class="token number">1.6842</span> \u2502 <span class="token number">371.9</span> MB \u2502  <span class="token number">8.0</span> GB
 <span class="token number">2</span> \u2502 <span class="token number">14713</span> \u2502 Discord Helper   \u2502 Running \u2502 <span class="token number">0.2099</span> \u2502  <span class="token number">27.8</span> MB \u2502  <span class="token number">5.8</span> GB
 <span class="token number">3</span> \u2502 <span class="token number">14710</span> \u2502 Discord          \u2502 Running \u2502 <span class="token number">0.0883</span> \u2502 <span class="token number">105.4</span> MB \u2502  <span class="token number">7.0</span> GB
 <span class="token number">4</span> \u2502  <span class="token number">9643</span> \u2502 Terminal         \u2502 Running \u2502 <span class="token number">4.0313</span> \u2502 <span class="token number">266.4</span> MB \u2502  <span class="token number">7.6</span> GB
 <span class="token number">5</span> \u2502  <span class="token number">7864</span> \u2502 Microsoft.Python \u2502 Running \u2502 <span class="token number">0.9828</span> \u2502 <span class="token number">340.9</span> MB \u2502  <span class="token number">8.0</span> GB
 <span class="token number">6</span> \u2502 <span class="token number">24402</span> \u2502 Code Helper <span class="token punctuation">(</span>Ren \u2502 Running \u2502 <span class="token number">1.0644</span> \u2502 <span class="token number">337.3</span> MB \u2502  <span class="token number">8.4</span> GB
 <span class="token number">7</span> \u2502 <span class="token number">24401</span> \u2502 Code Helper <span class="token punctuation">(</span>Ren \u2502 Running \u2502 <span class="token number">1.0031</span> \u2502 <span class="token number">593.5</span> MB \u2502  <span class="token number">8.6</span> GB
 <span class="token number">8</span> \u2502   <span class="token number">519</span> \u2502 EmojiFunctionRow \u2502 Running \u2502 <span class="token number">0.2063</span> \u2502  <span class="token number">52.7</span> MB \u2502  <span class="token number">7.5</span> GB
 <span class="token number">9</span> \u2502   <span class="token number">376</span> \u2502 CommCenter       \u2502 Running \u2502 <span class="token number">0.1620</span> \u2502  <span class="token number">30.0</span> MB \u2502  <span class="token number">6.5</span> GB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> -l <span class="token operator">|</span> where accessed <span class="token operator">&lt;=</span> 1wk
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name               \u2502 type \u2502 target \u2502 readonly \u2502 mode      \u2502 uid         \u2502 group \u2502 size     \u2502 created      \u2502 accessed    \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502        \u2502 No       \u2502 rw-r--r-- \u2502 josephlyons \u2502 staff \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">52</span> mins ago  \u2502 <span class="token number">52</span> secs ago \u2502 <span class="token number">52</span> mins ago
 <span class="token number">1</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502        \u2502 No       \u2502 rw-r--r-- \u2502 josephlyons \u2502 staff \u2502   <span class="token number">1.3</span> KB \u2502 <span class="token number">52</span> mins ago  \u2502 <span class="token number">4</span> mins ago  \u2502 <span class="token number">4</span> mins ago
 <span class="token number">2</span> \u2502 Cargo.lock         \u2502 File \u2502        \u2502 No       \u2502 rw-r--r-- \u2502 josephlyons \u2502 staff \u2502 <span class="token number">113.3</span> KB \u2502 <span class="token number">52</span> mins ago  \u2502 <span class="token number">52</span> mins ago \u2502 <span class="token number">52</span> mins ago
 <span class="token number">3</span> \u2502 Cargo.toml         \u2502 File \u2502        \u2502 No       \u2502 rw-r--r-- \u2502 josephlyons \u2502 staff \u2502   <span class="token number">4.6</span> KB \u2502 <span class="token number">52</span> mins ago  \u2502 <span class="token number">52</span> mins ago \u2502 <span class="token number">52</span> mins ago
 <span class="token number">4</span> \u2502 README.md          \u2502 File \u2502        \u2502 No       \u2502 rw-r--r-- \u2502 josephlyons \u2502 staff \u2502  <span class="token number">15.8</span> KB \u2502 <span class="token number">52</span> mins ago  \u2502 <span class="token number">1</span> min ago   \u2502 <span class="token number">1</span> min ago
 <span class="token number">5</span> \u2502 TODO.md            \u2502 File \u2502        \u2502 No       \u2502 rw-r--r-- \u2502 josephlyons \u2502 staff \u2502      <span class="token number">0</span> B \u2502 <span class="token number">52</span> mins ago  \u2502 <span class="token number">52</span> mins ago \u2502 <span class="token number">52</span> mins ago
 <span class="token number">6</span> \u2502 crates             \u2502 Dir  \u2502        \u2502 No       \u2502 rwxr-xr-x \u2502 josephlyons \u2502 staff \u2502    <span class="token number">704</span> B \u2502 <span class="token number">4</span> months ago \u2502 <span class="token number">52</span> mins ago \u2502 <span class="token number">52</span> mins ago
 <span class="token number">7</span> \u2502 docs               \u2502 Dir  \u2502        \u2502 No       \u2502 rwxr-xr-x \u2502 josephlyons \u2502 staff \u2502    <span class="token number">192</span> B \u2502 <span class="token number">5</span> months ago \u2502 <span class="token number">52</span> mins ago \u2502 <span class="token number">52</span> mins ago
 <span class="token number">8</span> \u2502 src                \u2502 Dir  \u2502        \u2502 No       \u2502 rwxr-xr-x \u2502 josephlyons \u2502 staff \u2502    <span class="token number">128</span> B \u2502 <span class="token number">5</span> months ago \u2502 <span class="token number">1</span> day ago   \u2502 <span class="token number">1</span> day ago
 <span class="token number">9</span> \u2502 target             \u2502 Dir  \u2502        \u2502 No       \u2502 rwxr-xr-x \u2502 josephlyons \u2502 staff \u2502    <span class="token number">160</span> B \u2502 <span class="token number">5</span> days ago   \u2502 <span class="token number">5</span> days ago  \u2502 <span class="token number">5</span> days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> -a <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&quot;yml&quot;</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 .gitpod.yml
 <span class="token builtin class-name">type</span>     \u2502 File
 size     \u2502 <span class="token number">866</span> B
 modified \u2502 <span class="token number">1</span> month ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,19),t=[p];function l(r,c){return s(),a("div",null,t)}var u=n(o,[["render",l],["__file","where.html.vue"]]);export{u as default};
