import{_ as e,o as t,c as r,e as o}from"./app.88eb8db7.js";const a={},i=o('<h1 id="nu-map-from-other-shells-and-domain-specific-languages" tabindex="-1"><a class="header-anchor" href="#nu-map-from-other-shells-and-domain-specific-languages" aria-hidden="true">#</a> Nu map from other shells and domain specific languages</h1><p>The idea behind this table is to help you understand how Nu built-ins and plug-ins relate to other known shells and domain specific languages. We&#39;ve tried to produce a map of all the Nu commands and what their equivalents are in other languages. Contributions are welcome.</p><p>Note: this table assumes Nu 0.14.1 or later.</p><p>| Nushell | SQL | .Net LINQ (C#) | PowerShell (without external modules) | Bash | | ----------------- | ------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------ | ----------------------------------------------- | ----------------- | | alias | - | - | alias | alias | | append | - | Append | -Append | | | args | - | - | | | | autoview | - | - | | | | average(<code>*</code>) | avg | Average | Measure-Object, measure | | | binaryview(<code>*</code>) | - | | Format-Hex | | | calc, = math | math operators | Aggregate, Average, Count, Max, Min, Sum | | bc | | cd | - | - | Set-Location, cd | cd | | clear | - | - | Clear-Host | clear | | clip | - | - | Set-Clipboard, scb | clip, clipboard, xclip, pbcopy | | compact | | | | | | config | - | - | $Profile | vi .bashrc, .profile | | count | count | Count | Measure-Object, measure | wc | | cp | - | - | Copy-Item, cp, copy | cp | | date | NOW() / getdate() | DateTime class | Get-Date | date | | debug | | | | | | = dec | | x-- | | | | default | | | | | | drop | | | | | | du | - | - | | du | | each | cursor | | ForEach-Object, foreach, for | | | echo | print, union all | - | Write-Output, write | echo | Sort-Object {Get- | | enter | - | - | | | | evaluate_by | | | | | | exit | - | | exit | exit | | fetch(<code>*</code>) | - | HttpClient,WebClient, HttpWebRequest/Response | Invoke-WebRequest | wget | | first | top, limit | First, FirstOrDefault | Select-Object -First | head | | format | | String.Format | String.Format | | | from | import flatfile, openjson, cast(variable as xml) | - | Import/ConvertFrom-{Csv,Xml,Html,Json} | | | get | | Select | (cmd).column | | | group_by | group by | GroupBy, group | Group-Object, group | | | headers | | | | | | help | sp_help | - | Get-Help, help, man | man | | histogram | - | - | | | | history | - | - | Get-History, history | history | | inc(<code>*</code>) | - | | - | - | | insert | | | Add-Member | | | is_empty | is null | String.InNullOrEmpty | String.InNullOrEmpty | | | keep, =take | top, limit | Take | Select-Object -First | head | | keep_until | | | | | | keep_while | | TakeWhile | | | | kill | - | - | Stop-Process, kill | kill | | last | | Last, LastOrDefault | Select-Object -Last | tail | | lines | - | - | File.ReadAllLines | | | ls | - | - | Get-ChildItem, dir, ls | ls | | map_max_by | | | | | | match(<code>*</code>) | case when | Regex.IsMatch | [regex] | | | merge | | | | | | mkdir | - | - | mkdir, md | mkdir | | mv | - | - | Move-Item, mv, move, mi | mv | | next | | | | | | nth | limit x offset y, rownumber = | ElementAt | [x], indexing operator, ElementAt | | | open | | | Get-Content, gc, cat, type | cat | | parse | | | | | | pivot, =transpose | pivot | - | | | | post(<code>*</code>) | - | HttpClient,WebClient, HttpWebRequest/Response | Invoke-WebRequest | | | prepend | | | | | | prev | | | | | | ps(<code>*</code>) | - | - | Get-Process, ps, gps | ps | | pwd | - | - | Get-Location, pwd | pwd | | range | | Range | 1..10, &#39;a&#39;..&#39;f&#39; | | | reduce_by | | Aggregate | | | | reject | | | | | | rename | - | - | Rename-Item, ren, rni | mv | | reverse | | Reverse | [Array]::Reverse($var) | | | rm | - | - | Remove-Item, del, erase, rd, ri, rm, rmdir | rm | | save | - | - | Write-Output, Out-File | &gt; foo.txt | | select(<code>***</code>) | select | Select | Select-Object, select | | | shells | - | - | - | | | shuffle | | Random | Sort-Object {Get-Random} | - | | size | | | Measure-Object, measure | wc | | skip | where row_number() | Skip | Select-Object -Skip | | | skip_until | | | | | | skip_while | | SkipWhile | | | | sort-by | order by | OrderBy, OrderByDescending, ThenBy, ThenByDescending | Sort-Object, sort | | | split_by | | Split | Split | | | split_column | | - | | | | split_row | | - | | | | str(<code>*</code>) | string functions | String class | String class | | | sum | sum | Sum | Measure-Object, measure | | | sys(<code>*</code>) | - | - | Get-ComputerInfo | uname, lshw, lsblk, lscpu, lsusb, hdparam, free | | table | | | Format-Table, ft, Format-List, fl | | | tags | - | - | - | | | textview(<code>*</code>) | - | - | Get-Content, cat | | | tree(<code>*</code>) | - | - | tree | | | to | - | - | Export/ConvertTo-{Csv,Xml,Html,Json} | | | touch | - | - | Set-Content | touch | | trim | rtrim, ltrim | Trim, TrimStart, TrimEnd | Trim | | | uniq | distinct | Distinct | Get-Unique, gu | uniq | | update(<code>**</code>) | As | - | | | | version | select @@version | - | $PSVersionTable | | | with_env | - | - | $env:FOO = &#39;bar&#39; | export foo = &quot;bar&quot; | | what | | | | | | where | where | Where | Where-Object, where, &quot;?&quot; operator | | | which | - | - | - | which | | wrap | | | | |</p><ul><li><code>*</code> - these commands are part of the standard plugins</li><li><code>**</code> - renamed from <code>edit</code> to <code>update</code> in 0.13.1</li><li><code>***</code> - renamed from <code>pick</code> to <code>select</code> in 0.13.1</li></ul>',5),s=[i];function c(l,n){return t(),r("div",null,s)}var p=e(a,[["render",c],["__file","nushell_map.html.vue"]]);export{p as default};
