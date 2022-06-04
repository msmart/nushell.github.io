import{_ as e,o as a,c as t,e as n}from"./app.88eb8db7.js";const r={},o=n('<h1 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h1><p>All values that flow into and out of commands in Nu are tagged with metadata. You&#39;ll see this commonly around the codebase as <code>Tagged&lt;Value&gt;</code>.</p><p>Though the metadata that is tracked is still in its early days, we expect to expand this as Nu matures.</p><p>Currently, there are two pieces of metadata tracked on each value:</p><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> Anchor</h2><p>Anchor represents the location that the value came from originally. If the value was loaded from a file, it will be the filename. If it was loaded from a URL, it will be the URL, and so on.</p><h2 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> Span</h2><p>A span holds the starting and ending locations of a value that was created or referenced on the commandline. These are most commonly used in the underline beneath an error message.</p><p>While spans from programming languages traditionally also carry the file the span came from, here we assume the span always spans a value referenced on the commandline rather than in a source file. As Nu gets the ability to run its own source files, this will likely need to be revisited.</p>',9),s=[o];function i(h,l){return a(),t("div",null,s)}var c=e(r,[["render",i],["__file","metadata.html.vue"]]);export{c as default};
