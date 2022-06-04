import{_ as o,r as s,o as r,c as i,a,b as d,e as t,d as e}from"./app.88eb8db7.js";const l={},c=t(`<h1 id="types-of-data" tabindex="-1"><a class="header-anchor" href="#types-of-data" aria-hidden="true">#</a> Types of data</h1><p>Traditionally, Unix shell commands have communicated with each other using strings of text. One command would output text via standard out (often abbreviated &#39;stdout&#39;) and the other would read in text via standard in (or &#39;stdin&#39;), allowing the two commands to communicate.</p><p>We can think of this kind of communication as string-based.</p><p>Nu embraces this approach for its commands and expands it to include other kinds of data. Currently, Nu supports two kinds of data types: simple and structured.</p><p>Like many programming languages, Nu models data using a set of simple and structured data types. Simple data types include integers, floats, strings, booleans, dates, and paths. It also includes a special type for filesizes.</p><h2 id="integers" tabindex="-1"><a class="header-anchor" href="#integers" aria-hidden="true">#</a> Integers</h2><p>Integers (or round) numbers. Examples include 1, 5, and 100.</p><h2 id="decimal" tabindex="-1"><a class="header-anchor" href="#decimal" aria-hidden="true">#</a> Decimal</h2><p>Decimal numbers are numbers with some fractional component. Examples include 1.5, 2.0, and 15.333.</p><h2 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h2><p>A string of characters that represents text. There are a few ways we can represent text in Nushell:</p><p><strong>Double quotes</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&quot;my message&quot;
</code></pre></div><p>Double quotes are the most common form of quotes and one you may see whenever text is required.</p><p><strong>Single quotes</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&#39;my message&#39;
</code></pre></div><p>Single quotes also give you a string value, just like double quotes. The difference here is that they allow you to use double quotes in the text: <code>&#39;he said &quot;can you grab my glass?&quot;&#39;</code></p><p><strong>String interpolation</strong> Nushell supports string interpolation, allowing you to run sub-expressions inside of strings prefixed with <code>$</code>. For instance:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $&quot;6 x 7 = (6 * 7)&quot;
6 x 7 = 42
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | each { |it| echo $&quot;($it.name) is ($it.size)&quot; }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 genawait is 4.1 KB
 1 \u2502 learncpp is 4.1 KB
 2 \u2502 nuscripts is 4.1 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><strong>Bare strings</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo hello
</code></pre></div><p>A unique trait of Nushell is that you can also create a string of one word without any quotes at all.</p><p>The above is the same as if we had written:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;hello&quot;
</code></pre></div>`,25),h=e("Also see "),u={href:"https://www.nushell.sh/book/loading_data.html#working-with-strings",target:"_blank",rel:"noopener noreferrer"},p=e("Working with Strings"),g=e("."),m=t(`<h2 id="lines" tabindex="-1"><a class="header-anchor" href="#lines" aria-hidden="true">#</a> Lines</h2><p>Lines are strings with an implied OS-dependent line ending. When used, the OS-specific line ending is used.</p><h2 id="column-paths" tabindex="-1"><a class="header-anchor" href="#column-paths" aria-hidden="true">#</a> Column paths</h2><p>Column paths are a path through the table to a specific sub-table, column, row, or cell.</p><p>Eg) The value <code>foo.0.bar</code> in <code>open data.toml | get foo.0.bar</code></p><h2 id="glob-patterns-wildcards" tabindex="-1"><a class="header-anchor" href="#glob-patterns-wildcards" aria-hidden="true">#</a> Glob patterns (wildcards)</h2><p>In Nushell, file operations may also allow you to pass in a glob pattern, sometimes called a &#39;wildcard&#39;. This allows you to give a pattern that may match multiple file paths.</p><p>The most general pattern is the <code>*</code>, which will match all paths. More often, you&#39;ll see this pattern used as part of another pattern, for example <code>*.bak</code> and <code>temp*</code>.</p><p>In Nushell, we also support double <code>*</code> to talk about traversing deeper paths that are nested inside of other directories. For example, <code>ls **/*</code> will list all the non-hidden paths nested under the current directory.</p><p>In addition to <code>*</code>, there is also the <code>?</code> pattern which will match a single character. For example, you can match the word &quot;port&quot; by using the pattern <code>p???</code>.</p><h2 id="booleans" tabindex="-1"><a class="header-anchor" href="#booleans" aria-hidden="true">#</a> Booleans</h2><p>Booleans are the state of being true or false. Rather than writing the value directly, it is often a result of a comparison.</p><p>The two values of booleans are <code>$true</code> and <code>$false</code>.</p><h2 id="dates" tabindex="-1"><a class="header-anchor" href="#dates" aria-hidden="true">#</a> Dates</h2><p>Dates and times are held together in the Date value type. Date values used by the system are timezone-aware, and by default use the UTC timezone.</p><h2 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> Duration</h2><p>Durations represent a length of time. A second, 5 weeks, and a year are all durations.</p><p>Eg) <code>1wk</code> is the duration of one week.</p><p>This chart shows all durations currently supported:</p><table><thead><tr><th>Duration</th><th>Length</th></tr></thead><tbody><tr><td>1sec</td><td>one second</td></tr><tr><td>1min</td><td>one minute</td></tr><tr><td>1hr</td><td>one hour</td></tr><tr><td>1day</td><td>one day</td></tr><tr><td>1wk</td><td>one week</td></tr></tbody></table><h2 id="ranges" tabindex="-1"><a class="header-anchor" href="#ranges" aria-hidden="true">#</a> Ranges</h2><p>A range is a way of expressing a sequence of values from start to finish. They take the form &#39;start&#39; + &#39;..&#39; + &#39;end&#39;. For example, the range <code>1..3</code> means the numbers 1, 2, and 3.</p><h2 id="inclusive-and-non-inclusive-ranges" tabindex="-1"><a class="header-anchor" href="#inclusive-and-non-inclusive-ranges" aria-hidden="true">#</a> Inclusive and non-inclusive ranges</h2><p>Ranges are inclusive by default, meaning that the ending value is counted as part of the range. The range <code>1..3</code> includes the number <code>3</code> as the last value in the range.</p><p>Sometimes, you may want a range that comes up to a number but doesn&#39;t use that number in the output. For this case, you can use <code>..&lt;</code> instead of <code>..</code>. For example, <code>1..&lt;5</code> is the numbers 1, 2, 3, and 4.</p><h2 id="open-ended-ranges" tabindex="-1"><a class="header-anchor" href="#open-ended-ranges" aria-hidden="true">#</a> Open-ended ranges</h2><p>Ranges can also be open-ended. You can remove the start or the end of the range to make it open-ended.</p><p>Let&#39;s say you wanted to start counting at 3, but you didn&#39;t have a specific end in mind. You could use the range <code>3..</code> to represent this. When you use a range that&#39;s open-ended on the right side, remember that this will continue counting for as long as possible, which could be a very long time! You&#39;ll often want to use open-ended ranges with commands like <code>first</code>, so you can take the number of elements you want from the range.</p><p>You can also make the start of the range open. In this case, Nushell will start counting with <code>0</code>, and go up from there. The range <code>..2</code> is the numbers 0, 1, and 2.</p><h2 id="file-paths" tabindex="-1"><a class="header-anchor" href="#file-paths" aria-hidden="true">#</a> File paths</h2><p>File paths are a platform-independent way of representing a file path in the given OS. Examples include /usr/bin and C:\\Users\\file.txt.</p><h2 id="file-sizes" tabindex="-1"><a class="header-anchor" href="#file-sizes" aria-hidden="true">#</a> File sizes</h2><p>File sizes are held in a special integer type called bytes. Examples include <code>100b</code>, <code>15kb</code>, and <code>100mb</code>.</p><p>The full list of filesize units are:</p><ul><li><code>pb</code>: petabytes</li><li><code>tb</code>: terabytes</li><li><code>gb</code>: gigabytes</li><li><code>mb</code>: megabytes</li><li><code>kb</code>: kilobytes</li><li><code>b</code>: bytes</li></ul><h2 id="binary-data" tabindex="-1"><a class="header-anchor" href="#binary-data" aria-hidden="true">#</a> Binary data</h2><p>Binary data, like the data from an image file, is a group of raw bytes.</p><h2 id="structured-data" tabindex="-1"><a class="header-anchor" href="#structured-data" aria-hidden="true">#</a> Structured data</h2><p>Structured data builds from the simple data. For example, instead of a single integer, structured data gives us a way to represent multiple integers in the same value. Here&#39;s a list of the currently supported structured data types: rows, lists, and blocks.</p><h2 id="rows" tabindex="-1"><a class="header-anchor" href="#rows" aria-hidden="true">#</a> Rows</h2><p>The row data type represents what you would see in one row of data in the table. It has different elements of data, and each element of data is given a column name.</p><h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2><p>Lists can hold more than one value. These can be simple values. They can also hold rows, and the combination of a list of rows is often called a &quot;table&quot;.</p><p>Example: a list of strings</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [sam fred george]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 sam
 1 \u2502 fred
 2 \u2502 george
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><p>The table is a core data structure in Nushell. As you run commands, you&#39;ll see that many of them return tables as output. A table has both rows and columns.</p><p>We can create our own tables similarly to how we create a list. Because tables also contain columns and not just values, we pass in the name of the column values:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[Column1, Column2]; [Value1, Value2]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 Column1 \u2502 Column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Value1  \u2502 Value2
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can also create a table with multiple rows of data:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[Column1, Column2]; [Value1, Value2] [Value3, Value4]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 Column1 \u2502 Column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Value1  \u2502 Value2
 1 \u2502 Value3  \u2502 Value4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks" aria-hidden="true">#</a> Blocks</h2><p>Blocks represent a block of code in Nu. For example, in the command <code>each { echo $it }</code> the block is the portion contained in curly braces, <code>{ echo $it }</code>. Blocks are a useful way of representing code that can be executed on each row of data.</p><p>Blocks can also include parameters. These parameters are listed between a pair of pipe symbols. For example, you can change the parameter set by the <code>each</code> command using: <code>each {|x| echo $x }</code>.</p><h2 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> Groups</h2><p>Take this example:</p><div class="language-text ext-text"><pre class="language-text"><code>foo {
  line1
  line2; line3 | line4
}
</code></pre></div><p>Inside the block, you have two separate groups that run to completion, a group is a semicolon-separated list of pipelines, the last of which is output to the screen.</p><ul><li><code>line1</code> is a group unto itself, so that command will run to completion and get displayed on the screen.</li><li><code>line2</code> is a pipeline inside of the second group. It runs, but its contents are not viewed on the screen.</li><li><code>line3</code> | <code>line4</code> is the second pipeline in the second group. It runs, and its contents get viewed.</li></ul>`,59);function f(b,x){const n=s("ExternalLinkIcon");return r(),i("div",null,[c,a("p",null,[h,a("a",u,[p,d(n)]),g]),m])}var w=o(l,[["render",f],["__file","types_of_data.html.vue"]]);export{w as default};
