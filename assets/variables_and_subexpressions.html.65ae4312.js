import{_ as e,o as a,c as s,e as t}from"./app.88eb8db7.js";const n={},i=t(`<h1 id="variables-and-subexpressions" tabindex="-1"><a class="header-anchor" href="#variables-and-subexpressions" aria-hidden="true">#</a> Variables and Subexpressions</h1><p>There are two types of evaluation expressions in Nushell: variables and subexpressions. You know that you&#39;re looking at an evaluation expression because it begins with a dollar sign (<code>$</code>). This indicates that when Nushell gets the value in this position, it will need to run an evaluation step to process the expression and then use the resulting value. Both evaluation expression forms support a simple form and a &#39;path&#39; form for working with more complex data.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>The simpler of the two evaluation expressions is the variable. During evaluation, a variable is replaced by its value.</p><p>If we create a variable, we can print its contents by using <code>$</code> to refer to it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = 4
&gt; echo $my-value
4
</code></pre></div><h2 id="variable-paths" tabindex="-1"><a class="header-anchor" href="#variable-paths" aria-hidden="true">#</a> Variable paths</h2><p>A variable path works by reaching inside of the contents of a variable, navigating columns inside of it, to reach a final value. Let&#39;s say instead of <code>4</code>, we had assigned a table value:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = [[name]; [testuser]]
</code></pre></div><p>We can use a variable path to evaluate the variable <code>$my-value</code> and get the value from the <code>name</code> column in a single step:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $my-value.name
testuser
</code></pre></div><h2 id="subexpressions" tabindex="-1"><a class="header-anchor" href="#subexpressions" aria-hidden="true">#</a> Subexpressions</h2><p>You can always evaluate a subexpression and use its result by wrapping the expression with parentheses <code>()</code>. Note that previous versions of Nushell (prior to 0.32) used <code>$()</code>.</p><p>The parentheses contain a pipeline that will run to completion, and the resulting value will then be used. For example, <code>(ls)</code> would run the <code>ls</code> command and give back the resulting table and <code>(git branch --show-current)</code> runs the external git command and returns a string with the name of the current branch. You can also use parentheses to run math expressions like <code>(2 + 3)</code>.</p><p>Subexpressions can also be pipelines and not just single commands. If we wanted to get a list of filenames larger than ten kilobytes, we can use an subexpression to run a pipelines and assign this to a variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let names-of-big-files = (ls | where size &gt; 10kb)
&gt; echo $names-of-big-files
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502    name    \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Cargo.lock \u2502 File \u2502 155.3 KB \u2502 17 hours ago
 1 \u2502 README.md  \u2502 File \u2502  15.9 KB \u2502 17 hours ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="subexpressions-and-paths" tabindex="-1"><a class="header-anchor" href="#subexpressions-and-paths" aria-hidden="true">#</a> Subexpressions and paths</h2><p>Subexpressions also support paths. For example, let&#39;s say we wanted to get a list of the filenames in the current directory. One way to do this is to use a pipeline:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>We can do a very similar action in a single step using a subexpression path:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo (ls).name
</code></pre></div><p>It depends on the needs of the code and your particular style which form works best for you.</p>`,22),o=[i];function r(l,d){return a(),s("div",null,o)}var p=e(n,[["render",r],["__file","variables_and_subexpressions.html.vue"]]);export{p as default};
