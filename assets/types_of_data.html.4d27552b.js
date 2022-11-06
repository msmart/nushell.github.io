import{_ as l,r as c,o as i,c as r,a,b as s,w as t,d as n,e as o}from"./app.32b969d4.js";const d={},u=a("h1",{id:"types-of-data",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#types-of-data","aria-hidden":"true"},"#"),n(" Types of Data")],-1),h=a("p",null,"Traditionally, Unix shell commands have communicated with each other using strings of text: one command would write text to standard output (often abbreviated 'stdout') and the other would read text from standard input (or 'stdin'), allowing the two commands to communicate.",-1),b=a("p",null,"Nu embraces this approach, and expands it to include other types of data, in addition to strings.",-1),m=a("p",null,"Like many programming languages, Nu models data using a set of simple, and structured data types. Simple data types include integers, floats, strings, booleans, dates. There are also special types for filesizes and time durations.",-1),k=n("The "),g=a("code",null,"describe",-1),y=n(" command returns the type of a data value:"),f=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">42</span> <span class="token operator">|</span> describe
</code></pre></div><h2 id="types-at-a-glance" tabindex="-1"><a class="header-anchor" href="#types-at-a-glance" aria-hidden="true">#</a> Types at a glance</h2><table><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>Integers</td><td><code>-65535</code></td></tr><tr><td>Decimals (floats)</td><td><code>9.9999</code>, <code>Infinity</code></td></tr><tr><td>Strings</td><td><code>&quot;hole 18&quot;, &#39;hole 18&#39;, \`hole 18\`, hole18</code></td></tr><tr><td>Booleans</td><td><code>true</code></td></tr><tr><td>Dates</td><td><code>2000-01-01</code></td></tr><tr><td>Durations</td><td><code>2min + 12sec</code></td></tr><tr><td>File sizes</td><td><code>64mb</code></td></tr><tr><td>Ranges</td><td><code>0..4</code>, <code>0..&lt;5</code>, <code>0..</code>, <code>..4</code></td></tr><tr><td>Binary</td><td><code>0x[FE FF]</code></td></tr><tr><td>Lists</td><td><code>[0 1 &#39;two&#39; 3]</code></td></tr><tr><td>Records</td><td><code>{name:&quot;Nushell&quot;, lang: &quot;Rust&quot;}</code></td></tr><tr><td>Tables</td><td><code>[{x:12, y:15}, {x:8, y:9}]</code>, <code>[[x, y]; [12, 15], [8, 9]]</code></td></tr><tr><td>Blocks</td><td><code>{|e| $e + 1 | into string }</code>, <code>{ $in.name.0 | path exists }</code></td></tr><tr><td>Null</td><td><code>null</code></td></tr></tbody></table><h2 id="integers" tabindex="-1"><a class="header-anchor" href="#integers" aria-hidden="true">#</a> Integers</h2><p>Examples of integers (i.e. &quot;round numbers&quot;) include 1, 0, -5, and 100. You can parse a string into an integer with the <code>into int</code> command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;-5&quot;</span> <span class="token operator">|</span> into int
</code></pre></div><h2 id="decimals" tabindex="-1"><a class="header-anchor" href="#decimals" aria-hidden="true">#</a> Decimals</h2><p>Decimal numbers are numbers with some fractional component. Examples include 1.5, 2.0, and 15.333. You can cast a string into an Decimal with the <code>into decimal</code> command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;1.2&quot;</span> <span class="token operator">|</span> into decimal
</code></pre></div><h2 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h2><p>A string of characters that represents text. There are a few ways these can be constructed:</p><ul><li>Double quotes <ul><li><code>&quot;Line1\\nLine2\\n&quot;</code></li></ul></li><li>Single quotes <code>&#39;She said &quot;Nushell is the future&quot;.&#39;</code></li><li>Dynamic string interpolation <ul><li><code>$&quot;6 x 7 = (6 * 7)&quot;</code></li><li><code>ls | each { |it| $&quot;($it.name) is ($it.size)&quot; }</code></li></ul></li><li>Bare strings <ul><li><code>print hello</code></li><li><code>[foo bar baz]</code></li></ul></li></ul>`,12),v=n("See "),x=n("Working with strings"),w=n(" and "),_={href:"https://www.nushell.sh/book/loading_data.html#handling-strings",target:"_blank",rel:"noopener noreferrer"},q=n("Handling Strings"),T=n(" for details."),z=o(`<h2 id="booleans" tabindex="-1"><a class="header-anchor" href="#booleans" aria-hidden="true">#</a> Booleans</h2><p>There are just two boolean values: <code>true</code> and <code>false</code>. Rather than writing the values directly, they often result from a comparison:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mybool <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> <span class="token variable">$mybool</span>
<span class="token boolean">true</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mybool <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">HOME</span> <span class="token operator">|</span> path exists<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$mybool</span>
<span class="token boolean">true</span>
</code></pre></div><h2 id="dates" tabindex="-1"><a class="header-anchor" href="#dates" aria-hidden="true">#</a> Dates</h2><p>Dates and times are held together in the Date value type. Date values used by the system are timezone-aware, and by default use the UTC timezone.</p><p>Dates are in three forms, based on the RFC 3339 standard:</p><ul><li>A date: <ul><li><code>2022-02-02</code></li></ul></li><li>A date and time (in GMT): <ul><li><code>2022-02-02T14:30:00</code></li></ul></li><li>A date and time with timezone: <ul><li><code>2022-02-02T14:30:00+05:00</code></li></ul></li></ul><h2 id="durations" tabindex="-1"><a class="header-anchor" href="#durations" aria-hidden="true">#</a> Durations</h2><p>Durations represent a length of time. This chart shows all durations currently supported:</p><table><thead><tr><th>Duration</th><th>Length</th></tr></thead><tbody><tr><td><code>1ns</code></td><td>one nanosecond</td></tr><tr><td><code>1us</code></td><td>one microsecond</td></tr><tr><td><code>1ms</code></td><td>one millisecond</td></tr><tr><td><code>1sec</code></td><td>one second</td></tr><tr><td><code>1min</code></td><td>one minute</td></tr><tr><td><code>1hr</code></td><td>one hour</td></tr><tr><td><code>1day</code></td><td>one day</td></tr><tr><td><code>1wk</code></td><td>one week</td></tr></tbody></table><p>You can make fractional durations:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">3</span>.14day
3day 3hr 21min
</code></pre></div><p>And you can do calculations with durations:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 30day / 1sec  <span class="token comment"># How many seconds in 30 days?</span>
<span class="token number">2592000</span>
</code></pre></div><h2 id="file-sizes" tabindex="-1"><a class="header-anchor" href="#file-sizes" aria-hidden="true">#</a> File sizes</h2><p>Nushell also has a special type for file sizes. Examples include <code>100b</code>, <code>15kb</code>, and <code>100mb</code>.</p><p>The full list of filesize units are:</p><ul><li><code>b</code>: bytes</li><li><code>kb</code>: kilobytes (aka 1000 bytes)</li><li><code>mb</code>: megabytes</li><li><code>gb</code>: gigabytes</li><li><code>tb</code>: terabytes</li><li><code>pb</code>: petabytes</li><li><code>eb</code>: exabytes</li><li><code>zb</code>: zettabyte</li><li><code>kib</code>: kibibytes (aka 1024 bytes)</li><li><code>mib</code>: mebibytes</li><li><code>gib</code>: gibibytes</li><li><code>tib</code>: tebibytes</li><li><code>pib</code>: pebibytes</li><li><code>eib</code>: exbibyte</li><li><code>zib</code>: zebibyte</li></ul><p>As with durations, you can make fractional file sizes, and do calculations:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 1Gb / 1b
<span class="token number">1000000000</span>
<span class="token operator">&gt;</span> 1Gib / 1b
<span class="token number">1073741824</span>
<span class="token operator">&gt;</span> <span class="token punctuation">(</span>1Gib / 1b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> ** <span class="token number">30</span>
<span class="token boolean">true</span>
</code></pre></div><h2 id="ranges" tabindex="-1"><a class="header-anchor" href="#ranges" aria-hidden="true">#</a> Ranges</h2><p>A range is a way of expressing a sequence of values from start to finish. They take the form &lt;start&gt;..&lt;end&gt;. For example, the range <code>1..3</code> means the numbers 1, 2, and 3.</p><h3 id="inclusive-and-non-inclusive-ranges" tabindex="-1"><a class="header-anchor" href="#inclusive-and-non-inclusive-ranges" aria-hidden="true">#</a> Inclusive and non-inclusive ranges</h3><p>Ranges are inclusive by default, meaning that the ending value is counted as part of the range. The range <code>1..3</code> includes the number <code>3</code> as the last value in the range.</p><p>Sometimes, you may want a range that is limited by a number but doesn&#39;t use that number in the output. For this, you can use <code>..&lt;</code> instead of <code>..</code>. For example, <code>1..&lt;5</code> is the numbers 1, 2, 3, and 4.</p><h3 id="open-ended-ranges" tabindex="-1"><a class="header-anchor" href="#open-ended-ranges" aria-hidden="true">#</a> Open-ended ranges</h3><p>Ranges can also be open-ended. You can remove the start or the end of the range to make it open-ended.</p><p>Let&#39;s say you wanted to start counting at 3, but you didn&#39;t have a specific end in mind. You could use the range <code>3..</code> to represent this. When you use a range that&#39;s open-ended on the right side, remember that this will continue counting for as long as possible, which could be a very long time! You&#39;ll often want to use open-ended ranges with commands like <code>take</code>, so you can take the number of elements you want from the range.</p><p>You can also make the start of the range open. In this case, Nushell will start counting with <code>0</code>. For example, the range <code>..2</code> is the numbers 0, 1, and 2.</p><h2 id="binary-data" tabindex="-1"><a class="header-anchor" href="#binary-data" aria-hidden="true">#</a> Binary data</h2><p>Binary data, like the data from an image file, is a group of raw bytes.</p><p>You can write binary as a literal using any of the <code>0x[...]</code>, <code>0b[...]</code>, or <code>0o[...]</code> forms:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF<span class="token punctuation">]</span>  <span class="token comment"># Hexadecimal</span>
<span class="token operator">&gt;</span> 0b<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1010</span><span class="token punctuation">]</span> <span class="token comment"># Binary</span>
<span class="token operator">&gt;</span> 0o<span class="token punctuation">[</span><span class="token number">777</span><span class="token punctuation">]</span>    <span class="token comment"># Octal</span>
</code></pre></div><p>Incomplete bytes will be left-padded with zeros.</p><h2 id="structured-data" tabindex="-1"><a class="header-anchor" href="#structured-data" aria-hidden="true">#</a> Structured data</h2><p>Structured data builds from the simple data. For example, instead of a single integer, structured data gives us a way to represent multiple integers in the same value. Here&#39;s a list of the currently supported structured data types: records, lists and tables.</p><h2 id="records" tabindex="-1"><a class="header-anchor" href="#records" aria-hidden="true">#</a> Records</h2><p>Records hold key-value pairs, which associate string keys with various data values. Record syntax is very similar to objects in JSON. However, commas are <em>not</em> required to separate values if Nushell can easily distinguish them!</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>name: sam rank: <span class="token number">10</span><span class="token punctuation">}</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name \u2502 sam \u2502
\u2502 rank \u2502 <span class="token number">10</span>  \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>As these can sometimes have many fields, a record is printed up-down rather than left-right.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A record is identical to a single row of a table (see below). You can think of a record as essentially being a &quot;one-row table&quot;, with each of its keys as a column (although a true one-row table is something distinct from a record).</p><p>This means that any command that operates on a table&#39;s rows <em>also</em> operates on records. For instance, <code>insert</code>, which adds data to each of a table&#39;s rows, can be used with records:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>x:3 y:1<span class="token punctuation">}</span> <span class="token operator">|</span> insert z <span class="token number">0</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u256E
\u2502 x \u2502 <span class="token number">3</span> \u2502
\u2502 y \u2502 <span class="token number">1</span> \u2502
\u2502 z \u2502 <span class="token number">0</span> \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u256F
</code></pre></div></div><p>You can iterate over records by first transposing it into a table:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>name: sam, rank: <span class="token number">10</span><span class="token punctuation">}</span> <span class="token operator">|</span> transpose key value
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 key  \u2502 value \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 name \u2502  sam  \u2502
\u2502 <span class="token number">1</span> \u2502 rank \u2502   <span class="token number">10</span>  \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Accessing records&#39; data is done by placing a <code>.</code> before a string, which is usually a bare string:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>x:12 y:4<span class="token punctuation">}</span>.x
<span class="token number">12</span>
</code></pre></div><p>However, if a record has a key name that can&#39;t be expressed as a bare string, or resembles an integer (see lists, below), you&#39;ll need to use more explicit string syntax, like so:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span>:true <span class="token string">&quot; &quot;</span>:false<span class="token punctuation">}</span>.<span class="token string">&quot; &quot;</span>
<span class="token boolean">false</span>
</code></pre></div><h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2><p>Lists are ordered sequences of data values. List syntax is very similar to arrays in JSON. However, commas are <em>not</em> required to separate values if Nushell can easily distinguish them!</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>sam fred george<span class="token punctuation">]</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 sam    \u2502
\u2502 <span class="token number">1</span> \u2502 fred   \u2502
\u2502 <span class="token number">2</span> \u2502 george \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Lists are equivalent to the individual columns of tables. You can think of a list as essentially being a &quot;one-column table&quot; (with no column name). Thus, any command which operates on a column <em>also</em> operates on a list. For instance, <code>where</code> can be used with lists:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>bell book candle<span class="token punctuation">]</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">=~</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 bell \u2502
\u2502 <span class="token number">1</span> \u2502 book \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div></div><p>Accessing lists&#39; data is done by placing a <code>.</code> before a bare integer:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span>.1
b
</code></pre></div><p>To get a sub-list from a list, you can use the <code>range</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c d e f<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 b \u2502
\u2502 <span class="token number">1</span> \u2502 c \u2502
\u2502 <span class="token number">2</span> \u2502 d \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><p>The table is a core data structure in Nushell. As you run commands, you&#39;ll see that many of them return tables as output. A table has both rows and columns.</p><p>We can create our own tables similarly to how we create a list. Because tables also contain columns and not just values, we pass in the name of the column values:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>column1, column2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Value1, Value2<span class="token punctuation">]</span> <span class="token punctuation">[</span>Value3, Value4<span class="token punctuation">]</span><span class="token punctuation">]</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 column1 \u2502 column2 \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Value1  \u2502 Value2  \u2502
\u2502 <span class="token number">1</span> \u2502 Value3  \u2502 Value4  \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>You can also create a table as a list of records, JSON-style:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>name: sam, rank: <span class="token number">10</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name: bob, rank: <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 name \u2502 rank \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 sam  \u2502   <span class="token number">10</span> \u2502
\u2502 <span class="token number">1</span> \u2502 bob  \u2502    <span class="token number">7</span> \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Internally, tables are simply <strong>lists of records</strong>. This means that any command which extracts or isolates a specific row of a table will produce a record. For example, <code>get 0</code>, when used on a list, extracts the first value. But when used on a table (a list of records), it extracts a record:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>x:12, y:5<span class="token punctuation">}</span>, <span class="token punctuation">{</span>x:3, y:6<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> get <span class="token number">0</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 x \u2502 <span class="token number">12</span> \u2502
\u2502 y \u2502 <span class="token number">5</span>  \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>This is true regardless of which table syntax you use:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span>x,y<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">12,5</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3,6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> get <span class="token number">0</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 x \u2502 <span class="token number">12</span> \u2502
\u2502 y \u2502 <span class="token number">5</span>  \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div></div><h3 id="cell-paths" tabindex="-1"><a class="header-anchor" href="#cell-paths" aria-hidden="true">#</a> Cell Paths</h3><p>You can combine list and record data access syntax to navigate tables. When used on tables, these access chains are called &quot;cell paths&quot;.</p><p>You can access individual rows by number to obtain records:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>langs:<span class="token punctuation">[</span>Rust JS Python<span class="token punctuation">]</span>, releases:60<span class="token punctuation">}</span><span class="token punctuation">]</span>.0
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 langs    \u2502 <span class="token punctuation">[</span>list <span class="token number">3</span> items<span class="token punctuation">]</span> \u2502
\u2502 releases \u2502 <span class="token number">60</span>             \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>langs:<span class="token punctuation">[</span>Rust JS Python<span class="token punctuation">]</span>, releases:60<span class="token punctuation">}</span><span class="token punctuation">]</span>.0.langs.2
Python
</code></pre></div><p>Moreover, you can also access entire columns of a table by name, to obtain lists:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>x:12 y:5<span class="token punctuation">}</span> <span class="token punctuation">{</span>x:4 y:7<span class="token punctuation">}</span> <span class="token punctuation">{</span>x:2 y:2<span class="token punctuation">}</span><span class="token punctuation">]</span>.x
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 <span class="token number">12</span> \u2502
\u2502 <span class="token number">1</span> \u2502  <span class="token number">4</span> \u2502
\u2502 <span class="token number">2</span> \u2502  <span class="token number">2</span> \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Of course, these resulting lists don&#39;t have the column names of the table. To remove columns from a table while leaving it as a table, you&#39;ll commonly use the <code>select</code> command with column names:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>x:0 y:5 z:1<span class="token punctuation">}</span> <span class="token punctuation">{</span>x:4 y:7 z:3<span class="token punctuation">}</span> <span class="token punctuation">{</span>x:2 y:2 z:0<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">select</span> y z
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 y \u2502 z \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">5</span> \u2502 <span class="token number">1</span> \u2502
\u2502 <span class="token number">1</span> \u2502 <span class="token number">7</span> \u2502 <span class="token number">3</span> \u2502
\u2502 <span class="token number">2</span> \u2502 <span class="token number">2</span> \u2502 <span class="token number">0</span> \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u256F
</code></pre></div><p>To remove rows from a table, you&#39;ll commonly use the <code>select</code> command with row numbers, as you would with a list:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>x:0 y:5 z:1<span class="token punctuation">}</span> <span class="token punctuation">{</span>x:4 y:7 z:3<span class="token punctuation">}</span> <span class="token punctuation">{</span>x:2 y:2 z:0<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">1</span> <span class="token number">2</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 x \u2502 y \u2502 z \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">4</span> \u2502 <span class="token number">7</span> \u2502 <span class="token number">3</span> \u2502
\u2502 <span class="token number">1</span> \u2502 <span class="token number">2</span> \u2502 <span class="token number">2</span> \u2502 <span class="token number">0</span> \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u256F
</code></pre></div><p>There are numerous other commands for selecting and reducing the data in tables, records and lists.</p><h2 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks" aria-hidden="true">#</a> Blocks</h2><p>Blocks represent a block of code in Nu. For example, in the command <code>each { |it| print $it }</code> the block is the portion contained in curly braces, <code>{ |it| print $it }</code>. Block parameters are specified between a pair of pipe symbols (for example, <code>|it|</code>) if necessary. You can also use <code>$in</code> in most blocks instead of providing a parameter: <code>each { print $in }</code></p>`,75),N=n("Blocks are a useful way to represent code that can be executed on each row of data. It is idiomatic to use "),F=a("code",null,"$it",-1),$=n(" as a parameter name in "),B=a("code",null,"each",-1),D=n(" blocks, but not required; "),S=a("code",null,"each { |x| print $x }",-1),R=n(" works the same way as "),Y=a("code",null,"each { |it| print $it }",-1),A=n("."),I=o(`<h2 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> Null</h2><p>Finally, there is <code>null</code> (also known as <code>$nothing</code>) which is the language&#39;s &quot;nothing&quot; value, similar to JSON&#39;s &quot;null&quot;. Whenever Nushell would print the <code>null</code> value (outside of a string or data structure), it prints nothing instead. Hence, most of Nushell&#39;s file system commands (like <code>save</code> or <code>cd</code>) produce <code>null</code>.</p><p>You can place <code>null</code> at the end of a pipeline to replace the pipeline&#39;s output with it, and thus print nothing:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> checkout featurebranch <span class="token operator">|</span> null
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><code>null</code> is not the same as the absence of a value! It is possible for a table to be produced that has holes in some of its rows. Attempting to access this value will not produce <code>null</code>, but instead cause an error:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a:1 b:2<span class="token punctuation">}</span> <span class="token punctuation">{</span>b:1<span class="token punctuation">}</span><span class="token punctuation">]</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 a  \u2502 b \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502  <span class="token number">1</span> \u2502 <span class="token number">2</span> \u2502
\u2502 <span class="token number">1</span> \u2502 \u274E \u2502 <span class="token number">1</span> \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u256F
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a:1 b:2<span class="token punctuation">}</span> <span class="token punctuation">{</span>b:1<span class="token punctuation">}</span><span class="token punctuation">]</span>.1.a
Error: nu::shell::column_not_found

  \xD7 Cannot <span class="token function">find</span> <span class="token function">column</span>
   \u256D\u2500<span class="token punctuation">[</span>entry <span class="token comment">#15:1:1]</span>
 <span class="token number">1</span> \u2502 <span class="token punctuation">[</span><span class="token punctuation">{</span>a:1 b:2<span class="token punctuation">}</span> <span class="token punctuation">{</span>b:1<span class="token punctuation">}</span><span class="token punctuation">]</span>.1.a
   \xB7            \u2500\u2500\u252C\u2500\u2500    \u252C
   \xB7              \u2502      \u2570\u2500\u2500 cannot <span class="token function">find</span> <span class="token function">column</span>
   \xB7              \u2570\u2500\u2500 value originates here
   \u2570\u2500\u2500\u2500\u2500
</code></pre></div><p>The absence of a value is (as of Nushell 0.71) printed as the \u274E emoji in interactive output.</p></div>`,5);function L(V,E){const e=c("RouterLink"),p=c("ExternalLinkIcon");return i(),r("div",null,[u,h,b,m,a("p",null,[k,s(e,{to:"/book/commands/describe.html"},{default:t(()=>[g]),_:1}),y]),f,a("p",null,[v,s(e,{to:"/book/working_with_strings.html"},{default:t(()=>[x]),_:1}),w,a("a",_,[q,s(p)]),T]),z,a("p",null,[N,F,$,s(e,{to:"/book/commands/each.html"},{default:t(()=>[B]),_:1}),D,S,R,Y,A]),I])}const O=l(d,[["render",L],["__file","types_of_data.html.vue"]]);export{O as default};
