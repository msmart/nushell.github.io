import{_ as e,o as a,c as o,e as s}from"./app.88eb8db7.js";const n={},r=s('<h1 id="filosofia" tabindex="-1"><a class="header-anchor" href="#filosofia" aria-hidden="true">#</a> Filosofia</h1><h2 id="valores-fundamentales" tabindex="-1"><a class="header-anchor" href="#valores-fundamentales" aria-hidden="true">#</a> Valores Fundamentales</h2><p>El valor central de Nu es que trabajar en un shell debe ser divertido. Para esto, creemos que:</p><ul><li>Una shell moderna debe ser dise\xF1ada para usabilidad y ergonom\xEDa. <strong>Por encima de todo, Nu deber\xEDa ser divertido de usar.</strong></li><li>Deber\xEDa proporcionar buenos mensajes informativos de errores cuando un comando no finalizar\xE1 correctamente. Esto es de vital importancia. Un shell divertido da mensajes de errores <strong>claros y procesables</strong></li><li>Debe construirse en torno al uso casual, ya que esta es la mayor\xEDa del uso en una shell, incluso para usuarios con experiencia. Construyendo una shell que sea <strong>divertido para uso casual se traduce a una shell divertida para todos</strong>.</li><li>Nu soporta experimentaci\xF3n y <strong>crecer ideas de experimentos a programas</strong>. La habilidad de evolucionar ideas desde l\xEDneas simples, scripts, y posteriormente a programas es un papel clave que se desempe\xF1a en una shell. Para respaldar esto, Nu se basa en la idea de comandos componibles que funcionan en un conjutos compartido de tipos de datos.</li></ul><h2 id="no-metas" tabindex="-1"><a class="header-anchor" href="#no-metas" aria-hidden="true">#</a> No metas</h2><ul><li><em>Rendimiento \xF3ptimo</em>. Si bien nos preocupa rendimiento, el enfoque en el rendimiento debe estar al servicio de hacer que Nu sea m\xE1s usable y agradable de usar. El mejor rendimiento en micro-puntos de referencia no es un objetivo.</li><li><em>Estricto</em>. Queremos ayudar a los usuarios a escribir buenos scripts, pero centr\xE1ndonos en que dichos scripts sean correctos con buenos errores y buena documentaci\xF3n.</li><li><em>Cumplimiento-POSIX</em>. Nu se optimiza intencionalmente para una experiencia placentera en vez de igualar c\xF3mo programas de l\xEDnea de comandos funcionan de una manera POSIX-compliant. Es importante poder interoperar entre comandos de Nu y comandos externos, pero mantener compatibilidad estricta no es una meta.</li><li><em>Adhesi\xF3n de paradigma</em>. Nu mira el espacio de shells flexiblemente, y presta buenas ideas de programaci\xF3n funcional, programaci\xF3n de sistemas, orientaci\xF3n a objetos, y m\xE1s donde sea posible. Seguir algun paradigma en particular de manera r\xEDgida no sirve para los objetivos del proyecto Nu.</li></ul><h2 id="diseno-basico" tabindex="-1"><a class="header-anchor" href="#diseno-basico" aria-hidden="true">#</a> Dise\xF1o B\xE1sico</h2><p>El dise\xF1o central de Nu es el modelo de datos. Comandos siguen en gran medida en el servicio para facilitar la creaci\xF3n de datos, trabajar con datos, y ver datos. Una de las piezas visibles de este trabajo es la canalizaci\xF3n a trav\xE9s de la tuber\xEDa, que se basa en gran medida en las ideas originales de Unix de conectar comandos simples en comandos m\xE1s complejos. Nu toma esta filosof\xEDa de Unix y la extiende desde solo c\xE1denas de texto al m\xE1s amplio conjuntos de datos que es m\xE1s com\xFAn en lenguajes modernos de programaci\xF3n.</p>',8),i=[r];function d(t,l){return a(),o("div",null,i)}var u=e(n,[["render",d],["__file","filosofia.html.vue"]]);export{u as default};
