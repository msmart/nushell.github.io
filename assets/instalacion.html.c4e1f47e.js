import{_ as o,r as i,o as r,c as l,a as e,b as t,d as a,e as n}from"./app.88eb8db7.js";const d={},u=e("h1",{id:"instalando-nu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instalando-nu","aria-hidden":"true"},"#"),a(" Instalando Nu")],-1),c=a("La mejor manera actualmente para poner en marcha Nu es instal\xE1ndolo a trav\xE9s de "),p={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},h=a("crates.io"),g=a(", descargando desde "),_={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},m=a("nuestra p\xE1gina"),b=a(", y compilar desde la fuente."),x=e("h2",{id:"binarios",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#binarios","aria-hidden":"true"},"#"),a(" Binarios")],-1),f=a("Puedes descargar Nu compilado desde "),q={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},v=a("nuestra p\xE1gina"),y=a(". Alternativamente, si usas "),w={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},k=a("Homebrew"),N=a(" para macOS, puedes instalar el binario ejecutando "),C=e("code",null,"brew install nushell",-1),E=a("."),j=e("h3",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),a(" Windows")],-1),P=e("p",null,[e("strong",null,"nota:"),a(" Nu trabaja con Windows 10 y no soporta Windows 7/8.1")],-1),R=a("Descarga el archivo actual "),S=e("code",null,".zip",-1),L=a(),z={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},V=a("de la p\xE1gina de releases"),W=a(" y extr\xE1elo por ejemplo a:"),T=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,` C:\\Program Files
`)])],-1),U=e("p",null,[a("y posteriormente agrega Nu a la variable de entorno "),e("code",null,"PATH"),a(". Una vez que hagamos eso, podemos ejecutar Nu usando el comando "),e("code",null,"nu"),a(":")],-1),A=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,` > nu
 C:\\Users\\user>
`)])],-1),I=a("Si te encuentras usando "),O={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},H=a("Windows Terminal"),B=a(" puedes establecer "),D=e("code",null,"nu",-1),F=a(" como la shell por defecto a\xF1adiendo:"),G=n(`<div class="language-text ext-text"><pre class="language-text"><code>{
 &quot;guid&quot;: &quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;,
 &quot;hidden&quot;: false,
 &quot;name&quot;: &quot;Nu Shell&quot;,
 &quot;commandline&quot;: &quot;nu.exe&quot;
}
</code></pre></div><p>a <code>&quot;profiles&quot;</code> en las preferencias de tu Terminal (archivo JSON). Lo \xFAltimo que tienes que hacer es cambiar <code>&quot;defaultProfile&quot;</code> a:</p><div class="language-text ext-text"><pre class="language-text"><code>&quot;defaultProfile&quot;: &quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;,
</code></pre></div><p>Ahora <code>nu</code> deber\xEDa cargar al inicio de la Terminal de Windows.</p><h2 id="preparacion" tabindex="-1"><a class="header-anchor" href="#preparacion" aria-hidden="true">#</a> Preparaci\xF3n</h2><p>Antes de que podamos instalar Nu, necesitamos asegurarnos de que nuestro sistema tenga los requerimientos necesarios. Actualmente significa que debemos verificar tener instalado tanto el Rust toolchain as\xED como las dependencias locales. Est\xE1s son las suites de compilaci\xF3n recomendadas:</p>`,6),X=e("li",null,"Linux: GCC or Clang",-1),$=e("li",null,"macOS: Clang (install Xcode)",-1),J=a("Windows: "),M={href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"},K=a("Visual Studio Community Edition"),Q=n('<p>Para Linux y macOS, una vez que hayas instalado la suite de compilaci\xF3n, todo estar\xE1 listo para instalar Rust a trav\xE9s de <code>rustup</code> (ver m\xE1s abajo).</p><p>For Windows, when you install Visual Studio Community Edition, make sure to install the &quot;C++ build tools&quot; as what we need is <code>link.exe</code> which is provided as part of that optional install. With that, we&#39;re ready to move to the next step.</p><p>Para Windows, cuando instalas Visual Studio Community Edition, aseg\xFArate de instalar las herramientas &quot;C++ build tools&quot; ya que lo que necesitamos es <code>link.exe</code>, que es proporcionado como parte de esa instalaci\xF3n optcional. Con eso, estamos listos para el siguiente paso.</p><h3 id="instalando-un-suite-de-compilacion" tabindex="-1"><a class="header-anchor" href="#instalando-un-suite-de-compilacion" aria-hidden="true">#</a> Instalando un suite de compilaci\xF3n</h3><p>Para que Rust funcione correctamente, necesitar\xE1s tener un suite de compilaci\xF3n compatible instalado en el sistema.</p><h3 id="instalando-rust" tabindex="-1"><a class="header-anchor" href="#instalando-rust" aria-hidden="true">#</a> Instalando Rust</h3>',6),Y=a("En el caso de que no dispongamos de Rust en nuestro sistema la mejor manera de instalarlo es mediante "),Z={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},ee=a("rustup"),ae=a(". Rustup es una manera de manejar instalaciones de Rust incluyendo distintas versiones de Rust."),se=n(`<p>Nu actualmente requiere la versi\xF3n <strong>estable m\xE1s reciente (1.55 o posterior)</strong> de Rust. La mejor manera de <code>rustup</code> inferir la versi\xF3n correcta para ti. En el momento de abrir <code>rustup</code> te solicitar\xE1 qu\xE9 versi\xF3n de Rust deseas instalar:</p><div class="language-text ext-text"><pre class="language-text"><code>Current installation options:

   default host triple: x86_64-unknown-linux-gnu
     default toolchain: stable
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
</code></pre></div><p>Una vez que estamos listos, presionamos 1 y luego enter.</p><p>Si prefieres no instalar Rust mediante <code>rustup</code>, tambi\xE9n puedes instalar a trav\xE9s de otros m\xE9todos (Ej. un paquete en alguna distribuci\xF3n de Linux). Solo aseg\xFArate de instalar una versi\xF3n que sea Rust 1.55 o posterior.</p><h2 id="dependencias" tabindex="-1"><a class="header-anchor" href="#dependencias" aria-hidden="true">#</a> Dependencias</h2><h3 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h3><p>Vas a necesitar instalar &quot;pkg-config&quot; y &quot;libssl-dev&quot;:</p><p>&lt;&lt;&lt; @/snippets/installation/install_pkg_config_libssl_dev.sh</p><p>Usuarios de Linux que desean usar las funcionalidades opcionales <code>rawkey</code> o <code>clipboard</code> necesitar\xE1n instalar los paquetes &quot;libx11-dev&quot; y &quot;libxcb-composite0-dev&quot;:</p><p>&lt;&lt;&lt; @/snippets/installation/use_rawkey_and_clipboard.sh</p><h3 id="distribuciones-basadas-en-rhel" tabindex="-1"><a class="header-anchor" href="#distribuciones-basadas-en-rhel" aria-hidden="true">#</a> Distribuciones basadas en RHEL</h3><p>Vas a necesitar instalar &quot;libxcb&quot;, &quot;openssl-devel&quot; and &quot;libX11-devel&quot;:</p><p>&lt;&lt;&lt; @/snippets/installation/install_rhel_dependencies.sh</p><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>`,14),te=a("Usando "),ne={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},oe=a("homebrew"),ie=a(', vas a necesitar instalar la f\xF3rmula "openssl":'),re=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`brew install openssl cmake
`)])],-1),le={id:"instalando-desde-crates-io",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#instalando-desde-crates-io","aria-hidden":"true"},"#",-1),ue=a(" Instalando desde "),ce={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},pe=a("crates.io"),he=n(`<p>Una vez instaladas las depependencias que Nu necesita, podemos instalarla usando el comando <code>cargo</code> que viene con el compilador Rust.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cargo install nu
</code></pre></div><p>\xA1Eso es todo! Cargo har\xE1 el trabajo de descarga Nu junto con sus dependencias, construirla e instalarla en el bin path de cargo para que podamos arrancarlo.</p><p>Si deseas instalar con m\xE1s funcionalidades, puedes hacer:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cargo install nu --features=stable
</code></pre></div><p>Para todas las funcionalidades disponibles, la manera m\xE1s f\xE1cil es descargar la fuente de Nu y constru\xEDrlo usted mismo usando las herramientas de Rust:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; git clone https://github.com/nushell/nushell.git
&gt; cd nushell
nushell&gt; cargo install --path . --force --features=stable

Para que esto funcione, aseg\xFArate de tener todas las dependencias instaladas (que se muestran arriba) en el sistema.

Finalizada la instalaci\xF3n podemos ejecutar Nu usando el comando \`nu\`:

</code></pre></div><p>$ nu /home/jonathan/Source&gt;</p><div class="language-text ext-text"><pre class="language-text"><code>
## Construyendo desde la fuente

Tambi\xE9n podemos contruir nuestro propio Nu directamente desde github. Esto nos da acceso inmediato a las \xFAltimas funcionalidades y correcci\xF3n de bugs.

</code></pre></div><blockquote><p>git clone https://github.com/nushell/nushell.git</p></blockquote><div class="language-text ext-text"><pre class="language-text"><code>
Git nos clonar\xE1 el repositorio principal de Nu. Partiendo de ah\xED podemos contruir y arrancar Nu si estamos usando \`rustup\` con:

</code></pre></div><blockquote><p>cd nushell nushell&gt; cargo build --workspace --features=stable &amp;&amp; cargo run --features=stable</p></blockquote><div class="language-text ext-text"><pre class="language-text"><code>
Tambi\xE9n puedes construir y arrancar Nu en modo release:

</code></pre></div><p>nushell&gt; cargo build --release --workspace --features=stable &amp;&amp; cargo run --release --features=stable</p><div class="language-text ext-text"><pre class="language-text"><code>Gente familiarizada con Rust se preguntar\xE1 la raz\xF3n por la que hacemos un paso &quot;build&quot; y otro paso &quot;run&quot; si &quot;run&quot; construye por defecto. Esto es para evitar una deficiencia de la nueva opci\xF3n \`default-run\` en Cargo y asegurar que todos los plugins se construyan aunque puede que esto no sea necesario en el futuro.

**Nota:** Si te encuentras trabajando tanto en modo debug y release, aseg\xFArate de ejecutar \`cargo clean\` cuando cambies entre ellas. Nu buscar\xE1 plugins en los directorios tanto de debug as\xED como release y puede suceder que cargue versiones de un plugin que no tienes intenciones de usar.

## Establecer como shell de inicio de sesi\xF3n

**!!! Nu todav\xEDa est\xE1 en desarrollo y puede no ser estable para uso diario. !!!**

Para configurar la shell de inicio de sesi\xF3n, puedes usra el comando [\`chsh\`](https://linux.die.net/man/1/chsh).
En algunas distribuciones de Linux se encuentra una lista v\xE1lida de shells en \`/etc/shells\` y no permitir\xE1 cambiar la shell hasta que Nu est\xE9 en la lista blanca. Es posible que vea un error similar al siguiente si no ha actualizado el archivo \`shells\`:

</code></pre></div><p>chsh: /home/username/.cargo/bin/nu is an invalid shell</p><div class="language-text ext-text"><pre class="language-text"><code>
Puedes agregar Nu a la lista de shells v\xE1lidas a\xF1adiendo el binario al archivo \`shells\`. La ruta para agregar puedes encontrarla con el comando \`which nu\`, usualmente es \`$HOME/.cargo/bin/nu\`.
</code></pre></div>`,17);function ge(_e,me){const s=i("ExternalLinkIcon");return r(),l("div",null,[u,e("p",null,[c,e("a",p,[h,t(s)]),g,e("a",_,[m,t(s)]),b]),x,e("p",null,[f,e("a",q,[v,t(s)]),y,e("a",w,[k,t(s)]),N,C,E]),j,P,e("p",null,[R,S,L,e("a",z,[V,t(s)]),W]),T,U,A,e("p",null,[I,e("a",O,[H,t(s)]),B,D,F]),G,e("ul",null,[X,$,e("li",null,[J,e("a",M,[K,t(s)])])]),Q,e("p",null,[Y,e("a",Z,[ee,t(s)]),ae]),se,e("p",null,[te,e("a",ne,[oe,t(s)]),ie]),re,e("h2",le,[de,ue,e("a",ce,[pe,t(s)])]),he])}var xe=o(d,[["render",ge],["__file","instalacion.html.vue"]]);export{xe as default};
