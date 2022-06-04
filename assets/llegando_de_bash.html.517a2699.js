import{_ as e,r as d,o,c as u,a as l,b as s,d as t}from"./app.88eb8db7.js";const c={},a=l("h1",{id:"llegando-desde-bash",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#llegando-desde-bash","aria-hidden":"true"},"#"),t(" Llegando desde Bash")],-1),r=l("p",null,"Nota: Esta tabla asume Nushell 0.14.1 or posterior.",-1),i=l("thead",null,[l("tr",null,[l("th",null,"Bash"),l("th",null,"Nu"),l("th",null,"Task")])],-1),h=l("tr",null,[l("td",null,[l("code",null,"ls")]),l("td",null,[l("code",null,"ls")]),l("td",null,"Lists the files in the current directory")],-1),_=l("tr",null,[l("td",null,[l("code",null,"ls <dir>")]),l("td",null,[l("code",null,"ls <dir>")]),l("td",null,"Lists the files in the given directory")],-1),p=l("tr",null,[l("td",null,[l("code",null,"ls pattern*")]),l("td",null,[l("code",null,"ls pattern*")]),l("td",null,"Lists files that match a given pattern")],-1),m=l("tr",null,[l("td",null,[l("code",null,"ls -la")]),l("td",null,[l("code",null,"ls --long --all"),t(" or "),l("code",null,"ls -la")]),l("td",null,"List files with all available information, including hidden files")],-1),f=l("tr",null,[l("td",null,[l("code",null,"ls -d */")]),l("td",null,[l("code",null,"ls | where type == Dir")]),l("td",null,"List directories")],-1),g=l("tr",null,[l("td",null,[l("code",null,"find . -name *.rs")]),l("td",null,[l("code",null,"ls **/*.rs")]),l("td",null,"Find recursively all files that match a given pattern")],-1),v=l("tr",null,[l("td",null,[l("code",null,"cd <directory>")]),l("td",null,[l("code",null,"cd <directory>")]),l("td",null,"Change to the given directory")],-1),b=l("tr",null,[l("td",null,[l("code",null,"cd")]),l("td",null,[l("code",null,"cd")]),l("td",null,"Change to the home directory")],-1),y=l("tr",null,[l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"Creates the given path")],-1),w=l("tr",null,[l("td",null,[l("code",null,"mkdir -p <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"Creates the given path, creating parents as necessary")],-1),x=l("tr",null,[l("td",null,[l("code",null,"touch test.txt")]),l("td",null,[l("code",null,"touch test.txt")]),l("td",null,"Create a file")],-1),A=l("tr",null,[l("td",null,[l("code",null,"> <path>")]),l("td",null,[l("code",null,"| save --raw <path>")]),l("td",null,"Save string into a file")],-1),O=l("tr",null,[l("td",null,[l("code",null,"cat <path>")]),l("td",null,[l("code",null,"open --raw <path>")]),l("td",null,"Display the contents of the given file")],-1),L=l("tr",null,[l("td"),l("td",null,[l("code",null,"open <path>")]),l("td",null,"Read a file as structured data")],-1),k=l("tr",null,[l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,"Move file to new location")],-1),R=l("tr",null,[l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,"Copy file to new location")],-1),B=l("tr",null,[l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,"Copy directory to a new location, recursively")],-1),C=l("tr",null,[l("td",null,[l("code",null,"rm <path>")]),l("td",null,[l("code",null,"rm <path>")]),l("td",null,"Remove the given file")],-1),F=l("tr",null,[l("td"),l("td",null,[l("code",null,"rm -t <path>")]),l("td",null,"Move the given file to the system trash")],-1),$=l("tr",null,[l("td",null,[l("code",null,"rm -rf <path>")]),l("td",null,[l("code",null,"rm -r <path>")]),l("td",null,"Recursively removes the given path")],-1),T=l("tr",null,[l("td",null,[l("code",null,"chmod")]),l("td",null,[l("code",null,"<not yet possible>")]),l("td",null,"Changes the file attributes")],-1),H=l("td",null,[l("code",null,"date -d <date>")],-1),N=l("td",null,[l("code",null,"echo <date> | str to-datetime -f <format>")],-1),P=t("Parse a date ("),U={href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"},E=t("format documentation"),S=t(")"),D=l("tr",null,[l("td",null,[l("code",null,"sed")]),l("td",null,[l("code",null,"str find-replace")]),l("td",null,"Find and replace a pattern in a string")],-1),V=l("tr",null,[l("td",null,[l("code",null,"grep <pattern>")]),l("td",null,[l("code",null,"where $it =~ <substring>")]),l("td",null,"Filter strings that contain the substring")],-1),q=l("tr",null,[l("td",null,[l("code",null,"man <command>")]),l("td",null,[l("code",null,"help <command>")]),l("td",null,"Get the help for a given command")],-1),I=l("tr",null,[l("td"),l("td",null,[l("code",null,"help commands")]),l("td",null,"List all available commands")],-1),M=l("tr",null,[l("td"),l("td",null,[l("code",null,"help --find <string>")]),l("td",null,"Search for match in all available commands")],-1),G=l("tr",null,[l("td",null,[l("code",null,"command1 && command2")]),l("td",null,[l("code",null,"command1; command2")]),l("td",null,"Run a command, and if it's successful run a second")],-1),j=l("tr",null,[l("td",null,[l("code",null,"stat $(which git)")]),l("td",null,[l("code",null,"stat (which git).path")]),l("td",null,"Use command output as argument for other command")],-1),z=l("tr",null,[l("td",null,[l("code",null,"echo $PATH")]),l("td",null,[l("code",null,"echo $nu.path")]),l("td",null,"See the current path")],-1),J=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"config set path [<dir1> <dir2> ...]")]),l("td",null,"Update PATH permanently")],-1),K=l("tr",null,[l("td",null,[l("code",null,"export PATH = $PATH:/usr/other/bin")]),l("td",null,[l("code",null,"pathvar add <path>")]),l("td",null,"Update PATH temporarily")],-1),Q=l("tr",null,[l("td",null,[l("code",null,"export")]),l("td",null,[l("code",null,"echo $nu.env")]),l("td",null,"List the current environment variables")],-1),W=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"echo $nu.env | insert var value | config set_into env")]),l("td",null,"Update environment variables permanently")],-1),X=l("tr",null,[l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,"Update environment temporarily")],-1),Y=l("tr",null,[l("td",null,[l("code",null,"export FOO=BAR")]),l("td",null,[l("code",null,"let-env FOO = BAR")]),l("td",null,"Set environment variable for current session")],-1),Z=l("tr",null,[l("td",null,[l("code",null,"unset FOO")]),l("td",null,[l("code",null,"let-env FOO = $nothing")]),l("td",null,"Unset environment variable for current session")],-1),ll=l("tr",null,[l("td",null,[l("code",null,'alias s="git status -sb"')]),l("td",null,[l("code",null,"alias s = git status -sb")]),l("td",null,"Define an alias temporarily")],-1),tl=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,'config set [startup ["alias myecho [msg] { echo Hello $msg }"]]')]),l("td",null,"Add a first alias permanently (for new shells)")],-1),nl=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,'config get startup | append "alias s [] { git status -sb }" | config set_into startup')]),l("td",null,"Add an additional alias permanently (for new shells)")],-1),el=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"<update nu/config.toml>")]),l("td",null,[t("Add and edit alias permanently (for new shells), find path for the file with "),l("code",null,"config path")])],-1),dl=l("tr",null,[l("td",null,[l("code",null,"bash -c <commands>")]),l("td",null,[l("code",null,"nu -c <commands>")]),l("td",null,"Run a pipeline of commands (requires 0.9.1 or later)")],-1),ol=l("tr",null,[l("td",null,[l("code",null,"bash <script file>")]),l("td",null,[l("code",null,"nu <script file>")]),l("td",null,"Run a script file (requires 0.9.1 or later)")],-1),ul=l("tr",null,[l("td",null,[l("code",null,"\\")]),l("td",null,[l("code",null,"<not yet possible>")]),l("td",null,"Line continuation is not yet supported.")],-1);function sl(cl,al){const n=d("ExternalLinkIcon");return o(),u("div",null,[a,r,l("table",null,[i,l("tbody",null,[h,_,p,m,f,g,v,b,y,w,x,A,O,L,k,R,B,C,F,$,T,l("tr",null,[H,N,l("td",null,[P,l("a",U,[E,s(n)]),S])]),D,V,q,I,M,G,j,z,J,K,Q,W,X,Y,Z,ll,tl,nl,el,dl,ol,ul])])])}var il=e(c,[["render",sl],["__file","llegando_de_bash.html.vue"]]);export{il as default};
