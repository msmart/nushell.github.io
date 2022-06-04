import{_ as e,o as t,c as o,e as r}from"./app.88eb8db7.js";const i={},a=r('<h1 id="\u95A2\u6570\u578B\u8A00\u8A9E\u304B\u3089-nu-\u3078\u306E\u5BFE\u5FDC\u8868" tabindex="-1"><a class="header-anchor" href="#\u95A2\u6570\u578B\u8A00\u8A9E\u304B\u3089-nu-\u3078\u306E\u5BFE\u5FDC\u8868" aria-hidden="true">#</a> \u95A2\u6570\u578B\u8A00\u8A9E\u304B\u3089 Nu \u3078\u306E\u5BFE\u5FDC\u8868</h1><p>\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306F Nu \u306E\u7D44\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u3084\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u4ED6\u306E\u95A2\u6570\u578B\u8A00\u8A9E\u3068\u306E\u5BFE\u5FDC\u95A2\u4FC2\u3092\u7406\u89E3\u3059\u308B\u3053\u3068\u3092\u52A9\u3051\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002\u3053\u3053\u3067\u306F\u5168\u3066\u306E Nu \u30B3\u30DE\u30F3\u30C9\u3068\u305D\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u4ED6\u306E\u8A00\u8A9E\u3067\u3069\u3046\u4F7F\u308F\u308C\u3066\u3044\u308B\u304B\u3092\u30DE\u30C3\u30D4\u30F3\u30B0\u3057\u3066\u3044\u307E\u3059\u3002\u30B3\u30F3\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u6B53\u8FCE\u3067\u3059\u3002</p><p>\u6CE8: Nu \u304C 0.14.1 \u4EE5\u964D\u3067\u3042\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002</p><p>| Nushell | Clojure | Tablecloth (Ocaml / Elm) | Haskell | | ----------------- | ---------------------------- | ------------------------------- | ------------------------ | --- | | alias | | | | | | append | conj, into, concat | append, (++), concat, concatMap | (++) | | | args | | | | | | autoview | | | | | | average(<code>*</code>) | | | | | | binaryview(<code>*</code>) | Integer/toHexString | | showHex | | | calc, = math | math operators | | | | | cd | | | | | | clear | | | | | | clip | | | | | | compact | | | | | | config | | | | | | count | count | length, size | length, size | | | cp | | | | | | date | java.time.LocalDate/now | | | | | debug | | | | | | default | | | | | | drop | | | | | | du | | | | | | each | map, mapv, iterate | map, forEach | map | | | echo | println | | putStrLn, print | | | enter | | | | | | evaluate_by | | | | | | exit | System/exit | | | | | fetch(<code>*</code>) | | | | | | first | first | head | head | | | format | format | | Text.Printf.printf | | | from | | | | | | get | | | | | | group_by | group-by | | group, groupBy | | | headers | | | | | | help | doc | | | | | histogram | | | | | | history | | | | | | inc(<code>*</code>) | inc | | succ | | | insert | | | | | | is_empty | empty? | isEmpty | | | | keep | take, drop-last, pop | take, init | take, init | | | keep_until | | | | | | keep_while | take-while | takeWhile | takeWhile | | | kill | | | | | | last | last, peek, take-last | last | last | | | lines | | | lines, words, split-with | | | ls | | | | | | map_max_by | | | | | | match(<code>*</code>) | re-matches, re-seq, re-find | | | | | merge | | | | | | mkdir | | | | | | mv | | | | | | next | | | | | | nth | nth | Array.get | lookup | | | open | with-open | | | | | parse | | | | | | pivot, =transpose | (apply mapv vector matrix) | | transpose | | | post(<code>*</code>) | | | | | | prepend | cons | cons, :: | :: | | | prev | | | | | | ps(<code>*</code>) | | | | | | pwd | | | | | | range | range | range | 1..10, &#39;a&#39;..&#39;f&#39; | | | reduce_by | reduce, reduce-kv | foldr | foldr | | | reject | | | | | | rename | | | | | | reverse | reverse, rseq | reverse, reverseInPlace | reverse | | | rm | | | | | | save | | | | | | select(<code>***</code>) | select-keys | | | | | shells | | | | | | shuffle | shuffle | | | | | size | count | | size, length | | | skip | rest | tail | tail | | | skip_until | | | | | | skip_while | drop-while | dropWhile | dropWhile, dropWhileEnd | | | sort-by | sort, sort-by, sorted-set-by | sort, sortBy, sortWith | sort, sortBy | | | split_by | split, split-{at,with,lines} | split, words, lines | split, words, lines | | | split_column | | | | | | split_row | | | | | | str(<code>*</code>) | clojure.string functions | String functions | | | | sum | apply + | sum | sum | | | sys(<code>*</code>) | | | | | | table | | | | | | tags | | | | | | textview(<code>*</code>) | | | | | | tree(<code>*</code>) | | | | | | to | | | | | | touch | | | | | | trim | trim, triml, trimr | trim, trimLeft, trimRight | strip | | | uniq | set | Set.empty | Data.Set | | | update(<code>**</code>) | | | | | | version | | | | | | with_env | | | | | | what | | | | | | where | filter, filterv, select | filter, filterMap | filter | | | which | | | | | | wrap | | | | |</p><ul><li><code>*</code> - these commands are part of the standard plugins</li><li><code>**</code> - renamed from <code>edit</code> to <code>update</code> in 0.13.1</li><li><code>***</code> - renamed from <code>pick</code> to <code>select</code> in 0.13.1</li></ul>',5),s=[a];function c(l,n){return t(),o("div",null,s)}var p=e(i,[["render",c],["__file","nushell_map_functional.html.vue"]]);export{p as default};
