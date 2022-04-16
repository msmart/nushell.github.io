(window.webpackJsonp=window.webpackJsonp||[]).push([[837],{1343:function(t,s,e){"use strict";e.r(s);var r=e(34),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"配置第三方提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置第三方提示"}},[t._v("#")]),t._v(" 配置第三方提示")]),t._v(" "),e("h2",{attrs:{id:"nerdfonts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nerdfonts"}},[t._v("#")]),t._v(" Nerdfonts")]),t._v(" "),e("p",[t._v("Nerdfonts 并不是必需的，但它们能使呈现效果更好。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.nerdfonts.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"oh-my-posh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-posh"}},[t._v("#")]),t._v(" oh-my-posh")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如果你喜欢"),e("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("oh-my-posh"),e("OutboundLink")],1),t._v("，可以通过以下几个步骤在 Nushell 里使用 oh-my-posh，它与 Nushell 一起配合得很好。在 Nushell 里设置 oh-my-posh 的步骤：")]),t._v(" "),e("ol",[e("li",[t._v("安装 Oh My Posh 并按照 "),e("a",{attrs:{href:"https://ohmyposh.dev/docs/linux#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("指南"),e("OutboundLink")],1),t._v("下载 oh-my-posh 的主题。")]),t._v(" "),e("li",[t._v("下载并安装一个 "),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nerdfonts 字体"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("~/.config/nushell/config.nu")]),t._v("（或由"),e("code",[t._v("$nu.config-path")]),t._v("输出的路径）中设置"),e("code",[t._v("PROMPT_COMMAND")]),t._v("，将"),e("code",[t._v("M365Princess.mp.json")]),t._v("改为你喜欢的任何 "),e("a",{attrs:{href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"}},[t._v("主题"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" let-env PROMPT_COMMAND "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" oh-my-posh --config ~/.poshthemes/M365Princess.omp.json "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("MacOS 用户配置步骤：")]),t._v(" "),e("ol",[e("li",[t._v("你可以通过"),e("code",[t._v("brew")]),t._v("安装"),e("code",[t._v("oh-my-posh")]),t._v("，可以参考这里的 "),e("a",{attrs:{href:"https://ohmyposh.dev/docs/macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("指南"),e("OutboundLink")],1),t._v("；")]),t._v(" "),e("li",[t._v("下载并安装一个 "),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nerdfonts 字体"),e("OutboundLink")],1),t._v("；")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("$nu.config-path")]),t._v("输出的文件中设置"),e("code",[t._v("PROMPT_COMMAND")]),t._v("，可以参考下面的代码片段：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" posh-dir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brew --prefix oh-my-posh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str trim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" posh-theme "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("$'($posh-dir)/share/oh-my-posh/themes/'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Change the theme names to: zash/space/robbyrussel/powerline/powerlevel10k_lean/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# material/half-life/lambda Or double lines theme: amro/pure/spaceship, etc.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For more [Themes demo](https://ohmyposh.dev/docs/themes)")]),t._v("\nlet-env PROMPT_COMMAND "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" oh-my-posh prompt print primary --config "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("$'($posh-theme)/zash.omp.json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional")]),t._v("\nlet-env PROMPT_INDICATOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(ansi y)$> (ansi reset)"')]),t._v("\n")])])]),e("h2",{attrs:{id:"starship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#starship"}},[t._v("#")]),t._v(" Starship")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库"),e("OutboundLink")],1)]),t._v(" "),e("ol",[e("li",[t._v("参照上面的链接，安装 Starship；")]),t._v(" "),e("li",[t._v("根据你的喜好，安装 nerdfonts；")]),t._v(" "),e("li",[t._v("使用下面的配置示例，请确保设置"),e("code",[t._v("STARSHIP_SHELL")]),t._v("环境变量；")])]),t._v(" "),e("p",[t._v("下面是一个关于 Starship 的配置示例：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("let-env STARSHIP_SHELL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nu"')]),t._v("\n\ndef create_left_prompt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    starship prompt --cmd-duration "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".CMD_DURATION_MS "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("$'--status=($env.LAST_EXIT_CODE)'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use nushell functions to define your right and left prompt")]),t._v("\nlet-env PROMPT_COMMAND "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" create_left_prompt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nlet-env PROMPT_COMMAND_RIGHT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The prompt indicators are environmental variables that represent")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the state of the prompt")]),t._v("\nlet-env PROMPT_INDICATOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nlet-env PROMPT_INDICATOR_VI_INSERT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('": "')]),t._v("\nlet-env PROMPT_INDICATOR_VI_NORMAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"〉"')]),t._v("\nlet-env PROMPT_MULTILINE_INDICATOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::: "')]),t._v("\n")])])]),e("p",[t._v("然后重启 Nushell：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nushell on 📙 main is 📦 v0.60.0 via 🦀 v1.59.0\n❯\n")])])]),e("p",[t._v("你可以在 "),e("a",{attrs:{href:"https://github.com/starship/starship#step-2-setup-your-shell-to-use-starship",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 Starship 配置文档"),e("OutboundLink")],1),t._v("中了解更多关于配置 Starship 的信息。")]),t._v(" "),e("p",[t._v("另一种启用 Starship 的方法在 "),e("a",{attrs:{href:"https://starship.rs/#nushell",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starship 快速安装"),e("OutboundLink")],1),t._v("说明中有描述。")]),t._v(" "),e("h2",{attrs:{id:"purs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purs"}},[t._v("#")]),t._v(" Purs")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/xcambar/purs",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);