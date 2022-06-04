import{_ as n,o as s,c as a,e}from"./app.88eb8db7.js";const p={},o=e(`<h1 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by" aria-hidden="true">#</a> group-by</h1><p>This command creates a new table with the data from the table rows grouped by the column given.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Let&#39;s say we have this table of all countries in the world sorted by their population:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> countries_by_population.json <span class="token operator">|</span> from json <span class="token operator">|</span> first <span class="token number">10</span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 rank \u2502 country or area \u2502 UN continental region \u2502 UN statistical region \u2502 population 2018 \u2502 population 2019 \u2502 change</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">1</span>    \u2502 China           \u2502 Asia                  \u2502 Eastern Asia          \u2502 <span class="token number">1,427</span>,647,786   \u2502 <span class="token number">1,433</span>,783,686   \u2502 +0.4%
 <span class="token number">1</span> \u2502 <span class="token number">2</span>    \u2502 India           \u2502 Asia                  \u2502 Southern Asia         \u2502 <span class="token number">1,352</span>,642,280   \u2502 <span class="token number">1,366</span>,417,754   \u2502 +1.0%
 <span class="token number">2</span> \u2502 <span class="token number">3</span>    \u2502 United States   \u2502 Americas              \u2502 Northern America      \u2502 <span class="token number">327,096</span>,265     \u2502 <span class="token number">329,064</span>,917     \u2502 +0.6%
 <span class="token number">3</span> \u2502 <span class="token number">4</span>    \u2502 Indonesia       \u2502 Asia                  \u2502 South-eastern Asia    \u2502 <span class="token number">267,670</span>,543     \u2502 <span class="token number">270,625</span>,568     \u2502 +1.1%
 <span class="token number">4</span> \u2502 <span class="token number">5</span>    \u2502 Pakistan        \u2502 Asia                  \u2502 Southern Asia         \u2502 <span class="token number">212,228</span>,286     \u2502 <span class="token number">216,565</span>,318     \u2502 +2.0%
 <span class="token number">5</span> \u2502 <span class="token number">6</span>    \u2502 Brazil          \u2502 Americas              \u2502 South America         \u2502 <span class="token number">209,469</span>,323     \u2502 <span class="token number">211,049</span>,527     \u2502 +0.8%
 <span class="token number">6</span> \u2502 <span class="token number">7</span>    \u2502 Nigeria         \u2502 Africa                \u2502 Western Africa        \u2502 <span class="token number">195,874</span>,683     \u2502 <span class="token number">200,963</span>,599     \u2502 +2.6%
 <span class="token number">7</span> \u2502 <span class="token number">8</span>    \u2502 Bangladesh      \u2502 Asia                  \u2502 Southern Asia         \u2502 <span class="token number">161,376</span>,708     \u2502 <span class="token number">163,046</span>,161     \u2502 +1.0%
 <span class="token number">8</span> \u2502 <span class="token number">9</span>    \u2502 Russia          \u2502 Europe                \u2502 Eastern Europe        \u2502 <span class="token number">145,734</span>,038     \u2502 <span class="token number">145,872</span>,256     \u2502 +0.1%
 <span class="token number">9</span> \u2502 <span class="token number">10</span>   \u2502 Mexico          \u2502 Americas              \u2502 Central America       \u2502 <span class="token number">126,190</span>,788     \u2502 <span class="token number">127,575</span>,529     \u2502 +1.1%
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Here we have listed only the first 10 lines. In total this table has got 233 rows which is to big to get information easily out of it.</p><p>We can use the <code>group-by</code> command on &#39;UN statistical region&#39; to create a table per continental region.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> countries_by_population.json <span class="token operator">|</span> from json <span class="token operator">|</span> group-by <span class="token string">&quot;UN continental region&quot;</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 Asia             \u2502 Americas         \u2502 Africa           \u2502 Europe           \u2502 Oceania
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table: <span class="token number">51</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">53</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">58</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">48</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">23</span> rows<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Now we can already get some information like &quot;which continental regions are there&quot; and &quot;how many countries are in each region&quot;. If we want to see only the countries in the continental region of Oceania we can type:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> countries_by_population.json <span class="token operator">|</span> from json <span class="token operator">|</span> group-by <span class="token string">&quot;UN continental region&quot;</span> <span class="token operator">|</span> get Oceania
\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment">#  \u2502 rank \u2502 country or area                \u2502 UN continental region \u2502 UN statistical region     \u2502 population 2018 \u2502 population 2019 \u2502 change</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 <span class="token number">55</span>   \u2502 Australia                      \u2502 Oceania               \u2502 Australia and New Zealand \u2502 <span class="token number">24,898</span>,152      \u2502 <span class="token number">25,203</span>,198      \u2502 +1.2%
  <span class="token number">1</span> \u2502 <span class="token number">98</span>   \u2502 Papua New Guinea               \u2502 Oceania               \u2502 Melanesia                 \u2502 <span class="token number">8,606</span>,323       \u2502 <span class="token number">8,776</span>,109       \u2502 +2.0%
  <span class="token number">2</span> \u2502 <span class="token number">125</span>  \u2502 New Zealand                    \u2502 Oceania               \u2502 Australia and New Zealand \u2502 <span class="token number">4,743</span>,131       \u2502 <span class="token number">4,783</span>,063       \u2502 +0.8%
  <span class="token number">3</span> \u2502 <span class="token number">161</span>  \u2502 Fiji                           \u2502 Oceania               \u2502 Melanesia                 \u2502 <span class="token number">883,483</span>         \u2502 <span class="token number">889,953</span>         \u2502 +0.7%
  <span class="token number">4</span> \u2502 <span class="token number">166</span>  \u2502 Solomon Islands                \u2502 Oceania               \u2502 Melanesia                 \u2502 <span class="token number">652,857</span>         \u2502 <span class="token number">669,823</span>         \u2502 +2.6%
  <span class="token number">5</span> \u2502 <span class="token number">181</span>  \u2502 Vanuatu                        \u2502 Oceania               \u2502 Melanesia                 \u2502 <span class="token number">292,680</span>         \u2502 <span class="token number">299,882</span>         \u2502 +2.5%
  <span class="token number">6</span> \u2502 <span class="token number">183</span>  \u2502 New Caledonia                  \u2502 Oceania               \u2502 Melanesia                 \u2502 <span class="token number">279,993</span>         \u2502 <span class="token number">282,750</span>         \u2502 +1.0%
  <span class="token number">7</span> \u2502 <span class="token number">185</span>  \u2502 French Polynesia               \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">277,679</span>         \u2502 <span class="token number">279,287</span>         \u2502 +0.6%
  <span class="token number">8</span> \u2502 <span class="token number">188</span>  \u2502 Samoa                          \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">196,129</span>         \u2502 <span class="token number">197,097</span>         \u2502 +0.5%
  <span class="token number">9</span> \u2502 <span class="token number">191</span>  \u2502 Guam                           \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">165,768</span>         \u2502 <span class="token number">167,294</span>         \u2502 +0.9%
 <span class="token number">10</span> \u2502 <span class="token number">193</span>  \u2502 Kiribati                       \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">115,847</span>         \u2502 <span class="token number">117,606</span>         \u2502 +1.5%
 <span class="token number">11</span> \u2502 <span class="token number">194</span>  \u2502 Federated States of Micronesia \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">112,640</span>         \u2502 <span class="token number">113,815</span>         \u2502 +1.0%
 <span class="token number">12</span> \u2502 <span class="token number">196</span>  \u2502 Tonga                          \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">110,589</span>         \u2502 <span class="token number">110,940</span>         \u2502 +0.3%
 <span class="token number">13</span> \u2502 <span class="token number">207</span>  \u2502 Marshall Islands               \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">58,413</span>          \u2502 <span class="token number">58,791</span>          \u2502 +0.6%
 <span class="token number">14</span> \u2502 <span class="token number">209</span>  \u2502 Northern Mariana Islands       \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">56,882</span>          \u2502 <span class="token number">56,188</span>          \u2502 \u22121.2%
 <span class="token number">15</span> \u2502 <span class="token number">210</span>  \u2502 American Samoa                 \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">55,465</span>          \u2502 <span class="token number">55,312</span>          \u2502 \u22120.3%
 <span class="token number">16</span> \u2502 <span class="token number">221</span>  \u2502 Palau                          \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">17,907</span>          \u2502 <span class="token number">18,008</span>          \u2502 +0.6%
 <span class="token number">17</span> \u2502 <span class="token number">222</span>  \u2502 Cook Islands                   \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">17,518</span>          \u2502 <span class="token number">17,548</span>          \u2502 +0.2%
 <span class="token number">18</span> \u2502 <span class="token number">224</span>  \u2502 Tuvalu                         \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">11,508</span>          \u2502 <span class="token number">11,646</span>          \u2502 +1.2%
 <span class="token number">19</span> \u2502 <span class="token number">225</span>  \u2502 Wallis and Futuna              \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">11,661</span>          \u2502 <span class="token number">11,432</span>          \u2502 \u22122.0%
 <span class="token number">20</span> \u2502 <span class="token number">226</span>  \u2502 Nauru                          \u2502 Oceania               \u2502 Micronesia                \u2502 <span class="token number">10,670</span>          \u2502 <span class="token number">10,756</span>          \u2502 +0.8%
 <span class="token number">21</span> \u2502 <span class="token number">231</span>  \u2502 Niue                           \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">1,620</span>           \u2502 <span class="token number">1,615</span>           \u2502 \u22120.3%
 <span class="token number">22</span> \u2502 <span class="token number">232</span>  \u2502 Tokelau                        \u2502 Oceania               \u2502 Polynesia                 \u2502 <span class="token number">1,319</span>           \u2502 <span class="token number">1,340</span>           \u2502 +1.6%
\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,10),t=[o];function r(c,l){return s(),a("div",null,t)}var i=n(p,[["render",r],["__file","group-by.html.vue"]]);export{i as default};
