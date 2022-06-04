import{_ as e,o as t,c as o,e as a}from"./app.88eb8db7.js";const r={},i=a('<h1 id="nu-map-from-functional-languages" tabindex="-1"><a class="header-anchor" href="#nu-map-from-functional-languages" aria-hidden="true">#</a> Nu map from functional languages</h1><p>The idea behind this table is to help you understand how Nu built-ins and plug-ins relate to functional languages. We&#39;ve tried to produce a map of all the Nu commands and what their equivalents are in other languages. Contributions are welcome.</p><p>Note: this table assumes Nu 0.14.1 or later.</p><p>| Nushell | Clojure | Tablecloth (Ocaml / Elm) | Haskell | | ----------------- | ---------------------------- | ------------------------------- | ------------------------ | --- | | alias | | | | | | append | conj, into, concat | append, (++), concat, concatMap | (++) | | | args | | | | | | autoview | | | | | | average(<code>*</code>) | | | | | | binaryview(<code>*</code>) | Integer/toHexString | | showHex | | | calc, = math | math operators | | | | | cd | | | | | | clear | | | | | | clip | | | | | | compact | | | | | | config | | | | | | count | count | length, size | length, size | | | cp | | | | | | date | java.time.LocalDate/now | | | | | debug | | | | | | default | | | | | | drop | | | | | | du | | | | | | each | map, mapv, iterate | map, forEach | map | | | echo | println | | putStrLn, print | | | enter | | | | | | evaluate_by | | | | | | exit | System/exit | | | | | fetch(<code>*</code>) | | | | | | first | first | head | head | | | format | format | | Text.Printf.printf | | | from | | | | | | get | | | | | | group_by | group-by | | group, groupBy | | | headers | | | | | | help | doc | | | | | histogram | | | | | | history | | | | | | inc(<code>*</code>) | inc | | succ | | | insert | | | | | | is_empty | empty? | isEmpty | | | | keep | take, drop-last, pop | take, init | take, init | | | keep_until | | | | | | keep_while | take-while | takeWhile | takeWhile | | | kill | | | | | | last | last, peek, take-last | last | last | | | lines | | | lines, words, split-with | | | ls | | | | | | map_max_by | | | | | | match(<code>*</code>) | re-matches, re-seq, re-find | | | | | merge | | | | | | mkdir | | | | | | mv | | | | | | next | | | | | | nth | nth | Array.get | lookup | | | open | with-open | | | | | parse | | | | | | pivot, =transpose | (apply mapv vector matrix) | | transpose | | | post(<code>*</code>) | | | | | | prepend | cons | cons, :: | :: | | | prev | | | | | | ps(<code>*</code>) | | | | | | pwd | | | | | | range | range | range | 1..10, &#39;a&#39;..&#39;f&#39; | | | reduce_by | reduce, reduce-kv | foldr | foldr | | | reject | | | | | | rename | | | | | | reverse | reverse, rseq | reverse, reverseInPlace | reverse | | | rm | | | | | | save | | | | | | select(<code>***</code>) | select-keys | | | | | shells | | | | | | shuffle | shuffle | | | | | size | count | | size, length | | | skip | rest | tail | tail | | | skip_until | | | | | | skip_while | drop-while | dropWhile | dropWhile, dropWhileEnd | | | sort-by | sort, sort-by, sorted-set-by | sort, sortBy, sortWith | sort, sortBy | | | split_by | split, split-{at,with,lines} | split, words, lines | split, words, lines | | | split_column | | | | | | split_row | | | | | | str(<code>*</code>) | clojure.string functions | String functions | | | | sum | apply + | sum | sum | | | sys(<code>*</code>) | | | | | | table | | | | | | tags | | | | | | textview(<code>*</code>) | | | | | | tree(<code>*</code>) | | | | | | to | | | | | | touch | | | | | | trim | trim, triml, trimr | trim, trimLeft, trimRight | strip | | | uniq | set | Set.empty | Data.Set | | | update(<code>**</code>) | | | | | | version | | | | | | with_env | | | | | | what | | | | | | where | filter, filterv, select | filter, filterMap | filter | | | which | | | | | | wrap | | | | |</p><ul><li><code>*</code> - these commands are part of the standard plugins</li><li><code>**</code> - renamed from <code>edit</code> to <code>update</code> in 0.13.1</li><li><code>***</code> - renamed from <code>pick</code> to <code>select</code> in 0.13.1</li></ul>',5),s=[i];function l(c,n){return t(),o("div",null,s)}var p=e(r,[["render",l],["__file","nushell_map_functional.html.vue"]]);export{p as default};
