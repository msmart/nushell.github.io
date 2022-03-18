(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{895:function(e,t,n){"use strict";n.r(t);var o=n(35),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),n("p",[e._v("Similar to many other programming languages, Nushell also has modules that let you import custom commands into a current scope.\nHowever, since Nushell is also a shell, modules allow you to import environment variables which can be used to conveniently activate/deactivate various environments.")]),e._v(" "),n("p",[n("em",[e._v("Note! The current implementation of modules is quite bare-bones and will be expanded in the future. For example, it is not yet possible to import a module from within a module.")])]),e._v(" "),n("h2",{attrs:{id:"basics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),n("p",[e._v("A simple module can be defined like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> module greetings {\n     export def hello [name: string] {\n         $"hello ($name)!"\n     }\n\n     export def hi [where: string] {\n         $"hi ($where)!"\n     }\n}\n')])])]),n("p",[e._v("or in a file named the same as the the module you want to create:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# greetings.nu\n\nexport def hello [name: string] {\n    $"hello ($name)!"\n}\n\nexport def hi [where: string] {\n    $"hi ($where)!"\n}\n')])])]),n("p",[e._v("We defined "),n("code",[e._v("hello")]),e._v(" and "),n("code",[e._v("hi")]),e._v(" custom commands inside a "),n("code",[e._v("greetings")]),e._v(" module.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("export")]),e._v(" keyword makes it possible to later import the commands from the module.")]),e._v(" "),n("p",[e._v("Similar to "),n("RouterLink",{attrs:{to:"/book/commands/def.html"}},[n("code",[e._v("def")])]),e._v(", it is also possible to mark "),n("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[n("code",[e._v("def-env")])]),e._v(" with the "),n("code",[e._v("export")]),e._v(" keyword (you can learn more about "),n("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[n("code",[e._v("def-env")])]),e._v(" in the "),n("RouterLink",{attrs:{to:"/book/environment.html"}},[e._v("Environment")]),e._v(" chapter).")],1),e._v(" "),n("h2",{attrs:{id:"using-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-modules"}},[e._v("#")]),e._v(" Using modules")]),e._v(" "),n("p",[e._v("By itself, the module does not do anything. To use what the module exports, we need to "),n("RouterLink",{attrs:{to:"/book/commands/use.html"}},[n("code",[e._v("use")])]),e._v(" it.")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> use greetings\n\n> greetings hello "world"\nhello world!\n\n> greetings hi "there"\nhi there!\n')])])]),n("p",[e._v("The "),n("code",[e._v("hello")]),e._v(" and "),n("code",[e._v("hi")]),e._v(" commands are now available with the "),n("code",[e._v("greetings")]),e._v(" prefix.")]),e._v(" "),n("h2",{attrs:{id:"importing-symbols"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#importing-symbols"}},[e._v("#")]),e._v(" Importing symbols")]),e._v(" "),n("p",[e._v("In general, anything after the "),n("RouterLink",{attrs:{to:"/book/commands/use.html"}},[n("code",[e._v("use")])]),e._v(" keyword forms an "),n("strong",[e._v("import pattern")]),e._v(" which controls how the symbols are imported.\nThe import pattern can be one of the following:")],1),e._v(" "),n("p",[n("code",[e._v("use greetings")])]),e._v(" "),n("p",[e._v("Imports all symbols with the module name as a prefix (we saw this in the previous example).")]),e._v(" "),n("p",[n("code",[e._v("use greetings hello")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("hello")]),e._v(" symbol will be imported directly without any prefix.")]),e._v(" "),n("p",[n("code",[e._v("use greetings [ hello, hi ]")])]),e._v(" "),n("p",[e._v("Imports multiple symbols directly without any prefix")]),e._v(" "),n("p",[n("code",[e._v("use greetings *")])]),e._v(" "),n("p",[e._v("You can also use the module name and the "),n("code",[e._v("*")]),e._v(" glob to import all names directly without any prefix")]),e._v(" "),n("h2",{attrs:{id:"module-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module-files"}},[e._v("#")]),e._v(" Module Files")]),e._v(" "),n("p",[e._v("Nushell lets you implicitly treat a source file as a module.\nLet's start by saving the body of the module definition into a file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# greetings.nu\n\nexport def hello [name: string] {\n    $"hello ($name)!"\n}\n\nexport def hi [where: string] {\n    $"hi ($where)!"\n}\n')])])]),n("p",[e._v("Now, you can call "),n("RouterLink",{attrs:{to:"/book/commands/use.html"}},[n("code",[e._v("use")])]),e._v(" directly on the file:")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> use greetings.nu\n\n> greetings hello "world"\nhello world!\n\n> greetings hi "there"\nhi there!\n')])])]),n("p",[e._v('Nushell automatically infers the module\'s name from the stem of the file ("greetings" without the ".nu" extension).\nYou can use any import patterns as described above with the file name instead of the module name.')]),e._v(" "),n("h2",{attrs:{id:"local-custom-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#local-custom-commands"}},[e._v("#")]),e._v(" Local Custom Commands")]),e._v(" "),n("p",[e._v("Any custom commands defined in a module without the "),n("code",[e._v("export")]),e._v(" keyword will work only in the module's scope:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# greetings.nu\n\nexport def hello [name: string] {\n    greetings-helper "hello" "world"\n}\n\nexport def hi [where: string] {\n    greetings-helper "hi" "there"\n}\n\ndef greetings-helper [greeting: string, subject: string] {\n    $"($greeting) ($subject)!"\n}\n')])])]),n("p",[e._v('Then, in Nushell we import all definitions from the "greetings.nu":')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> use greetings.nu *\n\n> hello "world"\nhello world!\n\n> hi "there"\nhi there!\n\n> greetings-helper "foo" "bar"  # fails because \'greetings-helper\' is not exported\n')])])]),n("h2",{attrs:{id:"environment-variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),n("p",[e._v("So far we used modules just to import custom commands.\nIt is possible to export environment variables the same way.\nThe syntax is slightly different than what you might be used to from commands like "),n("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[n("code",[e._v("let-env")])]),e._v(" or "),n("RouterLink",{attrs:{to:"/book/commands/load-env.html"}},[n("code",[e._v("load-env")])]),e._v(":")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# greetings.nu\n\nexport env MYNAME { "Arthur, King of the Britons" }\n\nexport def hello [name: string] {\n    $"hello ($name)"\n}\n')])])]),n("p",[n("code",[e._v("use")]),e._v(" works the same way as with custom commands:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> use greetings.nu\n\n> $env."greetings MYNAME"\nArthur, King of the Britons\n\n> greetings hello $env."greetings MYNAME"\nhello Arthur, King of the Britons!\n')])])]),n("p",[e._v("You can notice we do not assign the value to "),n("code",[e._v("MYNAME")]),e._v(" directly.\nInstead, we give it a block of code ("),n("code",[e._v("{ ...}")]),e._v(") that gets evaluated every time we call "),n("RouterLink",{attrs:{to:"/book/commands/use.html"}},[n("code",[e._v("use")])]),e._v(".\nWe can demonstrate this property, for example, with the "),n("RouterLink",{attrs:{to:"/book/commands/random.html"}},[n("code",[e._v("random")])]),e._v(" command:")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> module roll { export env ROLL { random dice | into string } }\n\n> use roll ROLL\n\n> $env.ROLL\n4\n\n> $env.ROLL\n4\n\n> use roll ROLL\n\n> $env.ROLL\n6\n\n> $env.ROLL\n6\n")])])]),n("h2",{attrs:{id:"hiding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hiding"}},[e._v("#")]),e._v(" Hiding")]),e._v(" "),n("p",[e._v('Any custom command, alias or environment variable, imported from a module or not, can be "hidden", restoring the previous definition.\n(Note, it is not yet possible to export aliases from modules but they can still be hidden.)\nWe do this with the '),n("RouterLink",{attrs:{to:"/book/commands/hide.html"}},[n("code",[e._v("hide")])]),e._v(" command:")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> def foo [] { "foo" }\n\n> foo\nfoo\n\n> hide foo\n\n> foo  # error! command not found!\n')])])]),n("p",[e._v("The "),n("RouterLink",{attrs:{to:"/book/commands/hide.html"}},[n("code",[e._v("hide")])]),e._v(" command also accepts import patterns, just like "),n("RouterLink",{attrs:{to:"/book/commands/use.html"}},[n("code",[e._v("use")])]),e._v(".\nThe import pattern is interpreted slightly differently, though.\nIt can be one of the following:")],1),e._v(" "),n("p",[n("code",[e._v("hide foo")]),e._v(" or "),n("code",[e._v("hide greetings")])]),e._v(" "),n("ul",[n("li",[e._v("If the name is a custom command or an environment variable, hides it directly. Otherwise:")]),e._v(" "),n("li",[e._v("If the name is a module name, hides all of its exports prefixed with the module name")])]),e._v(" "),n("p",[n("code",[e._v("hide greetings hello")])]),e._v(" "),n("ul",[n("li",[e._v("Hides only the prefixed command / environment variable")])]),e._v(" "),n("p",[n("code",[e._v("hide greetings [hello, hi]")])]),e._v(" "),n("ul",[n("li",[e._v("Hides only the prefixed commands / environment variables")])]),e._v(" "),n("p",[n("code",[e._v("hide greetings *")])]),e._v(" "),n("ul",[n("li",[e._v("Hides all of the module's exports, without the prefix")])]),e._v(" "),n("p",[e._v("Let's show these with examples.\nWe saw direct hiding of a custom command already.\nLet's try environment variables:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> let-env FOO = "FOO"\n\n> $env.FOO\nFOO\n\n> hide FOO\n\n> $env.FOO  # error! environment variable not found!\n')])])]),n("p",[e._v('The first case also applies to commands / environment variables brought from a module (using the "greetings.nu" file defined above):')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> use greetings.nu *\n\n> $env.MYNAME\nArthur, King of the Britons\n\n> hello "world"\nhello world!\n\n> hide MYNAME\n\n> $env.MYNAME  # error! environment variable not found!\n\n> hide hello\n\n> hello "world" # error! command not found!\n')])])]),n("p",[e._v("And finally, when the name is the module name (assuming the previous "),n("code",[e._v("greetings")]),e._v(" module):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> use greetings.nu\n\n> $env."greetings MYNAME"\nArthur, King of the Britons\n\n> greetings hello "world"\nhello world!\n\n> hide greetings\n\n> $env."greetings MYNAME"  # error! environment variable not found!\n\n> greetings hello "world" # error! command not found!\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);